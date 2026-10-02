import React, { useState } from 'react';
import { ArrowRight, Download, Send, RefreshCw, Database, Server, Monitor, ShieldCheck, Zap, Sparkles, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenContact }) {
  const [pipelineActive, setPipelineActive] = useState(false);
  const [activeNode, setActiveNode] = useState(null);
  const [trafficProfile, setTrafficProfile] = useState('normal');
  const [terminalLogs, setTerminalLogs] = useState([
    "SYS_INIT: React 18 & Redux Toolkit state initialized",
    "SECURITY: Spring Security RBAC token verified",
    "API_LAYER: Spring Boot REST Controller /api/v1/fm/bookings",
    "MSSQL: Query execution plan optimized with clustered index (70% cut)"
  ]);

  const fireTestRequest = () => {
    if (pipelineActive) return;
    setPipelineActive(true);
    setActiveNode(1);

    const now = new Date().toLocaleTimeString();
    setTerminalLogs(prev => [`[${now}] UI: Redux Toolkit dispatched action for room booking`, ...prev.slice(0, 3)]);

    setTimeout(() => {
      setActiveNode(2);
      setTerminalLogs(prev => [`[${now}] SECURITY: Spring Security authorization passed`, ...prev.slice(0, 3)]);
    }, 350);

    setTimeout(() => {
      setActiveNode(3);
      setTerminalLogs(prev => [`[${now}] SERVICE: Spring Boot microservice processed business rules`, ...prev.slice(0, 3)]);
    }, 750);

    setTimeout(() => {
      setActiveNode(4);
      setTerminalLogs(prev => [`[${now}] MSSQL: Stored procedure executed successfully in 12ms`, ...prev.slice(0, 3)]);
    }, 1150);

    setTimeout(() => {
      setActiveNode(null);
      setPipelineActive(false);
    }, 1550);
  };

  const techBadges = [
    { name: 'React.js', color: '#38bdf8' },
    { name: 'Spring Boot', color: '#10b981' },
    { name: 'Microservices', color: '#818cf8' },
    { name: 'Microsoft SQL Server (MSSQL)', color: '#f59e0b' },
    { name: 'Redux Toolkit', color: '#a855f7' },
    { name: 'Prime React', color: '#38bdf8' },
    { name: 'Java 8/11', color: '#ec4899' },
    { name: 'RESTful APIs', color: '#34d399' }
  ];

  return (
    <section
      style={{
        paddingTop: '135px',
        paddingBottom: '80px',
        position: 'relative',
        zIndex: 5
      }}
      id="hero"
    >
      <div className="container-max">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '48px',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column */}
          <div>
            
            {/* Top Eyebrow Status Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '7px 16px',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.035)',
                border: '1px solid rgba(255, 255, 255, 0.09)',
                marginBottom: '28px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)'
              }}
            >
              <span className="badge-pulse" />
              <span
                style={{
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  color: '#f1f5f9'
                }}
              >
                AVAILABLE FOR WORK: FULL-TIME / CONTRACT
              </span>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
              <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#38bdf8', fontWeight: 600 }}>REACT.JS</span>
              <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#34d399', fontWeight: 600 }}>SPRING BOOT</span>
              <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#f59e0b', fontWeight: 600 }}>MSSQL</span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(38px, 5.2vw, 64px)',
                lineHeight: 1.1,
                fontWeight: 800,
                letterSpacing: '-0.03em',
                marginBottom: '24px',
                color: '#ffffff'
              }}
            >
              Building scalable products with{' '}
              <span className="text-gradient-cyan" style={{ textShadow: '0 0 40px rgba(56, 189, 248, 0.5)' }}>React</span>,{' '}
              <span style={{ color: '#ffffff' }}>Java</span> &amp;{' '}
              <span className="text-gradient-emerald" style={{ textShadow: '0 0 40px rgba(52, 211, 153, 0.5)' }}>Spring Boot</span>.
            </h1>

            {/* Subtitle Description */}
            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.8,
                color: '#94a3b8',
                maxWidth: '640px',
                marginBottom: '32px'
              }}
            >
              Senior Software Engineer with <strong style={{ color: '#ffffff', fontWeight: 700 }}>4.6 years of experience</strong> designing and scaling full-stack web applications using <strong style={{ color: '#38bdf8' }}>React.js</strong> and <strong style={{ color: '#34d399' }}>Spring Boot</strong>, <strong style={{ color: '#818cf8' }}>Microservices</strong> and <strong style={{ color: '#f59e0b' }}>MSSQL</strong>. Proven track record in building responsive UIs, developing secure RESTful APIs, and optimizing database performance for enterprise Facilities Management systems.
            </p>

            {/* Tech Badges List */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '38px'
              }}
            >
              {techBadges.map((badge) => (
                <span
                  key={badge.name}
                  data-cursor-label="TECH"
                  className="badge-pill"
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: badge.color, boxShadow: `0 0 6px ${badge.color}` }} />
                  {badge.name}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '14px'
              }}
            >
              <a
                href="#projects"
                data-cursor-label="EXPLORE"
                className="btn-primary"
              >
                <span>Explore Work</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="#contact"
                data-cursor-label="EMAIL"
                className="btn-secondary"
              >
                <span>saikrishnareddyteluri@gmail.com</span>
              </a>

              <button
                onClick={onOpenContact}
                data-cursor-label="TALK"
                className="btn-secondary"
                style={{ border: '1px solid rgba(56, 189, 248, 0.35)', color: '#38bdf8' }}
              >
                <Send size={14} />
                <span>Let's Talk</span>
              </button>
            </div>

          </div>

          {/* Right Column: Real Full-Stack Request Pipeline Visualizer */}
          <div>
            <div
              className="glass-card spotlight-card"
              style={{
                padding: '26px',
                boxShadow: '0 25px 60px -15px rgba(0,0,0,0.85), 0 0 35px -5px rgba(56, 189, 248, 0.2)',
                border: '1px solid rgba(56, 189, 248, 0.28)'
              }}
            >
              {/* Terminal Window Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '16px',
                  marginBottom: '16px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div className="terminal-dots">
                    <span className="dot dot-red" />
                    <span className="dot dot-yellow" />
                    <span className="dot dot-green" />
                  </div>
                  <span
                    style={{
                      fontSize: '11px',
                      fontFamily: 'var(--font-mono)',
                      color: '#94a3b8',
                      marginLeft: '6px'
                    }}
                  >
                    enterprise_fullstack_pipeline.v4
                  </span>
                </div>

                <div
                  style={{
                    fontSize: '10px',
                    fontFamily: 'var(--font-mono)',
                    color: '#34d399',
                    background: 'rgba(52, 211, 153, 0.12)',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    border: '1px solid rgba(52, 211, 153, 0.25)',
                    fontWeight: 700
                  }}
                >
                  MSSQL &amp; SPRING BOOT LIVE
                </div>
              </div>

              {/* Pipeline Nodes Flow */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                
                {/* Node 1: Client UI */}
                <div
                  data-cursor-label="CLIENT"
                  style={{
                    padding: '12px 16px',
                    borderRadius: '8px',
                    background: activeNode === 1 ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255, 255, 255, 0.02)',
                    border: `1px solid ${activeNode === 1 ? '#38bdf8' : 'rgba(255, 255, 255, 0.06)'}`,
                    boxShadow: activeNode === 1 ? '0 0 20px rgba(56, 189, 248, 0.35)' : 'none',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Monitor size={16} color={activeNode === 1 ? '#38bdf8' : '#94a3b8'} />
                      <span style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc' }}>
                        CLIENT UI — REACT.JS &amp; REDUX TOOLKIT
                      </span>
                    </div>
                    <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#38bdf8', fontWeight: 600 }}>
                      +25% Speed
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#64748b', marginTop: '4px', fontFamily: 'var(--font-mono)' }}>
                    <span>Prime React &amp; Modular Reusable Components</span>
                    <span style={{ color: '#34d399' }}>Dev Effort: -70%</span>
                  </div>
                </div>

                {/* Animated Pipeline Cable 1 */}
                <div style={{ display: 'flex', justifyContent: 'center', height: '16px', alignItems: 'center', position: 'relative' }}>
                  <div
                    style={{
                      width: '2px',
                      height: '100%',
                      background: activeNode === 1 || activeNode === 2 ? '#38bdf8' : 'rgba(255, 255, 255, 0.1)',
                      boxShadow: activeNode === 1 || activeNode === 2 ? '0 0 10px #38bdf8' : 'none',
                      transition: 'all 0.2s ease'
                    }}
                  />
                  {(activeNode === 1 || activeNode === 2) && (
                    <div style={{ position: 'absolute', width: '6px', height: '6px', borderRadius: '50%', background: '#fff', boxShadow: '0 0 8px #38bdf8', animation: 'flow-pulse 0.4s infinite linear' }} />
                  )}
                </div>

                {/* Node 2: Spring Security & Auth */}
                <div
                  data-cursor-label="SECURITY"
                  style={{
                    padding: '12px 16px',
                    borderRadius: '8px',
                    background: activeNode === 2 ? 'rgba(129, 140, 248, 0.2)' : 'rgba(255, 255, 255, 0.02)',
                    border: `1px solid ${activeNode === 2 ? '#818cf8' : 'rgba(255, 255, 255, 0.06)'}`,
                    boxShadow: activeNode === 2 ? '0 0 20px rgba(129, 140, 248, 0.35)' : 'none',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <ShieldCheck size={16} color={activeNode === 2 ? '#818cf8' : '#94a3b8'} />
                      <span style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc' }}>
                        SECURITY — SPRING SECURITY &amp; AUTHORIZATION
                      </span>
                    </div>
                    <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#818cf8', fontWeight: 600 }}>
                      RBAC OK
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#64748b', marginTop: '4px', fontFamily: 'var(--font-mono)' }}>
                    <span>Role-Based Permissions &amp; Authentication</span>
                    <span style={{ color: '#818cf8' }}>Payload: Reduced</span>
                  </div>
                </div>

                {/* Animated Pipeline Cable 2 */}
                <div style={{ display: 'flex', justifyContent: 'center', height: '16px', alignItems: 'center', position: 'relative' }}>
                  <div
                    style={{
                      width: '2px',
                      height: '100%',
                      background: activeNode === 2 || activeNode === 3 ? '#818cf8' : 'rgba(255, 255, 255, 0.1)',
                      boxShadow: activeNode === 2 || activeNode === 3 ? '0 0 10px #818cf8' : 'none',
                      transition: 'all 0.2s ease'
                    }}
                  />
                  {(activeNode === 2 || activeNode === 3) && (
                    <div style={{ position: 'absolute', width: '6px', height: '6px', borderRadius: '50%', background: '#fff', boxShadow: '0 0 8px #818cf8', animation: 'flow-pulse 0.4s infinite linear' }} />
                  )}
                </div>

                {/* Node 3: Core Backend */}
                <div
                  data-cursor-label="BACKEND"
                  style={{
                    padding: '12px 16px',
                    borderRadius: '8px',
                    background: activeNode === 3 ? 'rgba(52, 211, 153, 0.2)' : 'rgba(255, 255, 255, 0.02)',
                    border: `1px solid ${activeNode === 3 ? '#34d399' : 'rgba(255, 255, 255, 0.06)'}`,
                    boxShadow: activeNode === 3 ? '0 0 20px rgba(52, 211, 153, 0.35)' : 'none',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Server size={16} color={activeNode === 3 ? '#34d399' : '#94a3b8'} />
                      <span style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc' }}>
                        BACKEND — JAVA &amp; SPRING BOOT MICROSERVICES
                      </span>
                    </div>
                    <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#34d399', fontWeight: 600 }}>
                      -50% Time
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#64748b', marginTop: '4px', fontFamily: 'var(--font-mono)' }}>
                    <span>Spring MVC REST APIs &amp; Business Logic Validation</span>
                    <span style={{ color: '#34d399' }}>Data Retrieval: 50% Faster</span>
                  </div>
                </div>

                {/* Animated Pipeline Cable 3 */}
                <div style={{ display: 'flex', justifyContent: 'center', height: '16px', alignItems: 'center', position: 'relative' }}>
                  <div
                    style={{
                      width: '2px',
                      height: '100%',
                      background: activeNode === 3 || activeNode === 4 ? '#34d399' : 'rgba(255, 255, 255, 0.1)',
                      boxShadow: activeNode === 3 || activeNode === 4 ? '0 0 10px #34d399' : 'none',
                      transition: 'all 0.2s ease'
                    }}
                  />
                  {(activeNode === 3 || activeNode === 4) && (
                    <div style={{ position: 'absolute', width: '6px', height: '6px', borderRadius: '50%', background: '#fff', boxShadow: '0 0 8px #34d399', animation: 'flow-pulse 0.4s infinite linear' }} />
                  )}
                </div>

                {/* Node 4: MSSQL */}
                <div
                  data-cursor-label="DATABASE"
                  style={{
                    padding: '12px 16px',
                    borderRadius: '8px',
                    background: activeNode === 4 ? 'rgba(245, 158, 11, 0.2)' : 'rgba(255, 255, 255, 0.02)',
                    border: `1px solid ${activeNode === 4 ? '#f59e0b' : 'rgba(255, 255, 255, 0.06)'}`,
                    boxShadow: activeNode === 4 ? '0 0 20px rgba(245, 158, 11, 0.35)' : 'none',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Database size={16} color={activeNode === 4 ? '#f59e0b' : '#94a3b8'} />
                      <span style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc' }}>
                        DATABASE — MICROSOFT SQL SERVER (MSSQL)
                      </span>
                    </div>
                    <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#f59e0b', fontWeight: 600 }}>
                      -70% Query Time
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#64748b', marginTop: '4px', fontFamily: 'var(--font-mono)' }}>
                    <span>Spring Data JPA // Stored Procedures &amp; Index Tuning</span>
                    <span style={{ color: '#f59e0b' }}>70% Optimization</span>
                  </div>
                </div>

              </div>

              {/* Streaming Logs Terminal */}
              <div
                style={{
                  marginTop: '16px',
                  padding: '10px 14px',
                  borderRadius: '6px',
                  background: '#04060a',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  color: '#94a3b8',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '3px'
                }}
              >
                <div style={{ color: '#38bdf8', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                  <Terminal size={11} />
                  <span>FACILITIES MANAGEMENT SYSTEM TRACE</span>
                </div>
                {terminalLogs.slice(0, 3).map((log, i) => (
                  <div key={i} style={{ color: i === 0 ? '#f1f5f9' : '#64748b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {log}
                  </div>
                ))}
              </div>

              {/* Bottom Telemetry Strip & Trigger */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '16px',
                  marginTop: '16px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}
              >
                <div style={{ display: 'flex', gap: '16px', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>
                  <div>
                    <span style={{ color: '#64748b' }}>MSSQL QUERY: </span>
                    <span style={{ color: '#f59e0b', fontWeight: 700 }}>-70% Time</span>
                  </div>
                  <div>
                    <span style={{ color: '#64748b' }}>RETRIEVAL: </span>
                    <span style={{ color: '#34d399', fontWeight: 700 }}>50% Faster</span>
                  </div>
                  <div>
                    <span style={{ color: '#64748b' }}>EXP: </span>
                    <span style={{ color: '#38bdf8', fontWeight: 700 }}>4.6 Yrs</span>
                  </div>
                </div>

                <button
                  onClick={fireTestRequest}
                  disabled={pipelineActive}
                  data-cursor-label="SIMULATE"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '7px 14px',
                    borderRadius: '6px',
                    background: pipelineActive ? 'rgba(56, 189, 248, 0.25)' : 'rgba(56, 189, 248, 0.12)',
                    border: '1px solid rgba(56, 189, 248, 0.4)',
                    color: '#38bdf8',
                    fontSize: '11px',
                    fontWeight: 700,
                    fontFamily: 'var(--font-mono)',
                    cursor: pipelineActive ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 0 15px rgba(56, 189, 248, 0.2)'
                  }}
                >
                  <RefreshCw size={12} className={pipelineActive ? 'animate-spin' : ''} />
                  <span>{pipelineActive ? 'Executing...' : 'Test FM Request'}</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.95fr !important;
          }
        }
        @keyframes flow-pulse {
          0% { transform: translateY(-8px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(8px); opacity: 0; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </section>
  );
}
