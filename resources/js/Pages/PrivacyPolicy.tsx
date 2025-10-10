import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import { Shield, Lock, Eye, UserCheck, Cookie, RefreshCw, Mail } from "lucide-react";
import MaxWidthWrapper from "../../ui/MaxWidthWrapper";

const PrivacyPolicy = () => {
    return (
        <GuestLayout>
            <Head title="Privacy Policy" />
            
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 md:py-20">
                <MaxWidthWrapper>
                    <div className="text-center px-4 space-y-4">
                        <div className="inline-flex items-center gap-2 bg-blue-600/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                            <Shield className="w-4 h-4" />
                            Legal Information
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                            Privacy Policy
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                            Your privacy matters to us. Learn how we collect, use, and protect your data.
                        </p>
                        <p className="text-sm text-gray-400">
                            Last Updated: October 10, 2025
                        </p>
                    </div>
                </MaxWidthWrapper>
            </div>
            
            <div className="py-12 md:py-16 bg-gray-50">
            <MaxWidthWrapper>
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
                    <div className="space-y-8">
                        <section className="pb-8 border-b border-gray-200">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Eye className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                        1. Information We Collect
                                    </h2>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4">
                                We collect information that you provide directly
                                to us, including when you create an account,
                                subscribe to our newsletter, or contact us for
                                support. This may include your name, email
                                address, and any other information you choose to
                                provide.
                            </p>
                        </section>

                        <section className="pb-8 border-b border-gray-200">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Lock className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                        2. How We Use Your Information
                                    </h2>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed ml-16">
                                We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations. This includes sending you newsletters, responding to your requests, and analyzing how you use our website.
                            </p>
                        </section>

                        <section className="pb-8 border-b border-gray-200">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <UserCheck className="w-6 h-6 text-purple-600" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                        3. Information Sharing
                                    </h2>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed ml-16">
                                We do not share your personal information with third parties except as described in this privacy policy. We may share your information with service providers who assist us in operating our website and conducting our business.
                            </p>
                        </section>

                        <section className="pb-8 border-b border-gray-200">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Shield className="w-6 h-6 text-red-600" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                        4. Data Security
                                    </h2>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed ml-16">
                                We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.
                            </p>
                        </section>

                        <section className="pb-8 border-b border-gray-200">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <UserCheck className="w-6 h-6 text-yellow-600" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                        5. Your Rights
                                    </h2>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed ml-16">
                                You have the right to access, correct, or delete your personal information. You can also object to the processing of your personal information or request that we restrict the processing of your personal information.
                            </p>
                        </section>

                        <section className="pb-8 border-b border-gray-200">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Cookie className="w-6 h-6 text-orange-600" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                        6. Cookies
                                    </h2>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed ml-16">
                                We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                            </p>
                        </section>

                        <section className="pb-8 border-b border-gray-200">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <RefreshCw className="w-6 h-6 text-indigo-600" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                        7. Changes to This Policy
                                    </h2>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed ml-16">
                                We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date.
                            </p>
                        </section>

                        <section>
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6 text-teal-600" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                        8. Contact Us
                                    </h2>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed ml-16">
                                If you have any questions about this privacy policy, please contact us at{" "}
                                <a href="mailto:support@isolatedsolutions.org" className="text-red-600 hover:text-red-700 font-semibold">
                                    support@isolatedsolutions.org
                                </a>
                            </p>
                        </section>
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
        </GuestLayout>
    );
};

export default PrivacyPolicy;
