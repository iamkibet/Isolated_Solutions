import React from "react";
import profilePic from "../../assets/images/Profilepic.jpg";
import BorderHover from "../Hover/BorderHover";
import kenyaFlag from "../../assets/images/kenya.png";

const ContactBottom = () => {
    return (
        <div className="border-t-2 border-gray-200 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Contact Details Section - Full Width */}
                <div className="bg-white rounded-xl shadow-sm p-6 mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Location Info */}
                        <div className="flex items-start space-x-4">
                            <div className="hidden lg:block flex-shrink-0">
                                <img
                                    src={kenyaFlag}
                                    alt="kenya"
                                    className="w-16 h-16 object-contain"
                                />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-4">
                                    Our Location
                                </h2>
                                <div className="space-y-3">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            Kenya
                                        </h3>
                                        <p className="text-gray-600">
                                            Eldoret (HQ)
                                        </p>
                                    </div>
                                    <p className="text-gray-600">
                                        <span className="font-medium">
                                            Address:
                                        </span>{" "}
                                        2004-30100
                                    </p>
                                    <p className="text-gray-600">
                                        <span className="font-medium">
                                            Inquiries:
                                        </span>{" "}
                                        <BorderHover>
                                            <a
                                                href="tel:+254720449012"
                                                className="text-[#02789e] hover:text-[#026a8a]"
                                            >
                                                +254 720 449 012
                                            </a>
                                        </BorderHover>
                                    </p>
                                    <p className="text-gray-600">
                                        <span className="font-medium">
                                            Support:
                                        </span>{" "}
                                        <BorderHover>
                                            <a
                                                href="tel:+254777449012"
                                                className="text-[#02789e] hover:text-[#026a8a]"
                                            >
                                                +254 777 449 012
                                            </a>
                                        </BorderHover>
                                    </p>
                                    <p className="text-gray-600">
                                        <span className="font-medium">
                                            Email:
                                        </span>{" "}
                                        <BorderHover>
                                            <a
                                                href="mailto:support@isolatedsolutions.com"
                                                className="text-[#02789e] hover:text-[#026a8a] break-all"
                                            >
                                                support@isolatedsolutions.com
                                            </a>
                                        </BorderHover>
                                    </p>
                                    <p className="text-gray-600">
                                        Daima Towers 5th Floor
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Person */}
                        <div className="flex items-start space-x-4">
                            <img
                                src={profilePic}
                                alt="Dennis Kibet"
                                className="hidden lg:block w-16 h-16 rounded-full object-cover flex-shrink-0"
                            />
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-4">
                                    Contact Person
                                </h2>
                                <div className="space-y-3">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            Dennis Kibet
                                        </h3>
                                        <p className="text-gray-600">
                                            Chief Technology Officer
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-3">
                                            <img
                                                src="https://www.sparxitsolutions.com/assets-style/images/mail-ios.svg"
                                                alt="Email"
                                                className="w-5 h-5 flex-shrink-0"
                                            />
                                            <BorderHover>
                                                <a
                                                    href="mailto:info@isolatedsolutions.com"
                                                    className="text-[#02789e] hover:text-[#026a8a] break-all"
                                                >
                                                    info@isolatedsolutions.org
                                                </a>
                                            </BorderHover>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <img
                                                src="https://www.sparxitsolutions.com/assets-style/images/whatsapp.svg"
                                                alt="WhatsApp"
                                                className="w-5 h-5 flex-shrink-0"
                                            />
                                            <BorderHover>
                                                <a
                                                    href="https://api.whatsapp.com/send?phone=254720449012"
                                                    className="text-[#02789e] hover:text-[#026a8a]"
                                                >
                                                    +254 720 449 012
                                                </a>
                                            </BorderHover>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <img
                                                src="https://www.sparxitsolutions.com/assets-style/images/skype.svg"
                                                alt="Skype"
                                                className="w-5 h-5 flex-shrink-0"
                                            />
                                            <BorderHover>
                                                <a
                                                    href="https://api.whatsapp.com/send?phone=254720449012"
                                                    className="text-[#02789e] hover:text-[#026a8a]"
                                                >
                                                    Dennis Kibet
                                                </a>
                                            </BorderHover>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <img
                                                src="https://www.sparxitsolutions.com/assets-style/images/linkedin-icon.svg"
                                                alt="LinkedIn"
                                                className="w-5 h-5 flex-shrink-0"
                                            />
                                            <BorderHover>
                                                <a
                                                    href="https://www.linkedin.com/in/denniskibet/"
                                                    className="text-[#02789e] hover:text-[#026a8a]"
                                                >
                                                    DennisKibet
                                                </a>
                                            </BorderHover>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Consultation */}
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">
                                Get in Touch
                            </h2>
                            <div className="space-y-4">
                                <p className="text-gray-600">
                                    Looking to bring your great product to life?
                                    But facing challenges and blockers along the
                                    way?
                                </p>
                                <button className="w-full px-6 py-3 bg-[#02789e] text-white rounded-lg font-medium hover:bg-[#026a8a] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#02789e] focus:ring-offset-2">
                                    Book a Free Consultation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Info Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">
                            What's The Project Plan?
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Let's have a quick chat about your plans, ideas, and
                            project requirements making it a job of seconds.
                        </p>
                        <BorderHover>
                            <a
                                href="https://api.whatsapp.com/send?phone=254720449012"
                                className="text-[#02789e] hover:text-[#026a8a] font-medium inline-flex items-center"
                            >
                                Click Here to LiveChat! →
                            </a>
                        </BorderHover>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">
                            Got Documents? Share With Us
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Share your NDA, BRD & all project-related details
                            through email. We will reach out to you at the
                            earliest.
                        </p>
                        <BorderHover>
                            <a
                                href="mailto:info@isolatedsolutions.com"
                                className="text-[#02789e] hover:text-[#026a8a] font-medium inline-flex items-center break-all"
                            >
                                info@isolatedsolutions.com →
                            </a>
                        </BorderHover>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">
                            We Are <span className="text-red-500">Not</span>{" "}
                            Hiring
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Become a part of our vision to delivering effective,
                            efficient & elegant solutions.
                        </p>
                        <BorderHover>
                            <a
                                href="https://api.whatsapp.com/send?phone=254720449012"
                                className="text-[#02789e] hover:text-[#026a8a] font-medium inline-flex items-center"
                            >
                                View Opportunities →
                            </a>
                        </BorderHover>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactBottom;
