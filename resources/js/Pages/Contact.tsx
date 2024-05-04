import React, { useState, useEffect, useRef } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import kenyaFlag from "../assets/images/kenya.png";
import BorderHover from "@/Components/Hover/BorderHover";
import Slider from "@/Components/Slider/Slider";
import ContactBottom from "@/Components/Contact/ContactBottom";
import Footer from "@/Components/Footer/Footer";
import ContactForm from "@/Components/Contact/ContactForm";

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
