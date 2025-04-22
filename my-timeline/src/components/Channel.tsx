import React from 'react';
import styles from '../styles/Channel.module.css';
import {Adsense} from '@ctrl/react-adsense';

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
                    <Adsense
                        client="ca-pub-1245796678858418"
                        slot="7259870550"
                    />
                </div>
            </div>
        </div>
    );
};

export default Channel; 