<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Define the sample data for categories
        $categories = [
            ['title' => 'Technology', 'href' => 'https://example.com/technology'],
            ['title' => 'Travel', 'href' => 'https://example.com/travel'],
            // Add more categories as needed
        ];

        // Insert the sample data into the database
        foreach ($categories as $categoryData) {
            Category::create($categoryData);
        }
    }
}
