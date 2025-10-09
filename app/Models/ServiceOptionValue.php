<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ServiceOptionValue extends Model
{
    use HasFactory;

    protected $fillable = [
        'service_option_id',
        'label',
        'value',
        'description',
        'features',
        'price_modifier',
        'modifier_type',
        'order',
        'is_default',
    ];

    protected $casts = [
        'features' => 'array',
        'price_modifier' => 'decimal:2',
        'is_default' => 'boolean',
        'order' => 'integer',
    ];

    /**
     * Get the option this value belongs to
     */
    public function option(): BelongsTo
    {
        return $this->belongsTo(ServiceOption::class, 'service_option_id');
    }
}
