import React from 'react';

interface HeroSectionProps {
  heroRef: React.RefObject<HTMLDivElement>;
  isMobile: boolean;
  images: {
    profile: string;
    hero: string;
  };
  scrollY?: number;
  hoverImage?: string | null;
  setHoverImage?: React.Dispatch<React.SetStateAction<string | null>>;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  heroRef,
  isMobile,
  images
}) => {
  return (
    <section
      ref={heroRef}
      className="hero"
      style={{
        width: '100%',
        height: '100vh',
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        padding: isMobile ? '16px' : '20px',
        paddingTop: isMobile ? '100px' : '140px',
        boxSizing: 'border-box',
        margin: 0,
        position: 'relative'
      }}
    >
      <div className="container-max" style={{
        maxWidth: '1440px',
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: isMobile ? 'center' : 'flex-start',
        gap: isMobile ? '20px' : '40px',
        alignItems: 'center',
        height: isMobile ? 'auto' : 'calc(100vh - 120px)',
        minHeight: 'calc(100vh - 120px)',
        padding: isMobile ? '0 16px' : '0 20px',
        paddingBottom: isMobile ? '0' : '40px'
      }}>
        <div style={{
          paddingTop: '0px',
          paddingBottom: '0px',
          width: '100%',
          textAlign: isMobile ? 'center' : 'left'
        }}>
        <h1 className="fade-in" style={{
          color: 'black',
          fontSize: isMobile ? 32 : 48,
          fontFamily: 'Chivo Mono',
          fontWeight: 700,
          lineHeight: isMobile ? '38px' : '55.2px',
          margin: 0,
          textAlign: isMobile ? 'center' : 'left',
          textTransform: 'uppercase',
          wordWrap: 'break-word'
        }}>
          USER EXPERIENCE & INTERFACE DESIGNER
        </h1>
      </div>

      <div className="fade-in" style={{
        width: '100%',
        height: isMobile ? '300px' : '500px',
        maxHeight: isMobile ? '300px' : '400px',
        position: 'relative',
        border: '1px solid black',
        marginBottom: '0px',
        marginTop: '0px',
        overflow: 'hidden'
      }}>
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            minHeight: isMobile ? '300px' : 'auto'
          }}>
          <img
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
              minHeight: isMobile ? '300px' : 'auto'
            }}
            src={images.hero}
            alt="Hero"
            loading="lazy"
          />
        </div>
      </div>

      <div className="fade-in" style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: isMobile ? 'center' : 'space-between',
        alignItems: isMobile ? 'center' : 'center',
        paddingBottom: isMobile ? '20px' : '0',
        width: '100%',
        gap: isMobile ? '20px' : '0',
        marginTop: isMobile ? '0' : '40px'
      }}>
        <div style={{
          fontFamily: 'Chivo Mono',
          fontSize: isMobile ? 14 : 16,
          color: 'black',
          fontWeight: 400,
          letterSpacing: '0.5px',
          textAlign: isMobile ? 'center' : 'left'
        }}>
          &lt;Based in Ontario, Canada&gt;<br/>
          &lt;Open to Freelance & Collaboration&gt;
        </div>

        <div style={{ textAlign: isMobile ? 'center' : 'left', width: isMobile ? '100%' : 'auto' }}>
          <a href="#work" style={{
            textDecoration: 'none',
            fontFamily: 'Chivo Mono',
            fontSize: isMobile ? 14 : 16,
            color: 'black',
            fontWeight: 400,
            letterSpacing: '0.5px'
          }}>Scroll for more.</a>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
