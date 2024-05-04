<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Author;

class AuthorsController extends Controller
{
    // Show all authors
    public function index()
    {
        $authors = Author::all();
        return response()->json($authors);
    }

    // Show a specific author
    public function show($id)
    {
        $author = Author::findOrFail($id);
        return response()->json($author);
    }

    // Store a new author
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            // Add validation rules for other fields if needed
        ]);

        $author = Author::create($request->all());
        return response()->json($author, 201);
    }

    // Update an existing author
    public function update(Request $request, $id)
    {
        $author = Author::findOrFail($id);
        $author->update($request->all());
        return response()->json($author, 200);
    }

    // Delete an author
    public function destroy($id)
    {
        $author = Author::findOrFail($id);
        $author->delete();
        return response()->json(null, 204);
    }
}
