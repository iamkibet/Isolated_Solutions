<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Author;

class AuthorsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Define the sample data for authors
        $authors = [
            ['name' => 'John Doe', 'role' => 'Author', 'imageUrl' => 'https://example.com/image1.jpg'],
            ['name' => 'Jane Smith', 'role' => 'Editor', 'imageUrl' => 'https://example.com/image2.jpg'],
            // Add more authors as needed
        ];

        // Insert the sample data into the database
        foreach ($authors as $authorData) {
            Author::create($authorData);
        }
    }
}
