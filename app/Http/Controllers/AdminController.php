<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
    public function posts(): Response
    {
        $posts = Post::with(['category', 'user'])
            ->orderBy('created_at', 'desc')
            ->paginate(15);

        return Inertia::render('Admin/Posts/Index', [
            'posts' => $posts
        ]);
    }

    public function dashboard(): Response
    {
        $posts = Post::with('category')
            ->orderBy('views', 'desc')
            ->get();

        return Inertia::render('Admin/Dashboard', [
            'posts' => $posts
        ]);
    }
}
