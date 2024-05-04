<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Tag;

class TagsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Define the sample data for tags
        $tags = [
            ['name' => 'Technology'],
            ['name' => 'Travel'],
            // Add more tags as needed
        ];

        // Insert the sample data into the database
        foreach ($tags as $tagData) {
            Tag::create($tagData);
        }
    }
}
