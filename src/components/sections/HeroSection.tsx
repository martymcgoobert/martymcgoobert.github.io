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
        paddingTop: '140px',
        boxSizing: 'border-box',
        margin: 0,
        position: 'relative'
      }}
    >
      <div style={{
        maxWidth: '1440px',
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 'calc(100vh - 120px)'
      }}>
        <div style={{
          paddingTop: '0px',
          paddingBottom: '0px',
          width: '100%'
        }}>
        <h1 style={{
          color: 'black',
          fontSize: 48,
          fontFamily: 'Chivo Mono',
          fontWeight: 700,
          lineHeight: '55.2px',
          margin: 0,
          textAlign: 'left',
          textTransform: 'uppercase',
          wordWrap: 'break-word'
        }}>
          USER EXPERIENCE & INTERFACE DESIGNER
        </h1>
      </div>

      <div style={{
        width: '100%',
        height: '500px',
        border: '1px solid black',
        marginBottom: '0px',
        overflow: 'hidden'
      }}>
        <img
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
          src={images.hero}
          alt="Hero"
          loading="lazy"
        />
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '30px',
        width: '100%'
      }}>
        <div style={{
          fontFamily: 'Chivo Mono',
          fontSize: 16,
          color: 'black',
          fontWeight: 400,
          letterSpacing: '0.5px'
        }}>
          &lt;Based in Ontario, Canada&gt;<br/>
          &lt;Open to Freelance & Collaboration&gt;
        </div>

        <div>
          <a href="#work" style={{
            textDecoration: 'none',
            fontFamily: 'Chivo Mono',
            fontSize: 16,
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
