import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import styles from '../styles/VideoInfo.module.css';
import markdownStyles from '../styles/MarkdownStyles.module.scss';

const VideoInfo: React.FC = () => {
    const content = `# AWS Lambda Tutorial

## Description
This video explains how to create and deploy AWS Lambda functions.

## Reference Links
- [AWS Lambda Basics](https://youtube.com/watch?v=eOBq__h4OJ4)
- [Serverless with Lambda](https://youtube.com/watch?v=dZ_FEqD_SfE)

## Notes
- 0:00 - Introduction to Lambda
- 2:30 - Creating your first function
- 5:45 - Deploying and testing
- 10:20 - Best practices

# Docker Fundamentals

## Description
A comprehensive guide to Docker containers and deployment.

## Reference Links
- [Docker for Beginners](https://youtube.com/watch?v=fqMOX6JJhGo)
- [Docker Compose Tutorial](https://youtube.com/watch?v=HG6yIjZapSA)

## Notes
- 0:00 - What is Docker?
- 3:15 - Installing Docker
- 7:30 - Basic commands
- 15:45 - Creating Dockerfiles`;

    return (
        <div className={styles.container}>
            <Link to="/" className={styles.backButton}>Back to Timeline</Link>
            <div className={markdownStyles.markdownContent}>
                <ReactMarkdown
                    children={content}
                    components={{
                        a: ({node, ...props}) => {
                            const isYouTube = props.href?.includes('youtube.com') || 
                                            props.href?.includes('youtu.be');
                            return (
                                <a
                                    {...props}
                                    className={isYouTube ? 'video-link' : ''}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                />
                            );
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default VideoInfo; 