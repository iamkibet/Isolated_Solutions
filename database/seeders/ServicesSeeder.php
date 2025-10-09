<?php

namespace Database\Seeders;

use App\Models\ServiceCategory;
use App\Models\Service;
use App\Models\ServiceOption;
use App\Models\ServiceOptionValue;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ServicesSeeder extends Seeder
{
    /**
     * Run the database seeder.
     */
    public function run(): void
    {
        // Get services from config file
        $servicesConfig = config('services_pricing.services', []);

        if (empty($servicesConfig)) {
            \Laravel\Prompts\warning('No services found in config file.');
            return;
        }

        // Extract unique categories
        $categoriesData = [];
        foreach ($servicesConfig as $serviceConfig) {
            $categoryName = $serviceConfig['category'];
            if (!isset($categoriesData[$categoryName])) {
                $categoriesData[$categoryName] = [
                    'name' => $categoryName,
                    'slug' => Str::slug($categoryName),
                    'order' => count($categoriesData),
                ];
            }
        }

        // Create categories
        $categories = [];
        foreach ($categoriesData as $categoryData) {
            $categories[$categoryData['name']] = ServiceCategory::updateOrCreate(
                ['slug' => $categoryData['slug']],
                $categoryData
            );
        }

        \Laravel\Prompts\info('✅ Created ' . count($categories) . ' service categories');

        // Create services with package tiers as options
        $servicesCreated = 0;
        foreach ($servicesConfig as $serviceKey => $serviceConfig) {
            $category = $categories[$serviceConfig['category']];

            // Create the service
            $service = Service::updateOrCreate(
                ['slug' => Str::slug($serviceKey)],
                [
                    'service_category_id' => $category->id,
                    'name' => $serviceConfig['name'],
                    'description' => $serviceConfig['description'],
                    'base_price' => $serviceConfig['packages']['basic']['price'] ?? 0,
                    'pricing_model' => 'package',
                    'order' => $servicesCreated,
                    'is_active' => true,
                    'features' => $serviceConfig['packages']['basic']['features'] ?? [],
                ]
            );

            // Create "Package Tier" option for this service
            $packageOption = ServiceOption::updateOrCreate(
                [
                    'service_id' => $service->id,
                    'name' => 'Package Tier'
                ],
                [
                    'type' => 'select',
                    'description' => 'Choose your package level',
                    'is_required' => true,
                    'order' => 0,
                ]
            );

            // Create package tier values (Basic, Standard, Premium, Enterprise)
            $tierOrder = 0;
            foreach ($serviceConfig['packages'] as $tierKey => $tierData) {
                ServiceOptionValue::updateOrCreate(
                    [
                        'service_option_id' => $packageOption->id,
                        'value' => $tierKey
                    ],
                    [
                        'label' => $tierData['name'] ?? ucfirst($tierKey),
                        'description' => $tierData['description'] ?? '',
                        'features' => $tierData['features'] ?? [],
                        'price_modifier' => $tierData['price'] ?? 0,
                        'modifier_type' => 'fixed', // Fixed price for each tier
                        'order' => $tierOrder,
                        'is_default' => $tierKey === 'basic',
                    ]
                );
                $tierOrder++;
            }

            $servicesCreated++;
        }

        \Laravel\Prompts\info('✅ Created ' . $servicesCreated . ' services with package tiers');
        
        // Create currency exchange rates (we'll store these in a separate table or keep in config)
        \Laravel\Prompts\info('💱 Currency rates remain in config file for now');
        
        \Laravel\Prompts\info('🎉 Services migration to database complete!');
    }
}
