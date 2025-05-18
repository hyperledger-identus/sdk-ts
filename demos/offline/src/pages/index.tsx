"use client";

import Head from "next/head";
import Image from "next/image";
import LOGO from "../../public/identus-navbar-light.png";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>Self-Sovereign Identity Agent | Powered by Hyperledger Identus</title>
                <meta name="description" content="Take control of your digital identity with our self-sovereign identity agent powered by Hyperledger Identus" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-white font-[family-name:var(--font-geist-sans)]">
                {/* Header */}
                <header className="w-full py-6 px-8 flex justify-between items-center border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center">
                            <Image src={LOGO} alt="Identus Logo" width={108} height={32} />
                        </div>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
                        <a href="#benefits" className="hover:text-blue-600 transition-colors">Benefits</a>
                        <a href="#use-cases" className="hover:text-blue-600 transition-colors">Use Cases</a>
                    </nav>
                    <button onClick={() => router.push("/app")} className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-2 transition-colors">
                        App
                    </button>
                </header >

                {/* Main content */}
                < main className="flex flex-col items-center px-8 py-16 gap-20" >
                    {/* Hero section */}
                    < section className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-12" >
                        <div className="flex-1 space-y-6">
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                                Take Control of Your Digital Identity
                            </h1>
                            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300">
                                Our selt custodial agent empowers you to own, issue, control, and securely share your digital credentials without relying on centralized authorities.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <button onClick={() => router.push("/app")} className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 font-medium transition-colors">
                                    App
                                </button>
                                <button className="border border-slate-300 dark:border-slate-600 hover:border-blue-600 dark:hover:border-blue-500 rounded-full px-6 py-3 font-medium transition-colors">
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 relative h-80 w-full">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center overflow-hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500 opacity-60 rounded-full blur-2xl"></div>
                                <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500 opacity-60 rounded-full blur-2xl"></div>
                            </div>
                        </div>
                    </section >

                    {/* Features section */}
                    < section id="features" className="w-full max-w-6xl py-10" >
                        <h2 className="text-3xl font-bold text-center mb-16">Powered by Hyperledger Identus</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Complete DID Operations</h3>
                                <p className="text-slate-600 dark:text-slate-300">
                                    Create and manage decentralized identifiers that give you full control of your digital identity across platforms.
                                </p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                                        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                                        <path d="m9 14 2 2 4-4" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Verifiable Credentials</h3>
                                <p className="text-slate-600 dark:text-slate-300">
                                    Store, manage, and share digital credentials that are cryptographically secure and tamper-proof.
                                </p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                        <polyline points="7 10 12 15 17 10" />
                                        <line x1="12" y1="15" x2="12" y2="3" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Mobile Wallet</h3>
                                <p className="text-slate-600 dark:text-slate-300">
                                    Access your identity and credentials on the go with our secure mobile wallet applications.
                                </p>
                            </div>
                        </div>
                    </section >

                    {/* Benefits section */}
                    < section id="benefits" className="w-full max-w-6xl py-10 bg-blue-50 dark:bg-slate-800/50 rounded-3xl p-10" >
                        <h2 className="text-3xl font-bold text-center mb-16">Benefits of Self-Sovereign Identity</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex-shrink-0 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                        <circle cx="12" cy="8" r="3" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Privacy Control</h3>
                                    <p className="text-slate-600 dark:text-slate-300">
                                        You decide what personal data to share, with whom, and for how long, minimizing data exposure.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex-shrink-0 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                                        <path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7H2Z" />
                                        <path d="M6 11V7" />
                                        <path d="M10 11V7" />
                                        <path d="M14 11V7" />
                                        <path d="M18 11V7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Selective Disclosure</h3>
                                    <p className="text-slate-600 dark:text-slate-300">
                                        Share only the specific information needed, such as proving you're over 18 without revealing your birth date.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex-shrink-0 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                        <path d="m9 12 2 2 4-4" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Security & Trust</h3>
                                    <p className="text-slate-600 dark:text-slate-300">
                                        Cryptographically secure credentials that can't be forged or tampered with, reducing fraud and enhancing trust.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex-shrink-0 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                                        <path d="M20 7h-9" />
                                        <path d="M14 17H5" />
                                        <circle cx="17" cy="17" r="3" />
                                        <circle cx="7" cy="7" r="3" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Portability</h3>
                                    <p className="text-slate-600 dark:text-slate-300">
                                        Your identity and credentials work anywhere, eliminating the need for multiple accounts and passwords.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section >

                    {/* Use Cases section */}
                    < section id="use-cases" className="w-full max-w-6xl py-10" >
                        <h2 className="text-3xl font-bold text-center mb-16">Real-World Applications</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Education</h3>
                                <p className="text-slate-600 dark:text-slate-300">
                                    Store academic credentials and share them with universities or employers without intermediaries.
                                </p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                                        <rect width="20" height="14" x="2" y="5" rx="2" />
                                        <line x1="2" x2="22" y1="10" y2="10" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Finance</h3>
                                <p className="text-slate-600 dark:text-slate-300">
                                    Streamline KYC processes and access financial services with verified identity credentials.
                                </p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Healthcare</h3>
                                <p className="text-slate-600 dark:text-slate-300">
                                    Control access to your medical records and share only relevant information with healthcare providers.
                                </p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                                        <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2" />
                                        <rect width="16" height="16" x="8" y="2" rx="2" />
                                        <path d="m22 11-4-4v8Z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Travel</h3>
                                <p className="text-slate-600 dark:text-slate-300">
                                    Simplify border crossings and hotel check-ins with secure and verifiable identity documents.
                                </p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                                        <path d="M9 17H7A5 5 0 0 1 7 7h2" />
                                        <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
                                        <line x1="8" x2="16" y1="12" y2="12" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Legal Services</h3>
                                <p className="text-slate-600 dark:text-slate-300">
                                    Digitally sign legal documents with cryptographic proof of identity and create tamper-proof records.
                                </p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                                        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Government Services</h3>
                                <p className="text-slate-600 dark:text-slate-300">
                                    Access government services with digital IDs while maintaining privacy and reducing bureaucracy.
                                </p>
                            </div>
                        </div>
                    </section >

                    {/* CTA Section */}
                    < section className="w-full max-w-6xl bg-blue-600 text-white rounded-2xl p-10 text-center" >
                        <h2 className="text-3xl font-bold mb-6">Ready to Take Control of Your Digital Identity?</h2>
                        <p className="text-xl mb-8 max-w-3xl mx-auto">
                            Join thousands of users who have already embraced self-sovereign identity and experience a new level of privacy, security, and convenience.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-6 py-3 font-medium transition-colors">
                                Download Wallet
                            </button>
                            <button className="border border-white hover:bg-blue-700 rounded-full px-6 py-3 font-medium transition-colors">
                                Learn More
                            </button>
                        </div>
                    </section >
                </main >

                {/* Footer */}
                < footer className="w-full py-8 px-8 border-t border-slate-200 dark:border-slate-700" >
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center gap-3 mb-6 md:mb-0">
                            <div className="flex items-center justify-center">
                                <Image src={LOGO} alt="Identus Logo" width={108} height={32} />
                            </div>
                        </div>
                        <div className="flex gap-8 mb-6 md:mb-0">
                            <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
                            <a href="#benefits" className="hover:text-blue-600 transition-colors">Benefits</a>
                            <a href="#use-cases" className="hover:text-blue-600 transition-colors">Use Cases</a>
                        </div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">
                            Powered by Hyperledger Identus
                        </div>
                    </div>
                </footer >
            </div >
        </>
    );
} 