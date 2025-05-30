<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use App\Models\Tag;
use App\Models\PostReaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class PostController extends Controller
{
    /**
     * Display a listing of the posts.
     */
    public function index()
    {
        $posts = Post::with(['category', 'tags', 'user'])
            ->latest()
            ->paginate(15);

        return inertia('Posts/Index', [
            'posts' => $posts,
        ]);
    }

    /**
     * Show the form for creating a new post.
     */
    public function create()
    {
        return inertia('Posts/Create', [
            'categories' => Category::all(),
            'tags' => Tag::all(),
        ]);
    }

    /**
     * Store a newly created post.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required',
            'excerpt' => 'nullable|string|max:500',
            'category_id' => 'nullable|exists:categories,id',
            'new_category' => 'nullable|string|max:255',
            'tags' => 'nullable|array',
            'tags.*' => 'string|max:50',
            'new_tags' => 'nullable|string',
        ]);

        // Handle category
        if ($request->filled('new_category')) {
            $category = Category::firstOrCreate(['name' => $request->new_category]);
            $categoryId = $category->id;
        } else {
            $categoryId = $request->category_id;
        }


        $title = $request->input('title');

        $post = Post::create([
            'title' => $title,
            'slug' => Str::slug($title),
            'content' => $request->input('content'),
            'excerpt' => $request->input('excerpt'),
            'category_id' => $request->input('category_id'),
            'user_id' => Auth::id(),
        ]);

        // Handle tags
        $tagIds = $request->tags ?? [];
        if ($request->filled('new_tags')) {
            $newTagNames = explode(',', $request->new_tags);
            foreach ($newTagNames as $newTagName) {
                $newTagName = trim($newTagName);
                if (!empty($newTagName)) {
                    $tag = Tag::firstOrCreate(['name' => $newTagName]);
                    $tagIds[] = $tag->id;
                }
            }
        }
        $post->tags()->sync($tagIds);

        return redirect()->route('posts.index')->with('success', 'Post created successfully.');
    }

    /**
     * Display the specified post.
     */
    public function show(Post $post)
    {
        $post->increment('views');
        $post->load(['category', 'tags', 'user']);

        if (auth()->check()) {
            $userReaction = PostReaction::where('user_id', auth()->id())
                ->where('post_id', $post->id)
                ->value('reaction_type');

            $post->user_reaction = $userReaction;
        }

        return inertia('Posts/Show', [
            'post' => $post,
        ]);
    }

    /**
     * Show the form for editing a post.
     */
    public function edit(Post $post)
    {
        return inertia('Posts/Edit', [
            'post' => $post->load('tags'),
            'categories' => Category::all(),
            'tags' => Tag::all(),
        ]);
    }

    /**
     * Update a post.
     */
    public function update(Request $request, Post $post)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required',
            'excerpt' => 'nullable|string|max:500',
            'category_id' => 'nullable|exists:categories,id',
            'tags' => 'nullable|array',
            'tags.*' => 'string|max:50',
        ]);

        $post->update([
            'title' => $request->input('title'),
            'content' => $request->input('content'),
            'excerpt' => $request->input('excerpt'),
            'category_id' => $request->input('category_id'),
        ]);

        if ($request->has('tags')) {
            $tags = collect($request->input('tags'))->map(function ($tagName) {
                return Tag::firstOrCreate(['name' => $tagName])->id;
            });
            $post->tags()->sync($tags);
        }

        return redirect()->route('posts.index')->with('success', 'Post updated successfully.');
    }

    /**
     * Delete a post.
     */
    public function destroy(Post $post)
    {
        $post->delete();

        return redirect()->route('posts.index')->with('success', 'Post deleted successfully!');
    }

    /**
     * Handle post reaction (like/dislike)
     */
    public function thumbsUp(Post $post)
    {
        $user = auth()->user();

        if (!$user) {
            return redirect()->route('posts.show', $post->slug)
                ->with('error', 'You must be logged in to react to posts.');
        }

        $existingReaction = PostReaction::where('user_id', $user->id)
            ->where('post_id', $post->id)
            ->first();

        if ($existingReaction) {
            if ($existingReaction->reaction_type === 'like') {
                $existingReaction->delete();
            } else {
                $existingReaction->update(['reaction_type' => 'like']);
            }
        } else {
            PostReaction::create([
                'user_id' => $user->id,
                'post_id' => $post->id,
                'reaction_type' => 'like'
            ]);
        }

        return redirect()->route('posts.show', $post->slug);
    }

    /**
     * Handle post reaction (like/dislike)
     */
    public function thumbsDown(Post $post)
    {
        $user = auth()->user();

        if (!$user) {
            return redirect()->route('posts.show', $post->slug)
                ->with('error', 'You must be logged in to react to posts.');
        }

        $existingReaction = PostReaction::where('user_id', $user->id)
            ->where('post_id', $post->id)
            ->first();

        if ($existingReaction) {
            if ($existingReaction->reaction_type === 'dislike') {
                $existingReaction->delete();
            } else {
                $existingReaction->update(['reaction_type' => 'dislike']);
            }
        } else {
            PostReaction::create([
                'user_id' => $user->id,
                'post_id' => $post->id,
                'reaction_type' => 'dislike'
            ]);
        }

        return redirect()->route('posts.show', $post->slug);
    }

    public function incrementViews(Post $post)
    {
        $post->increment('views');
        return response()->noContent();
    }
}
