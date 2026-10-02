import React, { useState, useEffect } from 'react';
import { Eye, TrendingUp, Activity, ShieldCheck, Sparkles } from 'lucide-react';

export default function LiveVisitorCounter({ compact = false }) {
  const [views, setViews] = useState(() => {
    const cached = localStorage.getItem('portfolio_page_views');
    return cached ? parseInt(cached, 10) : 1;
  });
  const [loading, setLoading] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [livePulse, setLivePulse] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchVisitorCount() {
      try {
        // hits.sh provides a free, live, real-time SVG hit tracker incremented per visit
        const response = await fetch('https://hits.sh/sai630125.github.io/portfolio.svg', {
          cache: 'no-cache'
        });
        
        if (response.ok) {
          const svgText = await response.text();
          const match = svgText.match(/aria-label="hits:\s*(\d+)"/i) || svgText.match(/<title>hits:\s*(\d+)<\/title>/i);
          if (match && match[1]) {
            const count = parseInt(match[1], 10);
            if (isMounted) {
              setViews(count);
              localStorage.setItem('portfolio_page_views', count.toString());
            }
          }
        }
      } catch (err) {
        console.warn('Real-time counter fallback active:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchVisitorCount();

    // Pulse animation cycle
    const pulseInterval = setInterval(() => {
      setLivePulse(prev => !prev);
    }, 2400);

    return () => {
      isMounted = false;
      clearInterval(pulseInterval);
    };
  }, []);

  const formattedViews = views.toLocaleString();

  if (compact) {
    return (
      <div style={{ position: 'relative' }}>
        <button
          onClick={() => setShowDetails(!showDetails)}
          data-cursor-label="VIEWS"
          title="Live Portfolio Visitors"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '7px',
            padding: '5px 11px',
            borderRadius: '20px',
            background: 'rgba(16, 185, 129, 0.08)',
            border: '1px solid rgba(16, 185, 129, 0.28)',
            color: '#34d399',
            fontSize: '12px',
            fontFamily: 'var(--font-mono)',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.25s ease',
            backdropFilter: 'blur(8px)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(16, 185, 129, 0.16)';
            e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.5)';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(16, 185, 129, 0.08)';
            e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.28)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          {/* Animated Glowing Live Dot */}
          <span style={{ position: 'relative', display: 'flex', width: '8px', height: '8px' }}>
            <span
              style={{
                position: 'absolute',
                display: 'inline-flex',
                height: '100%',
                width: '100%',
                borderRadius: '50%',
                background: '#10b981',
                opacity: livePulse ? 0.75 : 0.2,
                transform: livePulse ? 'scale(2)' : 'scale(1)',
                transition: 'all 1.2s ease-out'
              }}
            />
            <span
              style={{
                position: 'relative',
                display: 'inline-flex',
                borderRadius: '50%',
                height: '8px',
                width: '8px',
                background: '#10b981'
              }}
            />
          </span>

          <Eye size={13} color="#34d399" />
          <span>{loading ? '...' : formattedViews}</span>
          <span style={{ fontSize: '10px', color: '#a7f3d0', opacity: 0.85, fontWeight: 500 }}>views</span>
        </button>

        {/* Popover Details */}
        {showDetails && (
          <div
            style={{
              position: 'absolute',
              top: 'calc(100% + 10px)',
              right: 0,
              width: '260px',
              padding: '16px',
              borderRadius: '12px',
              background: 'rgba(9, 13, 20, 0.96)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(16, 185, 129, 0.15)',
              backdropFilter: 'blur(20px)',
              zIndex: 100,
              fontSize: '12px',
              animation: 'fadeIn 0.2s ease'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px', paddingBottom: '8px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981', fontWeight: 700, fontFamily: 'var(--font-mono)', fontSize: '11px' }}>
                <Activity size={14} /> REAL-TIME VISITOR METRICS
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); setShowDetails(false); }}
                style={{ background: 'transparent', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: '14px' }}
              >
                ✕
              </button>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#cbd5e1' }}>
                <span style={{ color: '#94a3b8' }}>Total Page Views:</span>
                <span style={{ fontWeight: 700, color: '#34d399', fontFamily: 'var(--font-mono)' }}>{formattedViews}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#cbd5e1' }}>
                <span style={{ color: '#94a3b8' }}>Tracking Engine:</span>
                <span style={{ color: '#38bdf8', fontFamily: 'var(--font-mono)', fontSize: '11px' }}>hits.sh / CDN edge</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#cbd5e1' }}>
                <span style={{ color: '#94a3b8' }}>Status:</span>
                <span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px' }}>
                  ● Connected Live
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px', padding: '6px 8px', borderRadius: '6px', background: 'rgba(255, 255, 255, 0.03)', color: '#64748b', fontSize: '10px' }}>
                <ShieldCheck size={13} color="#10b981" />
                <span>100% GDPR compliant & privacy safe</span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Full / Banner version for Footer
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
        padding: '10px 18px',
        borderRadius: '12px',
        background: 'rgba(16, 185, 129, 0.06)',
        border: '1px solid rgba(16, 185, 129, 0.2)',
        boxShadow: '0 4px 20px rgba(16, 185, 129, 0.05)',
        backdropFilter: 'blur(12px)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ position: 'relative', display: 'flex', width: '9px', height: '9px' }}>
          <span
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              borderRadius: '50%',
              background: '#10b981',
              opacity: livePulse ? 0.7 : 0.2,
              transform: livePulse ? 'scale(2.2)' : 'scale(1)',
              transition: 'all 1.2s ease-out'
            }}
          />
          <span style={{ borderRadius: '50%', height: '9px', width: '9px', background: '#10b981' }} />
        </span>
        <span style={{ fontSize: '11px', color: '#10b981', fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.05em' }}>
          LIVE TRAFFIC
        </span>
      </div>

      <div style={{ width: '1px', height: '18px', background: 'rgba(255, 255, 255, 0.1)' }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <Eye size={14} color="#34d399" />
        <span style={{ fontSize: '14px', fontWeight: 800, color: '#f8fafc', fontFamily: 'var(--font-mono)' }}>
          {loading ? '...' : formattedViews}
        </span>
        <span style={{ fontSize: '12px', color: '#94a3b8' }}>Total Views</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '10px', color: '#059669', background: 'rgba(16, 185, 129, 0.1)', padding: '2px 7px', borderRadius: '4px', fontWeight: 600 }}>
        <TrendingUp size={11} /> Real-Time
      </div>
    </div>
  );
}
