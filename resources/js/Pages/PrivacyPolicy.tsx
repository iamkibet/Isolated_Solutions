import React from "react";
import MaxWidthWrapper from "../ui/MaxWidthWrapper";

const PrivacyPolicy = () => {
    return (
        <div className="py-12 bg-gray-50">
            <MaxWidthWrapper>
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">
                        Privacy Policy
                    </h1>

                    <div className="prose prose-lg">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                1. Information We Collect
                            </h2>
                            <p className="text-gray-600 mb-4">
                                We collect information that you provide directly
                                to us, including when you create an account,
                                subscribe to our newsletter, or contact us for
                                support. This may include your name, email
                                address, and any other information you choose to
                                provide.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                2. How We Use Your Information
                            </h2>
                            <p className="text-gray-600 mb-4">
                                We use the information we collect to provide,
                                maintain, and improve our services, to
                                communicate with you, and to comply with legal
                                obligations. This includes sending you
                                newsletters, responding to your requests, and
                                analyzing how you use our website.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                3. Information Sharing
                            </h2>
                            <p className="text-gray-600 mb-4">
                                We do not share your personal information with
                                third parties except as described in this
                                privacy policy. We may share your information
                                with service providers who assist us in
                                operating our website and conducting our
                                business.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                4. Data Security
                            </h2>
                            <p className="text-gray-600 mb-4">
                                We implement appropriate technical and
                                organizational measures to protect your personal
                                information against unauthorized or unlawful
                                processing, accidental loss, destruction, or
                                damage.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                5. Your Rights
                            </h2>
                            <p className="text-gray-600 mb-4">
                                You have the right to access, correct, or delete
                                your personal information. You can also object
                                to the processing of your personal information
                                or request that we restrict the processing of
                                your personal information.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                6. Cookies
                            </h2>
                            <p className="text-gray-600 mb-4">
                                We use cookies and similar tracking technologies
                                to track activity on our website and hold
                                certain information. You can instruct your
                                browser to refuse all cookies or to indicate
                                when a cookie is being sent.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                7. Changes to This Policy
                            </h2>
                            <p className="text-gray-600 mb-4">
                                We may update this privacy policy from time to
                                time. We will notify you of any changes by
                                posting the new privacy policy on this page and
                                updating the "Last Updated" date.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                8. Contact Us
                            </h2>
                            <p className="text-gray-600 mb-4">
                                If you have any questions about this privacy
                                policy, please contact us at
                                support@isolatedsolutions.org.
                            </p>
                        </section>
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    );
};

export default PrivacyPolicy;
