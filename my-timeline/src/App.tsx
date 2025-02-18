import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Timeline from './components/Timeline';
import VideoInfo from './components/VideoInfo';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Timeline />} />
        <Route path="/video-info" element={<VideoInfo fileName="article1.md"/>} />
      </Routes>
    </Router>
  );
};

export default App; 