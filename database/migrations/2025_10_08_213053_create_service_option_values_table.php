<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('service_option_values', function (Blueprint $table) {
            $table->id();
            $table->foreignId('service_option_id')->constrained()->onDelete('cascade');
            $table->string('label'); // e.g., "Basic", "Standard", "Premium"
            $table->string('value'); // The actual value (e.g., "basic", "standard")
            $table->text('description')->nullable(); // Package description
            $table->json('features')->nullable(); // Package features array
            $table->decimal('price_modifier', 10, 2)->default(0); // Price for this package tier
            $table->string('modifier_type')->default('fixed'); // fixed, add, multiply, percentage
            $table->integer('order')->default(0);
            $table->boolean('is_default')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('service_option_values');
    }
};
