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
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1245796678858418"
                        crossOrigin="anonymous"></script>
                </div>
            </div>
        </div>
    );
};

export default Channel; 