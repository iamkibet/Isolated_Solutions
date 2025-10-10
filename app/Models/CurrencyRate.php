<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CurrencyRate extends Model
{
    use HasFactory;

    protected $fillable = [
        'currency_code',
        'currency_name',
        'currency_symbol',
        'rate',
        'is_base',
        'is_active',
    ];

    protected $casts = [
        'rate' => 'decimal:4',
        'is_base' => 'boolean',
        'is_active' => 'boolean',
    ];
}
