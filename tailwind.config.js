const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    mode: "jit",
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                yellow: "#f9f4e7",
                green: "#7cc999",
            },
            boxShadow: {
                "offset-black": "4px 4px black",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};