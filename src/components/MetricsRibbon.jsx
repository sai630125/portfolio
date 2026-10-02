import React from 'react';
import { TrendingUp, ShieldCheck, Zap, Server, Users } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function MetricsRibbon() {
  const getIcon = (idx) => {
    switch (idx) {
      case 0: return <TrendingUp size={16} color="#38bdf8" />;
      case 1: return <Zap size={16} color="#34d399" />;
      case 2: return <Server size={16} color="#818cf8" />;
      case 3: return <ShieldCheck size={16} color="#10b981" />;
      case 4: return <Users size={16} color="#ec4899" />;
      default: return null;
    }
  };

  return (
    <section
      style={{
        paddingTop: '20px',
        paddingBottom: '60px',
        position: 'relative',
        zIndex: 5
      }}
    >
      <div className="container-max">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px'
          }}
        >
          {portfolioData.metrics.map((item, idx) => (
            <div
              key={idx}
              className="glass-card spotlight-card interactive-card"
              data-cursor-label="METRIC"
              style={{
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '145px'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span
                    style={{
                      fontSize: '10px',
                      fontFamily: 'var(--font-mono)',
                      color: idx % 2 === 0 ? '#38bdf8' : '#34d399',
                      background: idx % 2 === 0 ? 'rgba(56, 189, 248, 0.1)' : 'rgba(52, 211, 153, 0.1)',
                      border: `1px solid ${idx % 2 === 0 ? 'rgba(56, 189, 248, 0.25)' : 'rgba(52, 211, 153, 0.25)'}`,
                      padding: '2px 6px',
                      borderRadius: '4px',
                      fontWeight: 700
                    }}
                  >
                    {item.highlight}
                  </span>
                  {getIcon(idx)}
                </div>

                <div
                  style={{
                    fontSize: 'clamp(30px, 2.6vw, 38px)',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    marginBottom: '8px',
                    color: '#ffffff',
                    fontFamily: 'var(--font-mono)',
                    display: 'flex',
                    alignItems: 'baseline'
                  }}
                >
                  <span style={{ color: idx % 2 === 0 ? '#38bdf8' : '#34d399' }}>{item.value.slice(0, -1)}</span>
                  <span style={{ color: '#fff' }}>{item.value.slice(-1)}</span>
                </div>

                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#f8fafc',
                    marginBottom: '4px'
                  }}
                >
                  {item.label}
                </div>
              </div>

              <div
                style={{
                  fontSize: '11px',
                  color: '#64748b',
                  lineHeight: 1.4
                }}
              >
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
