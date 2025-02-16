import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Timeline from './components/Timeline';
import VideoInfo from './components/VideoInfo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Timeline />} />
        <Route path="/video-info" element={<VideoInfo />} />
      </Routes>
    </Router>
  );
}

export default App; 