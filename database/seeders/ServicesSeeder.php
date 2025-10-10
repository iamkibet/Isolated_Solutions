<?php

namespace Database\Seeders;

use App\Models\ServiceCategory;
use App\Models\Service;
use App\Models\ServiceOption;
use App\Models\ServiceOptionValue;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ServicesSeeder extends Seeder
{
    /**
     * Run the database seeder.
     */
    public function run(): void
    {
        // Define services data directly
        $servicesConfig = [
            'web-development' => [
                'name' => 'Website Development',
                'category' => 'Web Development',
                'description' => 'Professional website development with modern design, SEO optimization, and responsive layouts',
                'packages' => [
                    'basic' => [
                        'name' => 'Basic',
                        'price' => 400,
                        'description' => 'Perfect for startups and small businesses',
                        'features' => [
                            'Modern Single Page Application',
                            'Professional Landing Page Design',
                            'About & Contact Sections',
                            'Mobile-First Responsive Design',
                            'SEO Optimized Structure',
                            'Fast Loading Speed',
                            'Contact Form Integration',
                            'SSL Certificate Setup',
                            'Google Analytics Integration',
                            'Social Media Links',
                            'Cross-Browser Compatibility',
                            '1 Month Technical Support',
                            'Unlimited Revisions',
                        ],
                    ],
                    'standard' => [
                        'name' => 'Standard',
                        'price' => 600,
                        'description' => 'Ideal for growing businesses',
                        'features' => [
                            'Multi-Page Professional Website',
                            'Custom Responsive Design',
                            'Advanced SEO Optimization',
                            'Content Management System',
                            'Blog/News Section',
                            'Dynamic Image Galleries',
                            'Social Media Integration',
                            'Newsletter Subscription System',
                            'Performance Optimization',
                            'Advanced Analytics Dashboard',
                            'Search Functionality',
                            'Custom Forms',
                            '3 Months Technical Support',
                            'Unlimited Revisions',
                        ],
                    ],
                    'premium' => [
                        'name' => 'Premium',
                        'price' => 923,
                        'description' => 'For established businesses seeking excellence',
                        'features' => [
                            'Custom Enterprise-Level Design',
                            'Advanced SEO & Schema Markup',
                            'Full Content Management System',
                            'E-commerce Integration',
                            'Payment Gateway Setup',
                            'Multi-language Support',
                            'Live Chat Integration',
                            'Advanced Analytics & Reporting',
                            'Custom API Development',
                            'Third-party Integrations',
                            'Security Hardening',
                            'Performance Optimization',
                            'Email Marketing Integration',
                            '6 Months Priority Support',
                            'Unlimited Revisions',
                        ],
                    ],
                    'enterprise' => [
                        'name' => 'Enterprise',
                        'price' => 1538,
                        'description' => 'Complete solution for large organizations',
                        'features' => [
                            'Enterprise-Grade Architecture',
                            'Custom Feature Development',
                            'Full E-commerce Platform',
                            'Multi-vendor Marketplace',
                            'Advanced User Management',
                            'Custom API & Integrations',
                            'Headless CMS Option',
                            'Progressive Web App (PWA)',
                            'Advanced Security Features',
                            'CDN & Load Balancing',
                            'Auto-scaling Infrastructure',
                            'Dedicated Account Manager',
                            'Training & Documentation',
                            'SLA Agreement',
                            '12 Months Priority Support',
                            'Unlimited Revisions',
                        ],
                    ],
                ],
            ],

            'mobile-app-development' => [
                'name' => 'Mobile App Development',
                'category' => 'App Development',
                'description' => 'Native and cross-platform mobile application development for iOS and Android',
                'packages' => [
                    'basic' => [
                        'name' => 'Basic',
                        'price' => 1538,
                        'description' => 'Essential mobile app for startups',
                        'features' => [
                            'Cross-Platform (iOS & Android)',
                            'Up to 8 Screens',
                            'User Authentication',
                            'Push Notifications',
                            'Basic UI/UX Design',
                            'API Integration',
                            'App Store Submission',
                            'Google Play Submission',
                            '3 Months Support',
                            'Unlimited Revisions',
                        ],
                    ],
                    'standard' => [
                        'name' => 'Standard',
                        'price' => 2692,
                        'description' => 'Feature-rich mobile application',
                        'features' => [
                            'Cross-Platform Development',
                            'Up to 15 Screens',
                            'Advanced Authentication',
                            'In-App Purchases',
                            'Payment Gateway Integration',
                            'Custom UI/UX Design',
                            'Offline Mode Support',
                            'Social Media Integration',
                            'Analytics Dashboard',
                            'Backend Development',
                            '6 Months Support',
                            'Unlimited Revisions',
                        ],
                    ],
                    'premium' => [
                        'name' => 'Premium',
                        'price' => 4615,
                        'description' => 'Advanced mobile solution with complex features',
                        'features' => [
                            'Native iOS & Android Apps',
                            'Unlimited Screens',
                            'Advanced Features',
                            'Real-time Functionality',
                            'GPS & Location Services',
                            'Video/Audio Streaming',
                            'Custom Backend API',
                            'Admin Dashboard',
                            'Advanced Security',
                            'Cloud Integration',
                            '9 Months Support',
                            'Unlimited Revisions',
                        ],
                    ],
                    'enterprise' => [
                        'name' => 'Enterprise',
                        'price' => 7692,
                        'description' => 'Enterprise-grade mobile platform',
                        'features' => [
                            'Everything in Premium',
                            'Multi-platform Support',
                            'Advanced Analytics & AI',
                            'Custom Integrations',
                            'Scalable Architecture',
                            'DevOps & CI/CD Setup',
                            'Load Testing',
                            'Security Auditing',
                            'Dedicated Team',
                            'Priority Support 24/7',
                            '12 Months Support',
                            'Unlimited Revisions',
                        ],
                    ],
                ],
            ],

            'graphics-design' => [
                'name' => 'Graphics Design',
                'category' => 'Design Services',
                'description' => 'Professional graphic design services for logos, branding, and presentations',
                'packages' => [
                    'basic' => [
                        'name' => 'Logo Design',
                        'price' => 20,
                        'description' => 'Professional logo design for your brand',
                        'features' => [
                            '3 Logo Concepts',
                            '3 Revisions',
                            'Vector Files (AI, EPS)',
                            'PNG & JPG Formats',
                            'Color Variations',
                            'Basic Brand Guidelines',
                            '48-hour Delivery',
                            'Unlimited Revisions',
                        ],
                    ],
                    'standard' => [
                        'name' => 'Brand Identity',
                        'price' => 154,
                        'description' => 'Complete brand identity package',
                        'features' => [
                            'Logo Design (5 Concepts)',
                            'Business Card Design',
                            'Letterhead Design',
                            'Email Signature',
                            'Social Media Kit',
                            'Brand Guidelines Document',
                            'All File Formats',
                            '5-day Delivery',
                            'Unlimited Revisions',
                        ],
                    ],
                    'premium' => [
                        'name' => 'Company Profile',
                        'price' => 200,
                        'description' => 'Professional company profile or presentation',
                        'features' => [
                            'Professional Company Profile Design',
                            'Up to 20 Slides',
                            'Custom Slide Layouts',
                            'Infographics & Charts',
                            'Image Sourcing & Editing',
                            'Brand-aligned Design',
                            'Editable PowerPoint/PDF',
                            'Print-ready Files',
                            'Content Formatting',
                            'Unlimited Revisions',
                        ],
                    ],
                    'enterprise' => [
                        'name' => 'Complete Package',
                        'price' => 385,
                        'description' => 'All-inclusive design package',
                        'features' => [
                            'Full Brand Identity',
                            '20-slide Presentation',
                            'Marketing Materials',
                            'Social Media Templates',
                            'Poster Designs (3)',
                            'Brochure Design',
                            'All Source Files',
                            'Brand Guidelines',
                            'Priority Support',
                            'Unlimited Revisions',
                        ],
                    ],
                ],
            ],

            'poster-design' => [
                'name' => 'Poster Design',
                'category' => 'Design Services',
                'description' => 'Eye-catching poster designs for events, marketing, and promotions',
                'packages' => [
                    'basic' => [
                        'name' => 'Single Poster',
                        'price' => 23,
                        'description' => 'One custom poster design',
                        'features' => [
                            '1 Poster Design',
                            '2 Design Concepts',
                            'Print-ready Files',
                            'Digital Formats (PNG, PDF)',
                            'Unlimited Revisions',
                            '24-hour Delivery',
                        ],
                    ],
                    'standard' => [
                        'name' => 'Poster Set',
                        'price' => 62,
                        'description' => 'Multiple poster designs',
                        'features' => [
                            '3 Poster Designs',
                            'Consistent Theme',
                            'Various Sizes',
                            'Print & Digital Formats',
                            'High Resolution',
                            'Unlimited Revisions',
                            '3-day Delivery',
                        ],
                    ],
                    'premium' => [
                        'name' => 'Campaign Package',
                        'price' => 154,
                        'description' => 'Complete campaign poster package',
                        'features' => [
                            '5 Poster Designs',
                            'Social Media Versions',
                            'Multiple Size Formats',
                            'Custom Illustrations',
                            'Source Files Included',
                            'Unlimited Revisions',
                            '5-day Delivery',
                        ],
                    ],
                    'enterprise' => [
                        'name' => 'Enterprise Campaign',
                        'price' => 385,
                        'description' => 'Full marketing campaign design',
                        'features' => [
                            '10+ Poster Designs',
                            'Complete Campaign Theme',
                            'Print & Digital Assets',
                            'Banner Designs',
                            'Flyer Designs',
                            'Social Media Kit',
                            'All Source Files',
                            'Priority Support',
                            'Unlimited Revisions',
                        ],
                    ],
                ],
            ],

            'digital-transformation' => [
                'name' => 'Digital Transformation Consulting',
                'category' => 'Consulting Services',
                'description' => 'Strategic digital transformation consulting to modernize your business operations',
                'packages' => [
                    'basic' => [
                        'name' => 'Assessment',
                        'price' => 385,
                        'description' => 'Digital readiness assessment',
                        'features' => [
                            'Current State Analysis',
                            'Technology Audit',
                            'Gap Analysis',
                            'Recommendations Report',
                            'Roadmap Overview',
                            '2 Consultation Sessions',
                            'Executive Summary',
                        ],
                    ],
                    'standard' => [
                        'name' => 'Strategy & Planning',
                        'price' => 1154,
                        'description' => 'Comprehensive transformation strategy',
                        'features' => [
                            'Everything in Assessment',
                            'Detailed Transformation Roadmap',
                            'Technology Stack Recommendations',
                            'Process Optimization Plan',
                            'Change Management Strategy',
                            'Risk Assessment',
                            '5 Consultation Sessions',
                            '3-Month Support',
                        ],
                    ],
                    'premium' => [
                        'name' => 'Implementation',
                        'price' => 3077,
                        'description' => 'Guided implementation support',
                        'features' => [
                            'Everything in Strategy',
                            'Implementation Guidance',
                            'Vendor Evaluation',
                            'Team Training Programs',
                            'KPI Framework Setup',
                            'Progress Monitoring',
                            'Monthly Review Meetings',
                            '6-Month Support',
                        ],
                    ],
                    'enterprise' => [
                        'name' => 'End-to-End',
                        'price' => 7692,
                        'description' => 'Complete transformation partnership',
                        'features' => [
                            'Everything in Implementation',
                            'Full Project Management',
                            'Custom Solution Development',
                            'System Integration',
                            'Data Migration Support',
                            'Dedicated Transformation Team',
                            'Executive Reporting',
                            'Ongoing Optimization',
                            '12-Month Partnership',
                        ],
                    ],
                ],
            ],

            'cloud-migration' => [
                'name' => 'Cloud Migration Services',
                'category' => 'Cloud Services',
                'description' => 'Seamless migration of your infrastructure to cloud platforms (AWS, Azure, Google Cloud)',
                'packages' => [
                    'basic' => [
                        'name' => 'Basic Migration',
                        'price' => 769,
                        'description' => 'Simple application migration',
                        'features' => [
                            'Single Application Migration',
                            'Cloud Platform Setup',
                            'Basic Configuration',
                            'Data Transfer',
                            'Testing & Validation',
                            'Documentation',
                            '1-Month Post-Migration Support',
                        ],
                    ],
                    'standard' => [
                        'name' => 'Infrastructure Migration',
                        'price' => 2308,
                        'description' => 'Complete infrastructure migration',
                        'features' => [
                            'Multiple Applications',
                            'Infrastructure Assessment',
                            'Migration Strategy',
                            'Database Migration',
                            'Security Setup',
                            'Backup Configuration',
                            'Performance Optimization',
                            '3-Month Support',
                        ],
                    ],
                    'premium' => [
                        'name' => 'Enterprise Migration',
                        'price' => 4615,
                        'description' => 'Large-scale enterprise migration',
                        'features' => [
                            'Full Infrastructure Migration',
                            'Multi-cloud Strategy',
                            'Zero Downtime Migration',
                            'Advanced Security Setup',
                            'Disaster Recovery Plan',
                            'Cost Optimization',
                            'Compliance Setup',
                            'Training & Documentation',
                            '6-Month Support',
                        ],
                    ],
                    'enterprise' => [
                        'name' => 'Hybrid Cloud',
                        'price' => 9231,
                        'description' => 'Hybrid cloud architecture setup',
                        'features' => [
                            'Everything in Premium',
                            'Hybrid Cloud Architecture',
                            'Multi-region Deployment',
                            'Advanced Monitoring',
                            'Auto-scaling Setup',
                            'FinOps Implementation',
                            'Dedicated Migration Team',
                            '24/7 Support During Migration',
                            '12-Month Managed Support',
                        ],
                    ],
                ],
            ],

            'devops-cicd' => [
                'name' => 'DevOps & CI/CD Pipeline',
                'category' => 'DevOps Services',
                'description' => 'Automated deployment pipelines and DevOps infrastructure setup',
                'packages' => [
                    'basic' => [
                        'name' => 'Basic CI/CD',
                        'price' => 462,
                        'description' => 'Essential CI/CD pipeline setup',
                        'features' => [
                            'Git Workflow Setup',
                            'Basic CI/CD Pipeline',
                            'Automated Testing',
                            'Build Automation',
                            'Single Environment Deploy',
                            'Basic Monitoring',
                            'Documentation',
                            '1-Month Support',
                        ],
                    ],
                    'standard' => [
                        'name' => 'Advanced Pipeline',
                        'price' => 1154,
                        'description' => 'Full-featured CI/CD implementation',
                        'features' => [
                            'Multi-stage Pipeline',
                            'Automated Testing Suite',
                            'Code Quality Checks',
                            'Security Scanning',
                            'Multi-environment Deployment',
                            'Container Orchestration',
                            'Monitoring & Alerts',
                            'Team Training',
                            '3-Month Support',
                        ],
                    ],
                    'premium' => [
                        'name' => 'Enterprise DevOps',
                        'price' => 2692,
                        'description' => 'Complete DevOps transformation',
                        'features' => [
                            'Everything in Advanced',
                            'Infrastructure as Code',
                            'Blue-Green Deployments',
                            'Canary Releases',
                            'Advanced Monitoring Stack',
                            'Log Aggregation',
                            'Secret Management',
                            'Compliance Automation',
                            '6-Month Support',
                        ],
                    ],
                    'enterprise' => [
                        'name' => 'Full DevOps Platform',
                        'price' => 5385,
                        'description' => 'Enterprise DevOps platform',
                        'features' => [
                            'Everything in Premium',
                            'GitOps Workflow',
                            'Multi-cloud Pipeline',
                            'Advanced Security Pipeline',
                            'Disaster Recovery Automation',
                            'Performance Testing',
                            'Custom Integrations',
                            'Dedicated DevOps Engineer',
                            '24/7 Support',
                            '12-Month Partnership',
                        ],
                    ],
                ],
            ],

            'web-hosting' => [
                'name' => 'Web Hosting Services',
                'category' => 'Hosting Services',
                'description' => 'Reliable and secure web hosting with 99.9% uptime guarantee',
                'packages' => [
                    'basic' => [
                        'name' => 'Starter',
                        'price' => 10,
                        'description' => 'Perfect for single page applications and small websites',
                        'features' => [
                            'Ideal for Single Page Apps',
                            'SSD Storage',
                            'Free SSL Certificate',
                            '1 Website Hosted',
                            '5 Email Accounts',
                            'Daily Backups',
                            '99.9% Uptime Guarantee',
                            'Basic Security Features',
                            'Control Panel Access',
                            'Email Support',
                            'Monthly Billing',
                        ],
                    ],
                    'standard' => [
                        'name' => 'Business',
                        'price' => 30,
                        'description' => 'For growing businesses with multiple sites',
                        'features' => [
                            'Multi-Page Websites',
                            'Premium SSD Storage',
                            'Free SSL Certificates',
                            'Up to 5 Websites',
                            '25 Email Accounts',
                            'Daily Backups',
                            '99.9% Uptime Guarantee',
                            'Advanced Security (Firewall)',
                            'CDN Integration',
                            'Priority Email Support',
                            'Free Domain (1 year)',
                        ],
                    ],
                    'premium' => [
                        'name' => 'E-commerce',
                        'price' => 80,
                        'description' => 'Optimized for e-commerce and high-traffic sites',
                        'features' => [
                            'E-commerce Optimized',
                            'High-Performance SSD Storage',
                            'Free SSL Certificates',
                            'Unlimited Websites',
                            'Unlimited Email Accounts',
                            'Hourly Backups',
                            '99.95% Uptime Guarantee',
                            'Advanced DDoS Protection',
                            'Premium CDN',
                            'Staging Environment',
                            'Dedicated IP Address',
                            '24/7 Priority Support',
                            'Performance Optimization',
                        ],
                    ],
                    'enterprise' => [
                        'name' => 'Enterprise',
                        'price' => 200,
                        'description' => 'Enterprise-grade hosting with dedicated resources',
                        'features' => [
                            'Dedicated Server Resources',
                            'Enterprise SSD Storage',
                            'Free SSL Certificates',
                            'Unlimited Websites',
                            'Unlimited Email Accounts',
                            'Real-time Backups',
                            '99.99% Uptime SLA',
                            'Enterprise Security Suite',
                            'Multi-Region CDN',
                            'Auto-scaling',
                            'Load Balancing',
                            'Multiple Staging Environments',
                            'Dedicated Account Manager',
                            '24/7 Phone & Chat Support',
                            'Custom Server Configuration',
                        ],
                    ],
                ],
            ],
        ];

        if (empty($servicesConfig)) {
            \Laravel\Prompts\warning('No services found in seeder data.');
            return;
        }

        // Extract unique categories
        $categoriesData = [];
        foreach ($servicesConfig as $serviceConfig) {
            $categoryName = $serviceConfig['category'];
            if (!isset($categoriesData[$categoryName])) {
                $categoriesData[$categoryName] = [
                    'name' => $categoryName,
                    'slug' => Str::slug($categoryName),
                    'order' => count($categoriesData),
                ];
            }
        }

        // Create categories
        $categories = [];
        foreach ($categoriesData as $categoryData) {
            $categories[$categoryData['name']] = ServiceCategory::updateOrCreate(
                ['slug' => $categoryData['slug']],
                $categoryData
            );
        }

        \Laravel\Prompts\info('✅ Created ' . count($categories) . ' service categories');

        // Create services with package tiers as options
        $servicesCreated = 0;
        foreach ($servicesConfig as $serviceKey => $serviceConfig) {
            $category = $categories[$serviceConfig['category']];

            // Create the service
            $service = Service::updateOrCreate(
                ['slug' => Str::slug($serviceKey)],
                [
                    'service_category_id' => $category->id,
                    'name' => $serviceConfig['name'],
                    'description' => $serviceConfig['description'],
                    'base_price' => $serviceConfig['packages']['basic']['price'] ?? 0,
                    'pricing_model' => 'package',
                    'order' => $servicesCreated,
                    'is_active' => true,
                    'features' => $serviceConfig['packages']['basic']['features'] ?? [],
                ]
            );

            // Create "Package Tier" option for this service
            $packageOption = ServiceOption::updateOrCreate(
                [
                    'service_id' => $service->id,
                    'name' => 'Package Tier'
                ],
                [
                    'type' => 'select',
                    'description' => 'Choose your package level',
                    'is_required' => true,
                    'order' => 0,
                ]
            );

            // Create package tier values (Basic, Standard, Premium, Enterprise)
            $tierOrder = 0;
            foreach ($serviceConfig['packages'] as $tierKey => $tierData) {
                ServiceOptionValue::updateOrCreate(
                    [
                        'service_option_id' => $packageOption->id,
                        'value' => $tierKey
                    ],
                    [
                        'label' => $tierData['name'] ?? ucfirst($tierKey),
                        'description' => $tierData['description'] ?? '',
                        'features' => $tierData['features'] ?? [],
                        'price_modifier' => $tierData['price'] ?? 0,
                        'modifier_type' => 'fixed', // Fixed price for each tier
                        'order' => $tierOrder,
                        'is_default' => $tierKey === 'basic',
                    ]
                );
                $tierOrder++;
            }

            $servicesCreated++;
        }

        \Laravel\Prompts\info('✅ Created ' . $servicesCreated . ' services with package tiers');
        \Laravel\Prompts\info('🎉 Services seeded to database successfully!');
    }
}
