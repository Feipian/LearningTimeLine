import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Timeline from './components/Timeline';
import VideoInfo from './components/VideoInfo';
import Channel from './components/Channel';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Timeline />} />
        <Route path="/video-info/:articleId" element={<VideoInfo  />} />
        <Route path="/channel" element={<Channel />} />
      </Routes>
    </Router>
  );
};

export default App; 