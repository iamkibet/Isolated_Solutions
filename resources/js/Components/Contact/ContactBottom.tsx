import React from "react";
import profilePic from "../../assets/images/Profilepic.jpg";
import BorderHover from "../Hover/BorderHover";
import kenyaFlag from "../../assets/images/kenya.png";
import { MapPin, Phone, Mail, MessageCircle, Linkedin, Send, FileText, Users, ArrowRight } from "lucide-react";

const ContactBottom = () => {
    return (
        <div className="bg-gray-50 py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Contact Details Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                    {/* Location Info */}
                    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                                <MapPin className="w-6 h-6 text-red-600" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900">
                                Our Location
                            </h2>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <img
                                    src={kenyaFlag}
                                    alt="Kenya"
                                    className="w-8 h-8 object-contain mt-1"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        Kenya
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Eldoret (Headquarters)
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-3 pl-11">
                                <div className="flex items-start gap-2">
                                    <MapPin className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                                    <p className="text-gray-600 text-sm">
                                        Daima Towers, 5th Floor<br />
                                        P.O. Box 2004-30100
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                    <a
                                        href="tel:+254720449012"
                                        className="text-red-600 hover:text-red-700 font-medium text-sm"
                                    >
                                        +254 720 449 012
                                    </a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                    <a
                                        href="tel:+254777449012"
                                        className="text-red-600 hover:text-red-700 font-medium text-sm"
                                    >
                                        +254 777 449 012
                                    </a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                    <a
                                        href="mailto:support@isolatedsolutions.com"
                                        className="text-red-600 hover:text-red-700 font-medium text-sm break-all"
                                    >
                                        support@isolatedsolutions.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Person */}
                    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <Users className="w-6 h-6 text-blue-600" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900">
                                Contact Person
                            </h2>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <img
                                    src={profilePic}
                                    alt="Dennis Kibet"
                                    className="w-16 h-16 rounded-full object-cover ring-4 ring-gray-100"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        Dennis Kibet
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Chief Technology Officer
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                    <a
                                        href="mailto:info@isolatedsolutions.org"
                                        className="text-red-600 hover:text-red-700 font-medium text-sm break-all"
                                    >
                                        info@isolatedsolutions.org
                                    </a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MessageCircle className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                    <a
                                        href="https://api.whatsapp.com/send?phone=254720449012"
                                        className="text-red-600 hover:text-red-700 font-medium text-sm"
                                    >
                                        WhatsApp: +254 720 449 012
                                    </a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Linkedin className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                    <a
                                        href="https://www.linkedin.com/in/denniskibet/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-red-600 hover:text-red-700 font-medium text-sm"
                                    >
                                        DennisKibet
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Consultation */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                <MessageCircle className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-xl font-bold">
                                Free Consultation
                            </h2>
                        </div>
                        <div className="space-y-4">
                            <p className="text-gray-300 leading-relaxed">
                                Looking to bring your great product to life but facing challenges along the way? Let's discuss your project!
                            </p>
                            <a
                                href="https://api.whatsapp.com/send?phone=254720449012"
                                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Book Free Consultation
                            </a>
                        </div>
                    </div>
                </div>

                {/* Additional Info Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 md:p-8 border-t-4 border-red-600">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                                <MessageCircle className="w-5 h-5 text-red-600" />
                            </div>
                            <h2 className="text-lg md:text-xl font-bold text-gray-900">
                                Quick Chat
                            </h2>
                        </div>
                        <p className="text-gray-600 mb-5 leading-relaxed text-sm md:text-base">
                            Let's have a quick chat about your plans, ideas, and project requirements. Get instant responses!
                        </p>
                        <a
                            href="https://api.whatsapp.com/send?phone=254720449012"
                            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold group text-sm md:text-base"
                        >
                            Start Live Chat
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 md:p-8 border-t-4 border-blue-600">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <FileText className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="text-lg md:text-xl font-bold text-gray-900">
                                Share Documents
                            </h2>
                        </div>
                        <p className="text-gray-600 mb-5 leading-relaxed text-sm md:text-base">
                            Share your NDA, BRD & project-related details via email. We'll reach out at the earliest.
                        </p>
                        <a
                            href="mailto:info@isolatedsolutions.com"
                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group text-sm md:text-base break-all"
                        >
                            Send Email
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 md:p-8 border-t-4 border-green-600">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                <Users className="w-5 h-5 text-green-600" />
                            </div>
                            <h2 className="text-lg md:text-xl font-bold text-gray-900">
                                We Are <span className="text-red-600">Not</span> Hiring
                            </h2>
                        </div>
                        <p className="text-gray-600 mb-5 leading-relaxed text-sm md:text-base">
                            Be part of our vision to deliver effective, efficient & elegant solutions.
                        </p>
                        <a
                            href="https://api.whatsapp.com/send?phone=254720449012"
                            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold group text-sm md:text-base"
                        >
                            View Opportunities
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactBottom;
