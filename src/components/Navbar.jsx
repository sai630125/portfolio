import React, { useState, useEffect } from 'react';
import { Terminal, Command, Menu, X, ArrowUpRight, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import LiveVisitorCounter from './LiveVisitorCounter';

export default function Navbar({ onOpenCommandPalette, onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.25s ease',
        background: scrolled ? 'rgba(10, 12, 16, 0.88)' : 'rgba(10, 12, 16, 0.45)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${scrolled ? 'rgba(255, 255, 255, 0.08)' : 'transparent'}`
      }}
    >
      <div className="container-max" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
        
        {/* Logo / Monogram */}
        <a
          href="#"
          data-cursor-label="HOME"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            color: '#fff'
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Terminal size={17} color="#60a5fa" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="navbar-brand-full" style={{ fontWeight: 700, fontSize: '14px', letterSpacing: '-0.01em', color: '#f8fafc' }}>
                Teluri Sai Krishna Reddy
              </span>
              <span className="navbar-brand-mobile" style={{ fontWeight: 700, fontSize: '14px', letterSpacing: '-0.01em', color: '#f8fafc' }}>
                Sai Krishna Reddy
              </span>
              <span className="badge-pulse" title="Available for Roles" />
            </div>
            <div style={{ fontSize: '11px', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
              Senior Software Engineer
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '26px'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              data-cursor-label="GOTO"
              style={{
                fontSize: '13px',
                fontWeight: 500,
                color: '#94a3b8',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                padding: '4px 0'
              }}
              onMouseEnter={(e) => (e.target.style.color = '#f8fafc')}
              onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          
          {/* Live Visitor Counter Badge */}
          <LiveVisitorCounter compact={true} />

          {/* LinkedIn Link (Hidden on very small screens to give space to counter + menu) */}
          <a
            href={portfolioData.personal.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            data-cursor-label="LINKEDIN"
            title="LinkedIn Profile"
            className="navbar-linkedin-icon"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '7px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: '#94a3b8',
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#60a5fa';
              e.currentTarget.style.borderColor = 'rgba(96, 165, 250, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#94a3b8';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
            }}
          >
            <Linkedin size={14} />
          </a>

          {/* Command Palette Trigger (Desktop only) */}
          <button
            onClick={onOpenCommandPalette}
            data-cursor-label="SEARCH"
            title="Quick Search (Ctrl+K)"
            className="desktop-cmd-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 10px',
              borderRadius: '7px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: '#94a3b8',
              fontSize: '12px',
              cursor: 'pointer',
              fontFamily: 'var(--font-mono)'
            }}
          >
            <Command size={13} />
            <kbd style={{ background: 'rgba(255, 255, 255, 0.06)', padding: '2px 5px', borderRadius: '4px', fontSize: '10px', color: '#cbd5e1' }}>⌘K</kbd>
          </button>

          {/* Connect Action Button */}
          <button
            onClick={onOpenContact}
            data-cursor-label="CONTACT"
            className="btn-outline-cyan"
            style={{ display: 'none' }}
            id="nav-connect-btn"
          >
            <span>Let's Connect</span>
            <ArrowUpRight size={13} />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: mobileMenuOpen ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.05)',
              border: `1px solid ${mobileMenuOpen ? 'rgba(56, 189, 248, 0.4)' : 'rgba(255, 255, 255, 0.1)'}`,
              color: '#f8fafc',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            className="mobile-menu-btn"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={18} color="#38bdf8" /> : <Menu size={18} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu with Sleek Frosted Glass */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(7, 10, 16, 0.96)',
            borderBottom: '1px solid rgba(56, 189, 248, 0.2)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            padding: '20px 18px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            animation: 'slideDown 0.25s ease'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '15px',
                color: '#e2e8f0',
                textDecoration: 'none',
                fontWeight: 600,
                padding: '12px 14px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'all 0.15s ease'
              }}
            >
              <span>{link.name}</span>
              <span style={{ color: '#38bdf8', fontSize: '13px' }}>→</span>
            </a>
          ))}

          {/* Quick Connect & Contact in Mobile Menu */}
          <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '13px' }}
            >
              Let's Connect Directly
            </button>

            <a
              href={portfolioData.personal.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '11px',
                borderRadius: '8px',
                background: 'rgba(56, 189, 248, 0.08)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                color: '#38bdf8',
                fontSize: '13px',
                fontWeight: 600,
                textDecoration: 'none',
                boxSizing: 'border-box'
              }}
            >
              <Linkedin size={15} />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      )}

      <style>{`
        .navbar-brand-mobile { display: none; }
        
        @media (max-width: 640px) {
          .navbar-brand-full { display: none !important; }
          .navbar-brand-mobile { display: inline-block !important; }
          .desktop-cmd-btn { display: none !important; }
        }

        @media (max-width: 420px) {
          .navbar-linkedin-icon { display: none !important; }
        }

        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
          #nav-connect-btn {
            display: inline-flex !important;
          }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}
