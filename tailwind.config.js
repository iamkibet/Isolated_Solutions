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
                sans: ["Poppins', 'Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                cardul: "rgba(20, 21, 27, 0.98)",
            },
        },
    },

    plugins: [forms],
    darkMode: 'class'
};
