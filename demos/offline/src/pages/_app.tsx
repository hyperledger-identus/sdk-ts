'use client';

import type { AppProps } from 'next/app';
import { Geist, Geist_Mono } from "next/font/google";
import { MeshProvider } from '@meshsdk/react';
import { RIDBDatabase } from '@trust0/ridb-react';

import "../styles/globals.css";
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { AgentProvider } from '@/components/providers/Agent';
import { schemas } from '@/utils/db/schemas';
import { DatabaseProvider } from '@/components/providers/Database';

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
                        <RIDBDatabase schemas={schemas}>
                            <DatabaseProvider>
                                <AgentProvider>
                                    <Component {...pageProps} />
                                </AgentProvider>
                            </DatabaseProvider>
                        </RIDBDatabase>
                    </MeshProvider>
                </ThemeProvider>
            </main>
        </>
    );
} 