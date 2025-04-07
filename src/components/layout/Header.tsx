import React from 'react';

interface HeaderProps {
  scrollY: number;
  isMobile: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (isOpen: boolean) => void;
  scrollToTop: () => void;
}

const Header: React.FC<HeaderProps> = ({
  scrollY,
  isMobile,
  mobileMenuOpen,
  setMobileMenuOpen,
  scrollToTop
}) => {
  return (
    <header
      className={`header ${scrollY > 100 ? 'scrolled' : ''} ${isMobile && mobileMenuOpen ? 'mobile-menu-open' : ''}`}
      style={{
        width: '100%',
        height: 80,
        position: 'fixed',
        top: 0,
        left: 0,
        background: 'rgba(255, 255, 255, 0.7)',
        borderBottom: '1px rgba(217, 217, 217, 0.3) solid',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        margin: 0,
        padding: 0
      }}
    >
      <div style={{
        width: '100%',
        maxWidth: 1440,
        height: '80px',
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex'
      }}>
        <div
          onClick={scrollToTop}
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            cursor: 'pointer'
          }}
        >
          <div className="newspaper-title" style={{
            color: 'black',
            fontSize: 24,
            fontWeight: 400,
            lineHeight: '28px',
            height: '28px'
          }}>
            Matt Mitchell
          </div>
        </div>

        {isMobile ? (
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
            style={{
              background: 'none',
              border: 'none',
              padding: 10,
              cursor: 'pointer'
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        ) : (
          <div style={{
            alignSelf: 'stretch',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 40,
            display: 'flex'
          }}>
            <div style={{
              height: 44,
              display: 'flex',
              alignItems: 'center'
            }}>
              <a href="#work" className="nav-link" style={{
                color: 'black',
                fontSize: 16,
                fontFamily: 'Chivo Mono',
                fontWeight: 400,
                lineHeight: '19.2px',
                letterSpacing: '0.08px',
                textDecoration: 'none'
              }}>Work</a>
            </div>
            <div style={{
              height: 44,
              display: 'flex',
              alignItems: 'center'
            }}>
              <a href="#about" className="nav-link" style={{
                color: 'black',
                fontSize: 16,
                fontFamily: 'Chivo Mono',
                fontWeight: 400,
                lineHeight: '19.2px',
                letterSpacing: '0.08px',
                textDecoration: 'none'
              }}>About</a>
            </div>
            <a href="#talk" style={{
              height: 44,
              padding: '4px 40px',
              background: 'rgba(0, 88, 28, 0.25)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'black',
              fontSize: 16,
              fontFamily: 'Chivo Mono',
              fontWeight: 600,
              lineHeight: '19.2px',
              letterSpacing: '0.08px',
              textDecoration: 'none',
              transition: 'background-color 0.3s ease'
            }}
            className="lets-talk-button"
            >Let's Talk</a>
          </div>
        )}
      </div>

      {isMobile && (
        <div className="mobile-menu" style={{
          position: 'fixed',
          top: 80,
          left: 0,
          width: '100%',
          background: 'white',
          borderBottom: '1px #D9D9D9 solid',
          padding: 20,
          display: mobileMenuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          gap: 20,
          zIndex: 999
        }}>
          <a href="#work" className="nav-link" style={{
            fontSize: 18,
            fontFamily: 'Chivo Mono',
            textDecoration: 'none',
            color: 'black'
          }}>Work</a>
          <a href="#about" className="nav-link" style={{
            fontSize: 18,
            fontFamily: 'Chivo Mono',
            textDecoration: 'none',
            color: 'black'
          }}>About</a>
          <a href="#talk" className="green-button" style={{
            display: 'inline-block',
            padding: '10px 20px',
            background: 'rgba(0, 88, 28, 0.25)',
            fontSize: 18,
            fontFamily: 'Chivo Mono',
            fontWeight: 600,
            textDecoration: 'none',
            color: 'black',
            width: 'fit-content'
          }}>Let's Talk</a>
        </div>
      )}
    </header>
  );
};

export default Header;
