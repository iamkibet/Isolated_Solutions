<?php

namespace Database\Seeders;

use App\Models\CurrencyRate;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CurrencyRatesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $currencies = [
            [
                'currency_code' => 'USD',
                'currency_name' => 'US Dollar',
                'currency_symbol' => '$',
                'rate' => 1.0000,
                'is_base' => true,
                'is_active' => true,
            ],
            [
                'currency_code' => 'KES',
                'currency_name' => 'Kenyan Shilling',
                'currency_symbol' => 'KSh',
                'rate' => 130.0000,
                'is_base' => false,
                'is_active' => true,
            ],
            [
                'currency_code' => 'EUR',
                'currency_name' => 'Euro',
                'currency_symbol' => '€',
                'rate' => 0.9200,
                'is_base' => false,
                'is_active' => true,
            ],
            [
                'currency_code' => 'GBP',
                'currency_name' => 'British Pound',
                'currency_symbol' => '£',
                'rate' => 0.7900,
                'is_base' => false,
                'is_active' => true,
            ],
        ];

        foreach ($currencies as $currency) {
            CurrencyRate::updateOrCreate(
                ['currency_code' => $currency['currency_code']],
                $currency
            );
        }

        \Laravel\Prompts\info('✅ Currency rates seeded successfully!');
    }
}
