// my-timeline/src/components/VideoInfo.test.tsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import VideoInfo from './VideoInfo';

// Mock the fetch function
global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        text: () => Promise.resolve(`# AWS Lambda Tutorial\n\n## Description\nThis video explains how to create and deploy AWS Lambda functions.\n\n## Reference Links\n- [AWS Lambda Basics](https://youtube.com/watch?v=eOBq__h4OJ4)\n- [Serverless with Lambda](https://youtube.com/watch?v=dZ_FEqD_SfE)\n\n## Notes\n- 0:00 - Introduction to Lambda\n- 2:30 - Creating your first function\n- 5:45 - Deploying and testing\n- 10:20 - Best practices`), // Mocked Markdown content
    })
) as jest.Mock;

describe('VideoInfo Component', () => {
    afterEach(() => {
        jest.clearAllMocks(); // Clear mocks after each test
    });

    test('renders loading state initially', () => {
        render(<VideoInfo fileName="article1.md" />);
        expect(screen.getByText(/loading/i)).toBeInTheDocument(); // Check for loading text
    });

    test('renders Markdown content after fetch', async () => {
        render(<VideoInfo fileName="article1.md" />);
        
        // Wait for the content to be rendered
        await waitFor(() => expect(screen.getByText('AWS Lambda Tutorial')).toBeInTheDocument());
    });

    test('handles fetch error', async () => {
        // Mock fetch to simulate an error
        (fetch as jest.Mock).mockImplementationOnce(() =>
            Promise.resolve({ ok: false })
        );

        render(<VideoInfo fileName="article1.md" />);

        // Wait for the loading state to finish
        await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());

        // Check for error handling (you can customize this based on your error handling logic)
        expect(screen.getByText(/error fetching the markdown file/i)).toBeInTheDocument();
    });
});