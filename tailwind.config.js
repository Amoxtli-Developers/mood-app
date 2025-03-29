// tailwind.config.js
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#FA1F6F",
                dark: "#1a1a1a",
                white: "#fbfbfb",
            },
        },
    },
    plugins: [],
};
