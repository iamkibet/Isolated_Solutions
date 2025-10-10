import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import axios from "axios";
import { Mail, User, MessageSquare, Send, CheckCircle, AlertCircle } from "lucide-react";

const ContactForm = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);

        try {
            await axios.post(route("contact.store"), data);
            setSuccess(true);
            reset();
        } catch (err) {
            setError("Failed to send message. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-4xl">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                {/* Header Section */}
                <div className="bg-gradient-to-br from-red-600 to-red-700 px-6 md:px-12 py-10 md:py-12 text-white">
                    <div className="text-center space-y-3">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                            <Mail className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            Get In Touch
                        </h2>
                        <p className="text-red-50 text-base md:text-lg max-w-2xl mx-auto">
                            Have a question or want to work together? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                    </div>
                </div>

                {/* Form Section */}
                <div className="px-6 md:px-12 py-8 md:py-10">
                    {success ? (
                        <div className="text-center py-12 space-y-4">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                                <CheckCircle className="w-12 h-12 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Message Sent Successfully!</h3>
                            <p className="text-gray-600">
                                Thank you for contacting us. We'll get back to you within 24 hours.
                            </p>
                            <button
                                onClick={() => setSuccess(false)}
                                className="mt-4 inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold"
                            >
                                Send Another Message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {error && (
                                <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-lg p-4">
                                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                                    <p className="text-red-800 text-sm">{error}</p>
                                </div>
                            )}

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                        <User className="w-4 h-4 text-gray-500" />
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        onChange={(e) => setData("name", e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                        placeholder="John Doe"
                                        required
                                    />
                                    {errors.name && (
                                        <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                        <Mail className="w-4 h-4 text-gray-500" />
                                        Your Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        onChange={(e) => setData("email", e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                        placeholder="john@example.com"
                                        required
                                    />
                                    {errors.email && (
                                        <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                    <MessageSquare className="w-4 h-4 text-gray-500" />
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={data.subject}
                                    onChange={(e) => setData("subject", e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                    placeholder="How can we help you?"
                                    required
                                />
                                {errors.subject && (
                                    <p className="text-red-600 text-sm mt-1">{errors.subject}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                    <MessageSquare className="w-4 h-4 text-gray-500" />
                                    Your Message *
                                </label>
                                <textarea
                                    name="message"
                                    rows={6}
                                    value={data.message}
                                    onChange={(e) => setData("message", e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
                                    placeholder="Tell us more about your project or inquiry..."
                                    required
                                />
                                {errors.message && (
                                    <p className="text-red-600 text-sm mt-1">{errors.message}</p>
                                )}
                            </div>

                            <div className="flex justify-center pt-2">
                                <button
                                    type="submit"
                                    disabled={processing || submitting}
                                    className="w-full md:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {submitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
