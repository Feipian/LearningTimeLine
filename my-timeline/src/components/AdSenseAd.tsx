import React from 'react';

interface AdsProps {
    dataAdSlot: string;
}

const AdsComponent: React.FC<AdsProps> = ({ dataAdSlot }) => {
    if (process.env.NODE_ENV !== 'production') {
        return (
            <div style={{ 
                display: 'block', 
                backgroundColor: '#f0f0f0', 
                padding: '20px', 
                textAlign: 'center',
                minHeight: '250px',
                border: '1px dashed #ccc'
            }}>
                Ad Space (Only visible in production)
            </div>
        );
    }

    return (
        <ins className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-1245796678858418"
            data-ad-slot={dataAdSlot}
            data-ad-format="auto"
            data-full-width-responsive="true">
        </ins>
    );
};

export default AdsComponent;