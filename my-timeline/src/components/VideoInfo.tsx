// my-timeline/src/components/VideoInfo.tsx
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from '../styles/VideoInfo.module.css';
import markdownStyles from '../styles/MarkdownStyles.module.scss';
import contentPath from '../articles/article1.md'; // Correct path to the Markdown file
import { text } from 'stream/consumers';



const VideoInfo: React.FC = () => {

    const [content, setContent] = useState<null | string>(null);

    useEffect(() => {
        fetch(contentPath)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then((text) => {
                setContent(text); // Set the fetched Markdown content
            })
            .catch((error) => {
                console.error('Error fetching the Markdown file:', error);
            });
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Article Title</h1> {/* Optional title for the article */}
            <div className={markdownStyles.markdownContent}>
                {content ? (
                    <ReactMarkdown>{content}</ReactMarkdown>
                ) : (
                    <p>Loading ...</p>
                )}
            </div>
        </div>
    );
};

export default VideoInfo;