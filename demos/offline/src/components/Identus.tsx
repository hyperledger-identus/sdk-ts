import React, { useState, useEffect } from 'react';

export default function AtalaGraphic() {
    const [text, setText] = useState("");

    function generateRandomHash(length: number) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charsPerLine = 100;

        for (let i = 0; i < length; i++) {
            if (i > 0 && i % charsPerLine === 0) {
                result += '\n';
            }
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        return result;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setText(generateRandomHash(5500));
        }, 200);

        return () => clearInterval(interval);
    }, [])

    return (
        <div className="fixed  h-[700px] pointer-events-none">
            <div
                className="whitespace-pre font-mono text-[12px] leading-[14px] absolute h-full"
                style={{
                    maskImage: 'url(/identus-hero.svg)',
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    opacity: 0.1
                }}
            >
                {text}
            </div>
        </div>
    )
}