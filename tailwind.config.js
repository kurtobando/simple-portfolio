module.exports = {
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false,
    theme: {
        screens: {
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
        },
        fontFamily: {
            sans: ["Poppins", "sans-serif"],
            serif: ["Poppins", "sans-serif"],
            mono: ["Roboto Mono", "sans-serif"],
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
