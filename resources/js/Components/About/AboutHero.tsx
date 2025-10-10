import React from "react";
import { Head } from "@inertiajs/react";
import { DollarSign, Users, Heart, Target, Award, TrendingUp } from "lucide-react";

const AboutHero = () => {
    const bgHero: React.CSSProperties = {
        backgroundImage:
            'url("https://www.sparxitsolutions.com/assets-style/images/csr.jpg")',
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    return (
        <section className="relative">
            <Head title="About Us" />
            <div className="min-h-[70vh] md:min-h-screen flex items-center" style={bgHero}>
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50"></div>
                <div className="container mx-auto px-6 lg:px-8 relative z-10 py-20">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 bg-red-600/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            <Award className="w-4 h-4" />
                            About Isolated Solutions
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 md:mb-8 leading-tight">
                            Delivering Quality Through Excellence & Innovation
                        </h1>
                        <p className="text-base md:text-xl lg:text-2xl text-gray-100 leading-relaxed max-w-3xl">
                            We combine cutting-edge technology with proven methodologies to deliver sophisticated solutions that drive business growth, even in challenging times.
                        </p>
                        <div className="flex flex-wrap gap-6 mt-10">
                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-lg px-5 py-3 border border-white/20">
                                <Target className="w-6 h-6 text-red-400" />
                                <div>
                                    <div className="text-2xl font-bold">10+</div>
                                    <div className="text-sm text-gray-200">Years Experience</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-lg px-5 py-3 border border-white/20">
                                <Users className="w-6 h-6 text-blue-400" />
                                <div>
                                    <div className="text-2xl font-bold">500+</div>
                                    <div className="text-sm text-gray-200">Projects Delivered</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-lg px-5 py-3 border border-white/20">
                                <TrendingUp className="w-6 h-6 text-green-400" />
                                <div>
                                    <div className="text-2xl font-bold">98%</div>
                                    <div className="text-sm text-gray-200">Client Satisfaction</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid md:grid-cols-3 gap-6 md:gap-8 -mt-24 md:-mt-32 relative z-20">
                    {[
                        {
                            icon: <DollarSign className="w-10 h-10" />,
                            color: "red",
                            title: "Startup Support",
                            content:
                                "We're committed to supporting startups and SMEs with accessible technology solutions. Our startup packages are designed to help new businesses establish a strong digital presence without breaking the bank.",
                        },
                        {
                            icon: <Users className="w-10 h-10" />,
                            color: "blue",
                            title: "Team Excellence",
                            content:
                                "Our team of experienced developers, designers, and consultants work collaboratively to ensure your project exceeds expectations. We invest in continuous learning and employee growth.",
                        },
                        {
                            icon: <Heart className="w-10 h-10" />,
                            color: "green",
                            title: "Client Success",
                            content:
                                "Your success is our priority. We provide comprehensive support, transparent communication, and ongoing maintenance to ensure your digital solutions continue to deliver value long after launch.",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 md:p-8 border border-gray-100 hover:border-gray-200"
                        >
                            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 transition-transform group-hover:scale-110 ${
                                item.color === 'red' ? 'bg-red-100 text-red-600' :
                                item.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                                'bg-green-100 text-green-600'
                            }`}>
                                {item.icon}
                            </div>
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                                {item.title}
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                {item.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
