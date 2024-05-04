<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\PostTag;

class PostTagsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Define the sample data for post tags
        $postTags = [
            ['post_id' => 1, 'tag_id' => 1],
            ['post_id' => 1, 'tag_id' => 2],
            ['post_id' => 2, 'tag_id' => 2],
            // Add more post tags as needed
        ];

        // Insert the sample data into the database
        foreach ($postTags as $postTagData) {
            PostTag::create($postTagData);
        }
    }
}
