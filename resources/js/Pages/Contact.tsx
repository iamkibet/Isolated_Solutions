import React, { useState, useEffect, useRef } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import ContactBottom from "@/Components/Contact/ContactBottom";

import ContactForm from "@/Components/Contact/ContactForm";

const Contact = () => {
    return (
        <GuestLayout>
            <div className="container mx-auto p-3">
                <ContactForm />
                <ContactBottom />
            </div>
        </GuestLayout>
    );
};

export default Contact;
