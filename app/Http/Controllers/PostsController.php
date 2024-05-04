<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;


class PostsController extends Controller
{
    public function index()
    {
        $posts = Post::with(['category', 'author'])->get();

        return Inertia::render('Posts/Index', [
            'posts' => $posts
        ]);
    }

    public function show($slug)
    {
         $post = Post::with(['category', 'author'])->where('slug', $slug)->firstOrFail();

        return Inertia::render('Posts/Show', [
            'post' => $post
        ]);
    }
}
