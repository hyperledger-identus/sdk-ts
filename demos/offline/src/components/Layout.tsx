'use client';

import { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import AgentRequire from './AgentRequire';
import { PrismDIDSelect } from './PrismDIDSelect';
import { WalletSelect } from './WalletSelect';
import { AgentStart } from './AgentStart';
import { useAgent } from '@/hooks';
import SDK from "@hyperledger/identus-sdk";

interface LayoutProps {
    children: ReactNode;
    showDIDSelector?: boolean;
}

interface NavItem {
    path: string;
    label: string;
}

interface NavGroup {
    label: string;
    children: NavItem[];
}

type NavigationItem = NavItem | NavGroup;


export default function Layout({ children, showDIDSelector = false }: LayoutProps) {
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const [agentControlsOpen, setAgentControlsOpen] = useState(false);
    const { state, agent, messages } = useAgent();

    const [peerDID, setPeerDID] = useState<SDK.Domain.DID | null>(null);
    const [showCopyFeedback, setShowCopyFeedback] = useState(false);

    const navItems: NavigationItem[] = [
        { path: '/app', label: 'Home' },
        {
            label: 'Issuance',
            children: [
                { path: '/app/issuance-requests', label: 'Request' },
            ]
        },
        {
            label: 'Verification',
            children: [
                { path: '#', label: 'Requests' },
            ]
        },
        {
            label: 'Miscellaneous',
            children: [
                { path: '/app/dids', label: 'DIDs' },
                { path: '/app/keys', label: 'Keys' },
                { path: '/app/messages', label: 'Messages' },
                { path: '/app/connections', label: 'Connections' },
                { path: '/app/credentials', label: 'Credentials' },
            ]
        },
        {
            label: 'Settings',
            children: [
                { path: '/app/settings/blockfrost', label: 'Blockfrost' },
                { path: '/app/settings/prism', label: 'Prism Resolver' },

            ]
        }
    ];

    const toggleNotifications = () => {
        setNotificationsOpen(!notificationsOpen);
    };

    const unreadCount = messages.filter(({ read }) => !read).length;
    debugger;
    // Type guard to check if item is a NavGroup
    const isNavGroup = (item: NavigationItem): item is NavGroup => 'children' in item;

    useEffect(() => {
        if (state === SDK.Domain.Startable.State.RUNNING && agent) {
            agent.createNewPeerDID([], true).then(setPeerDID);
        }
    }, [state])

    return (
        <AgentRequire>
            <div className="flex flex-col h-screen bg-white dark:bg-gray-800">
                {/* Header */}
                <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
                    <div className=" px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center space-x-4"></div>
                        <div className="flex items-center space-x-6">

                            {/* Notifications */}
                            <div className="relative flex items-center group">
                                <div
                                    className="absolute top-10 right-0 mt-1 w-80 bg-white dark:bg-gray-800 rounded-md shadow-lg z-20 border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 md:block hidden"
                                >
                                    <div className="py-2">
                                        <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                                            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200">Notifications</h3>
                                        </div>
                                        <div className="max-h-96 overflow-y-auto">
                                            {messages.length > 0 ? (
                                                <div>
                                                    {messages.map((notification) => {
                                                        debugger;
                                                        return <div
                                                            key={notification.message.id}
                                                            className={`px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 ${!notification.read ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
                                                        >
                                                            <p className="text-smº text-gray-700 dark:text-gray-300">{notification.message.piuri}</p>
                                                        </div>
                                                    })}
                                                </div>
                                            ) : (
                                                <p className="text-sm text-gray-500 dark:text-gray-400 px-4 py-3">No notifications</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={toggleNotifications}
                                    className="flex items-center justify-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 border border-gray-300 dark:border-gray-600"
                                    aria-label="Notifications"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                    </svg>
                                    {unreadCount > 0 && (
                                        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                                            {unreadCount}
                                        </span>
                                    )}
                                </button>
                            </div>
                            {/* Agent Controls Menu */}
                            <div className="relative flex items-center group">
                                <div
                                    className="absolute top-10 right-0 mt-1 w-80 bg-white dark:bg-gray-800 rounded-md shadow-lg z-20 border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 md:block hidden"
                                >
                                    <div className="py-2">
                                        <div className="flex px-4 py-2 border-b border-gray-200 dark:border-gray-700 justify-between items-center">
                                            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200">Agent Controls</h3>
                                            {
                                                peerDID && (
                                                    <button
                                                        onClick={() => {
                                                            navigator.clipboard.writeText(peerDID.toString());
                                                            setShowCopyFeedback(true);
                                                            setTimeout(() => setShowCopyFeedback(false), 2000);
                                                        }}
                                                        className={`text-xs sm:text-sm text-blue-500 transition-transform duration-300 flex items-center gap-2 ${showCopyFeedback ? 'text-green-500' : ''}`}
                                                    >
                                                        {showCopyFeedback ? (
                                                            <>
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                                </svg>
                                                                Copied!
                                                            </>
                                                        ) : (
                                                            <>
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                                                                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                                                                </svg>
                                                                Copy DID
                                                            </>
                                                        )}
                                                    </button>
                                                )
                                            }
                                        </div>
                                        <div className="p-4 space-y-4">




                                            <div className="flex flex-col items-end">
                                                <AgentStart />
                                            </div>
                                            <div className="flex flex-col items-end">
                                                <WalletSelect />
                                            </div>
                                            {showDIDSelector && (
                                                <div className="flex flex-col items-end">
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">DID</label>
                                                    <PrismDIDSelect />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setAgentControlsOpen(!agentControlsOpen)}
                                    className="flex items-center justify-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 border border-gray-300 dark:border-gray-600"
                                    aria-label="Agent Controls"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`h-5 w-5 ${state === SDK.Domain.Startable.State.RUNNING
                                            ? 'text-green-500 dark:text-green-400'
                                            : state === SDK.Domain.Startable.State.STOPPED
                                                ? 'text-red-500 dark:text-red-400'
                                                : 'text-yellow-500 dark:text-yellow-400'
                                            }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </button>
                            </div>

                        </div>
                    </div>
                </header>
                <div className="flex flex-1 overflow-hidden">
                    {/* Sidebar */}
                    <aside className="w-64 overflow-y-auto bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-colors duration-200">
                        <nav className="mt-4">
                            <ul>
                                {navItems.map((item, index) => (
                                    <li key={isNavGroup(item) ? `group-${index}` : `item-${index}`}>
                                        {isNavGroup(item) ? (
                                            <>
                                                <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                                                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200">{item.label}</h3>
                                                </div>
                                                <ul>
                                                    {item.children.map((child, childIndex) => (
                                                        <li key={`${item.label}-${childIndex}`}>
                                                            <Link href={child.path} className="text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 block">
                                                                {child.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        ) : (
                                            <Link href={item.path} className="text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 block">
                                                {item.label}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </aside>
                    {/* Main content */}
                    <main className="flex-1 p-8">
                        {children}
                    </main>
                </div>
            </div>
        </AgentRequire>
    );
}