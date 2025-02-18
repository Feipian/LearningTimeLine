// my-timeline/src/components/VideoInfo.tsx
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from '../styles/VideoInfo.module.css';
import markdownStyles from '../styles/MarkdownStyles.module.scss';


interface VideoInfoProps {
    fileName: string;
}

const VideoInfo: React.FC<VideoInfoProps> = ({ fileName }) => {

    const [content, setContent] = useState<null | string>(null);

    useEffect(() => {
        const fetchArticle = async () => {
            console.log(fileName); // Log the fileName for debugging
            try {
                const response = await fetch(`articles/${fileName}`); // Fetch from the public directory
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const text = await response.text(); // Get the text content
                setContent(text); // Set the content in state
            } catch (error) {
                console.error('Error fetching the Markdown file:', error); // Handle any errors
            }
        };

        fetchArticle(); // Call the async function
    }, [fileName]); // Dependency array includes fileName


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