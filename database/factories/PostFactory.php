<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = $this->faker->sentence(6); // This is the title
        $slug = Str::slug($title); // this-is-the-title
        return [
            'title' => $title,
            'slug' => $slug,
            'excerpt' => $this->faker->paragraph(4),
            'content' => $this->faker->paragraphs(5, true),
        ];
    }
}
