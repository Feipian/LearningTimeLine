import React, { useEffect } from 'react';

declare global {
    interface Window {
        adsbygoogle: any[];
    }
}

interface AdSenseAdProps {
    client: string;
    slot: string;
    format?: string;
    style?: React.CSSProperties;
}

const AdSenseAd: React.FC<AdSenseAdProps> = ({ 
    client, 
    slot, 
    format = "auto",
    style = { display: "block" }
}) => {
    useEffect(() => {
        // Only load ads in production
        if (process.env.NODE_ENV === 'production') {
            const script = document.createElement('script');
            script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`;
            script.async = true;
            script.crossOrigin = "anonymous";
            document.head.appendChild(script);

            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
    }, [client]);

    // Only render ad container in production
    if (process.env.NODE_ENV !== 'production') {
        return <div style={{ ...style, backgroundColor: '#f0f0f0', textAlign: 'center' }}>Ad Space</div>;
    }

    return (
        <ins
            className="adsbygoogle"
            style={style}
            data-ad-client={client}
            data-ad-slot={slot}
            data-ad-format={format}
            data-full-width-responsive="true"
        />
    );
};

export default AdSenseAd; 