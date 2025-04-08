import React, { useEffect, useRef } from 'react';

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
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (mobileMenuOpen &&
          menuRef.current &&
          !menuRef.current.contains(event.target as Node) &&
          burgerRef.current &&
          !burgerRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [mobileMenuOpen, setMobileMenuOpen]);
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
      <div className="container-max" style={{
        width: '100%',
        maxWidth: 1440,
        height: isMobile ? '70px' : '80px',
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        padding: isMobile ? '0 16px' : '0 20px'
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
            fontSize: isMobile ? 20 : 24,
            fontWeight: 400,
            lineHeight: isMobile ? '24px' : '28px',
            height: isMobile ? '24px' : '28px'
          }}>
            Matt Mitchell
          </div>
        </div>

        {isMobile ? (
          <div
            ref={burgerRef}
            className="burger-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
            style={{
              padding: 14,
              position: 'relative',
              zIndex: 1001,
              cursor: 'pointer',
              width: '16px',
              height: '16px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'transparent',
              borderRadius: '4px',
              boxSizing: 'content-box'
            }}
          >
            <div style={{
              width: '100%',
              height: '3px',
              backgroundColor: 'black',
              borderRadius: '2px'
            }} />
            <div style={{
              width: '100%',
              height: '3px',
              backgroundColor: 'black',
              marginTop: '5px',
              marginBottom: '5px',
              borderRadius: '2px'
            }} />
            <div style={{
              width: '100%',
              height: '3px',
              backgroundColor: 'black',
              borderRadius: '2px'
            }} />
          </div>
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
            <a href="#talk"
            className="btn-primary lets-talk-button"
            style={{
              height: 44,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textDecoration: 'none',
              borderRadius: '22px',
              backgroundColor: 'rgba(0, 88, 28, 0.25)',
              paddingLeft: '24px',
              paddingRight: '24px'
            }}
            >Let's Talk</a>
          </div>
        )}
      </div>

      {isMobile && (
        <div ref={menuRef} className="mobile-menu" style={{
          position: 'fixed',
          top: isMobile ? 70 : 80,
          left: 0,
          width: '100%',
          background: 'white',
          borderBottom: '1px #D9D9D9 solid',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          zIndex: 999,
          opacity: mobileMenuOpen ? 1 : 0,
          transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
          transition: 'opacity 0.3s ease, transform 0.3s ease, max-height 0.3s ease',
          pointerEvents: mobileMenuOpen ? 'auto' : 'none',
          maxHeight: mobileMenuOpen ? '300px' : '0',
          overflow: 'hidden',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}>
          <a href="#work" className="nav-link" style={{
            fontSize: 18,
            fontFamily: 'Chivo Mono',
            textDecoration: 'none',
            color: 'black',
            padding: '12px 0',
            borderBottom: '1px solid #f5f5f5'
          }}>Work</a>
          <a href="#about" className="nav-link" style={{
            fontSize: 18,
            fontFamily: 'Chivo Mono',
            textDecoration: 'none',
            color: 'black',
            padding: '12px 0',
            borderBottom: '1px solid #f5f5f5'
          }}>About</a>
          <a href="#talk" className="nav-link" style={{
            fontSize: 18,
            fontFamily: 'Chivo Mono',
            textDecoration: 'none',
            color: 'black',
            padding: '12px 0',
            borderBottom: '1px solid #f5f5f5'
          }}>Let's Talk</a>
        </div>
      )}
    </header>
  );
};

export default Header;
