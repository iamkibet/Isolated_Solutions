<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\QuoteController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\PortfolioController;
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
Route::get('/products/services', [ServiceController::class, 'index'])->name('products.showcase');
Route::get('/products/services/{slug}', [ServiceController::class, 'show'])->name('products.services.show');
Route::get('/products/{slug}', [PortfolioController::class, 'show'])->name('products.show');
Route::get("/sokomagari", fn() => Inertia::render('SokoMagari'))->name('sokomagari');
// Legal pages
Route::get('/terms-of-use', function () {
    return Inertia::render('TermsOfUse');
});

Route::get('/privacy-policy', function () {
    return Inertia::render('PrivacyPolicy');
});
// Services Routes
Route::prefix('services')->group(function () {
    Route::get('/', fn() => Inertia::render('Services/Index'))->name('services.index');
    Route::get('/web-development', fn() => Inertia::render('Services/WebDevelopment'))->name('services.web-development');
    Route::get('/ecommerce', fn() => Inertia::render('Services/Ecommerce'))->name('services.ecommerce');
    Route::get('/app-development', fn() => Inertia::render('Services/AppDevelopment'))->name('services.app-development');
    Route::get('/consulting', fn() => Inertia::render('Services/Consulting'))->name('services.consulting');
    Route::get('/software-testing', fn() => Inertia::render('Services/SoftwareTesting'))->name('services.software-testing');
    Route::get('/devops', fn() => Inertia::render('Services/DevOps'))->name('services.devops');
    Route::get('/cloud-integration', fn() => Inertia::render('Services/CloudIntegration'))->name('services.cloud-integration');
});

// Industries Routes
Route::prefix('industries')->group(function () {
    Route::get('/', fn() => Inertia::render('Industries/Index'))->name('industries.index');
    Route::get('/ecommerce', fn() => Inertia::render('Industries/Ecommerce'))->name('industries.ecommerce');
    Route::get('/saas', fn() => Inertia::render('Industries/SaaS'))->name('industries.saas');
    Route::get('/fintech', fn() => Inertia::render('Industries/FinTech'))->name('industries.fintech');
    Route::get('/edtech', fn() => Inertia::render('Industries/EdTech'))->name('industries.edtech');
    Route::get('/wellness', fn() => Inertia::render('Industries/Wellness'))->name('industries.wellness');
    Route::get('/agritech', fn() => Inertia::render('Industries/AgriTech'))->name('industries.agritech');
    Route::get('/insurance', fn() => Inertia::render('Industries/Insurance'))->name('industries.insurance');
    Route::get('/government', fn() => Inertia::render('Industries/Government'))->name('industries.government');
});

// Technologies Routes
Route::prefix('technologies')->group(function () {
    Route::get('/', fn() => Inertia::render('Technologies/Index'))->name('technologies.index');
    Route::get('/mobile', fn() => Inertia::render('Technologies/Mobile'))->name('technologies.mobile');
    Route::get('/cloud', fn() => Inertia::render('Technologies/Cloud'))->name('technologies.cloud');
    Route::get('/cms', fn() => Inertia::render('Technologies/CMS'))->name('technologies.cms');
    Route::get('/frontend', fn() => Inertia::render('Technologies/Frontend'))->name('technologies.frontend');
    Route::get('/backend', fn() => Inertia::render('Technologies/Backend'))->name('technologies.backend');
    Route::get('/fullstack', fn() => Inertia::render('Technologies/FullStack'))->name('technologies.fullstack');
});

// Work Routes
Route::prefix('work')->group(function () {
    Route::get('/', fn() => Inertia::render('Work/Index'))->name('work.index');
    Route::get('/portfolio', fn() => Inertia::render('Work/Portfolio'))->name('work.portfolio');
    Route::get('/case-studies', fn() => Inertia::render('Work/CaseStudies'))->name('work.case-studies');
});

// Post routes
Route::prefix('posts')->group(function () {
    Route::get('/', [PostController::class, 'index'])->name('posts.index');
    Route::get('/{post:slug}', [PostController::class, 'show'])->name('posts.show');
    Route::post('/{post}/thumbs-up', [PostController::class, 'thumbsUp'])->name('posts.thumbsUp')->whereNumber('post');
    Route::post('/{post}/thumbs-down', [PostController::class, 'thumbsDown'])->name('posts.thumbsDown')->whereNumber('post');
    Route::post('/{post}/increment-views', [PostController::class, 'incrementViews'])->name('posts.incrementViews')->whereNumber('post');
});

// Quote routes
Route::prefix('quotes')->group(function () {
    Route::get('/', [QuoteController::class, 'index'])->name('quotes.index');
    Route::post('/', [QuoteController::class, 'store'])->name('quotes.store');
    Route::post('/preview', [QuoteController::class, 'preview'])->name('quotes.preview');
    Route::get('/{quote}', [QuoteController::class, 'show'])->name('quotes.show');
    Route::get('/{quote}/download', [QuoteController::class, 'download'])->name('quotes.download');
});

Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');
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

    // Admin quotes management
    Route::get('/quotes', [AdminController::class, 'quotes'])->name('admin.quotes.index');
    Route::get('/quotes/create', [AdminController::class, 'createQuote'])->name('admin.quotes.create');
    Route::delete('/quotes/{quote}', [AdminController::class, 'destroyQuote'])->name('admin.quotes.destroy');
    Route::patch('/quotes/{quote}/status', [AdminController::class, 'updateQuoteStatus'])->name('admin.quotes.updateStatus');

    // Admin services management
    Route::get('/services', [AdminController::class, 'services'])->name('admin.services.index');
    Route::post('/services', [AdminController::class, 'storeService'])->name('admin.services.store');
    Route::patch('/services/{serviceKey}', [AdminController::class, 'updateService'])->name('admin.services.update');
    Route::delete('/services/{serviceKey}', [AdminController::class, 'destroyService'])->name('admin.services.destroy');
    Route::post('/currency-rates', [AdminController::class, 'updateCurrencyRates'])->name('admin.currency-rates.update');
});

require __DIR__ . '/auth.php';
