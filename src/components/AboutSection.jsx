import React from 'react';
import { Cpu, CheckCircle2, ShieldCheck, Zap, Terminal, Gauge, Database, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function AboutSection() {
  const { about } = portfolioData;

  return (
    <section
      id="about"
      style={{
        paddingTop: '60px',
        paddingBottom: '80px',
        position: 'relative',
        zIndex: 5
      }}
    >
      <div className="container-max">
        
        {/* Section Header */}
        <div style={{ marginBottom: '40px' }}>
          <div
            style={{
              fontSize: '11px',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              color: '#38bdf8',
              letterSpacing: '0.1em',
              marginBottom: '10px'
            }}
          >
            ABOUT // PROFESSIONAL BACKGROUND
          </div>
          <h2
            style={{
              fontSize: 'clamp(28px, 3.5vw, 42px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              marginBottom: '12px'
            }}
          >
            {about.headline}
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: '#94a3b8',
              maxWidth: '720px',
              lineHeight: 1.6
            }}
          >
            {about.subheadline}
          </p>
        </div>

        {/* 2-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '24px'
          }}
          className="about-grid"
        >
          {/* Left Column: Narrative Card */}
          <div
            className="glass-card spotlight-card"
            style={{
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.8,
                  color: '#cbd5e1',
                  marginBottom: '18px'
                }}
              >
                {about.introP1}
              </p>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.8,
                  color: '#94a3b8',
                  marginBottom: '18px'
                }}
              >
                {about.introP2}
              </p>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.8,
                  color: '#94a3b8',
                  marginBottom: '32px'
                }}
              >
                {about.introP3}
              </p>
            </div>

            {/* Competency Badges Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '12px'
              }}
            >
              {about.competencies.map((comp) => (
                <div
                  key={comp.id}
                  className="interactive-card"
                  data-cursor-label="DETAIL"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)'
                  }}
                >
                  <CheckCircle2 size={16} color="#38bdf8" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc' }}>
                      {comp.title}
                    </div>
                    <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px', lineHeight: 1.4 }}>
                      {comp.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Telemetry & Production Health Card */}
          <div
            className="glass-card spotlight-card"
            style={{
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'linear-gradient(180deg, rgba(14, 19, 31, 0.9) 0%, rgba(9, 13, 22, 0.98) 100%)'
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '16px',
                  marginBottom: '24px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Gauge size={18} color="#34d399" />
                  <span style={{ fontSize: '14px', fontWeight: 700, color: '#f8fafc' }}>
                    Production Metrics // Crestere Technologies
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '11px',
                    fontFamily: 'var(--font-mono)',
                    color: '#34d399',
                    background: 'rgba(52, 211, 153, 0.1)',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    border: '1px solid rgba(52, 211, 153, 0.25)',
                    fontWeight: 700
                  }}
                >
                  VERIFIED IMPACT
                </span>
              </div>

              {/* Stat 1: Workflow Efficiency */}
              <div style={{ marginBottom: '22px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '13px', color: '#cbd5e1', fontWeight: 600 }}>
                    User Workflow Efficiency
                  </span>
                  <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#38bdf8', fontWeight: 700 }}>
                    +70% Boost
                  </span>
                </div>
                <div style={{ height: '6px', width: '100%', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: '70%', height: '100%', background: 'linear-gradient(90deg, #38bdf8, #818cf8)', borderRadius: '3px' }} />
                </div>
                <div style={{ fontSize: '11px', color: '#64748b', marginTop: '4px' }}>
                  Facilities Management: Room Booking, Asset Booking &amp; SLA Management
                </div>
              </div>

              {/* Stat 2: API Data Retrieval */}
              <div style={{ marginBottom: '22px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '13px', color: '#cbd5e1', fontWeight: 600 }}>
                    Data Retrieval Times
                  </span>
                  <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#34d399', fontWeight: 700 }}>
                    50% Faster
                  </span>
                </div>
                <div style={{ height: '6px', width: '100%', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: '50%', height: '100%', background: 'linear-gradient(90deg, #34d399, #38bdf8)', borderRadius: '3px' }} />
                </div>
                <div style={{ fontSize: '11px', color: '#64748b', marginTop: '4px' }}>
                  Engineered and integrated RESTful APIs using Java and Spring Boot
                </div>
              </div>

              {/* Stat 3: Dev Effort Reduction */}
              <div style={{ marginBottom: '22px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '13px', color: '#cbd5e1', fontWeight: 600 }}>
                    Feature Development Time
                  </span>
                  <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#818cf8', fontWeight: 700 }}>
                    -70% Decrease
                  </span>
                </div>
                <div style={{ height: '6px', width: '100%', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: '70%', height: '100%', background: 'linear-gradient(90deg, #818cf8, #c084fc)', borderRadius: '3px' }} />
                </div>
                <div style={{ fontSize: '11px', color: '#64748b', marginTop: '4px' }}>
                  Redux Toolkit state management &amp; reusable modular React component libraries
                </div>
              </div>

              {/* Stat 4: App Rendering Speed */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '13px', color: '#cbd5e1', fontWeight: 600 }}>
                    Application Rendering Speed
                  </span>
                  <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#f59e0b', fontWeight: 700 }}>
                    +25% Speedup
                  </span>
                </div>
                <div style={{ height: '6px', width: '100%', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: '60%', height: '100%', background: 'linear-gradient(90deg, #f59e0b, #fb7185)', borderRadius: '3px' }} />
                </div>
                <div style={{ fontSize: '11px', color: '#64748b', marginTop: '4px' }}>
                  Debugging, Redux state optimization, and API payload reduction
                </div>
              </div>

            </div>

            {/* Bottom Status Tag */}
            <div
              style={{
                marginTop: '28px',
                padding: '12px 16px',
                borderRadius: '8px',
                background: 'rgba(56, 189, 248, 0.05)',
                border: '1px solid rgba(56, 189, 248, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '12px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Terminal size={14} color="#38bdf8" />
                <span style={{ color: '#94a3b8' }}>Core Stack: React.js • Spring Boot • Microservices • MSSQL</span>
              </div>
              <span style={{ color: '#38bdf8', fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700 }}>PRODUCTION READY</span>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 960px) {
          .about-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
