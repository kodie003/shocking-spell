import React, { useState } from 'react';
import { useIsMobile } from '../../hooks/use-mobile';

interface BaseComponentProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const PadiLogo = ({
  style,
  className
}: {
  style?: React.CSSProperties;
  className?: string;
}) => (
  <div
    className={className}
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '12px',
      boxSizing: 'border-box',
      cursor: 'pointer',
      ...style
    }}
  >
    {/* Smiling book companion logo with Ghana Gold fill */}
    <svg width="38" height="38" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="10" fill="#FCD116" />
      <path d="M10 24.5C10 22.567 11.567 21 13.5 21H26" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M10 24.5C10 25.8807 11.1193 27 12.5 27H26" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M10 11C10 9.067 11.567 7.5 13.5 7.5H24.5C25.3284 7.5 26 8.17157 26 9V21H13.5C11.567 21 10 22.567 10 24.5V11Z" fill="#FFFFFF" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="13" r="1.5" fill="#111111" />
      <circle cx="21" cy="13" r="1.5" fill="#111111" />
      <path d="M17.5 15.5C18 16 19 16 19.5 15.5" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
    <span
      style={{
        color: '#111111',
        fontSize: '28px',
        fontFamily: '"Quicksand", sans-serif',
        fontWeight: 700,
        letterSpacing: '-0.5px',
        lineHeight: '28px'
      }}
    >
      padi
    </span>
  </div>
);

const NavLink = ({
  children,
  active,
  onClick
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{
        padding: '8px 24px',
        backgroundColor: active ? '#CE1126' : 'transparent',
        borderColor: active ? '#CE1126' : isHovered ? '#006B3F' : '#FCD116',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius: '40px',
        cursor: 'pointer',
        transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: isHovered ? 'translateY(-1px)' : 'none',
        boxShadow: active 
          ? '0 4px 12px rgba(206, 17, 38, 0.25)' 
          : isHovered 
            ? '0 4px 12px rgba(0,0,0,0.04)' 
            : 'none'
      }}
    >
      <span
        style={{
          color: active ? '#FFFFFF' : '#111111',
          fontSize: '14px',
          fontFamily: '"Quicksand", sans-serif',
          fontWeight: 600,
          lineHeight: '24px'
        }}
      >
        {children}
      </span>
    </button>
  );
};

const ActionButton = ({
  text,
  variant = 'primary',
  size = 'md',
  onClick
}: {
  text: string;
  variant?: 'primary' | 'secondary' | 'yellow';
  size?: 'md' | 'lg';
  onClick?: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const colors = {
    primary: {
      bg: 'linear-gradient(135deg, #CE1126 0%, #FCD116 50%, #006B3F 100%)',
      hoverBg: 'linear-gradient(135deg, #006B3F 0%, #FCD116 50%, #CE1126 100%)',
      text: '#FFFFFF',
      border: 'none',
      iconBg: '#FFFFFF',
      iconColor: '#006B3F'
    },
    secondary: {
      bg: 'transparent',
      text: '#111111',
      border: '2px solid #FCD116',
      iconBg: '#FCD116',
      iconColor: '#111111'
    },
    yellow: {
      bg: '#FCD116',
      text: '#111111',
      border: '1px solid #FCD116',
      iconBg: '#111111',
      iconColor: '#FFFFFF'
    }
  };
  const selected = colors[variant];
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        height: size === 'lg' ? '72px' : '56px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: size === 'lg' ? '8px 16px 8px 24px' : '8px 12px 8px 24px',
        gap: '16px',
        backgroundImage: variant === 'primary' 
          ? (isHovered ? colors.primary.hoverBg : colors.primary.bg) 
          : 'none',
        backgroundColor: variant === 'primary' ? 'transparent' : selected.bg,
        borderColor: selected.border,
        borderStyle: variant === 'primary' ? 'none' : 'solid',
        borderWidth: variant === 'primary' ? '0px' : '2px',
        borderRadius: '40px',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isHovered ? 'scale(1.03) translateY(-1px)' : 'scale(1)',
        boxShadow: isHovered 
          ? (variant === 'primary' ? '0 12px 28px rgba(0, 107, 63, 0.25)' : '0 8px 20px rgba(252, 209, 22, 0.25)') 
          : 'none'
      }}
    >
      <span
        style={{
          color: selected.text,
          fontSize: size === 'lg' ? '20px' : '16px',
          fontFamily: '"Quicksand", sans-serif',
          fontWeight: 700
        }}
      >
        {text}
      </span>
      <div
        style={{
          width: '40px',
          height: '40px',
          backgroundColor: selected.iconBg,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.3s ease',
          transform: isHovered ? 'rotate(-15deg) scale(1.05)' : 'none',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.6667 1.33333L1 6.88889L6.55556 9.44444L9.11111 15L14.6667 1.33333Z" stroke={isHovered && variant === 'primary' ? '#CE1126' : selected.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6.55554 9.44444L14.6667 1.33333" stroke={isHovered && variant === 'primary' ? '#CE1126' : selected.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </button>
  );
};

const FAQItem = ({
  question,
  answer
}: {
  question: string;
  answer?: string;
}) => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsOpen(!isOpen)}
      style={{
        width: '100%',
        maxWidth: '703px',
        padding: isMobile ? '16px 16px 16px 20px' : '24px 24px 24px 32px',
        backgroundColor: '#FFFFFF',
        border: '1.5px solid rgba(252, 209, 22, 0.15)',
        borderLeft: isOpen ? '6px solid #006B3F' : '1.5px solid rgba(252, 209, 22, 0.15)',
        borderRadius: isOpen ? '24px' : '40px',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        boxShadow: isHovered 
          ? '0 12px 30px rgba(0, 107, 63, 0.08)' 
          : '0 4px 16px rgba(0,0,0,0.01)'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <span
          style={{
            color: '#111111',
            fontSize: isMobile ? '16px' : '20px',
            fontFamily: '"Quicksand", sans-serif',
            fontWeight: 700,
            lineHeight: isMobile ? '24px' : '28px',
            flex: 1,
            paddingRight: '16px'
          }}
        >
          {question}
        </span>
        <div
          style={{
            width: isMobile ? '36px' : '48px',
            height: isMobile ? '36px' : '48px',
            backgroundColor: isOpen ? 'rgba(0, 107, 63, 0.15)' : 'rgba(252, 209, 22, 0.1)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'transform 0.3s ease, background-color 0.3s ease',
            transform: isOpen ? 'rotate(45deg)' : 'none'
          }}
        >
          <svg width={isMobile ? "18" : "24"} height={isMobile ? "18" : "24"} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 8V24M24 16H8" stroke="#006B3F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      {isOpen && (
        <div
          style={{
            paddingTop: '8px',
            paddingRight: isMobile ? '0px' : '24px',
            color: 'rgba(99, 99, 99, 1)',
            fontSize: isMobile ? '14px' : '16px',
            fontFamily: '"Quicksand", sans-serif',
            lineHeight: '1.6',
            fontWeight: 500
          }}
        >
          {answer}
        </div>
      )}
    </div>
  );
};

