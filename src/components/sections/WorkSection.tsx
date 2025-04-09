import React from 'react';
import { Project } from '../../types/project';
import AutoplayVideo from '../ui/AutoplayVideo';

// Import media assets
import mobileUI from '../../assets/mobileui.png';
import appIcon from '../../assets/appicon.png';
import zenithVideo from '../../assets/zenith-demo.mp4';
import zenithVideoWEBM from '../../assets/zenith-demo.webm';
import bikesVideo from '../../assets/bikes.mp4';
import bikesVideoWEBM from '../../assets/bikes.webm';

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
        background: '#000000',
        padding: isMobile ? '16px' : '20px',
        paddingTop: isMobile ? '80px' : '140px',
        paddingBottom: isMobile ? '80px' : '140px',
        boxSizing: 'border-box',
        margin: 0,
        position: 'relative',
        zIndex: 1,
        overflow: 'visible'
      }}
    >
      <div className="container-max" style={{
        maxWidth: '1440px',
        width: '100%',
        margin: '0 auto',
        padding: isMobile ? '0 16px' : '0 20px'
      }}>
        <div className="work-header" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '0px',
          width: '100%'
        }}>
        <div className="newspaper-title fade-in" style={{
          fontSize: isMobile ? 48 : 72,
          fontWeight: 400,
          lineHeight: isMobile ? '56px' : '80px',
          marginBottom: isMobile ? '24px' : '40px',
          color: 'white'
        }}>
          Work
        </div>
        <div style={{
          color: 'white',
          fontSize: 16,
          fontFamily: 'Chivo Mono',
          fontWeight: 400
        }}>
          &lt;2025&gt;
        </div>
      </div>

      {/* Main project (Zenith) */}
      <div className="fade-in-scale" style={{
        width: '100%',
        height: 'auto',
        aspectRatio: '16/9',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '0px',
        marginBottom: isMobile ? '16px' : '20px',
        display: 'block',
        background: '#000'
      }}>
        <AutoplayVideo
          mp4Src={zenithVideo}
          webmSrc={zenithVideoWEBM}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            background: '#000000'
          }}
        />
      </div>

      {/* Smaller projects (side by side) */}
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '16px' : '20px',
        width: '100%',
        marginBottom: isMobile ? '40px' : '0'
      }}>
        {/* Orbit Project */}
        <div className="fade-in-left" style={{
          flex: '1 1 0',
          position: 'relative',
          background: '#000000',
          aspectRatio: '1/1',
          overflow: 'hidden',
          display: 'block',
          width: '100%',
          minHeight: isMobile ? '250px' : 'auto'
        }}>
          <img
            src={mobileUI}
            alt="Orbit"
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              background: '#000000'
            }}
          />
        </div>

        {/* Cloud App Project */}
        <div className="fade-in-right" style={{
          flex: '1 1 0',
          position: 'relative',
          background: '#000000',
          aspectRatio: '1/1',
          overflow: 'hidden',
          display: 'block',
          width: '100%',
          minHeight: isMobile ? '250px' : 'auto'
        }}>
          <img
            src={appIcon}
            alt="Cloud App"
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              background: '#000000'
            }}
          />
        </div>
      </div>

      {/* Bikes Video */}
      <div className="fade-in-scale" style={{
        width: '100%',
        height: 'auto',
        aspectRatio: '16/9',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '0px',
        marginTop: isMobile ? '16px' : '20px',
        display: 'block',
        background: '#000000'
      }}>
        <AutoplayVideo
          mp4Src={bikesVideo}
          webmSrc={bikesVideoWEBM}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            background: '#000000'
          }}
        />
      </div>
      </div>
    </section>
  );
};

export default WorkSection;
