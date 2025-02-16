import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Timeline from '../my-timeline/src/components/Timeline';
import VideoInfo from '../my-timeline/src/components/VideoInfo';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Timeline />} />
        <Route path="/video-info" element={<VideoInfo />} />
      </Routes>
    </Router>
  );
};

export default App; 