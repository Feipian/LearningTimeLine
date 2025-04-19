import React from 'react';
import styles from '../styles/Channel.module.css';

const Channel: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1>知識 Know How</h1>
            
            <div className={styles.channelSection}>
                <div className={styles.channelInfo}>
                    <a 
                        href="https://youtube.com/@zhiziknowhow" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.channelLink}
                    >
                        Visit My YouTube Channel
                    </a>
                    <p>Learn about programming, web development, and more!</p>
                </div>

                {/* Google AdSense */}
                <div className={styles.adSection}>
                    <script async 
                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=YOUR-CLIENT-ID"
                        crossOrigin="anonymous">
                    </script>
                    <ins className="adsbygoogle"
                        style={{ display: 'block' }}
                        data-ad-client="YOUR-CLIENT-ID"
                        data-ad-slot="YOUR-AD-SLOT"
                        data-ad-format="auto"
                        data-full-width-responsive="true">
                    </ins>
                    <script>
                        (adsbygoogle = window.adsbygoogle || []).push({});
                    </script>
                </div>
            </div>
        </div>
    );
};

export default Channel; 