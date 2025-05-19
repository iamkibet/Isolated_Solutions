import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import MaxWidthWrapper from "../../../ui/MaxWidthWrapper";

export default function ServicesIndex() {
    return (
        <>
            <Head title="Our Services" />
            <Navbar>
                <MaxWidthWrapper>
                    <div className="py-16">
                        <h1 className="text-4xl font-bold text-gray-900 mb-8">
                            Our Services
                        </h1>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Web Development */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                    Web Development
                                </h2>
                                <p className="text-gray-600 mb-4">
                                    Custom web solutions tailored to your
                                    business needs.
                                </p>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Website Development</li>
                                    <li>• Web Application Development</li>
                                    <li>• Website Design</li>
                                    <li>• Website Maintenance</li>
                                </ul>
                            </div>

                            {/* eCommerce */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                    eCommerce
                                </h2>
                                <p className="text-gray-600 mb-4">
                                    Powerful eCommerce solutions for your online
                                    business.
                                </p>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• eCommerce Web App</li>
                                    <li>• eCommerce Mobile App</li>
                                </ul>
                            </div>

                            {/* App Development */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                    App Development
                                </h2>
                                <p className="text-gray-600 mb-4">
                                    Native and cross-platform mobile
                                    applications.
                                </p>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Mobile App Development</li>
                                    <li>• Web App Development</li>
                                    <li>• App Maintenance</li>
                                </ul>
                            </div>

                            {/* Consulting */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                    Consulting
                                </h2>
                                <p className="text-gray-600 mb-4">
                                    Expert guidance for your digital
                                    transformation.
                                </p>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Digital Transformation</li>
                                    <li>• App Consulting</li>
                                    <li>• Cloud Migration</li>
                                    <li>• Web Hosting</li>
                                </ul>
                            </div>

                            {/* Software Testing */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                    Software Testing
                                </h2>
                                <p className="text-gray-600 mb-4">
                                    Comprehensive testing solutions for quality
                                    assurance.
                                </p>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Automated Testing</li>
                                    <li>• Manual Testing</li>
                                    <li>• Performance Testing</li>
                                </ul>
                            </div>

                            {/* DevOps */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                    DevOps
                                </h2>
                                <p className="text-gray-600 mb-4">
                                    Streamline your development and operations.
                                </p>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• CI/CD Pipeline</li>
                                    <li>• Infrastructure as Code</li>
                                    <li>• Containerization</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </Navbar>
        </>
    );
}
