<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\ServiceCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceController extends Controller
{
    /**
     * Display a listing of services for the products page
     */
    public function index()
    {
        $services = Service::with(['category', 'options.values'])
            ->where('is_active', true)
            ->orderBy('order')
            ->get();

        return Inertia::render('ProductsShowcase', [
            'services' => $services
        ]);
    }

    /**
     * Display a specific service detail page
     */
    public function show($slug)
    {
        $service = Service::with(['category', 'options.values'])
            ->where('slug', $slug)
            ->where('is_active', true)
            ->firstOrFail();

        return Inertia::render('ProductDetail', [
            'service' => $service
        ]);
    }
}

