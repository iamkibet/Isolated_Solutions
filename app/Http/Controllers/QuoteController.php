<?php

namespace App\Http\Controllers;

use App\Models\Quote;
use App\Models\Service;
use App\Models\ServiceCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Barryvdh\DomPDF\Facade\Pdf;
use Carbon\Carbon;

class QuoteController extends Controller
{
    /**
     * Display the quote request form
     */
    public function index()
    {
        // Fetch services from database
        $servicesFromDb = Service::with(['category', 'options.values'])
            ->where('is_active', true)
            ->orderBy('order')
            ->get();

        // Format services to match frontend expectations
        $services = $this->formatServicesForFrontend($servicesFromDb);
        
        $currencies = array_keys(config('services_pricing.exchange_rates'));
        
        return Inertia::render('Quote/Index', [
            'services' => $services,
            'currencies' => $currencies,
        ]);
    }

    /**
     * Store a new quote request
     */
    public function store(Request $request)
    {
        try {
            // Log all incoming request data
            \Log::info('=== Quote Store Method Called ===');
            \Log::info('Request method: ' . $request->method());
            \Log::info('Request all data:', $request->all());
            \Log::info('Request input:', $request->input());
            \Log::info('Has selected_services?', ['has' => $request->has('selected_services')]);
            
            $validated = $request->validate([
                'client_name' => 'required|string|max:255',
                'client_email' => 'required|email|max:255',
                'client_company' => 'nullable|string|max:255',
                'client_phone' => 'nullable|string|max:20',
                'selected_services' => 'required|array|min:1',
                'selected_services.*.service_key' => 'required|string',
                'selected_services.*.package_tier' => 'required|string',
                'currency' => 'required|string|size:3',
                'notes' => 'nullable|string|max:1000',
            ]);

            \Log::info('Quote validation passed', ['validated' => $validated]);

            // Calculate pricing
            $pricing = $this->calculatePricing(
                $validated['selected_services'],
                $validated['currency']
            );

            \Log::info('Pricing calculated', ['pricing' => $pricing]);

            // Generate quote number
            $quoteNumber = Quote::generateQuoteNumber();

            // Create quote
            $quote = Quote::create([
                'quote_number' => $quoteNumber,
                'client_name' => $validated['client_name'],
                'client_email' => $validated['client_email'],
                'client_company' => $validated['client_company'] ?? null,
                'client_phone' => $validated['client_phone'] ?? null,
                'selected_services' => $validated['selected_services'],
                'currency' => $validated['currency'],
                'total' => $pricing['total'],
                'notes' => $validated['notes'] ?? null,
                'valid_until' => Carbon::now()->addDays(30),
            ]);

            \Log::info('Quote created successfully', ['quote_id' => $quote->id]);

            // Return success with quote ID - frontend will trigger download
            return back()->with([
                'success' => 'Quote created successfully!',
                'quote_id' => $quote->id,
                'quote_number' => $quote->quote_number,
            ]);
            
        } catch (\Exception $e) {
            \Log::error('Quote creation failed', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
            
            return back()->with('error', 'Failed to create quote: ' . $e->getMessage());
        }
    }

    /**
     * Preview a quote
     */
    public function preview(Request $request)
    {
        $validated = $request->validate([
            'selected_services' => 'required|array|min:1',
            'selected_services.*.service_key' => 'required|string',
            'selected_services.*.package_tier' => 'required|string',
            'currency' => 'required|string|size:3',
        ]);

        $pricing = $this->calculatePricing(
            $validated['selected_services'],
            $validated['currency']
        );

        return response()->json([
            'pricing' => $pricing,
            'services_details' => $this->getServicesDetails($validated['selected_services']),
        ]);
    }

    /**
     * Download quote as PDF (for direct access)
     */
    public function download(Quote $quote)
    {
        return $this->generatePDF($quote);
    }

    /**
     * Generate PDF for a quote
     */
    private function generatePDF(Quote $quote)
    {
        try {
            \Log::info('PDF generation requested', ['quote_id' => $quote->id]);
            
            // Fetch services from database
            $servicesFromDb = Service::with(['category', 'options.values'])->get();
            $formattedServices = $this->formatServicesForFrontend($servicesFromDb);
            
            \Log::info('Services formatted', ['count' => count($formattedServices)]);
            
            $servicesDetails = [];
            $exchangeRate = config("services_pricing.exchange_rates.{$quote->currency}", 1);

            foreach ($quote->selected_services as $selectedService) {
                $serviceKey = $selectedService['service_key'];
                $packageTier = $selectedService['package_tier'];
                
                \Log::info('Processing service', ['serviceKey' => $serviceKey, 'packageTier' => $packageTier]);
                
                if (isset($formattedServices[$serviceKey]) && isset($formattedServices[$serviceKey]['packages'][$packageTier])) {
                    $service = $formattedServices[$serviceKey];
                    $package = $service['packages'][$packageTier];
                    
                    // Convert price to selected currency
                    $basePrice = $package['price'];
                    $convertedPrice = $basePrice * $exchangeRate;
                    
                    $servicesDetails[] = [
                        'name' => $service['name'],
                        'package_name' => $package['name'],
                        'description' => $package['description'],
                        'features' => $package['features'],
                        'price' => $convertedPrice,
                    ];
                } else {
                    \Log::warning('Service not found', ['serviceKey' => $serviceKey, 'packageTier' => $packageTier]);
                }
            }

            \Log::info('Services details prepared', ['count' => count($servicesDetails)]);

            $data = [
                'quote' => $quote,
                'services' => $servicesDetails,
                'company' => [
                    'name' => config('app.name', 'Isolated Solutions Ltd'),
                    'address' => config('app.company_address', 'Nairobi, Kenya'),
                    'email' => config('mail.from.address', 'info@isolatedsolutions.com'),
                    'phone' => config('app.company_phone', '+254 700 000 000'),
                ],
            ];

            \Log::info('Generating PDF');
            $pdf = PDF::loadView('pdf.quote', $data);
            
            \Log::info('PDF generated successfully');
            return $pdf->download("Quote-{$quote->quote_number}.pdf");
        } catch (\Exception $e) {
            \Log::error('PDF generation failed', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
            
            return back()->with('error', 'Failed to generate PDF: ' . $e->getMessage());
        }
    }

    /**
     * View quote details
     */
    public function show(Quote $quote)
    {
        // Fetch services from database
        $servicesFromDb = Service::with(['category', 'options.values'])->get();
        $formattedServices = $this->formatServicesForFrontend($servicesFromDb);
        
        $servicesDetails = [];
        $exchangeRate = config("services_pricing.exchange_rates.{$quote->currency}", 1);

        foreach ($quote->selected_services as $selectedService) {
            $serviceKey = $selectedService['service_key'];
            $packageTier = $selectedService['package_tier'];
            
            if (isset($formattedServices[$serviceKey]) && isset($formattedServices[$serviceKey]['packages'][$packageTier])) {
                $service = $formattedServices[$serviceKey];
                $package = $service['packages'][$packageTier];
                
                $basePrice = $package['price'];
                $convertedPrice = $basePrice * $exchangeRate;
                
                $servicesDetails[] = [
                    'name' => $service['name'],
                    'package_name' => $package['name'],
                    'description' => $package['description'],
                    'price' => $convertedPrice,
                ];
            }
        }

        return Inertia::render('Quote/Show', [
            'quote' => $quote,
            'services' => $servicesDetails,
        ]);
    }

    /**
     * Calculate pricing based on selected services and currency
     */
    private function calculatePricing(array $selectedServices, string $currency): array
    {
        // Fetch services from database
        $servicesFromDb = Service::with(['category', 'options.values'])->get();
        $services = $this->formatServicesForFrontend($servicesFromDb);
        
        $exchangeRate = config("services_pricing.exchange_rates.{$currency}", 1);

        $total = 0;

        foreach ($selectedServices as $selectedService) {
            $serviceKey = $selectedService['service_key'];
            $packageTier = $selectedService['package_tier'];

            if (isset($services[$serviceKey]) && isset($services[$serviceKey]['packages'][$packageTier])) {
                $basePrice = $services[$serviceKey]['packages'][$packageTier]['price'];
                $convertedPrice = $basePrice * $exchangeRate;
                $total += $convertedPrice;
            }
        }

        return [
            'total' => round($total, 2),
            'exchange_rate' => $exchangeRate,
        ];
    }

    /**
     * Get detailed information about selected services
     */
    private function getServicesDetails(array $selectedServices): array
    {
        // Fetch services from database
        $servicesFromDb = Service::with(['category', 'options.values'])->get();
        $services = $this->formatServicesForFrontend($servicesFromDb);
        
        $details = [];

        foreach ($selectedServices as $selectedService) {
            $serviceKey = $selectedService['service_key'];
            $packageTier = $selectedService['package_tier'];
            
            if (isset($services[$serviceKey]) && isset($services[$serviceKey]['packages'][$packageTier])) {
                $package = $services[$serviceKey]['packages'][$packageTier];
                $details[] = [
                    'key' => $serviceKey,
                    'name' => $services[$serviceKey]['name'],
                    'package_tier' => $packageTier,
                    'package_name' => $package['name'],
                    'description' => $package['description'],
                    'features' => $package['features'],
                    'price' => $package['price'],
                ];
            }
        }

        return $details;
    }

    /**
     * Format database services to match frontend expectations
     */
    private function formatServicesForFrontend($servicesFromDb): array
    {
        $formatted = [];

        foreach ($servicesFromDb as $service) {
            // Find the package tier option
            $packageOption = $service->options->where('name', 'Package Tier')->first();
            
            if (!$packageOption) {
                continue;
            }

            // Build packages array from option values
            $packages = [];
            foreach ($packageOption->values as $value) {
                $packages[$value->value] = [
                    'name' => $value->label,
                    'price' => (float) $value->price_modifier,
                    'description' => $value->description ?? $service->description,
                    'features' => $value->features ?? $service->features ?? [],
                ];
            }

            $formatted[$service->slug] = [
                'name' => $service->name,
                'category' => $service->category->name,
                'description' => $service->description,
                'packages' => $packages,
            ];
        }

        return $formatted;
    }
}
