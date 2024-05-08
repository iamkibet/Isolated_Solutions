<?php

namespace Database\Factories;

use App\Models\Post;
use App\Models\User;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Posts>
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
        $title = $this->faker->sentence();
        return [
            'title' => $title,
            'body' => $this->faker->paragraphs(10, true),
            'excerpt' => $this->faker->paragraph(),
            'slug' => \Illuminate\Support\Str::slug($title),
            'status' => 'published',
            'user_id' => User::factory()->create()->id,
            'category_id' => Category::factory()->create()->id
        ];
    }
}
