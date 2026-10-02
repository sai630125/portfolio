import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, ArrowRight, Copy, Check, Download, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function ContactSection({ onOpenContactModal }) {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#38bdf8', '#34d399', '#818cf8']
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      style={{
        paddingTop: '60px',
        paddingBottom: '100px',
        position: 'relative',
        zIndex: 5
      }}
    >
      <div className="container-max">
        
        {/* Glow Contact Box */}
        <div
          className="glass-card spotlight-card"
          style={{
            padding: 'clamp(36px, 5vw, 64px)',
            borderRadius: '16px',
            border: '1px solid rgba(129, 140, 248, 0.35)',
            background: 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.15) 0%, rgba(10, 14, 24, 0.96) 80%)',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.85), 0 0 45px -10px rgba(99, 102, 241, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Top Tag */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '9999px',
              background: 'rgba(99, 102, 241, 0.15)',
              border: '1px solid rgba(129, 140, 248, 0.35)',
              marginBottom: '28px'
            }}
          >
            <span className="badge-pulse" />
            <span
              style={{
                fontSize: '11px',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                letterSpacing: '0.06em',
                color: '#818cf8'
              }}
            >
              GET IN TOUCH // CURRENTLY AVAILABLE
            </span>
          </div>

          {/* Big Headline */}
          <h2
            style={{
              fontSize: 'clamp(32px, 4.5vw, 54px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              lineHeight: 1.15,
              marginBottom: '18px'
            }}
          >
            Let's build something great <span style={{ color: '#818cf8' }}>together.</span>
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '16px',
              color: '#cbd5e1',
              maxWidth: '700px',
              lineHeight: 1.7,
              marginBottom: '40px'
            }}
          >
            Senior Software Engineer available for roles specializing in <strong style={{ color: '#38bdf8' }}>React.js</strong>, <strong style={{ color: '#34d399' }}>Spring Boot</strong>, <strong style={{ color: '#818cf8' }}>Microservices</strong>, and <strong style={{ color: '#f59e0b' }}>MSSQL</strong>. Let's discuss how I can add immediate value to your team.
          </p>

          {/* 4 Contact Info Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '16px',
              marginBottom: '40px'
            }}
          >
            {/* Email Card (Click to Copy) */}
            <div
              onClick={copyEmail}
              data-cursor-label="COPY"
              className="interactive-card"
              style={{
                padding: '18px 20px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={18} color="#38bdf8" />
                <div>
                  <div style={{ fontSize: '11px', color: '#64748b', fontFamily: 'var(--font-mono)' }}>EMAIL ADDRESS</div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#f8fafc', marginTop: '2px', wordBreak: 'break-all' }}>{personal.email}</div>
                </div>
              </div>
              <div style={{ color: copied ? '#34d399' : '#94a3b8' }}>
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </div>
            </div>

            {/* Phone Card */}
            <a
              href={`tel:${personal.phone.replace(/\s+/g, '')}`}
              data-cursor-label="CALL"
              style={{
                padding: '18px 20px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              <Phone size={18} color="#34d399" />
              <div>
                <div style={{ fontSize: '11px', color: '#64748b', fontFamily: 'var(--font-mono)' }}>MOBILE CONTACT</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc', marginTop: '2px' }}>{personal.phone}</div>
              </div>
            </a>

            {/* Location Card */}
            <div
              data-cursor-label="LOCATION"
              style={{
                padding: '18px 20px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <MapPin size={18} color="#f59e0b" />
              <div>
                <div style={{ fontSize: '11px', color: '#64748b', fontFamily: 'var(--font-mono)' }}>LOCATION</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc', marginTop: '2px' }}>{personal.location}</div>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor-label="LINKEDIN"
              style={{
                padding: '18px 20px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              <Linkedin size={18} color="#818cf8" />
              <div>
                <div style={{ fontSize: '11px', color: '#64748b', fontFamily: 'var(--font-mono)' }}>LINKEDIN PROFILE</div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#818cf8', marginTop: '2px' }}>/{personal.linkedinHandle}</div>
              </div>
            </a>
          </div>

          {/* Action Buttons Row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px' }}>
            <button
              onClick={onOpenContactModal}
              data-cursor-label="MESSAGE"
              className="btn-primary"
              style={{ background: '#38bdf8', color: '#05070c', border: '1px solid #38bdf8' }}
            >
              <span>Send a Message</span>
              <ArrowRight size={16} />
            </button>

            <a
              href={`mailto:${personal.email}`}
              data-cursor-label="DIRECT"
              className="btn-secondary"
            >
              <Mail size={15} color="#94a3b8" />
              <span>Direct Email Inquiry</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
