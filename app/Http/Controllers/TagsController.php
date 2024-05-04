<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tag;

class TagsController extends Controller
{
    // Show all tags
    public function index()
    {
        $tags = Tag::all();
        return response()->json($tags);
    }

    // Show a specific tag
    public function show($id)
    {
        $tag = Tag::findOrFail($id);
        return response()->json($tag);
    }

    // Store a new tag
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            // Add validation rules for other fields if needed
        ]);

        $tag = Tag::create($request->all());
        return response()->json($tag, 201);
    }

    // Update an existing tag
    public function update(Request $request, $id)
    {
        $tag = Tag::findOrFail($id);
        $tag->update($request->all());
        return response()->json($tag, 200);
    }

    // Delete a tag
    public function destroy($id)
    {
        $tag = Tag::findOrFail($id);
        $tag->delete();
        return response()->json(null, 204);
    }
}
