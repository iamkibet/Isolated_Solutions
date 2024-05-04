<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostTag extends Model
{
    use HasFactory;

      protected $table = 'post_tags';
    
    // If you need to disable timestamps for the pivot table
    public $timestamps = false;
    
    // If you need to specify the custom primary key for the pivot table
    protected $primaryKey = null;
}
