'use client';

import type { AppProps } from 'next/app';
import { Geist, Geist_Mono } from "next/font/google";
import { MeshProvider } from '@meshsdk/react';

import "../styles/globals.css";
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <main className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <ThemeProvider>
                    <MeshProvider>
                        <Component {...pageProps} />
                    </MeshProvider>
                </ThemeProvider>
            </main>
        </>
    );
} 