import React, { useEffect } from 'react';

declare global {
    interface Window {
        adsbygoogle: any[];
    }
}

const AdSenseScript: React.FC = () => {
    useEffect(() => {
        if (process.env.NODE_ENV === 'production') {
            const script = document.createElement('script');
            script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1245796678858418`;
            script.async = true;
            script.crossOrigin = "anonymous";
            document.head.appendChild(script);

            script.onload = () => {
                try {
                    (window.adsbygoogle = window.adsbygoogle || []).push({});
                } catch (e) {
                    console.error('AdSense initialization error:', e);
                }
            };
        }
    }, []);

    return null;
};

export default AdSenseScript; 