import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Don't render the custom cursor on mobile devices
  if (isMobile) return null;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Don't add mouse events on mobile

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if the cursor is over a clickable element
      const target = e.target as HTMLElement;
      const clickableElements = ['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA'];
      setIsPointer(clickableElements.includes(target.tagName) ||
                   window.getComputedStyle(target).cursor === 'pointer');
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mouseup', handleMouseUp);
        document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
        document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      }
    };
  }, []);

  // Keep the default cursor for better usability, but still show our custom cursor
  useEffect(() => {
    document.body.style.cursor = 'auto';

    const links = document.querySelectorAll('a, button, input, select, textarea');
    links.forEach(link => {
      (link as HTMLElement).style.cursor = 'pointer';
    });

    return () => {
      document.body.style.cursor = 'auto';

      const links = document.querySelectorAll('a, button, input, select, textarea');
      links.forEach(link => {
        (link as HTMLElement).style.cursor = 'auto';
      });
    };
  }, []);

  if (typeof window === 'undefined') return null;

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isHidden ? 0 : 1
        }}
      />
      <div
        className="cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? '40px' : isClicking ? '15px' : '20px',
          height: isPointer ? '40px' : isClicking ? '15px' : '20px',
          opacity: isHidden ? 0 : 0.6,
          borderWidth: isPointer ? '2px' : '2px',
          border: `2px solid ${isPointer ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)'}`,
          backgroundColor: isPointer ? 'rgba(255, 255, 255, 0.1)' : 'transparent'
        }}
      />
    </>
  );
};

export default CustomCursor;
