import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  // Calculate parallax effect based on mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setPosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative">
      <div className="dither absolute inset-0 opacity-5" />
      
      <div className="error-container relative z-10" 
           style={{ 
             transform: `translate(${position.x}px, ${position.y}px)`,
             transition: 'transform 0.2s ease-out' 
           }}>
        <h1 className="text-9xl font-light mb-4" style={{ letterSpacing: '-4px' }}>
          404
        </h1>
        <p className="text-lg mb-8 opacity-70">
          This page does not exist.
        </p>
        <Link 
          to="/" 
          className="border-b border-current pb-1 hover:opacity-60 transition-opacity">
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
