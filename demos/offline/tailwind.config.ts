import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class', // Enable class-based dark mode toggling
    theme: {
        extend: {
            colors: {
                // Brand colors
                primary: {
                    50: '#fdf2f8',
                    100: '#fce7f3',
                    200: '#fbcfe8',
                    300: '#f9a8d4',
                    400: '#f472b6',
                    500: '#ec4899',
                    600: '#db2777',
                    700: '#be185d',
                    800: '#9d174d',
                    900: '#831843',
                    950: '#500724',
                },
                secondary: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                    950: '#082f49',
                },
                // UI colors
                gray: {
                    50: '#f9fafb',
                    100: '#f3f4f6',
                    200: '#e5e7eb',
                    300: '#d1d5db',
                    400: '#9ca3af',
                    500: '#6b7280',
                    600: '#4b5563',
                    700: '#374151',
                    800: '#1f2937',
                    900: '#111827',
                    950: '#030712',
                },
                container: {
                    light: '#ffffff',
                    dark: '#121212',
                },
                // Semantic colors
                background: {
                    light: '#ffffff',
                    dark: '#121212',
                },
                text: {
                    primary: {
                        light: '#111827',
                        dark: '#ffffff',
                    },
                    secondary: {
                        light: '#4b5563',
                        dark: '#9ca3af',
                    },
                },
                border: {
                    light: '#e5e7eb',
                    dark: '#333333',
                },
                // Status colors
                status: {
                    success: {
                        light: '#10b981',
                        dark: '#059669',
                    },
                    error: {
                        light: '#ef4444',
                        dark: '#dc2626',
                    },
                    warning: {
                        light: '#f59e0b',
                        dark: '#d97706',
                    },
                    info: {
                        light: '#3b82f6',
                        dark: '#2563eb',
                    },
                },
                // Component specific colors
                button: {
                    primary: {
                        light: '#3b82f6',
                        dark: '#2563eb',
                    },
                    secondary: {
                        light: '#6b7280',
                        dark: '#4b5563',
                    },
                },
                input: {
                    background: {
                        light: '#ffffff',
                        dark: '#1f2937',
                    },
                    border: {
                        light: '#d1d5db',
                        dark: '#374151',
                    },
                },
            },
        },
    },
    plugins: [],
};

export default config; 