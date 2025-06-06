/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            sm: '640px', // ≥640px
            md: '768px', // ≥768px
            lg: '1024px', // ≥1024px
            xl: '1280px', // ≥1280px
            '2xl': '1536px' // ≥1536px
        },
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",

                brand: {
                    primary: "#2563eb",
                    secondary: "#9333ea",
                    accent: "#f59e0b",
                },

                primary: {
                    50: "#eff6ff",
                    100: "#dbeafe",
                    200: "#bfdbfe",
                    300: "#93c5fd",
                    400: "#60a5fa",
                    500: "#3b82f6",
                    600: "#2563eb",
                    700: "#1d4ed8",
                    800: "#1e40af",
                    900: "#1e3a8a",
                },

                secondary: {
                    50: "#faf5ff",
                    100: "#f3e8ff",
                    200: "#e9d5ff",
                    300: "#d8b4fe",
                    400: "#c084fc",
                    500: "#a855f7",
                    600: "#9333ea",
                    700: "#7c3aed",
                    800: "#6b21a8",
                    900: "#581c87",
                },

                accent: {
                    50: "#fffbeb",
                    100: "#fef3c7",
                    200: "#fde68a",
                    300: "#fcd34d",
                    400: "#fbbf24",
                    500: "#f59e0b",
                    600: "#d97706",
                    700: "#b45309",
                    800: "#92400e",
                    900: "#78350f",
                },

                success: {
                    50: "#f0fdf4",
                    100: "#dcfce7",
                    200: "#bbf7d0",
                    300: "#86efac",
                    400: "#4ade80",
                    500: "#22c55e",
                    600: "#16a34a",
                    700: "#15803d",
                    800: "#166534",
                    900: "#14532d",
                },

                warning: {
                    50: "#fff7ed",
                    100: "#ffedd5",
                    200: "#fed7aa",
                    300: "#fdba74",
                    400: "#fb923c",
                    500: "#f97316",
                    600: "#ea580c",
                    700: "#c2410c",
                    800: "#9a3412",
                    900: "#7c2d12",
                },

                error: {
                    50: "#fef2f2",
                    100: "#fee2e2",
                    200: "#fecaca",
                    300: "#fca5a5",
                    400: "#f87171",
                    500: "#ef4444",
                    600: "#dc2626",
                    700: "#b91c1c",
                    800: "#991b1b",
                    900: "#7f1d1d",
                },
            },

            fontFamily: {
                sans: ["var(--font-geist-sans)", "Arial", "sans-serif"],
                mono: ["var(--font-geist-mono)", "monospace"],
                heading: ["var(--font-geist-sans)", "Arial", "sans-serif"],
            },

            fontSize: {
                h1: ["3.75rem", { lineHeight: "1.1", fontWeight: "700", letterSpacing: "-0.025em" }],
                h2: ["3rem", { lineHeight: "1.2", fontWeight: "600", letterSpacing: "-0.025em" }],
                h3: ["2.25rem", { lineHeight: "1.3", fontWeight: "500", letterSpacing: "-0.025em" }],
                h4: ["1.875rem", { lineHeight: "1.4", fontWeight: "500" }],
                h5: ["1.5rem", { lineHeight: "1.5", fontWeight: "500" }],
                h6: ["1.25rem", { lineHeight: "1.6", fontWeight: "500" }],
            },

            spacing: {
                128: "32rem",
                144: "36rem",
            },

            borderRadius: {
                button: "0.5rem",
                card: "1rem",
            },

            boxShadow: {
                button: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                "button-hover": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                card: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            },

            transitionDuration: {
                400: "400ms",
            },
        },
    },

    plugins: [
        function({ addComponents, theme }) {
            addComponents({
                /* Headings */
                ".h1": {
                    fontSize: theme("fontSize.h1[0]"),
                    lineHeight: theme("fontSize.h1[1].lineHeight"),
                    fontWeight: theme("fontSize.h1[1].fontWeight"),
                    letterSpacing: theme("fontSize.h1[1].letterSpacing"),
                    fontFamily: theme("fontFamily.heading"),
                },
                ".h2": {
                    fontSize: theme("fontSize.h2[0]"),
                    lineHeight: theme("fontSize.h2[1].lineHeight"),
                    fontWeight: theme("fontSize.h2[1].fontWeight"),
                    letterSpacing: theme("fontSize.h2[1].letterSpacing"),
                    fontFamily: theme("fontFamily.heading"),
                },
                ".h3": {
                    fontSize: theme("fontSize.h3[0]"),
                    lineHeight: theme("fontSize.h3[1].lineHeight"),
                    fontWeight: theme("fontSize.h3[1].fontWeight"),
                    letterSpacing: theme("fontSize.h3[1].letterSpacing"),
                    fontFamily: theme("fontFamily.heading"),
                },
                ".h4": {
                    fontSize: theme("fontSize.h4[0]"),
                    lineHeight: theme("fontSize.h4[1].lineHeight"),
                    fontWeight: theme("fontSize.h4[1].fontWeight"),
                    fontFamily: theme("fontFamily.heading"),
                },
                ".h5": {
                    fontSize: theme("fontSize.h5[0]"),
                    lineHeight: theme("fontSize.h5[1].lineHeight"),
                    fontWeight: theme("fontSize.h5[1].fontWeight"),
                    fontFamily: theme("fontFamily.heading"),
                },
                ".h6": {
                    fontSize: theme("fontSize.h6[0]"),
                    lineHeight: theme("fontSize.h6[1].lineHeight"),
                    fontWeight: theme("fontSize.h6[1].fontWeight"),
                    fontFamily: theme("fontFamily.heading"),
                },

                /* Button Sizes */
                ".btn-xs": {
                    padding: "0.375rem 0.75rem",
                    fontSize: "0.75rem",
                    borderRadius: theme("borderRadius.button"),
                    fontWeight: "500",
                    transition: "all 0.2s ease",
                },
                ".btn-sm": {
                    padding: "0.5rem 1rem",
                    fontSize: "0.875rem",
                    borderRadius: theme("borderRadius.button"),
                    fontWeight: "500",
                    transition: "all 0.2s ease",
                },
                ".btn-md": {
                    padding: "0.75rem 1.5rem",
                    fontSize: "1rem",
                    borderRadius: theme("borderRadius.button"),
                    fontWeight: "500",
                    transition: "all 0.2s ease",
                },
                ".btn-lg": {
                    padding: "1rem 2rem",
                    fontSize: "1.125rem",
                    borderRadius: theme("borderRadius.button"),
                    fontWeight: "500",
                    transition: "all 0.2s ease",
                },
                ".btn-xl": {
                    padding: "1.25rem 2.5rem",
                    fontSize: "1.25rem",
                    borderRadius: theme("borderRadius.button"),
                    fontWeight: "500",
                    transition: "all 0.2s ease",
                },

                /* Link Styles */
                ".link-primary": {
                    color: theme("colors.primary.600"),
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                    "&:hover": {
                        color: theme("colors.primary.700"),
                    },
                    "&:focus": {
                        outline: "2px solid",
                        outlineColor: theme("colors.primary.500"),
                        outlineOffset: "2px",
                    },
                },
                ".link-secondary": {
                    color: theme("colors.secondary.600"),
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                    "&:hover": {
                        color: theme("colors.secondary.700"),
                    },
                    "&:focus": {
                        outline: "2px solid",
                        outlineColor: theme("colors.secondary.500"),
                        outlineOffset: "2px",
                    },
                },
                ".link-underline": {
                    textDecoration: "underline",
                    textDecorationColor: theme("colors.primary.300"),
                    textUnderlineOffset: "3px",
                    transition: "text-decoration-color 0.2s ease",
                    "&:hover": {
                        textDecorationColor: theme("colors.primary.600"),
                    },
                },

                /* Button Base Styles */
                ".btn": {
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "none",
                    cursor: "pointer",
                    userSelect: "none",
                    outline: "none",
                    "&:focus": {
                        outline: "2px solid",
                        outlineOffset: "2px",
                    },
                    "&:disabled": {
                        opacity: "0.5",
                        cursor: "not-allowed",
                    },
                },

                /* Button Variants */
                ".btn-primary": {
                    backgroundColor: theme("colors.primary.600"),
                    color: theme("colors.white"),
                    boxShadow: theme("boxShadow.button"),
                    "&:hover:not(:disabled)": {
                        backgroundColor: theme("colors.primary.700"),
                        boxShadow: theme("boxShadow.button-hover"),
                    },
                    "&:focus": {
                        outlineColor: theme("colors.primary.500"),
                    },
                },
                ".btn-secondary": {
                    backgroundColor: theme("colors.secondary.600"),
                    color: theme("colors.white"),
                    boxShadow: theme("boxShadow.button"),
                    "&:hover:not(:disabled)": {
                        backgroundColor: theme("colors.secondary.700"),
                        boxShadow: theme("boxShadow.button-hover"),
                    },
                    "&:focus": {
                        outlineColor: theme("colors.secondary.500"),
                    },
                },
                ".btn-outline": {
                    backgroundColor: "transparent",
                    color: theme("colors.primary.600"),
                    border: `2px solid ${theme("colors.primary.600")}`,
                    "&:hover:not(:disabled)": {
                        backgroundColor: theme("colors.primary.600"),
                        color: theme("colors.white"),
                    },
                    "&:focus": {
                        outlineColor: theme("colors.primary.500"),
                    },
                },
            });
        },
    ],
};