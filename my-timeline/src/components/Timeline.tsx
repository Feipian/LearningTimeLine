// my-timeline/src/components/LearningTimeLine.tsx
import React from 'react';
import styles from '../styles/Timeline.module.css'
import { Link } from 'react-router-dom';

import { QRCodeSVG } from 'qrcode.react';

const LearningTimeLine: React.FC = () => {


    return (
        <div>
            <div className={styles.navMenu}>
                <Link translate='no' to="/video-info" className={styles.navLink}>{ "VideoInfo" }</Link>
                <Link to="/channel" className={styles.navLink}>My Channel</Link>
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
                        <li translate='no'>Passed Class B in Hardware Maintance</li>
                        <li translate='no'>Passed Class C in Network Construction</li>
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
                    <p>
                        In this experience, I learned:
                    </p>
                    <ul>
                        <li>How to use VB.NET to create a Desktop Application</li>
                        <li>How to use REST API to control F5 Server</li>
                        <li>How to deal with large codebases</li>
                        <li>Cross-department operations</li>
                        <li>Collaboration with colleagues</li>
                        <li>How to use DLL files</li>
                        <li>Manage servers through Xshell</li>
                        <li>Write Shell Scripts to automate report data parsing</li>
                        <li>How to write SQL for oracle db</li>
                        <li>How to avoid dblock</li>
                    </ul>
                </div>
                <div className={styles.timelineItem}>
                    <h2>Self-Study Experience</h2>
                    <ul>
                        <li translate='no'>Frontend: React, Next.js, Vue.js, Nuxt</li>
                        <li translate='no'>Backend: Express.js, Flask</li>
                        <li translate='no'>Cloud & DevOps: Linux, AWS S3, AWS Lambda, Github CI/CD (Actions), Selenium</li>
                    </ul>
                </div>
                <div className={styles.timelineItem}>
                    <h2>Project Experience</h2>
                    <h3 translate='no'>Video Silence Cut</h3>
                    <p translate='no'>Tech stack:</p>
                    <ul>
                        <li translate='no'>React</li>
                        <li translate='no'>Next</li>
                        <li translate='no'>Python</li>
                        <li translate='no'>FFmpeg</li>
                        <li translate='no'>Docker</li>
                    </ul>
                    <p>
                        GitHub:
                        {/* <a href="https://github.com/Feipian/VideoSilenceCut" target="_blank" rel="noopener noreferrer">
                            VideoSilenceCut
                        </a> */}
                        <QRCodeSVG value="https://github.com/Feipian/VideoSilenceCut" size={64} style={{ marginLeft: '10px' }} />
                    </p>

                    <h3 translate='no'>ToDoWithMe</h3>
                    <p translate='no'>Tech stack:</p>
                    <ul>
                        <li translate='no'>TypeScript</li>
                        <li translate='no'>React Native</li>
                        <li translate='no'>Expo</li>
                        <li translate='no'>Firebase Auth</li>
                    </ul>
                    <p>GitHub: 
                        <QRCodeSVG value={"https://github.com/Feipian/Todo" }size={64} style={{ marginLeft: '10px' }}></QRCodeSVG>
                    </p>
                    <p className={styles.emphasis}>This project is currently being uploaded to the Play Store.</p>

                    <h3 translate='no'>AWS Notes</h3>
                    <p>University DevOps course notes:</p>
                    <p>GitHub: 
                    <QRCodeSVG value={"https://github.com/Feipian/Note-AWS/tree/main/aws" }size={64} style={{ marginLeft: '10px' }}></QRCodeSVG>

                    </p>
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
                            <QRCodeSVG value={"https://www.linkedin.com/in/%E9%B4%BB%E9%8A%98-%E7%8E%8B-773bb7287" }size={64} style={{ marginLeft: '10px' }}></QRCodeSVG>

                        </div>
                        <div>
                            <strong>104 Profile:</strong>
                            <a href="https://pda.104.com.tw/profile/share/3DOxUPwtHkI2iPUbz9TP7GUXeE4j1tWb"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.socialLink} ${styles.job104}`}>
                                104 履歷
                            </a>

                            <QRCodeSVG value={"https://pda.104.com.tw/profile/share/3DOxUPwtHkI2iPUbz9TP7GUXeE4j1tWb"}size={64} style={{ marginLeft: '10px' }}></QRCodeSVG>

                        </div>
                        <div>
                            <strong>YouTube Channel:</strong>
                            <a href="https://youtube.com/@zhiziknowhow"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.socialLink} ${styles.youtube}`}>
                                :)
                            </a>
                            <QRCodeSVG value={ "https://youtube.com/@zhiziknowhow" }size={64} style={{ marginLeft: '10px' }}></QRCodeSVG>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearningTimeLine;