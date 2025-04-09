import React, { useEffect, useRef } from 'react';

interface AutoplayVideoProps {
  mp4Src: string;
  webmSrc?: string;
  className?: string;
  style?: React.CSSProperties;
}

const AutoplayVideo: React.FC<AutoplayVideoProps> = ({ 
  mp4Src, 
  webmSrc, 
  className, 
  style 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    // Function to attempt playback
    const attemptPlay = () => {
      video.play().catch(error => {
        console.log('Autoplay prevented:', error);
      });
    };
    
    // iOS Safari specific: try to play on touchend
    const playOnTouch = () => {
      attemptPlay();
      document.removeEventListener('touchend', playOnTouch);
    };
    
    // Try to play immediately
    attemptPlay();
    
    // Try again after a delay
    const playTimeout = setTimeout(attemptPlay, 1000);
    
    // Add event listeners for user interaction
    document.addEventListener('touchend', playOnTouch);
    
    // iOS specific: try to play when page becomes visible
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        attemptPlay();
      }
    });
    
    // Cleanup
    return () => {
      clearTimeout(playTimeout);
      document.removeEventListener('touchend', playOnTouch);
    };
  }, []);
  
  return (
    <video
      ref={videoRef}
      autoPlay
      playsInline
      muted
      loop
      preload="auto"
      className={className}
      style={style}
    >
      {webmSrc && <source src={webmSrc} type="video/webm" />}
      <source src={mp4Src} type="video/mp4" />
    </video>
  );
};

export default AutoplayVideo;
