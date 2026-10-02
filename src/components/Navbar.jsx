import React, { useState, useEffect } from 'react';
import { Terminal, Command, Menu, X, ArrowUpRight, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

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
              <span style={{ fontWeight: 700, fontSize: '14px', letterSpacing: '-0.01em', color: '#f8fafc' }}>
                Teluri Sai Krishna Reddy
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          
          {/* LinkedIn Link */}
          <a
            href={portfolioData.personal.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            data-cursor-label="LINKEDIN"
            title="LinkedIn Profile"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '34px',
              height: '34px',
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
            <Linkedin size={15} />
          </a>

          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            data-cursor-label="SEARCH"
            title="Quick Search (Ctrl+K)"
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
              width: '34px',
              height: '34px',
              background: 'transparent',
              border: 'none',
              color: '#f8fafc',
              cursor: 'pointer'
            }}
            className="mobile-menu-btn"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            background: '#0c0f16',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '18px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '14px',
                color: '#cbd5e1',
                textDecoration: 'none',
                fontWeight: 500,
                padding: '4px 0'
              }}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="btn-primary"
            style={{ marginTop: '8px', width: '100%' }}
          >
            Let's Connect
          </button>
        </div>
      )}

      <style>{`
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
      `}</style>
    </header>
  );
}
