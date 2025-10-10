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
        Schema::create('currency_rates', function (Blueprint $table) {
            $table->id();
            $table->string('currency_code', 3)->unique(); // USD, KES, EUR, GBP
            $table->string('currency_name'); // US Dollar, Kenyan Shilling, etc
            $table->string('currency_symbol', 10); // $, KSh, €, £
            $table->decimal('rate', 10, 4)->default(1.0000); // Exchange rate relative to USD
            $table->boolean('is_base')->default(false); // Is this the base currency (USD)
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('currency_rates');
    }
};
