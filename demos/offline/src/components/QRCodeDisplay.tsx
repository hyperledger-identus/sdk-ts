import { useState } from 'react';
import encodeQR from 'qr';
import { base64 } from 'multiformats/bases/base64'
interface QRCodeDisplayProps {
    oob: string;
}

export default function QRCodeDisplay({ oob }: QRCodeDisplayProps) {
    const [copied, setCopied] = useState(false);
    const qrSvg = encodeQR(oob, 'svg', { version: 40 });
    const encoded = `${window.location.origin}/app/credentials?oob=${base64.baseEncode(Buffer.from(oob))}`;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(encoded);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <div className="space-y-4">
            <div className="w-full bg-white p-4 rounded-lg flex items-center justify-center shadow border border-gray-200">
                <div dangerouslySetInnerHTML={{ __html: qrSvg }} className="w-full h-full" />
            </div>

            <div className="flex items-center space-x-2">
                <code className="flex-1 p-2 bg-gray-100 dark:bg-gray-800 rounded text-sm overflow-x-auto">
                    {encoded}
                </code>
                <button
                    onClick={handleCopy}
                    className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    {copied ? 'Copied!' : 'Copy'}
                </button>
            </div>
        </div>
    );
} 