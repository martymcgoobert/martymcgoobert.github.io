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
      height: isMobile ? 'auto' : '100vh',
      padding: isMobile ? '40px 16px 0' : '0 20px',
      minHeight: isMobile ? '600px' : '100vh',
      background: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: isMobile ? 'space-between' : 'flex-start',
      gap: isMobile ? '20px' : '40px',
      margin: 0,
      borderTop: 'none',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container-max" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: isMobile ? '30px' : '40px',
        maxWidth: '1440px',
        width: '100%',
        marginTop: isMobile ? '30px' : '160px',
        marginBottom: isMobile ? '30px' : '40px',
        padding: isMobile ? '0 16px' : '0 20px',
        flex: isMobile ? '1 0 auto' : 'none'
      }}>
        <div className="fade-in" style={{
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

        <div className="fade-in" style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
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
            className="email-button"
            style={{
              width: isMobile ? '100%' : 'calc(50% - 15px)',
              height: '76px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 20,
              border: 'none',
              cursor: 'pointer',
              borderRadius: '38px',
              color: 'white',
              backgroundColor: 'black'
            }}
          >
            mattjmitchellux@gmail.com
          </button>

          {/* LinkedIn Button */}
          <a href="https://www.linkedin.com/in/matthew-mitchell-955703a2/" target="_blank" rel="noopener noreferrer"
          className="linkedin-button"
          style={{
            width: isMobile ? '100%' : 'calc(50% - 15px)',
            height: '76px',
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            overflow: 'hidden',
            borderRadius: '38px',
            backgroundColor: 'rgba(0, 88, 28, 0.25)'
          }}>
            <div style={{
              width: isMobile ? '50px' : '60px',
              height: isMobile ? '50px' : '60px',
              borderRadius: '50%',
              overflow: 'hidden',
              marginLeft: isMobile ? '8px' : '8px',
              marginRight: '16px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: '#D9D9D9',
              padding: 0
            }}>
              <img
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  borderRadius: '50%',
                  maxWidth: isMobile ? '50px' : '60px',
                  maxHeight: isMobile ? '50px' : '60px'
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
      <div className="fade-in-scale" style={{
        maxWidth: '1440px',
        width: '100%',
        height: isMobile ? '200px' : '402px',
        overflow: 'hidden',
        padding: 0,
        marginTop: isMobile ? 'auto' : 'auto',
        alignSelf: 'center',
        margin: '0 auto'
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