export const PadiLandingPage = (props: BaseComponentProps) => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [hoveredBlogIndex, setHoveredBlogIndex] = useState<number | null>(null);
  const [hoveredFeatureIndex, setHoveredFeatureIndex] = useState<number | null>(null);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="padi-landing-page"
      style={{
        width: '100%',
        maxWidth: '1440px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        boxSizing: 'border-box',
        position: 'relative',
        overflowX: 'hidden',
        ...props.style
      }}
    >
      {/* Header Navigation */}
      <header
        style={{
          height: isMobile ? '80px' : '136px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: isMobile ? '20px 24px' : '40px 80px',
          backgroundColor: '#FFFFFF',
          alignSelf: 'stretch',
          position: 'relative',
          zIndex: 1002
        }}
      >
        <PadiLogo />
        {!isMobile ? (
          <>
            <nav
              style={{
                display: 'flex',
                gap: '8px'
              }}
            >
              <NavLink active={activeTab === 'Home'} onClick={() => { setActiveTab('Home'); handleScrollToSection('hero'); }}>Home</NavLink>
              <NavLink active={activeTab === 'Features'} onClick={() => { setActiveTab('Features'); handleScrollToSection('features'); }}>Features</NavLink>
              <NavLink active={activeTab === 'Subjects'} onClick={() => { setActiveTab('Subjects'); handleScrollToSection('subjects'); }}>Subjects</NavLink>
              <NavLink active={activeTab === 'FAQs'} onClick={() => { setActiveTab('FAQs'); handleScrollToSection('faqs'); }}>FAQs</NavLink>
            </nav>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px'
              }}
            >
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: 600,
                  fontFamily: '"Quicksand", sans-serif',
                  cursor: 'pointer',
                  color: 'rgba(18, 18, 18, 1)'
                }}
              >
                Sign In
              </button>
              <ActionButton text="Get App" variant="secondary" onClick={() => handleScrollToSection('cta')} />
            </div>
          </>
        ) : (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1003
            }}
          >
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2.5" strokeLinecap="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        )}
      </header>

      {/* Mobile Drawer Overlay */}
      {isMobile && isMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#FFFFFF',
            zIndex: 1001,
            display: 'flex',
            flexDirection: 'column',
            padding: '100px 24px 40px 24px',
            boxSizing: 'border-box',
            gap: '24px',
            overflowY: 'auto'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
            <button
              onClick={() => { setIsMenuOpen(false); setActiveTab('Home'); handleScrollToSection('hero'); }}
              style={{ width: '100%', padding: '16px', border: 'none', background: 'none', fontFamily: '"Quicksand", sans-serif', fontSize: '20px', fontWeight: 600, color: activeTab === 'Home' ? '#CE1126' : '#111111', cursor: 'pointer' }}
            >
              Home
            </button>
            <button
              onClick={() => { setIsMenuOpen(false); setActiveTab('Features'); handleScrollToSection('features'); }}
              style={{ width: '100%', padding: '16px', border: 'none', background: 'none', fontFamily: '"Quicksand", sans-serif', fontSize: '20px', fontWeight: 600, color: activeTab === 'Features' ? '#CE1126' : '#111111', cursor: 'pointer' }}
            >
              Features
            </button>
            <button
              onClick={() => { setIsMenuOpen(false); setActiveTab('Subjects'); handleScrollToSection('subjects'); }}
              style={{ width: '100%', padding: '16px', border: 'none', background: 'none', fontFamily: '"Quicksand", sans-serif', fontSize: '20px', fontWeight: 600, color: activeTab === 'Subjects' ? '#CE1126' : '#111111', cursor: 'pointer' }}
            >
              Subjects
            </button>
            <button
              onClick={() => { setIsMenuOpen(false); setActiveTab('FAQs'); handleScrollToSection('faqs'); }}
              style={{ width: '100%', padding: '16px', border: 'none', background: 'none', fontFamily: '"Quicksand", sans-serif', fontSize: '20px', fontWeight: 600, color: activeTab === 'FAQs' ? '#CE1126' : '#111111', cursor: 'pointer' }}
            >
              FAQs
            </button>
          </div>
          <div style={{ height: '1px', backgroundColor: 'rgba(18, 18, 18, 0.08)', width: '100%' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', marginTop: 'auto' }}>
            <button
              style={{
                background: 'none',
                border: 'none',
                fontSize: '18px',
                fontWeight: 600,
                fontFamily: '"Quicksand", sans-serif',
                cursor: 'pointer',
                color: 'rgba(18, 18, 18, 1)',
                padding: '12px'
              }}
            >
              Sign In
            </button>
            <ActionButton text="Get App" variant="secondary" size="lg" onClick={() => { setIsMenuOpen(false); handleScrollToSection('cta'); }} />
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section
        id="hero"
        style={{
          padding: isMobile ? '40px 16px 60px 16px' : '80px 8px 100px 8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          minHeight: isMobile ? 'auto' : '620px',
          backgroundColor: '#FFFFFF',
          overflow: 'hidden'
        }}
      >


        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: isMobile ? '24px' : '48px',
            zIndex: 10,
            textAlign: 'center',
            position: 'relative',
            width: '100%',
            maxWidth: '1280px'
          }}
        >
          {/* Companion Box (Centered Top with Ghana flag) */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              width: '96px',
              height: '96px',
              marginBottom: '-24px',
              zIndex: 11
            }}
          >
            <div
              style={{
                width: '84px',
                height: '84px',
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(12px)',
                border: '2px solid #FCD116',
                borderRadius: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 12px 24px rgba(252, 209, 22, 0.15)',
                position: 'relative'
              }}
            >
              {/* Ghana Flag on top right of the companion card */}
              <div
                style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '-12px',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '28px',
                  height: '18px',
                  border: '1px solid #111111',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                  zIndex: 2,
                  transform: 'rotate(12deg)'
                }}
              >
                <div style={{ flex: 1, backgroundColor: '#CE1126' }} />
                <div style={{ flex: 1, backgroundColor: '#FCD116', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* Tiny black star inside flag */}
                  <svg width="6" height="6" viewBox="0 0 24 24" fill="#111111" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"/>
                  </svg>
                </div>
                <div style={{ flex: 1, backgroundColor: '#006B3F' }} />
              </div>

              {/* Yellow book companion logo */}
              <svg width="56" height="56" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24.5C10 22.567 11.567 21 13.5 21H26" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M10 24.5C10 25.8807 11.1193 27 12.5 27H26" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M10 11C10 9.067 11.567 7.5 13.5 7.5H24.5C25.3284 7.5 26 8.17157 26 9V21H13.5C11.567 21 10 22.567 10 24.5V11Z" fill="#FCD116" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="16" cy="13" r="1.5" fill="#111111" />
                <circle cx="21" cy="13" r="1.5" fill="#111111" />
                <path d="M17.5 15.5C18 16 19 16 19.5 15.5" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          <div style={{ position: 'relative', width: '100%' }}>
            <h1
              style={{
                width: '100%',
                maxWidth: isMobile ? '100%' : '840px',
                margin: '0 auto',
                color: '#111111',
                fontSize: isMobile ? '36px' : '76px',
                fontFamily: '"Quicksand", sans-serif',
                fontWeight: 700,
                lineHeight: isMobile ? '46px' : '88px',
                whiteSpace: isMobile ? 'normal' : 'pre-line',
                letterSpacing: '-1.5px',
                position: 'relative',
                zIndex: 2
              }}
            >
              {isMobile ? 'Your Ultimate Study Companion for BECE Exam Success' : 'Your Ultimate Study Companion\nfor BECE Exam Success'}
            </h1>
            {!isMobile && (
              <>
                <img
                  src="https://storage.googleapis.com/storage.magicpath.ai/user/410302339090632704/figma-assets/2f256cdc-a704-4b2a-bfac-f015322f3983.svg"
                  alt=""
                  style={{
                    position: 'absolute',
                    left: '-240px',
                    top: '40px',
                    width: '240px',
                    zIndex: 1,
                    pointerEvents: 'none',
                    filter: 'hue-rotate(140deg) saturate(2)'
                  }}
                />
                <img
                  src="https://storage.googleapis.com/storage.magicpath.ai/user/410302339090632704/figma-assets/d5a77132-c547-4a08-b549-63daad3108bf.svg"
                  alt=""
                  style={{
                    position: 'absolute',
                    right: '-220px',
                    top: '40px',
                    width: '220px',
                    zIndex: 1,
                    pointerEvents: 'none'
                  }}
                />
              </>
            )}
          </div>

          <p
            style={{
              width: '100%',
              maxWidth: isMobile ? '100%' : '560px',
              color: 'rgba(99, 99, 99, 1)',
              fontSize: isMobile ? '15px' : '18px',
              fontFamily: '"Quicksand", sans-serif',
              fontWeight: 500,
              lineHeight: isMobile ? '26px' : '32.4px',
              margin: '0 auto'
            }}
          >
            The mobile learning app built specifically for Ghanaian JHS 1–3 students. Master curriculum topics, practice past questions with real-time feedback, and study with personalized AI support.
          </p>

          <ActionButton text="Get Started Now" variant="primary" size="lg" onClick={() => handleScrollToSection('cta')} />
        </div>

        {/* Small decorations */}
        {!isMobile && (
          <>
            <img
              src="https://storage.googleapis.com/storage.magicpath.ai/user/410302339090632704/figma-assets/f5d8d500-8fda-4870-9a50-df81b33cb760.svg"
              alt="Decoration"
              style={{
                position: 'absolute',
                left: '141px',
                top: '257px',
                width: '136px',
                zIndex: 1,
                opacity: 0.8
              }}
            />
            <div
              style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#FCD116',
                borderRadius: '50%',
                position: 'absolute',
                right: '180px',
                top: '320px',
                zIndex: 1,
                boxShadow: '0 4px 12px rgba(252, 209, 22, 0.2)'
              }}
            />
          </>
        )}
      </section>

      {/* Features Section */}
      <section
        id="features"
        style={{
          padding: isMobile ? '40px 20px' : '80px 80px',
          display: 'flex',
          flexDirection: 'column',
          gap: isMobile ? '32px' : '64px',
          backgroundColor: '#FFFFFF'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: isMobile ? 'flex-start' : 'center',
            gap: isMobile ? '24px' : '0'
          }}
        >
          <h2
            style={{
              width: isMobile ? '100%' : '572px',
              fontSize: isMobile ? '32px' : '64px',
              fontWeight: 700,
              fontFamily: '"Quicksand", sans-serif',
              lineHeight: isMobile ? '42px' : '76.8px',
              margin: 0,
              color: '#111111',
              letterSpacing: '-1px'
            }}
          >
            Interactive features built for your success
          </h2>
          <div
            style={{
              position: 'relative',
              width: isMobile ? '100%' : '338px',
              maxWidth: '338px',
              height: isMobile ? '180px' : '232px'
            }}
          >
            <img
              src="https://storage.googleapis.com/storage.magicpath.ai/user/410302339090632704/figma-assets/b1d36fdb-c695-4ee4-9878-0d78a7ca478c.svg"
              alt=""
              style={{
                opacity: 0.1,
                width: '100%'
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: '143px',
                top: '65px',
                padding: '8px 24px',
                backgroundColor: '#FCD116',
                color: '#111111',
                borderRadius: '72px',
                fontFamily: '"Quicksand", sans-serif',
                fontWeight: 700,
                fontSize: '15px',
                boxShadow: '0 4px 12px rgba(252, 209, 22, 0.2)'
              }}
            >
              #practice
            </div>
            <div
              style={{
                position: 'absolute',
                left: '15px',
                top: '33px',
                padding: '12px 28px',
                backgroundColor: '#CE1126',
                color: '#FFFFFF',
                borderRadius: '72px',
                fontFamily: '"Quicksand", sans-serif',
                fontWeight: 700,
                fontSize: '15px',
                boxShadow: '0 4px 12px rgba(206, 17, 38, 0.25)'
              }}
            >
              #learn
            </div>
            <div
              style={{
                position: 'absolute',
                left: '110px',
                top: '159px',
                padding: '8px 24px',
                backgroundColor: '#006B3F',
                color: '#FFF',
                borderRadius: '72px',
                fontFamily: '"Quicksand", sans-serif',
                fontWeight: 700,
                fontSize: '15px',
                boxShadow: '0 4px 12px rgba(0, 107, 63, 0.2)'
              }}
            >
              #focus
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? '24px' : '32px'
          }}
        >
          {/* Card 1: Daily Challenges (Light Green Card) */}
          <div
            onMouseEnter={() => setHoveredFeatureIndex(0)}
            onMouseLeave={() => setHoveredFeatureIndex(null)}
            style={{
              height: isMobile ? 'auto' : '448px',
              backgroundColor: '#ECFDF5',
              color: '#111111',
              borderRadius: '40px',
              padding: isMobile ? '32px 24px' : '40px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: hoveredFeatureIndex === 0 ? '0 20px 40px rgba(0, 107, 63, 0.12)' : '0 10px 30px rgba(0, 107, 63, 0.04)',
              border: '1px solid rgba(0, 107, 63, 0.15)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: hoveredFeatureIndex === 0 ? 'scale(1.02) translateY(-4px)' : 'none'
            }}
          >
            {/* Red accent badge (Streak highlight) */}
            <div
              style={{
                position: 'absolute',
                top: '40px',
                right: '40px',
                backgroundColor: 'rgba(206, 17, 38, 0.12)',
                color: '#CE1126',
                padding: '6px 14px',
                borderRadius: '16px',
                fontSize: '12px',
                fontWeight: 700,
                fontFamily: '"Quicksand", sans-serif',
                zIndex: 2
              }}
            >
              Streak +5
            </div>

            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                backgroundColor: 'rgba(0, 107, 63, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 16px rgba(0,0,0,0.02)',
                border: '1.5px solid rgba(0, 107, 63, 0.2)'
              }}
            >
              <img
                src="https://storage.googleapis.com/storage.magicpath.ai/user/410302339090632704/figma-assets/fed88ac7-f89a-4fd1-aa50-710e2e80ab1e.svg"
                alt="Daily Challenges"
                style={{
                  width: '32px',
                  height: '32px'
                }}
              />
            </div>
            <h3
              style={{
                fontSize: isMobile ? '28px' : '36px',
                fontFamily: '"Quicksand", sans-serif',
                fontWeight: 700,
                marginTop: isMobile ? '40px' : '60px',
                lineHeight: isMobile ? '34px' : '44px',
                whiteSpace: 'pre-line',
                color: '#111111'
              }}
            >
              {'Daily \nChallenges'}
            </h3>
            <p
              style={{
                fontSize: '16px',
                fontFamily: '"Quicksand", sans-serif',
                fontWeight: 500,
                color: 'rgba(18, 18, 18, 0.75)',
                lineHeight: '26px',
                marginTop: '16px'
              }}
            >
              Test your knowledge with 10 fun trivia questions daily. Compete with peers and keep your learning streak active!
            </p>
            <img
              src="https://storage.googleapis.com/storage.magicpath.ai/user/410302339090632704/figma-assets/1fde48de-66cb-4a5f-b47c-8b1705521d98.svg"
              alt=""
              style={{
                position: 'absolute',
                right: '-60px',
                top: '-40px',
                opacity: 0.15
              }}
            />
          </div>

          {/* Card 2: AI Study Sessions (Light Red Card) */}
          <div
            onMouseEnter={() => setHoveredFeatureIndex(1)}
            onMouseLeave={() => setHoveredFeatureIndex(null)}
            style={{
              height: isMobile ? 'auto' : '448px',
              backgroundColor: '#FEF2F2',
              color: '#111111',
              borderRadius: '40px',
              padding: isMobile ? '32px 24px' : '40px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: hoveredFeatureIndex === 1 ? '0 20px 40px rgba(206, 17, 38, 0.12)' : '0 10px 30px rgba(206, 17, 38, 0.04)',
              border: '1px solid rgba(206, 17, 38, 0.15)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: hoveredFeatureIndex === 1 ? 'scale(1.02) translateY(-4px)' : 'none'
            }}
          >
            {/* Red accent badge (Gemini highlight) */}
            <div
              style={{
                position: 'absolute',
                top: '40px',
                right: '40px',
                backgroundColor: 'rgba(206, 17, 38, 0.12)',
                color: '#CE1126',
                padding: '6px 14px',
                borderRadius: '16px',
                fontSize: '12px',
                fontWeight: 700,
                fontFamily: '"Quicksand", sans-serif',
                zIndex: 2
              }}
            >
              Gemini 2.0
            </div>

            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                backgroundColor: 'rgba(206, 17, 38, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 16px rgba(0,0,0,0.02)',
                border: '1.5px solid rgba(206, 17, 38, 0.2)'
              }}
            >
              <img
                src="https://storage.googleapis.com/storage.magicpath.ai/user/410302339090632704/figma-assets/5a882240-392e-4ce5-abf6-44bc8d05b6e8.svg"
                alt="AI Study Sessions"
                style={{
                  width: '32px',
                  height: '32px'
                }}
              />
            </div>
            <h3
              style={{
                fontSize: isMobile ? '28px' : '36px',
                fontFamily: '"Quicksand", sans-serif',
                fontWeight: 700,
                marginTop: isMobile ? '40px' : '60px',
                lineHeight: isMobile ? '34px' : '44px',
                color: '#111111'
              }}
            >
              AI Study Sessions
            </h3>
            <p
              style={{
                fontSize: '16px',
                fontFamily: '"Quicksand", sans-serif',
                fontWeight: 500,
                color: 'rgba(18, 18, 18, 0.75)',
                lineHeight: '26px',
                marginTop: '16px'
              }}
            >
              Struggling with a subtopic? Get tailored curriculum explanations with local Ghanaian references, powered by Gemini.
            </p>
            <img
              src="https://storage.googleapis.com/storage.magicpath.ai/user/410302339090632704/figma-assets/66631b43-eb55-43a6-8196-ea8ac2027c9f.svg"
              alt=""
              style={{
                position: 'absolute',
                right: '-20px',
                top: '-30px',
                opacity: 0.15
              }}
            />
          </div>

          {/* Card 3: BECE Practice (Light Gold Card) */}
          <div
            onMouseEnter={() => setHoveredFeatureIndex(2)}
            onMouseLeave={() => setHoveredFeatureIndex(null)}
            style={{
              height: isMobile ? 'auto' : '448px',
              backgroundColor: '#FEF9C3',
              color: '#111111',
              borderRadius: '40px',
              padding: isMobile ? '32px 24px' : '40px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: hoveredFeatureIndex === 2 ? '0 20px 40px rgba(252, 209, 22, 0.15)' : '0 10px 30px rgba(252, 209, 22, 0.04)',
              border: '1px solid rgba(252, 209, 22, 0.3)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: hoveredFeatureIndex === 2 ? 'scale(1.02) translateY(-4px)' : 'none'
            }}
          >
            {/* Red accent badge (WAEC highlight) */}
            <div
              style={{
                position: 'absolute',
                top: '40px',
                right: '40px',
                backgroundColor: 'rgba(206, 17, 38, 0.12)',
                color: '#CE1126',
                padding: '6px 14px',
                borderRadius: '16px',
                fontSize: '12px',
                fontWeight: 700,
                fontFamily: '"Quicksand", sans-serif',
                zIndex: 2
              }}
            >
              WAEC Std
            </div>

            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                backgroundColor: 'rgba(252, 209, 22, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 16px rgba(0,0,0,0.02)',
                border: '1.5px solid rgba(252, 209, 22, 0.3)'
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
            </div>
            <h3
              style={{
                fontSize: isMobile ? '28px' : '36px',
                fontFamily: '"Quicksand", sans-serif',
                fontWeight: 700,
                marginTop: isMobile ? '40px' : '60px',
                lineHeight: isMobile ? '34px' : '44px',
                color: '#111111'
              }}
            >
              BECE Practice
            </h3>
            <p
              style={{
                fontSize: '16px',
                fontFamily: '"Quicksand", sans-serif',
                fontWeight: 500,
                color: 'rgba(18, 18, 18, 0.75)',
                lineHeight: '26px',
                marginTop: '16px'
              }}
            >
              Practice WAEC-standard Objective and Essay past questions under real-time exam conditions with offline support.
            </p>
            <img
              src="https://storage.googleapis.com/storage.magicpath.ai/user/410302339090632704/figma-assets/79fa3a56-c617-4213-858e-b62f2ffb606b.svg"
              alt=""
              style={{
                position: 'absolute',
                right: '-40px',
                top: '20px',
                opacity: 0.15
              }}
            />
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section
        style={{
          padding: isMobile ? '48px 20px' : '88px 80px',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          minHeight: isMobile ? 'auto' : '700px',
          backgroundColor: '#FFFFFF',
          gap: isMobile ? '40px' : '0'
        }}
      >
        <div
          style={{
            maxWidth: isMobile ? '100%' : '734px',
            display: 'flex',
            flexDirection: 'column',
            gap: isMobile ? '24px' : '40px',
            width: '100%'
          }}
        >
          <div style={{ position: 'relative' }}>
            <img
              src="https://storage.googleapis.com/storage.magicpath.ai/user/410302339090632704/figma-assets/f0a95b7b-0c30-42d0-aaba-9137be5ce1ba.svg"
              alt=""
              style={{
                position: 'absolute',
                right: '0',
                bottom: '-20px',
                width: isMobile ? '240px' : '375px',
                opacity: 0.15
              }}
            />
            <h2
              style={{
                fontSize: isMobile ? '32px' : '56px',
                fontFamily: '"Quicksand", sans-serif',
                fontWeight: 700,
                lineHeight: isMobile ? '42px' : '68px',
                margin: 0,
                position: 'relative',
                letterSpacing: '-1px',
                color: '#111111'
              }}
            >
              Study materials designed specifically for the Ghanaian JHS curriculum
            </h2>
          </div>
          <p
            style={{
              fontSize: isMobile ? '16px' : '18px',
              fontFamily: '"Quicksand", sans-serif',
              color: 'rgba(99, 99, 99, 1)',
              fontWeight: 500,
              lineHeight: isMobile ? '28px' : '32.4px'
            }}
          >
            No need to carry heavy textbooks! Access lesson notes, simplified topic summaries, and practice quizzes for all JHS 1, 2, and 3 BECE subjects directly on your phone.
          </p>
          <div style={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-start' }}>
            <ActionButton text="Discover Subjects" variant="secondary" onClick={() => handleScrollToSection('subjects')} />
          </div>
        </div>

        {/* Collage Container (Wrapper to prevent overflow on mobile) */}
        <div
          style={{
            width: isMobile ? '100%' : '576px',
            height: isMobile ? '350px' : '602px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              width: '576px',
              height: '602px',
              position: 'absolute',
              transform: isMobile ? 'scale(0.58)' : 'scale(1)',
              transformOrigin: 'top center'
            }}
          >
            {/* Background Pill Decorations - Ghana Inspired Tech Gradients */}
            <div
              style={{
                width: '532px',
                height: '147px',
                background: 'linear-gradient(135deg, rgba(0, 107, 63, 0.12) 0%, rgba(252, 209, 22, 0.12) 100%)',
                borderRadius: '100px',
                position: 'absolute',
                left: '19px',
                top: '398px'
              }}
            />
            <div
              style={{
                width: '459px',
                height: '146px',
                background: 'linear-gradient(135deg, rgba(0, 107, 63, 0.12) 0%, rgba(10, 132, 255, 0.12) 100%)',
                borderRadius: '100px',
                position: 'absolute',
                left: '92px',
                top: '229px'
              }}
            />
            <div
              style={{
                width: '327px',
                height: '147px',
                background: 'linear-gradient(135deg, rgba(206, 17, 38, 0.08) 0%, rgba(252, 209, 22, 0.12) 100%)',
                borderRadius: '100px',
                position: 'absolute',
                left: '224px',
                top: '59px'
              }}
            />

            {/* Student 1 (Bottom Left) */}
            <div
              style={{
                width: '323px',
                height: '240px',
                position: 'absolute',
                left: '68px',
                top: '329px',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '6px solid #FFFFFF',
                boxShadow: '0 12px 36px rgba(0, 107, 63, 0.12)',
                backgroundColor: '#FEF9C3'
              }}
            >
              <img
                src="/padi-images/science_student_2.jpg"
                alt="Student reading"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* Student 2 (Middle) */}
            <div
              style={{
                width: '284px',
                height: '210px',
                position: 'absolute',
                left: '257px',
                top: '186px',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '6px solid #FFFFFF',
                boxShadow: '0 12px 36px rgba(0, 107, 63, 0.12)',
                backgroundColor: '#FEF9C3'
              }}
            >
              <img
                src="/padi-images/pexels-samuel-egbe-339534876-14011470.jpg"
                alt="Student focused"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* Student 3 (Top) */}
            <div
              style={{
                width: '180px',
                height: '160px',
                position: 'absolute',
                left: '258px',
                top: '0px',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '6px solid #FFFFFF',
                boxShadow: '0 12px 36px rgba(0, 107, 63, 0.12)',
                backgroundColor: '#FEF9C3'
              }}
            >
              <img
                src="/padi-images/pexels-ezeguna_graphy-sulaiman-muhammad-2153324075-34326632.jpg"
                alt="Student writing"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

            <img
              src="https://storage.googleapis.com/storage.magicpath.ai/user/410302339090632704/figma-assets/5b1de04f-12cd-45b5-81cd-5a4d737d4093.svg"
              alt=""
              style={{
                position: 'absolute',
                right: '47px',
                top: '0px',
                opacity: 0.6
              }}
            />
          </div>
        </div>
      </section>

      {/* BECE Subjects Section */}
      <section
        id="subjects"
        style={{
          backgroundColor: '#2563EB',
          padding: isMobile ? '60px 20px' : '120px 80px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflow: 'hidden'
        }}
      >
        {/* Kente Corner SVG - Top Left */}
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', left: 0, top: 0, opacity: 0.12, pointerEvents: 'none' }}>
          <rect x="0" y="0" width="40" height="40" fill="#CE1126" />
          <rect x="40" y="0" width="40" height="40" fill="#FCD116" />
          <rect x="80" y="0" width="40" height="40" fill="#006B3F" />
          <rect x="0" y="40" width="40" height="40" fill="#FCD116" />
          <rect x="40" y="40" width="40" height="40" fill="#006B3F" />
          <rect x="80" y="40" width="40" height="40" fill="#CE1126" />
          <rect x="0" y="80" width="40" height="40" fill="#006B3F" />
          <rect x="40" y="80" width="40" height="40" fill="#CE1126" />
          <rect x="80" y="80" width="40" height="40" fill="#FCD116" />
        </svg>

        {/* Kente Corner SVG - Bottom Right */}
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', right: 0, bottom: 0, opacity: 0.12, pointerEvents: 'none' }}>
          <rect x="0" y="0" width="40" height="40" fill="#FCD116" />
          <rect x="40" y="0" width="40" height="40" fill="#CE1126" />
          <rect x="80" y="0" width="40" height="40" fill="#006B3F" />
          <rect x="0" y="40" width="40" height="40" fill="#CE1126" />
          <rect x="40" y="40" width="40" height="40" fill="#006B3F" />
          <rect x="80" y="40" width="40" height="40" fill="#FCD116" />
          <rect x="0" y="80" width="40" height="40" fill="#006B3F" />
          <rect x="40" y="80" width="40" height="40" fill="#FCD116" />
          <rect x="80" y="80" width="40" height="40" fill="#CE1126" />
        </svg>

        {!isMobile && (
          <img
            src="https://storage.googleapis.com/storage.magicpath.ai/user/410302339090632704/figma-assets/5bf352a2-f911-4350-98cd-c63295ce11e7.svg"
            alt=""
            style={{
              position: 'absolute',
              left: '80px',
              top: '80px',
              width: '114px',
              opacity: 0.15
            }}
          />
        )}
        <h2
          style={{
            maxWidth: isMobile ? '100%' : '994px',
            color: '#FFFFFF',
            fontSize: isMobile ? '32px' : '56px',
            fontFamily: '"Quicksand", sans-serif',
            fontWeight: 700,
            textAlign: 'center',
            lineHeight: isMobile ? '42px' : '66px',
            marginBottom: isMobile ? '40px' : '80px',
            letterSpacing: '-1px'
          }}
        >
          We cover all critical subjects to help you master concepts and excel in your exams
        </h2>

        <div
          style={{
            display: 'flex',
            gap: isMobile ? '20px' : '32px',
            position: 'relative',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}
        >
          {[
            {
              name: 'Mathematics',
              role: 'Equations, Shapes & Data',
              img: '/padi-images/math_teacher.jpg'
            },
            {
              name: 'Integrated Science',
              role: 'Physics, Chemistry & Biology',
              img: '/padi-images/science_lab_3.jpg'
            },
            {
              name: 'English Language',
              role: 'Grammar, Essay & Comprehension',
              img: '/padi-images/english_teacher.jpg'
            },
            {
              name: 'Social Studies',
              role: 'Environment, Government & Culture',
              img: '/padi-images/social_studies.jpg'
            }
          ].map((subj, idx) => (
            <div
              key={idx}
              style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '24px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '32px 24px',
                borderRadius: '40px',
                width: isMobile ? '100%' : '240px',
                maxWidth: isMobile ? '280px' : 'none',
                minHeight: isMobile ? 'auto' : '340px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease'
              }}
            >
              <div
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  border: '3px solid #FCD116',
                  boxShadow: '0 0 20px rgba(252, 209, 22, 0.35)'
                }}
              >
                <img
                  src={subj.img}
                  alt={subj.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div>
                <h4
                  style={{
                    color: '#FFF',
                    fontSize: '22px',
                    fontFamily: '"Quicksand", sans-serif',
                    fontWeight: 700,
                    margin: '0 0 8px 0'
                  }}
                >
                  {subj.name}
                </h4>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.85)',
                    fontSize: '15px',
                    fontFamily: '"Quicksand", sans-serif',
                    fontWeight: 500,
                    margin: 0,
                    lineHeight: '22px'
                  }}
                >
                  {subj.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {!isMobile && (
          <svg 
            width="96" 
            height="96" 
            viewBox="0 0 96 96" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: 'absolute',
              right: '80px',
              top: '310px',
              opacity: 0.25
            }}
          >
            <rect width="96" height="96" rx="16" fill="#0A84FF" />
            <rect x="12" y="12" width="20" height="20" rx="4" fill="#0563C1" />
            <rect x="38" y="12" width="20" height="20" rx="4" fill="#0563C1" />
            <rect x="64" y="12" width="20" height="20" rx="4" fill="#0563C1" />
            <rect x="12" y="38" width="20" height="20" rx="4" fill="#0563C1" />
            <rect x="38" y="38" width="20" height="20" rx="4" fill="#0563C1" />
            <rect x="64" y="38" width="20" height="20" rx="4" fill="#0563C1" />
            <rect x="12" y="64" width="20" height="20" rx="4" fill="#0563C1" />
            <rect x="38" y="64" width="20" height="20" rx="4" fill="#0563C1" />
            <rect x="64" y="64" width="20" height="20" rx="4" fill="#0563C1" />
          </svg>
        )}
      </section>

      {/* Blog/Tips Section */}
      <section
        style={{
          padding: isMobile ? '48px 20px' : '80px 80px',
          display: 'flex',
          flexDirection: 'column',
          gap: isMobile ? '32px' : '48px'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: isMobile ? 'flex-start' : 'center',
            gap: isMobile ? '16px' : '0'
          }}
        >
          <h2
            style={{
              fontSize: isMobile ? '32px' : '56px',
              fontFamily: '"Quicksand", sans-serif',
              fontWeight: 700,
              margin: 0,
              letterSpacing: '-1px'
            }}
          >
            Study tips & resources
          </h2>
          <ActionButton text="Read More" variant="secondary" />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? '24px' : '32px'
          }}
        >
          {[
            {
              title: 'How to Prepare for the BECE Exam',
              desc: 'Top revision techniques, time management, and exam strategies to help you score Grade 1s.',
              img: '/padi-images/pexels-rufaro-26855735.jpg'
            },
            {
              title: 'Understanding the New BECE Format',
              desc: 'What JHS students need to know about the latest WAEC examination and syllabus updates.',
              img: '/padi-images/pexels-keira-burton-6147295.jpg'
            },
            {
              title: 'Studying with AI: A Student\'s Guide',
              desc: 'How to use Padi\'s Gemini integrations to get clear, bite-sized answers for difficult concepts.',
              img: '/padi-images/pexels-rdne-8499487.jpg'
            }
          ].map((blog, idx) => {
            const topBorderColors = ['#CE1126', '#FCD116', '#006B3F'];
            const shadowColors = [
              'rgba(206, 17, 38, 0.12), 0 0 0 1px rgba(206, 17, 38, 0.08)',
              'rgba(252, 209, 22, 0.15), 0 0 0 1px rgba(252, 209, 22, 0.1)',
              'rgba(0, 107, 63, 0.12), 0 0 0 1px rgba(0, 107, 63, 0.08)'
            ];
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredBlogIndex(idx)}
                onMouseLeave={() => setHoveredBlogIndex(null)}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  height: isMobile ? 'auto' : '480px',
                  paddingBottom: isMobile ? '32px' : '0px',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: '1px solid rgba(18, 18, 18, 0.06)',
                  borderTop: `6px solid ${topBorderColors[idx]}`,
                  transform: hoveredBlogIndex === idx ? 'translateY(-6px)' : 'none',
                  boxShadow: hoveredBlogIndex === idx 
                    ? `0 20px 40px ${shadowColors[idx]}` 
                    : '0 4px 16px rgba(0, 0, 0, 0.02)'
                }}
              >
                <img
                  src={blog.img}
                  alt={blog.title}
                  style={{
                    width: '100%',
                    height: '220px',
                    objectFit: 'cover'
                  }}
                />
                <div
                  style={{
                    padding: isMobile ? '24px' : '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    flex: 1
                  }}
                >
                  <h4
                    style={{
                      fontSize: '22px',
                      fontFamily: '"Quicksand", sans-serif',
                      fontWeight: 700,
                      margin: 0,
                      lineHeight: '28px',
                      color: '#111111'
                    }}
                  >
                    {blog.title}
                  </h4>
                  <p
                    style={{
                      color: 'rgba(99, 99, 99, 1)',
                      fontSize: '15px',
                      fontFamily: '"Quicksand", sans-serif',
                      lineHeight: '24px',
                      margin: 0,
                      fontWeight: 500
                    }}
                  >
                    {blog.desc}
                  </p>
                  <div style={{ marginTop: isMobile ? '24px' : 'auto', paddingTop: '12px' }}>
                    <ActionButton text="Read article" variant="secondary" size="md" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faqs"
        style={{
          padding: isMobile ? '60px 20px' : '120px 80px',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          position: 'relative',
          gap: isMobile ? '32px' : '0'
        }}
      >
        <h2
          style={{
            width: isMobile ? '100%' : '450px',
            fontSize: isMobile ? '32px' : '56px',
            fontFamily: '"Quicksand", sans-serif',
            fontWeight: 700,
            lineHeight: isMobile ? '42px' : '66px',
            margin: 0,
            letterSpacing: '-1px'
          }}
        >
          Frequently asked questions
        </h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            flex: 1,
            maxWidth: isMobile ? '100%' : '703px',
            width: '100%'
          }}
        >
          <FAQItem
            question="What is Padi and who is it for?"
            answer="Padi is a specialized study app built for Ghanaian Basic School students (JHS 1, 2, and 3) preparing for their Basic Education Certificate Examination (BECE). The name 'padi' represents our mission to be a reliable slang 'friend' or companion in your academic journey."
          />
          <FAQItem
            question="How does the Focus Study Mode work?"
            answer="Focus Mode prevents distractions by running full-screen, locking the screen awake so it doesn't sleep while studying, and monitoring inactivity. If you're inactive for more than 90 seconds, the app reminds you to get back to studying!"
          />
          <FAQItem
            question="Can I use Padi offline?"
            answer="Yes! Padi uses Firestore's offline persistence. Once lessons or past questions are loaded while online, they are cached aggressively so you can study them anytime without using mobile data."
          />
          <FAQItem
            question="How does the Google Gemini integration help me?"
            answer="If a specific topic curriculum note is not already in our database, Padi calls Gemini to instantly generate clear explanations complete with local Ghanaian examples and practice questions, saving it in your app for future study."
          />
        </div>
        {!isMobile && (
          <img
            src="https://storage.googleapis.com/storage.magicpath.ai/user/410302339090632704/figma-assets/4cea4148-e266-4665-a010-c390b4bf9202.svg"
            alt=""
            style={{
              position: 'absolute',
              left: '-29px',
              bottom: '0px',
              zIndex: -1
            }}
          />
        )}
      </section>

      {/* CTA Section */}
      <section
        id="cta"
        style={{
          padding: isMobile ? '40px 16px' : '80px 80px'
        }}
      >
        <div
          style={{
            backgroundColor: '#2563EB',
            borderRadius: isMobile ? '32px' : '48px',
            padding: isMobile ? '40px 20px' : '60px 112px',
            display: 'flex',
            flexDirection: isMobile ? 'column-reverse' : 'row',
            justifyContent: isMobile ? 'center' : 'flex-end',
            alignItems: isMobile ? 'center' : 'stretch',
            position: 'relative',
            overflow: 'hidden',
            minHeight: isMobile ? 'auto' : '520px',
            boxShadow: '0 20px 48px rgba(37, 99, 235, 0.25)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            gap: isMobile ? '32px' : '0'
          }}
        >
          {/* Mapped Black Student Photo in Modern Frame */}
          <div
            style={{
              position: isMobile ? 'relative' : 'absolute',
              left: isMobile ? '0' : '80px',
              top: isMobile ? '0' : '40px',
              bottom: isMobile ? '0' : '40px',
              width: isMobile ? '100%' : '380px',
              maxWidth: isMobile ? '340px' : 'none',
              height: isMobile ? '240px' : 'auto',
              borderRadius: '32px',
              overflow: 'hidden',
              border: '6px solid rgba(255, 255, 255, 0.35)',
              boxShadow: '0 24px 48px rgba(0, 0, 0, 0.3)',
              zIndex: 1,
              backgroundColor: 'rgba(255, 255, 255, 0.1)'
            }}
          >
            <img
              src="/padi-images/pexels-emmanuel-abiodun-2149348795-32293359.jpg"
              alt="Student studying with Padi"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>

          {!isMobile && (
            <>
              {/* Dots Grid: Rendered as a visible, inline White circle grid */}
              <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', right: '40px', bottom: '40px', opacity: 0.25, pointerEvents: 'none' }}>
                <circle cx="10" cy="10" r="4" fill="#FFFFFF" />
                <circle cx="40" cy="10" r="4" fill="#FFFFFF" />
                <circle cx="70" cy="10" r="4" fill="#FFFFFF" />
                <circle cx="100" cy="10" r="4" fill="#FFFFFF" />
                <circle cx="130" cy="10" r="4" fill="#FFFFFF" />
                <circle cx="160" cy="10" r="4" fill="#FFFFFF" />
                
                <circle cx="10" cy="40" r="4" fill="#FFFFFF" />
                <circle cx="40" cy="40" r="4" fill="#FFFFFF" />
                <circle cx="70" cy="40" r="4" fill="#FFFFFF" />
                <circle cx="100" cy="40" r="4" fill="#FFFFFF" />
                <circle cx="130" cy="40" r="4" fill="#FFFFFF" />
                <circle cx="160" cy="40" r="4" fill="#FFFFFF" />

                <circle cx="10" cy="70" r="4" fill="#FFFFFF" />
                <circle cx="40" cy="70" r="4" fill="#FFFFFF" />
                <circle cx="70" cy="70" r="4" fill="#FFFFFF" />
                <circle cx="100" cy="70" r="4" fill="#FFFFFF" />
                <circle cx="130" cy="70" r="4" fill="#FFFFFF" />
                <circle cx="160" cy="70" r="4" fill="#FFFFFF" />

                <circle cx="10" cy="100" r="4" fill="#FFFFFF" />
                <circle cx="40" cy="100" r="4" fill="#FFFFFF" />
                <circle cx="70" cy="100" r="4" fill="#FFFFFF" />
                <circle cx="100" cy="100" r="4" fill="#FFFFFF" />
                <circle cx="130" cy="100" r="4" fill="#FFFFFF" />
                <circle cx="160" cy="100" r="4" fill="#FFFFFF" />

                <circle cx="10" cy="130" r="4" fill="#FFFFFF" />
                <circle cx="40" cy="130" r="4" fill="#FFFFFF" />
                <circle cx="70" cy="130" r="4" fill="#FFFFFF" />
                <circle cx="100" cy="130" r="4" fill="#FFFFFF" />
                <circle cx="130" cy="130" r="4" fill="#FFFFFF" />
                <circle cx="160" cy="130" r="4" fill="#FFFFFF" />
              </svg>

              {/* Wave Shape: Rendered as an inline Gold stroke path */}
              <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', left: '20px', top: '10px', opacity: 0.35, pointerEvents: 'none', zIndex: 0 }}>
                <path d="M10 100 C 50 40, 80 40, 130 100 C 180 160, 200 160, 230 100" stroke="#FCD116" strokeWidth="4" fill="none" strokeLinecap="round" />
                <path d="M10 120 C 50 60, 80 60, 130 120 C 180 180, 200 180, 230 120" stroke="#FCD116" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6" />
              </svg>
            </>
          )}

          <div
            style={{
              maxWidth: isMobile ? '100%' : '460px',
              width: '100%',
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: isMobile ? '24px' : '32px',
              textAlign: isMobile ? 'center' : 'left'
            }}
          >
            <div style={{ position: 'relative' }}>
              <h2
                style={{
                  color: '#FFFFFF',
                  fontSize: isMobile ? '24px' : '34px',
                  fontFamily: '"Quicksand", sans-serif',
                  fontWeight: 700,
                  lineHeight: isMobile ? '32px' : '44px',
                  margin: 0,
                  letterSpacing: '-0.5px'
                }}
              >
                Join other schools help their students both in school and at home even on vacations
              </h2>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                color: '#FFFFFF',
                fontFamily: '"Quicksand", sans-serif'
              }}
            >
              <p
                style={{
                  fontSize: '18px',
                  lineHeight: '28px',
                  margin: 0,
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: 600
                }}
              >
                Contact us via these two channels to get started:
              </p>
              
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  width: '100%',
                  boxSizing: 'border-box'
                }}
              >
                <a
                  href="tel:+233249269197"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: isMobile ? 'center' : 'flex-start',
                    gap: '16px',
                    padding: isMobile ? '12px 20px' : '16px 28px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '40px',
                    border: '1.5px solid rgba(255, 255, 255, 0.2)',
                    color: '#111111',
                    textDecoration: 'none',
                    fontSize: isMobile ? '16px' : '18px',
                    fontWeight: 700,
                    transition: 'all 0.25s ease',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    boxSizing: 'border-box',
                    width: '100%'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#F8FAFC';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: '#FCD116',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 4px 10px rgba(252, 209, 22, 0.3)'
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(18, 18, 18, 1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <span>+233 24 926 9197</span>
                </a>

                <a
                  href="mailto:info@visiostudioworks.com"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: isMobile ? 'center' : 'flex-start',
                    gap: '16px',
                    padding: isMobile ? '12px 20px' : '16px 28px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '40px',
                    border: '1.5px solid rgba(10, 132, 255, 0.15)',
                    color: '#111111',
                    textDecoration: 'none',
                    fontSize: isMobile ? '16px' : '18px',
                    fontWeight: 700,
                    transition: 'all 0.25s ease',
                    boxShadow: '0 4px 12px rgba(10, 132, 255, 0.05)',
                    boxSizing: 'border-box',
                    width: '100%'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#F4F7FF';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: '#FCD116',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 4px 10px rgba(252, 209, 22, 0.3)'
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(18, 18, 18, 1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <span style={{ wordBreak: 'break-all' }}>info@visiostudioworks.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer
        style={{
          padding: isMobile ? '40px 20px' : '90px 80px 120px 80px',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          borderTop: '1px solid rgba(18, 18, 18, 0.08)',
          position: 'relative',
          gap: isMobile ? '40px' : '0'
        }}
      >
        {/* Ghana flag colors top ribbon across the footer */}
        <div 
          style={{ 
            height: '6px', 
            width: '100%', 
            position: 'absolute', 
            top: 0, 
            left: 0,
            background: 'linear-gradient(90deg, #CE1126 0%, #CE1126 33.33%, #FCD116 33.33%, #FCD116 66.66%, #006B3F 66.66%, #006B3F 100%)'
          }} 
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            alignItems: isMobile ? 'center' : 'flex-start',
            textAlign: isMobile ? 'center' : 'left'
          }}
        >
          <PadiLogo />
          <p
            style={{
              fontSize: '14px',
              fontFamily: '"Quicksand", sans-serif',
              color: 'rgba(99,99,99,0.8)',
              fontWeight: 500,
              maxWidth: isMobile ? '100%' : '300px',
              lineHeight: '22px',
              margin: 0
            }}
          >
            Padi is built to make studying effective, independent, and engaging for Basic School students in Ghana.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '8px'
            }}
          >
            <img
              src="https://storage.googleapis.com/storage.magicpath.ai/user/410302339090632704/figma-assets/b3a2d605-4eeb-4297-b7f7-61282ce42b33.svg"
              alt="App Stores"
            />
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '40px' : '120px',
            alignItems: isMobile ? 'center' : 'flex-start',
            width: isMobile ? '100%' : 'auto'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(3, 1fr)',
              gap: isMobile ? '32px' : '80px',
              opacity: 0.8,
              width: '100%'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                fontFamily: '"Quicksand", sans-serif',
                fontSize: '14px',
                fontWeight: 600,
                color: 'rgba(18, 18, 18, 0.8)'
              }}
            >
              <span style={{ cursor: 'pointer' }} onClick={() => handleScrollToSection('hero')}>Home</span>
              <span style={{ cursor: 'pointer' }} onClick={() => handleScrollToSection('features')}>Features</span>
              <span style={{ cursor: 'pointer' }} onClick={() => handleScrollToSection('subjects')}>Subjects</span>
              <span style={{ cursor: 'pointer' }} onClick={() => handleScrollToSection('faqs')}>FAQs</span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                fontFamily: '"Quicksand", sans-serif',
                fontSize: '14px',
                fontWeight: 600,
                color: 'rgba(18, 18, 18, 0.8)'
              }}
            >
              <span>Mathematics</span>
              <span>Integrated Science</span>
              <span>English Language</span>
              <span>Social Studies</span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                fontFamily: '"Quicksand", sans-serif',
                fontSize: '14px',
                fontWeight: 600,
                color: 'rgba(18, 18, 18, 0.8)',
                gridColumn: isMobile ? 'span 2' : 'auto',
                alignItems: isMobile ? 'center' : 'flex-start',
                textAlign: isMobile ? 'center' : 'left',
                borderTop: isMobile ? '1px solid rgba(18,18,18,0.08)' : 'none',
                paddingTop: isMobile ? '16px' : '0px'
              }}
            >
              <span>Daily Challenges</span>
              <span>AI Study Notes</span>
              <span>Past Exams</span>
              <span>Contact Support</span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: isMobile ? 'center' : 'flex-start',
              width: isMobile ? '100%' : 'auto'
            }}
          >
            {[
              { icon: 'ac159c4e-c59a-4478-9c24-5145c7770652', color: '#CE1126' }, // Red
              { icon: '08833f8c-9a04-41cb-8e83-e2d073a7cf92', color: '#FCD116' }, // Gold
              { icon: 'debfc14b-0baa-481c-ae43-a187b28e1dd6', color: '#006B3F' }, // Green
              { icon: 'ac159c4e-c59a-4478-9c24-5145c7770652', color: '#0A84FF' }  // Blue
            ].map((social, idx) => (
              <div
                key={idx}
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  border: `1.5px solid ${social.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.02)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = social.color;
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.filter = 'brightness(0) invert(1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 1)';
                  e.currentTarget.style.transform = 'none';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.filter = 'none';
                }}
              >
                <img
                  src={`https://storage.googleapis.com/storage.magicpath.ai/user/410302339090632704/figma-assets/${social.icon}.svg`}
                  alt=""
                  style={{
                    transition: 'filter 0.25s ease'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};
