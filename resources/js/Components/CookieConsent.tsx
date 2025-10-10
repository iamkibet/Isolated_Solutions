import React, { useState, useEffect } from 'react';
import { Cookie, X, Settings, Shield } from 'lucide-react';
import { Link } from '@inertiajs/react';

const CookieConsent = () => {
    const [showBanner, setShowBanner] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const [preferences, setPreferences] = useState({
        necessary: true, // Always true, can't be disabled
        analytics: false,
        marketing: false,
    });

    useEffect(() => {
        // Set client-side flag
        setIsClient(true);
        
        // Check if user has already accepted cookies
        const consent = localStorage.getItem('cookie_consent');
        if (!consent) {
            // Show banner after a small delay for better UX
            setTimeout(() => setShowBanner(true), 1000);
        } else {
            // Load saved preferences
            try {
                const savedPrefs = JSON.parse(consent);
                setPreferences(savedPrefs);
            } catch (e) {
                console.error('Error loading cookie preferences:', e);
                setTimeout(() => setShowBanner(true), 1000);
            }
        }
    }, []);

    const handleAcceptAll = () => {
        const allAccepted = {
            necessary: true,
            analytics: true,
            marketing: true,
        };
        setPreferences(allAccepted);
        localStorage.setItem('cookie_consent', JSON.stringify(allAccepted));
        localStorage.setItem('cookie_consent_date', new Date().toISOString());
        setShowBanner(false);
        setShowSettings(false);
    };

    const handleAcceptSelected = () => {
        localStorage.setItem('cookie_consent', JSON.stringify(preferences));
        localStorage.setItem('cookie_consent_date', new Date().toISOString());
        setShowBanner(false);
        setShowSettings(false);
    };

    const handleRejectAll = () => {
        const necessaryOnly = {
            necessary: true,
            analytics: false,
            marketing: false,
        };
        setPreferences(necessaryOnly);
        localStorage.setItem('cookie_consent', JSON.stringify(necessaryOnly));
        localStorage.setItem('cookie_consent_date', new Date().toISOString());
        setShowBanner(false);
        setShowSettings(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-slide-up">
            <div className="max-w-6xl mx-auto">
                {showSettings ? (
                    // Settings Panel
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 md:p-8">
                        <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                    <Settings className="w-6 h-6 text-orange-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                                        Cookie Preferences
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Customize your cookie settings
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowSettings(false)}
                                className="text-gray-400 hover:text-gray-600 p-2"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="space-y-4 mb-6">
                            {/* Necessary Cookies */}
                            <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <h4 className="font-semibold text-gray-900">
                                            Necessary Cookies
                                        </h4>
                                        <span className="bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded-full font-medium">
                                            Always Active
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        Essential for the website to function properly. Cannot be disabled.
                                    </p>
                                </div>
                                <div className="ml-4">
                                    <div className="w-12 h-6 bg-green-600 rounded-full cursor-not-allowed opacity-50" />
                                </div>
                            </div>

                            {/* Analytics Cookies */}
                            <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 mb-2">
                                        Analytics Cookies
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Help us understand how visitors interact with our website.
                                    </p>
                                </div>
                                <button
                                    onClick={() => setPreferences({ ...preferences, analytics: !preferences.analytics })}
                                    className="ml-4"
                                >
                                    <div className={`w-12 h-6 rounded-full transition-colors ${preferences.analytics ? 'bg-green-600' : 'bg-gray-300'}`}>
                                        <div className={`w-5 h-5 bg-white rounded-full transition-transform ${preferences.analytics ? 'translate-x-7' : 'translate-x-0.5'} mt-0.5`} />
                                    </div>
                                </button>
                            </div>

                            {/* Marketing Cookies */}
                            <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 mb-2">
                                        Marketing Cookies
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Used to deliver personalized advertisements.
                                    </p>
                                </div>
                                <button
                                    onClick={() => setPreferences({ ...preferences, marketing: !preferences.marketing })}
                                    className="ml-4"
                                >
                                    <div className={`w-12 h-6 rounded-full transition-colors ${preferences.marketing ? 'bg-green-600' : 'bg-gray-300'}`}>
                                        <div className={`w-5 h-5 bg-white rounded-full transition-transform ${preferences.marketing ? 'translate-x-7' : 'translate-x-0.5'} mt-0.5`} />
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 justify-end">
                            <button
                                onClick={handleRejectAll}
                                className="px-6 py-3 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-semibold transition-all"
                            >
                                Reject All
                            </button>
                            <button
                                onClick={handleAcceptSelected}
                                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-semibold transition-all"
                            >
                                Save Preferences
                            </button>
                            <button
                                onClick={handleAcceptAll}
                                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-all shadow-lg"
                            >
                                Accept All
                            </button>
                        </div>
                    </div>
                ) : (
                    // Simple Banner
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 md:p-8">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                            <div className="flex items-start gap-4 flex-1">
                                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Cookie className="w-6 h-6 text-orange-600" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                                        We Value Your Privacy
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                        We use cookies to enhance your browsing experience, provide personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.{" "}
                                        <Link href="/privacy-policy" className="text-red-600 hover:text-red-700 font-semibold underline">
                                            Learn more
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                                <button
                                    onClick={() => setShowSettings(true)}
                                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-semibold transition-all whitespace-nowrap"
                                >
                                    <Settings className="w-4 h-4 inline mr-2" />
                                    Customize
                                </button>
                                <button
                                    onClick={handleRejectAll}
                                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-semibold transition-all"
                                >
                                    Reject
                                </button>
                                <button
                                    onClick={handleAcceptAll}
                                    className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-all shadow-lg whitespace-nowrap"
                                >
                                    Accept All
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CookieConsent;

