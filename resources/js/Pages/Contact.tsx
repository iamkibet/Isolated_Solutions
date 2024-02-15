import React, { useState, useEffect, useRef } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import kenyaFlag from "../assets/images/kenya.png";
import BorderHover from "@/Components/BorderHover";
import Slider from "@/Components/Slider";
import ContactBottom from "@/Components/ContactBottom";
import Footer from "@/Components/Footer";
import ContactForm from "@/Components/ContactForm";

const Contact = () => {
    return (
        <GuestLayout>
            <div className="container mx-auto p-3">
                <ContactForm />
                <ContactBottom />
                <Footer />
            </div>
        </GuestLayout>
    );
};

export default Contact;
