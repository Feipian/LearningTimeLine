// my-timeline/src/components/LearningTimeLine.tsx
import React from 'react';
import styles from '../styles/Timeline.module.css'

const LearningTimeLine: React.FC = () => {
    return (
        <div>
            <div className={styles.navMenu}>
                <a href="/video-info" className={styles.navLink}>Video Info</a>
            </div>

            <h1 className="typing">My Learning Timeline</h1>
            <div className={styles.timeline}>
            <div className={styles.timelineItem}>
                    <h2>Kindergarten</h2>
                    <p>A very wonderful period, carefree, play with other kids every day.</p>
                </div>
                <div className={styles.timelineItem}>
                    <h2>Primary school</h2>
                    <p>
                        I was in the fourth or fifth grade when I first came across the game Minecraft.
                        At that time, I thought plugins and modules were very novel.
                        Why can the game have so many changes just by downloading other people's Jar files? 
                        Maybe this is the reason why I have a strong interest in coding and gradually develop towards coding.
                    </p>
                </div>
                <div className={styles.timelineItem}>
                    <h2>High school</h2>
                    <p>
                        For develop Minecraft or Tower of Saviors plugins to join Kinmen Higher Vocational School
                        Information Technology department as Student. But my teacher is perfect about IOT, and I need
                        to take care about my score for my graduate, so I learning IOT field. Created an automatic vegetable
                        watering system when I graduated.
                    </p>
                    <ul>
                        <li>Skills learned: C, Python Fundamental, Arduino</li>
                        <li>Project: Automatic irrigation system</li>
                    </ul>
                </div>
                <div className={styles.timelineItem}>
                    <h2>University</h2>
                    <p>
                        Quemoy University Computer Science and Information Engineering.
                        For continue learn about make game plugins but, for get great score in School,
                        I give up this plan.
                    </p>
                    <ul>
                        <li>Skills learned: C++, C, Python, R, Artificial Intelligence, Tomcat, AWS, Ansible</li>
                        <li>Projects:</li>
                        <ul>
                            <li>Crypto Currency Trading System (But I don't like Trading)</li>
                            <li>Greedy Snake</li>
                            <li>E-Commerce Web Scraping</li>
                        </ul>
                    </ul>
                </div>
                <div className={styles.timelineItem}>
                    <h2>Work Experience</h2>
                    <p>
                        In Senior year of college, joined KYEC internship plan, after that I worked another four months (became
                        full-time employee)
                    </p>
                    <ul>
                        <li>Skills learned: Java, Servlet, VB.Net (For Test Machine), Regular Expression</li>
                    </ul>
                    <p>
                        All in all this is a good company, taught me a lot, everyone works hard for their dreams.
                    </p>
                </div>
                <div className={styles.timelineItem}>
                    <h2>Self-Study Experience</h2>
                    <ul>
                        <li>Frontend: React, Next.js, Vue.js, Nuxt</li>
                        <li>Backend: Express.js, Flask</li>
                        <li>Cloud & DevOps: Linux, AWS S3, AWS Lambda, Github CI/CD (Actions), Selenium</li>
                    </ul>
                </div>
                <div className={styles.timelineItem}>
                    <h2>Project Experience</h2>
                    <h3>Video Silence Cut</h3>
                    <p>Tech stack:</p>
                    <ul>
                        <li>React</li>
                        <li>Next</li>
                        <li>Python</li>
                        <li>FFmpeg</li>
                        <li>Docker</li>
                    </ul>
                    <p>GitHub: <a href="https://github.com/Feipian/VideoSilenceCut" target="_blank" rel="noopener noreferrer">VideoSilenceCut</a></p>

                    <h3>ToDoWithMe</h3>
                    <p>Tech stack:</p>
                    <ul>
                        <li>TypeScript</li>
                        <li>React Native</li>
                        <li>Expo</li>
                        <li>Firebase Auth</li>
                    </ul>
                    <p>GitHub: <a href="https://github.com/Feipian/Todo" target="_blank" rel="noopener noreferrer">Todo</a></p>
                    <p className={styles.emphasis}>This project is currently being uploaded to the Play Store.</p>

                    <h3>AWS Notes</h3>
                    <p>University DevOps course notes:</p>
                    <p>GitHub: <a href="https://github.com/Feipian/Note-AWS/tree/main/aws" target="_blank" rel="noopener noreferrer">AWS Notes</a></p>
                </div>
                <div className={styles.timelineItem}>
                    <h2>Personal Information</h2>
                    <div className={styles.socialLinksContainer}>
                        <div>
                            <strong>LinkedIn:</strong>
                            <a href="https://www.linkedin.com/in/%E9%B4%BB%E9%8A%98-%E7%8E%8B-773bb7287" 
                               target="_blank"
                               rel="noopener noreferrer"
                                className={`${styles.socialLink} ${styles.linkedin}`}>
                                王鴻銘的 LinkedIn
                            </a>
                        </div>
                        <div>
                            <strong>104 Profile:</strong>
                            <a href="https://pda.104.com.tw/profile/share/3DxTEyj8ut2nx2j4ZyA7rgIMmkSPsUnv" 
                               target="_blank"
                               rel="noopener noreferrer"
                                className={`${styles.socialLink} ${styles.job104}`}>
                                104 履歷
                            </a>
                        </div>
                        <div>
                            <strong>YouTube Channel:</strong>
                            <a href="https://youtube.com/@zhiziknowhow" 
                               target="_blank"
                               rel="noopener noreferrer"
                               className={`${styles.socialLink} ${styles.youtube}`}>
                                :)
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearningTimeLine;