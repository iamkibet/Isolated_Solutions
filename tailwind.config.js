import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                cardul: "rgba(20, 21, 27, 0.98)",
            },
            screens: {
                xl: "1500px",
                "2xl": "1600px",
                "3xl": "1800px",
            },
        },
    },

    plugins: [forms],
    darkMode: "class",
};
