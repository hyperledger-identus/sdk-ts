'use client';

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* This script will be executed before the page renders to avoid flash */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        (function() {
                            // Check localStorage first
                            const storedTheme = localStorage.getItem('theme');
                            if (storedTheme === 'dark') {
                                document.documentElement.classList.add('dark');
                                return;
                            } else if (storedTheme === 'light') {
                                return;
                            }
                            
                            // If no stored preference, check system preference
                            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                                document.documentElement.classList.add('dark');
                            }
                        })();
                        `
                    }}
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
} 