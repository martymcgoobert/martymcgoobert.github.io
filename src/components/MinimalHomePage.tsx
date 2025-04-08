import React, { useState, useEffect, useRef } from 'react';
import { setupLazyVideoLoading } from '../utils/lazyLoadVideo';
import { setupLazyImageLoading } from '../utils/lazyLoadImage';
import { setupScrollAnimations } from '../utils/animateOnScroll';
import '../styles/minimal.css';

// Import images and media
import mattPhoto from '../assets/matt.png';
import heroImage from '../assets/heroimage.png';
import mobileUI from '../assets/mobileui.png';
import appIcon from '../assets/appicon.png';
import zenithVideo from '../assets/zenith-demo.mp4';
import zenithVideoWEBM from '../assets/zenith-demo.webm';

// Import types
import { Project } from '../types/project';

// Import modular components
import Header from './layout/Header';
import Footer from './layout/Footer';
import HeroSection from './sections/HeroSection';
import WorkSection from './sections/WorkSection';
import AboutSection from './sections/AboutSection';

const MinimalHomePage: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [hoverImage, setHoverImage] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Refs for sections
  const heroRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      checkVisibleSections();
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Setup lazy loading for videos and images
    setupLazyVideoLoading();
    setupLazyImageLoading();

    // Setup animations for elements entering viewport
    setupScrollAnimations();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const checkVisibleSections = () => {
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

  // Scroll to top
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
  const projects: Project[] = [
    {
      id: '01',
      title: 'Zenith',
      category: 'AI',
      year: '2025',
      role: 'UX & UI Designer',
      tools: 'Figma',
      description: 'A self-directed personal project exploring the intersection of AI and UX design.',
      media: {
        mp4: zenithVideo,
        webm: zenithVideoWEBM
      },
      mediaType: 'video'
    },
    {
      id: '02',
      title: 'Orbit',
      category: 'Mobile Banking & Crypto',
      year: '2024',
      role: 'UX & UI Designer',
      tools: 'Figma',
      description: 'A self-directed personal project combining traditional banking with cryptocurrency features in a mobile application.',
      image: mobileUI
    },
    {
      id: '03',
      title: 'Cloud App',
      category: 'Weather App',
      year: '2024',
      role: 'UX & UI Designer',
      tools: 'Figma',
      description: 'A minimalist weather application with clean interface.',
      image: appIcon
    }
  ];

  // Hero section images
  const heroImages = {
    profile: mattPhoto,
    hero: heroImage
  };

  return (
    <div className="minimal" style={{ display: 'flex', flexDirection: 'column' }}>

      {/* Header/Navigation */}
      <Header
        scrollY={scrollY}
        isMobile={isMobile}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToTop={scrollToTop}
      />

      {/* Main Content Container */}
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        {/* Hero */}
        <HeroSection
          scrollY={scrollY}
          heroRef={heroRef}
          hoverImage={hoverImage}
          isMobile={isMobile}
          setHoverImage={setHoverImage}
          images={heroImages}
        />

        {/* Work */}
        <WorkSection
          workRef={workRef}
          projects={projects}
          calculateOpacity={calculateOpacity}
          isMobile={isMobile}
        />

        {/* About */}
        <AboutSection
          aboutRef={aboutRef}
          calculateOpacity={calculateOpacity}
          profileImage={mattPhoto}
          isMobile={isMobile}
        />
      </div>

      {/* Footer */}
      <Footer isMobile={isMobile} />
    </div>
  );
};

export default MinimalHomePage;
