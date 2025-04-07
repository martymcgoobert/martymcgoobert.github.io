import React from 'react';
import { Project } from '../../types/project';

// Import media assets
import mobileUI from '../../assets/mobileui.png';
import appIcon from '../../assets/appicon.png';
import zenithVideo from '../../assets/zenith-demo.mp4';
import zenithVideoWEBM from '../../assets/zenith-demo.webm';

interface WorkSectionProps {
  workRef: React.RefObject<HTMLDivElement>;
  projects: Project[]; // Kept for consistency with other components
  calculateOpacity: (ref: React.RefObject<HTMLDivElement>, sectionId: string) => number; // Kept for consistency with other components
  isMobile: boolean;
}

const WorkSection: React.FC<WorkSectionProps> = ({ workRef, isMobile }) => {

  // Projects are directly embedded in the component for simplicity

  return (
    <section
      ref={workRef}
      id="work"
      className="work"
      style={{
        opacity: 1, // Set to 1 to ensure visibility
        width: '100%',
        height: 'auto',
        background: '#D1E0D5',
        padding: isMobile ? '16px' : '20px',
        paddingTop: '140px',
        paddingBottom: '140px',
        boxSizing: 'border-box',
        margin: 0,
        position: 'relative',
        zIndex: 1,
        overflow: 'visible'
      }}
    >
      <div style={{
        maxWidth: '1440px',
        width: '100%',
        margin: '0 auto'
      }}>
        <div className="work-header" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '0px',
          width: '100%'
        }}>
        <h2 style={{
          color: 'black',
          fontSize: 40,
          fontWeight: 400,
          lineHeight: '44px',
          fontFamily: 'Chivo Mono',
          margin: 0,
          marginBottom: '40px'
        }}>
          Latest Work
        </h2>
        <div style={{
          color: 'black',
          fontSize: 16,
          fontFamily: 'Chivo Mono',
          fontWeight: 400
        }}>
          &lt;2025&gt;
        </div>
      </div>

      {/* Main project (Zenith) */}
      <div style={{
        width: '100%',
        height: 'auto',
        aspectRatio: '16/9',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '0px',
        marginBottom: '20px',
        display: 'block',
        background: '#000'
      }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            background: '#D1E0D5'
          }}
        >
          <source src={zenithVideoWEBM} type="video/webm" />
          <source src={zenithVideo} type="video/mp4" />
        </video>
      </div>

      {/* Smaller projects (side by side) */}
      <div style={{
        display: 'flex',
        gap: '20px',
        width: '100%'
      }}>
        {/* Orbit Project */}
        <div style={{
          flex: '1 1 0',
          position: 'relative',
          background: '#D1E0D5',
          aspectRatio: '1/1',
          overflow: 'hidden',
          display: 'block'
        }}>
          <img
            src={mobileUI}
            alt="Orbit"
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>

        {/* Cloud App Project */}
        <div style={{
          flex: '1 1 0',
          position: 'relative',
          background: '#D1E0D5',
          aspectRatio: '1/1',
          overflow: 'hidden',
          display: 'block'
        }}>
          <img
            src={appIcon}
            alt="Cloud App"
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      </div>
      </div>
    </section>
  );
};

export default WorkSection;
