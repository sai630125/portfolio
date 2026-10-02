import React from 'react';
import { Blocks, ArrowUpRight, ShieldCheck, Cpu, GitPullRequest } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function PrinciplesSection() {
  const { principles } = portfolioData;

  const getTagColor = (id) => {
    switch (id) {
      case '01': return { color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.1)', border: 'rgba(56, 189, 248, 0.25)' };
      case '02': return { color: '#34d399', bg: 'rgba(52, 211, 153, 0.1)', border: 'rgba(52, 211, 153, 0.25)' };
      case '03': return { color: '#818cf8', bg: 'rgba(129, 140, 248, 0.1)', border: 'rgba(129, 140, 248, 0.25)' };
      case '04': return { color: '#fb7185', bg: 'rgba(251, 113, 133, 0.1)', border: 'rgba(251, 113, 133, 0.25)' };
      default: return { color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.1)', border: 'rgba(56, 189, 248, 0.25)' };
    }
  };

  const getIcon = (id) => {
    switch (id) {
      case '01': return <Blocks size={20} color="#38bdf8" />;
      case '02': return <Cpu size={20} color="#34d399" />;
      case '03': return <ShieldCheck size={20} color="#818cf8" />;
      case '04': return <GitPullRequest size={20} color="#fb7185" />;
      default: return null;
    }
  };

  return (
    <section
      id="principles"
      style={{
        paddingTop: '60px',
        paddingBottom: '80px',
        position: 'relative'
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
            ENGINEERING PHILOSOPHY
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
            How I Build
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: '#94a3b8',
              maxWidth: '720px',
              lineHeight: 1.6
            }}
          >
            Four uncompromising principles guiding architectural choices, engineering rigor, and deliverable workflows.
          </p>
        </div>

        {/* 4-Card Principles Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px'
          }}
        >
          {principles.map((principle) => {
            const tagStyle = getTagColor(principle.id);
            return (
              <div
                key={principle.id}
                className="glass-card interactive-card"
                data-cursor-label="PRINCIPLE"
                style={{
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '260px'
                }}
              >
                <div>
                  {/* Top Bar with Tag and Icon */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <span
                      style={{
                        fontSize: '11px',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 700,
                        color: tagStyle.color,
                        background: tagStyle.bg,
                        border: `1px solid ${tagStyle.border}`,
                        padding: '3px 8px',
                        borderRadius: '4px'
                      }}
                    >
                      {principle.id}. {principle.tag}
                    </span>
                    {getIcon(principle.id)}
                  </div>

                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 800,
                      color: '#ffffff',
                      marginBottom: '12px'
                    }}
                  >
                    {principle.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '13px',
                      color: '#94a3b8',
                      lineHeight: 1.7
                    }}
                  >
                    {principle.desc}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '11px',
                    fontFamily: 'var(--font-mono)',
                    color: '#64748b',
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                    marginTop: '20px'
                  }}
                >
                  <span>STANDARD SPEC</span>
                  <span style={{ color: tagStyle.color }}>• CERTIFIED</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
