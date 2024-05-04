<?php

namespace Database\Factories;

use App\Models\PostTag;
use Illuminate\Database\Eloquent\Factories\Factory;

class PostTagsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'post_id' => function () {
                return \App\Models\Post::factory()->create()->id;
            },
            'tag_id' => function () {
                return \App\Models\Tag::factory()->create()->id;
            },
        ];
    }
}
