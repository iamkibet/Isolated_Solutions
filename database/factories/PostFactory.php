<?php

namespace Database\Factories;
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
        return [
            'title' => $this->faker->sentence(),
            'body' => implode("\n\n", $this->faker->paragraphs(10)),
            'excerpt' => $this->faker->paragraph(),
            'slug' => \Illuminate\Support\Str::slug($this->faker->sentence(), '-'),
            'status' => 'published',
        ];
    }
}
