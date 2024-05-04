<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoriesController extends Controller
{
    // Show all categories
    public function index()
    {
        $categories = Category::all();
        return response()->json($categories);
    }

    // Show a specific category
    public function show($id)
    {
        $category = Category::findOrFail($id);
        return response()->json($category);
    }

    // Store a new category
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'href' => 'required|string|max:255',
            // Add validation rules for other fields if needed
        ]);

        $category = Category::create($request->all());
        return response()->json($category, 201);
    }

    // Update an existing category
    public function update(Request $request, $id)
    {
        $category = Category::findOrFail($id);
        $category->update($request->all());
        return response()->json($category, 200);
    }

    // Delete a category
    public function destroy($id)
    {
        $category = Category::findOrFail($id);
        $category->delete();
        return response()->json(null, 204);
    }
}
