// my-timeline/src/components/VideoInfo.tsx
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from '../styles/VideoInfo.module.css';
import { useNavigate, useParams } from 'react-router-dom';

const VideoInfo: React.FC = () => {
    const [content, setContent] = useState<string | null>(null);
    const navigate = useNavigate();
    const { articleId } = useParams();

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await fetch(`/articles/${articleId}.md`);
                if (!response.ok) {
                    throw new Error('Article not found');
                }
                const text = await response.text();
                setContent(text);
            } catch (error) {
                console.error('Error fetching article:', error);
                setContent('# Article Not Found\n\nSorry, the requested article could not be found.');
            }
        };

        fetchArticle();
    }, [articleId]);

    return (
        <div className={styles.container}>
            <button onClick={() => navigate(-1)} className={styles.backButton}>
                Go Back
            </button>
            <div className={styles.markdownContent}>
                {content ? (
                    <ReactMarkdown>{content}</ReactMarkdown>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default VideoInfo;