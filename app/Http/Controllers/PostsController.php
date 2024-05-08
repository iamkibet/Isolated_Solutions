<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Category;


class PostsController extends Controller
{
    public function index()
    {
        $posts = Post::with(['user', 'category'])->get();

    

        return Inertia::render('Posts/Index', [
            'posts' => $posts,
        ]);
    }


    public function create()
    {

        $categories = Category::all();

        return Inertia::render('Posts/Create', [

            'categories' => $categories
        ]);
    }

    public function store(Request $request)
    {
       $request->validate([
        'title' => 'required', 'max:255',
        'excerpt' => 'required','max:255',
        'body' => 'required',
        'category_id' => 'required',
    ]);


    $user = auth()->user();

    $post = Post::create([
        'title' => $request->title,
        'slug' => \Str::slug($request->title),
        'body' => $request->body,
        'excerpt' => $request->excerpt,
        'category_id' => $request->category_id,
        'user_id' => $user->id,
        'status' => 'draft', 
    ]);

    return redirect()->route('posts.index');
    }

    // public function publish(Request $request, $id)
    // {
    //     $post = Post::findOrFail($id);

        
    //     if (!auth()->user()->isAdmin()) {
    //         abort(403, 'Unauthorized');
    //     }

    //     $post->status = 'published';
    //     $post->save();

    //     return redirect()->back();
    // }


    public function show($slug)
    {
         $post = Post::with(['category', 'user'])->where('slug', $slug)->firstOrFail();

         
        return Inertia::render('Posts/Show', [
            'post' => $post
        ]);
    }
}
