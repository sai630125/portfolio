import React, { useState } from 'react';
import { Briefcase, Calendar, ChevronRight, TrendingUp, Zap, Clock, ShieldCheck, CheckCircle2, ChevronDown, Layers, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceSection() {
  const { experience } = portfolioData;
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="experience"
      style={{
        paddingTop: '60px',
        paddingBottom: '80px',
        position: 'relative',
        zIndex: 5
      }}
    >
      <div className="container-max">
        
        {/* Header */}
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
            WORK EXPERIENCE
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
            Production Track Record
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: '#94a3b8',
              maxWidth: '720px',
              lineHeight: 1.6
            }}
          >
            4.6 years of full-stack software engineering designing and scaling web applications using React.js and Spring Boot.
          </p>
        </div>

        {/* Featured Experience Card */}
        <div
          className="glass-card spotlight-card"
          style={{
            padding: '36px',
            border: '1px solid rgba(56, 189, 248, 0.28)',
            boxShadow: '0 20px 50px -15px rgba(0,0,0,0.8), 0 0 25px -5px rgba(56, 189, 248, 0.15)'
          }}
        >
          {/* Top Bar with Role & Meta */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '16px',
              paddingBottom: '24px',
              marginBottom: '24px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                  background: 'rgba(56, 189, 248, 0.12)',
                  border: '1px solid rgba(56, 189, 248, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 15px rgba(56, 189, 248, 0.2)'
                }}
              >
                <Briefcase size={22} color="#38bdf8" />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#f8fafc' }}>
                    {experience.role}
                  </h3>
                  <span
                    style={{
                      fontSize: '11px',
                      fontFamily: 'var(--font-mono)',
                      background: 'rgba(56, 189, 248, 0.12)',
                      color: '#38bdf8',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      fontWeight: 700
                    }}
                  >
                    CURRENT ROLE
                  </span>
                </div>
                <div style={{ fontSize: '15px', color: '#94a3b8', marginTop: '4px', fontWeight: 600 }}>
                  {experience.company}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  fontSize: '12px',
                  fontFamily: 'var(--font-mono)',
                  color: '#cbd5e1'
                }}
              >
                <Calendar size={13} color="#38bdf8" />
                <span>{experience.period}</span>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  fontSize: '12px',
                  fontFamily: 'var(--font-mono)',
                  color: '#f59e0b'
                }}
              >
                <MapPin size={13} color="#f59e0b" />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>

          {/* 3 Metric High-Impact Pills */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
              marginBottom: '28px'
            }}
          >
            {experience.metrics.map((m, i) => (
              <div
                key={i}
                data-cursor-label="METRIC"
                style={{
                  padding: '18px 20px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)'
                }}
              >
                <div
                  style={{
                    fontSize: '26px',
                    fontWeight: 800,
                    fontFamily: 'var(--font-mono)',
                    color: i === 0 ? '#38bdf8' : i === 1 ? '#34d399' : '#818cf8',
                    marginBottom: '4px'
                  }}
                >
                  {m.value}
                </div>
                <div style={{ fontSize: '13px', color: '#cbd5e1', fontWeight: 600 }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Exact Bullets List from User's Resume */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
            {experience.bullets.map((bullet, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}
              >
                <CheckCircle2 size={16} color="#38bdf8" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span style={{ fontSize: '14px', lineHeight: 1.7, color: '#cbd5e1' }}>
                  {bullet}
                </span>
              </div>
            ))}
          </div>

          {/* Expandable Operational Metrics Drawer */}
          {expanded && (
            <div
              style={{
                marginTop: '20px',
                padding: '24px',
                borderRadius: '8px',
                background: 'rgba(0, 0, 0, 0.45)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '20px'
              }}
            >
              <div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#38bdf8', marginBottom: '6px' }}>
                  FACILITIES MODULES
                </div>
                <div style={{ fontSize: '13px', color: '#f1f5f9', fontWeight: 700 }}>Room, Asset &amp; Resource Booking</div>
                <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>Enterprise SLA management interfaces delivering 70% workflow efficiency improvement.</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#34d399', marginBottom: '6px' }}>
                  RESTFUL API ARCHITECTURE
                </div>
                <div style={{ fontSize: '13px', color: '#f1f5f9', fontWeight: 700 }}>Java &amp; Spring Boot</div>
                <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>Optimized JSON payloads and data retrieval routines reducing network time by 50%.</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#818cf8', marginBottom: '6px' }}>
                  FRONTEND STATE ENGINE
                </div>
                <div style={{ fontSize: '13px', color: '#f1f5f9', fontWeight: 700 }}>Redux Toolkit &amp; Prime React</div>
                <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>Modular component libraries cutting new feature development time by 70%.</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#f59e0b', marginBottom: '6px' }}>
                  DATABASE PERFORMANCE
                </div>
                <div style={{ fontSize: '13px', color: '#f1f5f9', fontWeight: 700 }}>Microsoft SQL Server (MSSQL)</div>
                <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>Stored procedures and query index tuning delivering 70% execution time improvements.</div>
              </div>
            </div>
          )}

          {/* Action Button */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px' }}>
            <button
              onClick={() => setExpanded(!expanded)}
              data-cursor-label={expanded ? "COLLAPSE" : "EXPAND"}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'transparent',
                border: 'none',
                color: '#38bdf8',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
                padding: '4px 0'
              }}
            >
              <span>{expanded ? 'Hide full technical metrics' : 'View full technical metrics'}</span>
              {expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>

            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#64748b' }}>
              Stack: React.js • Redux Toolkit • Prime React • Spring Boot • Microservices • MSSQL
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
