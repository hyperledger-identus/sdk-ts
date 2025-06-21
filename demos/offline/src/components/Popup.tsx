import React from 'react';

interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
    footerButtons?: React.ReactNode[];
}

export const Popup: React.FC<PopupProps> = ({ isOpen, onClose, children, title, footerButtons }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                <div
                    className="fixed inset-0 transition-opacity"
                    aria-hidden="true"
                    onClick={onClose}
                >
                    <div className="absolute inset-0 bg-black-75"></div>
                </div>
                <div
                    className="inline-block align-bottom bg-background-light dark:bg-background-dark rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="bg-background-light dark:bg-background-dark px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                                {title && (
                                    <h3 className="text-lg leading-6 font-medium text-text-primary-light dark:text-text-primary-dark mb-4">
                                        {title}
                                    </h3>
                                )}
                                {children}
                            </div>
                        </div>
                    </div>
                    <div className="bg-background-light/50 dark:bg-background-dark/50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                            type="button"
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-button-primary-light dark:bg-button-primary-dark text-base font-medium text-white hover:bg-button-primary-dark dark:hover:bg-button-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-button-primary-light/50 dark:focus:ring-button-primary-dark/50 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={onClose}
                        >
                            Close
                        </button>
                        {footerButtons?.map((button, index) => (
                            <div key={index} className="sm:mr-3">
                                {button}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}; 