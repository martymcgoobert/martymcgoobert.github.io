import React from 'react';

interface AboutSectionProps {
  aboutRef: React.RefObject<HTMLDivElement>;
  profileImage: string;
  isMobile: boolean;
  calculateOpacity?: (ref: React.RefObject<HTMLDivElement>, sectionId: string) => number;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  aboutRef,
  profileImage,
  isMobile
}) => {
  return (
    <section
      ref={aboutRef}
      id="about"
      className="about"
      style={{
        opacity: 1,
        width: '100%',
        height: 'auto',
        paddingBottom: '40px',
        background: 'white',
        padding: isMobile ? '16px' : '20px',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        marginTop: '0',
        position: 'relative'
      }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        maxWidth: '1440px',
        width: '100%',
        alignItems: 'center'
      }}>
        {/* About Column */}
        <div style={{
          width: 420,
          height: 507,
          border: '1px solid #D9D9D9',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',

        }}>
          <div className="newspaper-title" style={{
            fontSize: 72,
            fontWeight: 400,
            lineHeight: '80px'
          }}>About</div>

          <div className="monospace-text" style={{
            fontSize: 16,
            lineHeight: '24px'
          }}>
            A 'figuring-out-how-it-works' enthusiast.<br/><br/>

            This attitude is what sparked my drive for learning UX & UI through Google's course & diving into Advanced Figma with Design Lab, over 2 years ago.<br/><br/>

            But I couldn't just stop there. My drive for design has gone a step further. I can't just design my ideas, I need to bring them to life.<br/><br/>

            Currently, I'm exploring and learning what it takes to build high-performance front-ends for creative applications.
          </div>
        </div>

        {/* Profile Image */}
        <div style={{
          width: 420,
          height: 509,
          background: '#D9D9D9',
          overflow: 'hidden'
        }}>
          <img
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
            src={profileImage}
            alt="Matt Mitchell"
            loading="lazy"
          />
        </div>

        {/* Skills Column */}
        <div style={{
          width: 420,
          height: 509,
          border: '1px solid #D9D9D9',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          overflow: 'auto'
        }}>
          <div className="newspaper-title" style={{
            fontSize: 72,
            fontWeight: 400,
            lineHeight: '80px',
            textAlign: 'left'
          }}>Skills</div>

          {/* Current Skills */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <div style={{
              color: 'black',
              fontSize: 20,
              fontFamily: 'Chivo Mono',
              fontWeight: 500
            }}>&lt;Current&gt;</div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}>
              {["UX & UI Design", "Prototyping", "Wireframing & Ideation", "Design Systems"].map((skill, index) => (
                <div key={index} className="monospace-text" style={{
                  lineHeight: '24px'
                }}>{skill}</div>
              ))}
            </div>
          </div>

          {/* Learning Skills */}
          <div style={{
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <div style={{
              color: 'black',
              fontSize: 20,
              fontFamily: 'Chivo Mono',
              fontWeight: 500
            }}>&lt;Actively Learning&gt;</div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}>
              {["Front-end Development", "Nuxtjs & Vuejs", "ThreeJS & Blender", "GSAP & Framer Motion"].map((skill, index) => (
                <div key={index} className="monospace-text" style={{
                  lineHeight: '24px'
                }}>{skill}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
