<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TagController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Admin/Tags/Index', [
            'tags' => Tag::with('posts')->get()
        ]);
    }

    public function store(Request $request)
    {
        $request->validate(['name' => 'required|string|max:255']);

        $tag = Tag::updateOrCreate(
            ['name' => $request->input('name')],
            [
                'name' => $request->input('name'),
                'description' => $request->input('description') ?? null
            ]
        );

        return back()->with('success', 'Tag added successfully!')->with('tag', $tag);
    }

    public function destroy(Tag $tag)
    {
        $tag->delete();

        return back()->with('success', 'Tag deleted successfully!');
    }
}
