<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\User;
use App\Models\Author;
use App\Models\Category;
use App\Models\Tag;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        if (config('app.env') == 'local') {
            // admin user
            $admin = User::factory()->create([
                'name' => 'Admin',
                'email' => 'admin@example.com',
                'password' => Hash::make(config('app.admin.password'))
            ])->first();

            $admin->role = 'A';
            $admin->save();

            // random users


            \Laravel\Prompts\info('Admin and users seeded.');
            //  User::factory()->create([
            //     'first_name' => 'Jane',
            //     'last_name' => 'Doe',
            //     'email' => 'test@example.com',
            // ]);


        }
    }
}
