<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    /**
     * Portfolio products data
     */
    private function getProducts()
    {
        return [
            'soko-magari' => [
                'name' => 'Soko Magari',
                'slug' => 'soko-magari',
                'tagline' => 'Transform Your Automotive Business',
                'description' => 'Soko Magari is an enterprise-grade automotive commerce platform that revolutionizes how vehicles are bought and sold. Built with cutting-edge technology, it provides a seamless experience for dealers, buyers, and sellers.',
                'category' => 'E-commerce Platform',
                'badge' => 'Live Platform',
                'color' => 'red',
                'externalLink' => 'https://sokomagari.isolatedsolutions.org/',
                'features' => [
                    'Vehicle Matchmaking' => 'Advanced algorithms match buyers with their perfect vehicles based on preferences, budget, and requirements.',
                    'Virtual Showrooms & 360° Tours' => 'Immersive virtual showrooms with 360-degree vehicle tours for remote viewing experience.',
                    
                    'Real-time Market Analytics' => 'Comprehensive market insights and pricing trends to make informed decisions.',
                    'Dealer Management System' => 'Complete dealership management with inventory, leads, and sales tracking.',
                    'Advanced Search & Filters' => 'Powerful search with multiple filters including make, model, year, price, and location.',
                    'Mobile-First Design' => 'Fully responsive design optimized for mobile, tablet, and desktop devices.',
                    'Multi-language Support' => 'Support for multiple languages to reach a global audience.',
                ],
                'technologies' => ['Laravel', 'React', 'Inertia.js', 'Tailwind CSS', 'MySQL', 'Redis'],
                'stats' => [
                    ['label' => 'Active Listings', 'value' => '10K+'],
                    ['label' => 'Registered Users', 'value' => '5K+'],
                    ['label' => 'Successful Sales', 'value' => '2K+'],
                    ['label' => 'Dealer Partners', 'value' => '100+'],
                ],
            ],
            'stocksync' => [
                'name' => 'StockSync',
                'slug' => 'stocksync',
                'tagline' => 'Inventory Management Simplified',
                'description' => 'StockSync is a comprehensive inventory management system designed for businesses of all sizes. From small retailers to large enterprises, StockSync provides real-time visibility and control over your inventory.',
                'category' => 'Business Management',
                'badge' => 'Enterprise Ready',
                'color' => 'blue',
                'externalLink' => 'http://stocksync.isolatedsolutions.org/',
                'features' => [
                    'Real-time Stock Tracking' => 'Monitor inventory levels in real-time across all locations with instant updates.',
                    'Multi-warehouse Support' => 'Manage inventory across multiple warehouses and locations from a single dashboard.',
                    'Automated Reorder Alerts' => 'Smart alerts and automated reordering to prevent stockouts.',
                    'Detailed Analytics & Reports' => 'Comprehensive reporting with insights on inventory turnover, trends, and forecasting.',
                    'Barcode & QR Scanning' => 'Fast product identification and tracking using barcode and QR code scanning.',
                    'Purchase Order Management' => 'Streamlined purchase order creation, approval, and tracking.',
                    'Supplier Management' => 'Maintain supplier database with performance tracking and order history.',
                    'Mobile Access' => 'Full mobile access for on-the-go inventory management.',
                ],
                'technologies' => ['Laravel', 'Vue.js', 'Tailwind CSS', 'PostgreSQL', 'Redis'],
                'stats' => [
                    ['label' => 'Products Managed', 'value' => '50K+'],
                    ['label' => 'Business Users', 'value' => '1K+'],
                    ['label' => 'Warehouses', 'value' => '500+'],
                    ['label' => 'Daily Transactions', 'value' => '10K+'],
                ],
            ],
            'ai-resume-builder' => [
                'name' => 'AI Resume Builder',
                'slug' => 'ai-resume-builder',
                'tagline' => 'Build Your Perfect Resume with AI',
                'description' => 'AI Resume Builder harnesses the power of artificial intelligence to help you create professional, ATS-optimized resumes that get noticed. Our intelligent system provides content suggestions, formatting optimization, and industry-specific recommendations.',
                'category' => 'AI-Powered Tool',
                'badge' => 'AI-Powered',
                'color' => 'purple',
                'externalLink' => null,
                'features' => [
                    'AI Content Generation' => 'Intelligent content suggestions based on your role, industry, and experience level.',
                    'ATS Optimization' => 'Automatically optimized for Applicant Tracking Systems to increase visibility.',
                    'Professional Templates' => 'Wide selection of modern, professional templates designed by hiring experts.',
                    'Real-time Preview' => 'See your changes instantly with live preview as you build your resume.',
                    'Smart Keyword Analysis' => 'AI analyzes job descriptions and suggests relevant keywords to include.',
                    'Multiple Export Formats' => 'Download in PDF, Word, or plain text formats.',
                    'Industry-Specific Content' => 'Tailored suggestions based on your specific industry and job role.',
                    'Cover Letter Generator' => 'AI-powered cover letter generation matched to your resume.',
                ],
                'technologies' => ['Next.js', 'OpenAI', 'TypeScript', 'Tailwind CSS', 'Supabase'],
                'stats' => [
                    ['label' => 'Resumes Created', 'value' => '25K+'],
                    ['label' => 'Success Rate', 'value' => '94%'],
                    ['label' => 'Templates', 'value' => '50+'],
                    ['label' => 'Active Users', 'value' => '15K+'],
                ],
            ],
            'pesaplan' => [
                'name' => 'PesaPlan',
                'slug' => 'pesaplan',
                'tagline' => 'Smart Financial Management',
                'description' => 'PesaPlan is a powerful expense management mobile app that helps individuals and businesses take control of their finances. With intelligent tracking, budgeting, and insights, managing money has never been easier.',
                'category' => 'Mobile App',
                'badge' => 'Mobile App',
                'color' => 'green',
                'externalLink' => null,
                'features' => [
                    'Expense Tracking' => 'Effortlessly track all your expenses with automatic categorization.',
                    'Smart Budgeting' => 'Set budgets and get real-time alerts when approaching limits.',
                    'Receipt Scanning with OCR' => 'Scan receipts with your camera and automatically extract details.',
                    'Multi-currency Support' => 'Handle expenses in multiple currencies with real-time exchange rates.',
                    'Financial Insights' => 'AI-powered insights and recommendations to improve your financial health.',
                    'Recurring Expenses' => 'Automatically track and manage recurring bills and subscriptions.',
                    'Team Collaboration' => 'Share expenses and budgets with family members or team members.',
                    'Export & Reporting' => 'Generate detailed reports and export data for accounting purposes.',
                ],
                'technologies' => ['React Native', 'Node.js', 'MongoDB', 'AWS', 'TensorFlow'],
                'stats' => [
                    ['label' => 'Downloads', 'value' => '50K+'],
                    ['label' => 'Money Managed', 'value' => '$10M+'],
                    ['label' => 'Active Users', 'value' => '20K+'],
                    ['label' => 'App Rating', 'value' => '4.8★'],
                ],
            ],
            'fashion-store' => [
                'name' => 'Fashion Store',
                'slug' => 'fashion-store',
                'tagline' => 'Your Fashion Empire Starts Here',
                'description' => 'Fashion Store is a modern e-commerce platform specifically designed for fashion retailers. With stunning product galleries, advanced variant management, and seamless checkout, it provides everything needed to run a successful fashion business online.',
                'category' => 'E-commerce Platform',
                'badge' => 'E-commerce',
                'color' => 'pink',
                'externalLink' => null,
                'features' => [
                    'Beautiful Product Galleries' => 'Stunning product displays with high-resolution images and zoom functionality.',
                    'Size & Color Variations' => 'Advanced variant management for sizes, colors, and styles.',
                    'Secure Checkout' => 'PCI-compliant checkout with multiple payment options.',
                    'Order Tracking' => 'Real-time order tracking for customers and comprehensive management for admins.',
                    'Inventory Management' => 'Track stock levels across all variants and receive low-stock alerts.',
                    'Customer Accounts' => 'Customer portal with order history, wishlists, and saved addresses.',
                    'Promotional Tools' => 'Built-in discount codes, flash sales, and promotional campaigns.',
                    'Mobile Shopping App' => 'Native mobile apps for iOS and Android for on-the-go shopping.',
                ],
                'technologies' => ['Laravel', 'Vue.js', 'Stripe', 'Tailwind CSS', 'MySQL'],
                'stats' => [
                    ['label' => 'Products Listed', 'value' => '5K+'],
                    ['label' => 'Monthly Orders', 'value' => '2K+'],
                    ['label' => 'Customer Satisfaction', 'value' => '98%'],
                    ['label' => 'Average Order Value', 'value' => '$150'],
                ],
            ],
        ];
    }

    /**
     * Display a specific portfolio product
     */
    public function show($slug)
    {
        $products = $this->getProducts();

        if (!isset($products[$slug])) {
            abort(404);
        }

        return Inertia::render('PortfolioProduct', [
            'product' => $products[$slug]
        ]);
    }
}

