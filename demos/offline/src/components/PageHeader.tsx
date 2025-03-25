import React from 'react';

interface PageHeaderProps {
    title: string;
    description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
    return (
        <div className="mb-8 py-6 border-b border-gray-200 dark:border-gray-700">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
        </div>
    );
} 