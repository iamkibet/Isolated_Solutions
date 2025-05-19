<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'excerpt',
        'content',
        'category_id',
        'user_id',
        'featured_image',
        'is_published',
        'views',
        'thumbs_up',
        'thumbs_down',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(Tag::class);
    }

    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function reactions(): HasMany
    {
        return $this->hasMany(PostReaction::class);
    }

    public function getLikesCountAttribute(): int
    {
        return $this->reactions()->where('reaction_type', 'like')->count();
    }

    public function getDislikesCountAttribute(): int
    {
        return $this->reactions()->where('reaction_type', 'dislike')->count();
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }
}
