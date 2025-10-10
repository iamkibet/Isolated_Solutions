import React from 'react';
import { TrendingUp, Users, ArrowRight, MessageCircle, Send } from 'lucide-react';

const GrowBusiness = () => {
    return ( 
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 md:py-20">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
                    {/* Grow Your Business */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                <TrendingUp className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                    Grow Your Business
                                </h2>
                                <p className="text-gray-300 text-sm md:text-base">
                                    Elevate your business with our digital solutions
                                </p>
                            </div>
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
                            Transform your business with cutting-edge technology. We help you build scalable solutions that drive growth and enhance customer engagement.
                        </p>
                        
                        <a 
                            href="https://api.whatsapp.com/send?phone=254720449012"
                            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl group"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Request Free Consultation
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    {/* Career Seekers */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Users className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                    Join Our Team
                                </h2>
                                <p className="text-gray-300 text-sm md:text-base">
                                    Be our growth partner
                                </p>
                            </div>
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
                            Looking for talented individuals passionate about technology and innovation. Join our team and work on exciting projects that make a difference.
                        </p>
                        
                        <a 
                            href="mailto:careers@isolatedsolutions.com"
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl group"
                        >
                            <Send className="w-5 h-5" />
                            Share Your Profile
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default GrowBusiness;