import React from 'react';
import { ArrowUp, Linkedin, Mail, Phone, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import LiveVisitorCounter from './LiveVisitorCounter';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        background: '#04060b',
        padding: '40px 0',
        position: 'relative',
        zIndex: 5
      }}
    >
      <div className="container-max">
        <div
          className="footer-main-row"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px'
          }}
        >
          {/* Left: Branding & Role */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '8px',
                background: 'rgba(56, 189, 248, 0.1)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <Terminal size={17} color="#38bdf8" />
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 800, color: '#f8fafc' }}>
                {portfolioData.personal.name}
              </div>
              <div style={{ fontSize: '11px', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                SENIOR SOFTWARE ENGINEER // CRESTERE TECHNOLOGIES LLP
              </div>
            </div>
          </div>

          {/* Center: Real Contact Channels */}
          <div className="footer-contact-links" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a
              href={portfolioData.personal.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor-label="LINKEDIN"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                borderRadius: '8px',
                background: 'rgba(56, 189, 248, 0.08)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                color: '#38bdf8',
                fontSize: '12px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
            >
              <Linkedin size={15} />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${portfolioData.personal.email}`}
              data-cursor-label="EMAIL"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: '#cbd5e1',
                fontSize: '12px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
            >
              <Mail size={15} />
              <span>Email</span>
            </a>

            <a
              href={`tel:${portfolioData.personal.phone.replace(/\s+/g, '')}`}
              data-cursor-label="PHONE"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: '#cbd5e1',
                fontSize: '12px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
            >
              <Phone size={15} />
              <span>{portfolioData.personal.phone}</span>
            </a>
          </div>

          {/* Right: Copyright & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ fontSize: '11px', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
              © {new Date().getFullYear()} {portfolioData.personal.name} • Pune, India
            </div>

            <button
              onClick={scrollToTop}
              data-cursor-label="TOP"
              title="Back to Top"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#cbd5e1',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <ArrowUp size={16} />
            </button>
          </div>

        </div>

        {/* Live Visitor Metrics & Telemetry Bar */}
        <div
          style={{
            marginTop: '24px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px'
          }}
        >
          <LiveVisitorCounter compact={false} />
          <div style={{ fontSize: '11px', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
            REAL-TIME TELEMETRY // PRIVACY PRESERVED // 0% COOKIE TRACKERS
          </div>
        </div>

      </div>
    </footer>
  );
}
