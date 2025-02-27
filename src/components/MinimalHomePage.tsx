import React, { useState, useEffect, useRef } from 'react';
import '../styles/minimal.css';
import orbitImage from '../assets/orbit.png';
import meeePhoto from '../assets/meee.png';
import ontarioPhoto from '../assets/ontario.jpg';
import openPhoto from '../assets/open.jpg';
import mattPhoto from '../assets/matt.png';

const MinimalHomePage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  
  // Initial fade in effect for hero section
  useEffect(() => {
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.style.opacity = '0';
      
      setTimeout(() => {
        heroElement.style.opacity = '1';
        heroElement.style.transition = 'opacity 1.2s ease-in-out';
      }, 300);
    }
    
    // Check if on mobile device
    const checkMobile = () => {
      const isMobileView = window.innerWidth <= 768;
      setIsMobile(isMobileView);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Check which sections are visible
      const sections = [
        { ref: workRef, id: 'work' },
        { ref: aboutRef, id: 'about' }
      ];
      
      sections.forEach(({ ref, id }) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.7) {
            setVisibleSections(prev => new Set(prev).add(id));
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Calculate opacity for sections - only fade in, never fade out once visible
  const calculateOpacity = (ref: React.RefObject<HTMLDivElement>, sectionId: string) => {
    if (!ref.current) return 1;
    
    // If section has been seen, keep it visible
    if (visibleSections.has(sectionId)) return 1;
    
    const rect = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Start fading in when element is 30% visible from bottom
    const fadeInStart = windowHeight - rect.height * 0.3;
    
    // Fully visible when element is 50% visible
    const fullyVisible = windowHeight - rect.height * 0.5;
    
    if (rect.top >= fadeInStart) {
      // Element is below viewport or just starting to enter
      return 0;
    } else if (rect.top >= fullyVisible && rect.top < fadeInStart) {
      // Element is entering viewport
      return 1 - (rect.top - fullyVisible) / (fadeInStart - fullyVisible);
    } else {
      // Element is visible
      return 1;
    }
  };
  
  // Projects data
  const projects = [
    {
      id: '01',
      title: 'ATG Direct',
      category: 'Manufacturing Website Redesign',
      year: '2025',
      role: 'UX & UI Designer',
      tools: 'Figma, Framer',
      description: 'Revamped website for a manufacturer of hot melt polyamide chemical adhesives, implementing a modern approach to their digital presence.'
    },
    {
      id: '02',
      title: 'Orbit',
      category: 'Mobile Banking & Crypto',
      year: '2024',
      role: 'UX & UI Designer',
      tools: 'Figma',
      description: 'A self-directed personal project combining traditional banking with cryptocurrency features in a mobile application.',
      image: orbitImage
    }
  ];
  
  return (
    <div className={`minimal ${darkMode ? 'dark-mode' : ''}`}>
      <div className="noise"></div>
      
      {/* Header/Navigation */}
      <header 
        className={`header ${scrollY > 100 ? 'scrolled' : ''} ${isMobile && mobileMenuOpen ? 'mobile-menu-open' : ''}`}
      >
        <div className="header-left" onClick={scrollToTop}>Matt J. Mitchell</div>
        <div className="header-right">
          {isMobile ? (
            <button 
              className="mobile-menu-toggle" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          ) : (
            <>
              <a href="#work" className="nav-link">Work</a>
              <a href="#about" className="nav-link">About</a>
              <a href="mailto:mattjmitchellux@gmail.com" className="nav-link">Contact</a>
              <button onClick={toggleDarkMode} className="theme-toggle" aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
                {darkMode ? '☀️' : '🌙'}
              </button>
            </>
          )}
        </div>
        {isMobile && (
          <div className="mobile-menu">
            <a href="#work" className="nav-link">Work</a>
            <a href="#about" className="nav-link">About</a>
            <a href="mailto:mattjmitchellux@gmail.com" className="nav-link">Contact</a>
            <button onClick={toggleDarkMode} className="theme-toggle mobile-theme-toggle" aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        )}
      </header>
      
      {/* Hero */}
      <section 
        ref={heroRef}
        className="hero hero-fade-in"
        style={{ 
          opacity: 1 - (scrollY * 0.002)
        }}
      >
        <div className="hero-content">
          <div className="hover-image-container">
            <img 
              src={meeePhoto} 
              alt="Profile" 
              className="hover-image"
            />
          </div>
          <div className="hero-text-container">
            <h1 className="hero-title-small">
              Hey, I'm <span className="font-bold">Matt*</span>. A UX designer based in <span className="font-bold">Ontario, Canada*</span>. <span className="font-bold">Currently seeking a role in UX*</span> or Product Design.
            </h1>
          </div>
        </div>
      </section>
      
      {/* Work */}
      <section 
        ref={workRef} 
        id="work" 
        className="work"
        style={{
          opacity: calculateOpacity(workRef, 'work')
        }}
      >
        <div className="section-title">
          <h2>Selected Work</h2>
        </div>
        
        <div className="projects-fullwidth">
          {/* First project - ATG Direct (newest) */}
          <div className="project-fullwidth">
            <div className="project-fullwidth-header">
              <span className="project-id">{projects[0].id}</span>
              <span className="project-year">{projects[0].year}</span>
            </div>
            <div className="project-fullwidth-row">
              <div className="project-fullwidth-content">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <h3 className="project-title">{projects[0].title}</h3>
                  <div className="live-indicator"></div>
                </div>
                <span className="project-category">{projects[0].category}</span>
                <div className="project-meta">
                  <span className="project-role">Role: {projects[0].role}</span>
                  <span className="project-tools">Tools: {projects[0].tools}</span>
                </div>
                <p className="project-description">{projects[0].description}</p>
              </div>
              <div className="project-fullwidth-image">
                <div className="image-placeholder">ATG Direct Website Redesign <br/>(Work in Progress)</div>
              </div>
            </div>
          </div>
          
          {/* Second project - Orbit */}
          <div className="project-fullwidth">
            <div className="project-fullwidth-header">
              <span className="project-id">{projects[1].id}</span>
              <span className="project-year">{projects[1].year}</span>
            </div>
            <div className="project-fullwidth-row">
              <div className="project-fullwidth-content">
                <h3 className="project-title">{projects[1].title}</h3>
                <span className="project-category">{projects[1].category}</span>
                <div className="project-meta">
                  <span className="project-role">Role: {projects[1].role}</span>
                  <span className="project-tools">Tools: {projects[1].tools}</span>
                </div>
                <p className="project-description">{projects[1].description}</p>
              </div>
              <div className="project-fullwidth-image">
                <img src={projects[1].image} alt={projects[1].title} />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About */}
      <section 
        ref={aboutRef} 
        id="about" 
        className="about"
        style={{
          opacity: calculateOpacity(aboutRef, 'about')
        }}
      >
        <div className="section-title">
          <h2>About</h2>
        </div>
        
        <div className="about-content">
          <div className="about-left-column">
            <div className="about-text">
              <p className="about-paragraph">The real me? A down-to-earth, chill vibes Canadian with a passion and history for loving all things creative.</p>
              <p className="about-paragraph">The designer me? Someone that wants to know everything all at once, and how to do it best. Whether its crafting an intuitive user experience or building a fun brand, I am open to it all.</p>
            </div>
            <div className="about-image">
              <img src={mattPhoto} alt="Matt J. Mitchell" />
            </div>
          </div>
          
          <div className="about-right-column">
            <div className="skill-list">
              <div className="skill-category">
                <h3 className="skill-heading">Skills</h3>
                <ul>
                  <li><span className="skill-highlight">UI Design</span></li>
                  <li><span className="skill-highlight">Wireframing</span></li>
                  <li><span className="skill-highlight">User Research</span></li>
                  <li><span className="skill-highlight">Prototyping</span></li>
                  <li><span className="skill-highlight">AI Tools</span></li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h3 className="skill-heading">Tools</h3>
                <ul>
                  <li><span className="skill-highlight">Figma</span></li>
                  <li><span className="skill-highlight">Framer</span></li>
                  <li><span className="skill-highlight">Aseprite</span></li>
                  <li><span className="skill-highlight">Spline</span></li>
                </ul>
              </div>
            </div>
            
            <div className="cta-container desktop-only">
              <p>Interested in working together?</p>
              <a href="mailto:mattjmitchellux@gmail.com" className="cta-link">Get in touch</a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <p>&copy; {new Date().getFullYear()} Matt J. Mitchell</p>
          </div>
          <div className="footer-right">
            <a href="https://www.linkedin.com/in/matthew-mitchell-955703a2/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
            <a href="https://x.com/mattmitchellUX" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
            <a href="mailto:mattjmitchellux@gmail.com" className="social-link">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MinimalHomePage;
