module.exports = {
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false,
    theme: {
        fontFamily: {
            sans: ["Poppins", "sans-serif"],
            serif: ["Poppins", "sans-serif"],
            mono: ["Poppins", "sans-serif"],
            body: ["Poppins", "sans-serif"],
        },
        colors: {
            primary: "#209CEE",
            secondary: "#EE7220",
            tertiary: "#F7BD96",
            dark: "#252525",
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
