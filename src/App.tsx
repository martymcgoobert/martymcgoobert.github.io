import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MinimalHomePage from './components/MinimalHomePage';
import NotFound from './components/NotFound';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  return (
    <div className="app">
      <CustomCursor />
      <div className="noise"></div>
      <Routes>
        <Route path="/" element={<MinimalHomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
