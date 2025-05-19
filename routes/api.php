<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/newsletter/subscribe', function (Request $request) {
    $request->validate([
        'email' => 'required|email|unique:newsletter_subscribers,email'
    ]);

    try {
        DB::table('newsletter_subscribers')->insert([
            'email' => $request->email,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return response()->json(['message' => 'Successfully subscribed to newsletter'], 200);
    } catch (\Exception $e) {
        return response()->json(['message' => 'Failed to subscribe to newsletter'], 500);
    }
});
