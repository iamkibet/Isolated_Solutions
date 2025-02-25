<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\TagController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file defines all the routes for your application, including
| public, authenticated, and admin routes.
|
*/

// Public routes
Route::get('/', function () {
    return Inertia::render('Landing');
})->name('home');

Route::get('/products', fn() => Inertia::render('Products'))->name('products');
Route::get("/sokomagari", fn() => Inertia::render('SokoMagari'))->name('sokomagari');
Route::get('/posts', [PostController::class, 'index'])->name('posts.index');
Route::get('/posts/{post:slug}', [PostController::class, 'show'])->name('posts.show');
Route::get('/contact', fn() => Inertia::render('Contact'))->name('contact');
Route::get('/about', fn() => Inertia::render('AboutUs'))->name('about-us');

// Authenticated user routes
Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', fn() => Inertia::render('Dashboard'))->middleware('verified')->name('dashboard');

    // Profile routes
    Route::prefix('profile')->group(function () {
        Route::get('/', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });

    // User-managed posts
    Route::resource('posts', PostController::class)->except(['index', 'show']);
    Route::post('posts/{post}/thumbs-up', [PostController::class, 'thumbsUp'])->name('posts.thumbsUp');
    Route::post('posts/{post}/thumbs-down', [PostController::class, 'thumbsDown'])->name('posts.thumbsDown');
    Route::post('posts/{post}/increment-views', [PostController::class, 'incrementViews'])->name('posts.incrementViews');
});

// Admin-specific routes
Route::middleware(['auth', 'admin'])->prefix('admin')->group(function () {
    Route::get('/dashboard', [AdminController::class, 'dashboard'])->name('admin.dashboard');

    //admin posts management
    Route::get('/posts', [AdminController::class, 'posts'])->name('admin.posts');
    Route::get('/posts/create', [PostController::class, 'create'])->name('posts.create');
    Route::post('/posts', [PostController::class, 'store'])->name('posts.store');
    Route::get('/posts/{post}/edit', [PostController::class, 'edit'])->name('posts.edit');
    Route::patch('/posts/{post}', [PostController::class, 'update'])->name('posts.update');
    Route::delete('/posts/{post}', [PostController::class, 'destroy'])->name('posts.destroy');
    Route::post('/tags/store', [TagController::class, 'store'])->name('tags.store');
});

require __DIR__ . '/auth.php';
