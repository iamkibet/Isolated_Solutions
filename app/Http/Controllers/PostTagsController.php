<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Tag;

class PostTagsController extends Controller
{
    // Attach a tag to a post
    public function attachTag(Request $request, $postId, $tagId)
    {
        $post = Post::findOrFail($postId);
        $post->tags()->attach($tagId);
        return response()->json($post->tags, 201);
    }

    // Detach a tag from a post
    public function detachTag(Request $request, $postId, $tagId)
    {
        $post = Post::findOrFail($postId);
        $post->tags()->detach($tagId);
        return response()->json($post->tags, 200);
    }
}
