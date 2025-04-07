import React from 'react';
import footerImage from '../../assets/footerimage.png';
import mattPhoto from '../../assets/matt.png';

interface FooterProps {
  isMobile?: boolean;
}

const Footer: React.FC<FooterProps> = ({ isMobile = window.innerWidth <= 768 }) => {
  return (
    <footer className="footer" id="talk" style={{
      width: '100%',
      height: '80vh',
      padding: isMobile ? '40px 16px' : '80px 80px',
      background: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '40px',
      margin: 0,
      borderTop: 'none'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px',
        maxWidth: '900px',
        width: '100%',
        marginTop: '120px'
      }}>
        <div style={{
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: 20,
            fontFamily: 'Chivo Mono',
            fontWeight: 500,
            marginBottom: '10px'
          }}>
            Interested in working together?
            Let's Chat.
          </div>
        </div>

        <div style={{
          display: 'flex',
          gap: '30px',
          width: '100%',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          {/* Email Button */}
          <button
            onClick={() => {
              navigator.clipboard.writeText('mattjmitchellux@gmail.com');
              alert('Email copied to clipboard!');
            }}
            style={{
              width: '420px',
              height: '76px',
              background: 'black',
              borderRadius: '50px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'white',
              fontSize: 20,
              fontFamily: 'Chivo Mono',
              fontWeight: 500,
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
            className="email-button"
          >
            mattjmitchellux@gmail.com
          </button>

          {/* LinkedIn Button */}
          <a href="https://www.linkedin.com/in/matthew-mitchell-955703a2/" target="_blank" rel="noopener noreferrer" style={{
            width: '420px',
            height: '76px',
            background: 'rgba(0, 88, 28, 0.25)',
            borderRadius: '50px',
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            overflow: 'hidden',
            transition: 'background-color 0.3s ease'
          }}
          className="linkedin-button">
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              overflow: 'hidden',
              marginLeft: '4px',
              marginRight: '16px'
            }}>
              <img
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
                src={mattPhoto}
                alt="Profile"
                loading="lazy"
              />
            </div>
            <div style={{
              color: 'black',
              fontSize: 20,
              fontFamily: 'Chivo Mono',
              fontWeight: 600,
              textAlign: 'center',
              flex: 1
            }}>
              LinkedIn
            </div>
          </a>
        </div>
      </div>

      {/* Footer image (full width) */}
      <div style={{
        maxWidth: '1440px',
        height: '402px',
        overflow: 'hidden'
      }}>
        <img
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          src={footerImage}
          alt="Footer decorative pattern"
          loading="lazy"
        />
      </div>
    </footer>
  );
};

export default Footer;
