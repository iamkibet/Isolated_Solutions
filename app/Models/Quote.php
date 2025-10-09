<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Quote extends Model
{
    use HasFactory;

    protected $fillable = [
        'quote_number',
        'client_name',
        'client_email',
        'client_company',
        'client_phone',
        'selected_services',
        'currency',
        'total',
        'notes',
        'status',
        'valid_until',
    ];

    protected $casts = [
        'selected_services' => 'array',
        'total' => 'decimal:2',
        'valid_until' => 'datetime',
    ];

    /**
     * Generate a unique quote number
     */
    public static function generateQuoteNumber(): string
    {
        $prefix = 'QT';
        $date = Carbon::now()->format('Ymd');
        $count = self::whereDate('created_at', Carbon::today())->count() + 1;
        
        return sprintf('%s-%s-%04d', $prefix, $date, $count);
    }

    /**
     * Get the currency symbol
     */
    public function getCurrencySymbolAttribute(): string
    {
        $symbols = [
            'USD' => '$',
            'KES' => 'KSh',
            'EUR' => '€',
            'GBP' => '£',
        ];

        return $symbols[$this->currency] ?? $this->currency;
    }
}
