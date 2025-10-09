<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Quote;
use App\Models\Service;
use App\Models\ServiceCategory;
use App\Models\ServiceOption;
use App\Models\ServiceOptionValue;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Str;

class AdminController extends Controller
{
    public function posts(): Response
    {
        $posts = Post::with(['category', 'user'])
            ->orderBy('created_at', 'desc')
            ->paginate(15);

        return Inertia::render('Admin/Posts/Index', [
            'posts' => $posts
        ]);
    }

    public function dashboard(): Response
    {
        // Get top performing posts by views
        $posts = Post::with('category')
            ->orderBy('views', 'desc')
            ->take(10)
            ->get();

        // Calculate statistics
        $stats = [
            'totalPosts' => Post::count(),
            'totalQuotes' => Quote::count(),
            'totalViews' => Post::sum('views'),
            'recentQuotes' => Quote::where('created_at', '>=', now()->subDays(7))->count(),
        ];

        return Inertia::render('Admin/Dashboard', [
            'posts' => $posts,
            'stats' => $stats
        ]);
    }

    public function quotes(): Response
    {
        $quotes = Quote::orderBy('created_at', 'desc')
            ->paginate(15);

        // Format quotes with service details
        $formattedQuotes = $quotes->through(function ($quote) {
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
                    
                    $servicesDetails[] = [
                        'name' => $service['name'],
                        'package_name' => $package['name'],
                        'price' => $package['price'] * $exchangeRate,
                    ];
                }
            }

            return [
                'id' => $quote->id,
                'quote_number' => $quote->quote_number,
                'client_name' => $quote->client_name,
                'client_email' => $quote->client_email,
                'client_company' => $quote->client_company,
                'client_phone' => $quote->client_phone,
                'currency' => $quote->currency,
                'currency_symbol' => $quote->currency_symbol,
                'total' => $quote->total,
                'status' => $quote->status,
                'notes' => $quote->notes,
                'valid_until' => $quote->valid_until,
                'created_at' => $quote->created_at,
                'services' => $servicesDetails,
            ];
        });

        return Inertia::render('Admin/Quotes/Index', [
            'quotes' => $formattedQuotes
        ]);
    }

    public function createQuote(): Response
    {
        // Fetch services from database
        $servicesFromDb = Service::with(['category', 'options.values'])
            ->where('is_active', true)
            ->orderBy('order')
            ->get();

        // Format for frontend
        $services = $this->formatServicesForFrontend($servicesFromDb);
        $currencies = array_keys(config('services_pricing.exchange_rates'));
        
        return Inertia::render('Admin/Quotes/Create', [
            'services' => $services,
            'currencies' => $currencies,
        ]);
    }

    public function destroyQuote(Quote $quote): RedirectResponse
    {
        $quoteNumber = $quote->quote_number;
        $quote->delete();

        return redirect()->route('admin.quotes.index')
            ->with('success', "Quote {$quoteNumber} deleted successfully!");
    }

    public function updateQuoteStatus(Request $request, Quote $quote): RedirectResponse
    {
        $validated = $request->validate([
            'status' => 'required|in:pending,sent,accepted,rejected'
        ]);

        $oldStatus = $quote->status;
        $quote->update(['status' => $validated['status']]);

        return redirect()->back()
            ->with('success', "Quote {$quote->quote_number} status changed from {$oldStatus} to {$validated['status']}");
    }

    public function services(): Response
    {
        // Fetch services from database
        $servicesFromDb = Service::with(['category', 'options.values'])
            ->orderBy('order')
            ->get();

        // Format for frontend
        $services = $this->formatServicesForFrontend($servicesFromDb);
        $exchangeRates = config('services_pricing.exchange_rates');
        
        return Inertia::render('Admin/Services/Index', [
            'services' => $services,
            'exchangeRates' => $exchangeRates,
        ]);
    }

    public function storeService(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'service_key' => 'required|string',
            'name' => 'required|string',
            'category' => 'required|string',
            'description' => 'required|string',
            'packages' => 'required|array|min:1',
            'packages.*.name' => 'required|string',
            'packages.*.price' => 'required|numeric|min:0',
            'packages.*.description' => 'required|string',
            'packages.*.features' => 'required|array|min:1',
        ], [
            'packages.min' => 'Please add at least one package tier.',
            'packages.*.features.required' => 'Each package must have at least one feature.',
            'packages.*.features.min' => 'Each package must have at least one feature.',
        ]);

        // Check if service key already exists
        $slug = Str::slug($validated['service_key']);
        if (Service::where('slug', $slug)->exists()) {
            return redirect()->back()
                ->withInput()
                ->with('error', 'A service with this key already exists. Please use a different service key.');
        }

        // Get or create category
        $category = ServiceCategory::firstOrCreate(
            ['slug' => Str::slug($validated['category'])],
            ['name' => $validated['category'], 'order' => ServiceCategory::count()]
        );

        // Get first package for base price and features
        $firstPackage = reset($validated['packages']);

        // Create service
        $service = Service::create([
            'service_category_id' => $category->id,
            'name' => $validated['name'],
            'slug' => $slug,
            'description' => $validated['description'],
            'base_price' => $firstPackage['price'],
            'pricing_model' => 'package',
            'order' => Service::count(),
            'is_active' => true,
            'features' => $firstPackage['features'],
        ]);

        // Create Package Tier option
        $packageOption = ServiceOption::create([
            'service_id' => $service->id,
            'name' => 'Package Tier',
            'type' => 'select',
            'description' => 'Choose your package level',
            'is_required' => true,
            'order' => 0,
        ]);

        // Create package tier values
        $tierOrder = 0;
        foreach ($validated['packages'] as $tierKey => $tierData) {
            ServiceOptionValue::create([
                'service_option_id' => $packageOption->id,
                'label' => $tierData['name'] ?? ucfirst($tierKey),
                'value' => $tierKey,
                'description' => $tierData['description'] ?? '',
                'features' => $tierData['features'] ?? [],
                'price_modifier' => $tierData['price'],
                'modifier_type' => 'fixed',
                'order' => $tierOrder,
                'is_default' => $tierKey === 'basic',
            ]);
            $tierOrder++;
        }

        return redirect()->route('admin.services.index')
            ->with('success', 'Service added successfully!');
    }

    public function updateService(Request $request, string $serviceKey): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'category' => 'required|string',
            'description' => 'required|string',
            'packages' => 'required|array|min:1',
            'packages.*.name' => 'required|string',
            'packages.*.price' => 'required|numeric|min:0',
            'packages.*.description' => 'required|string',
            'packages.*.features' => 'required|array',
        ]);

        // Find service by slug
        $service = Service::where('slug', $serviceKey)->firstOrFail();

        // Update or create category
        $category = ServiceCategory::firstOrCreate(
            ['slug' => Str::slug($validated['category'])],
            ['name' => $validated['category'], 'order' => ServiceCategory::count()]
        );

        // Get first package for base price
        $firstPackage = reset($validated['packages']);
        
        // Update service
        $service->update([
            'service_category_id' => $category->id,
            'name' => $validated['name'],
            'description' => $validated['description'],
            'base_price' => $firstPackage['price'],
            'features' => $firstPackage['features'],
        ]);

        // Update package tier values - delete old ones and create new
        $packageOption = $service->options()->where('name', 'Package Tier')->first();
        
        if ($packageOption) {
            // Delete existing values
            $packageOption->values()->delete();
            
            // Create new values
            $tierOrder = 0;
            foreach ($validated['packages'] as $tierKey => $tierData) {
                ServiceOptionValue::create([
                    'service_option_id' => $packageOption->id,
                    'label' => $tierData['name'],
                    'value' => $tierKey,
                    'description' => $tierData['description'],
                    'features' => $tierData['features'],
                    'price_modifier' => $tierData['price'],
                    'modifier_type' => 'fixed',
                    'order' => $tierOrder,
                    'is_default' => $tierOrder === 0,
                ]);
                $tierOrder++;
            }
        }

        return redirect()->route('admin.services.index')
            ->with('success', 'Service updated successfully!');
    }

    public function destroyService(string $serviceKey): RedirectResponse
    {
        $service = Service::where('slug', $serviceKey)->firstOrFail();
        
        // Delete related options and values (cascades automatically via migration)
        $service->delete();

        return redirect()->route('admin.services.index')
            ->with('success', 'Service deleted successfully!');
    }

    public function updateCurrencyRates(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'USD' => 'required|numeric',
            'KES' => 'required|numeric|min:0',
            'EUR' => 'required|numeric|min:0',
            'GBP' => 'required|numeric|min:0',
        ]);

        // Update the exchange rates in config file
        $configPath = config_path('services_pricing.php');
        $config = include $configPath;
        $config['exchange_rates'] = $validated;

        $content = "<?php\n\nreturn " . var_export($config, true) . ";\n";
        file_put_contents($configPath, $content);
        
        \Artisan::call('config:clear');

        return redirect()->route('admin.services.index')
            ->with('success', 'Currency rates updated successfully!');
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
