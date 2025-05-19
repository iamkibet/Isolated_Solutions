import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import axios from "axios";

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
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
                Contact Us
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
                Got a technical issue? Want to send feedback about a beta
                feature? Need details about our Business plan? Let us know.
            </p>
            <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                    <InputLabel htmlFor="name" value="Your name" />
                    <TextInput
                        id="name"
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Your email" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="subject" value="Subject" />
                    <TextInput
                        id="subject"
                        type="text"
                        name="subject"
                        value={data.subject}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("subject", e.target.value)}
                        required
                    />
                    <InputError message={errors.subject} className="mt-2" />
                </div>

                <div className="sm:col-span-2">
                    <InputLabel htmlFor="message" value="Your message" />
                    <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={data.message}
                        onChange={(e) => setData("message", e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        required
                    ></textarea>
                    <InputError message={errors.message} className="mt-2" />
                </div>

                <button
                    type="submit"
                    disabled={processing || submitting}
                    className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#02789e] hover:bg-[#026a8a] focus:ring-4 focus:outline-none focus:ring-[#02789e] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    {submitting ? "Sending..." : "Send message"}
                </button>
            </form>
            {success && (
                <div className="mt-4 text-center text-green-500">
                    Message sent successfully!
                </div>
            )}
            {error && (
                <div className="mt-4 text-center text-red-500">{error}</div>
            )}
        </div>
    );
};

export default ContactForm;
