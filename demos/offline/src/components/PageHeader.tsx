import React from 'react';

interface PageHeaderProps {
    title: string;
    description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
    return (
        <div className="py-6">
            <h1 className="text-3xl font-bold text-text-primary-light dark:text-text-primary-dark">{title}</h1>
            <p className="mt-2 text-text-secondary-light dark:text-text-secondary-dark">{description}</p>
        </div>
    );
} 