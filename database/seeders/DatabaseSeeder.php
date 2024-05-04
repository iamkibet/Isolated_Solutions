<?php

namespace Database\Seeders;
use App\Models\Post;
use App\Models\User;
use App\Models\Author;
use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);
        //  User::factory()->create([
        //     'first_name' => 'Jane',
        //     'last_name' => 'Doe',
        //     'email' => 'test@example.com',
        // ]);

        Post::factory(30)->create();
        Author::factory(1)->create();
        Category::factory(1)->create();
    }
}
