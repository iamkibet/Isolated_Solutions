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
        // Create Admin User
        $admin = User::updateOrCreate(
            ['email' => 'admin@isolatedsolutions.com'],
            [
                'name' => 'Dennis Kibet',
                'email' => 'admin@isolatedsolutions.com',
                'password' => Hash::make('Admin@2024!'),
                'role' => 'A',
                'email_verified_at' => now(),
            ]
        );

        \Laravel\Prompts\info('✅ Admin user created successfully!');
        \Laravel\Prompts\info('📧 Email: admin@isolatedsolutions.com');
        \Laravel\Prompts\info('🔑 Password: Admin@2024!');
        \Laravel\Prompts\warning('⚠️  Remember to change the password after first login!');

        // Create additional test users in local/development environment
        if (config('app.env') === 'local') {
            // Regular test user
            User::updateOrCreate(
                ['email' => 'user@example.com'],
                [
                    'name' => 'Test User',
                    'email' => 'user@example.com',
                    'password' => Hash::make('password'),
                    'role' => 'U',
                    'email_verified_at' => now(),
                ]
            );

            \Laravel\Prompts\info('✅ Test user created (user@example.com / password)');
        }

        // Seed currency rates
        $this->call(CurrencyRatesSeeder::class);
        
        // Seed services from database
        $this->call(ServicesSeeder::class);
    }
}
