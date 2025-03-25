'use client';

import type { AppProps } from 'next/app';
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

import { ThemeProvider } from '../components/ThemeProvider';
import { MeshProvider } from '@meshsdk/react';
import { DatabaseProvider } from '@/components/providers/Database';
import { AgentProvider } from '@/components/providers/Agent';

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
                        <DatabaseProvider>
                            <AgentProvider>
                                <Component {...pageProps} />
                            </AgentProvider>
                        </DatabaseProvider>
                    </MeshProvider>
                </ThemeProvider>
            </main>
        </>
    );
} 