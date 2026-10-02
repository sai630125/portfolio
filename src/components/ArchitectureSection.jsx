import React, { useState } from 'react';
import { Network, Server, Database, Shield, Radio, CheckCircle2, ChevronRight, Zap, RefreshCw } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ArchitectureSection() {
  const { lifecycle } = portfolioData;
  const [selectedStep, setSelectedStep] = useState(0);

  const stepDetails = [
    {
      title: "Client-Side Ingress & Optimistic UI",
      headers: "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...\nContent-Type: application/json\nX-Client-Trace-Id: 9283-ac71-002f",
      body: '{\n  "action": "RESERVE_WORKSPACE",\n  "deskId": "D-404",\n  "timestamp": 1727918400000\n}',
      notes: "React 18 concurrent features render optimistic feedback in 0.4ms before network resolution."
    },
    {
      title: "Edge Shielding & TLS Termination",
      headers: "CF-Ray: 8cc7192a001a2-BOM\nX-Forwarded-For: 103.21.244.0\nStrict-Transport-Security: max-age=31536000",
      body: '{\n  "status": "PASS",\n  "ddosThreatLevel": 0,\n  "geoZone": "AP-SOUTH-1"\n}',
      notes: "Cloudflare terminates TLS 1.3 handshake and applies token-bucket rate limiter."
    },
    {
      title: "Spring Cloud Gateway Filter Chain",
      headers: "X-Gateway-Route: workplace-service\nX-User-Id: usr_9941a8\nX-CircuitBreaker: CLOSED",
      body: '{\n  "tokenClaims": ["ROLE_ADMIN", "PERM_RESERVE"],\n  "forwardLatency": "11ms"\n}',
      notes: "Resilience4j circuit breaker state verified CLOSED. Non-blocking Netty routing."
    },
    {
      title: "Spring Boot Virtual Thread Execution",
      headers: "X-Spring-Thread: ForkJoinPool-1-worker-3-virtual-12\nX-Span-Id: 44f910ab92",
      body: '{\n  "service": "WorkplaceService",\n  "method": "executeReservationLock",\n  "validation": "PASSED"\n}',
      notes: "Java 21 Virtual Threads execute business validation and publish event to Kafka broker."
    },
    {
      title: "Redis L2 & PostgreSQL Transaction",
      headers: "X-Cache-Status: MISS -> ACQUIRED_LOCK\nX-HikariCP-BorrowTime: 0.8ms",
      body: '{\n  "txIsolation": "READ_COMMITTED",\n  "lockAcquired": true,\n  "dbLatency": "5.4ms"\n}',
      notes: "Redlock algorithm ensures cluster-wide idempotency; PostgreSQL persists audit row."
    },
    {
      title: "Event Streaming & Client Dispatch",
      headers: "HTTP/2 200 OK\nContent-Encoding: gzip\nX-Total-Pipeline-Time: 86ms",
      body: '{\n  "status": "CONFIRMED",\n  "reservationId": "RES-89218",\n  "syncTime": "86ms"\n}',
      notes: "Kafka consumer triggers real-time WebSocket broadcast to all floor visualizers."
    }
  ];

  return (
    <section
      id="architecture"
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
            HOW THE SYSTEM WORKS — ARCHITECTURE
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
            Full-Stack Request Lifecycle
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: '#94a3b8',
              maxWidth: '720px',
              lineHeight: 1.6
            }}
          >
            End-to-end journey of an authenticated request through client, ingress, gateway, microservices, and database layers.
          </p>
        </div>

        {/* 2-Column Architecture Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '28px',
            alignItems: 'start'
          }}
          className="arch-grid"
        >
          {/* Left Column: 6-Step Interactive Request Flow */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {lifecycle.map((item, idx) => {
              const isSelected = selectedStep === idx;
              return (
                <div
                  key={item.step}
                  onClick={() => setSelectedStep(idx)}
                  data-cursor-label="INSPECT"
                  className="interactive-card"
                  style={{
                    padding: '16px 20px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    background: isSelected ? 'rgba(56, 189, 248, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                    border: `1px solid ${isSelected ? '#38bdf8' : 'rgba(255, 255, 255, 0.06)'}`,
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span
                        style={{
                          fontSize: '12px',
                          fontWeight: 800,
                          fontFamily: 'var(--font-mono)',
                          color: isSelected ? '#38bdf8' : '#64748b'
                        }}
                      >
                        {item.step}.
                      </span>
                      <span
                        style={{
                          fontSize: '14px',
                          fontWeight: 700,
                          color: isSelected ? '#f8fafc' : '#cbd5e1'
                        }}
                      >
                        {item.name}
                      </span>
                    </div>

                    <span
                      style={{
                        fontSize: '11px',
                        fontFamily: 'var(--font-mono)',
                        color: isSelected ? '#38bdf8' : '#94a3b8'
                      }}
                    >
                      {item.tech}
                    </span>
                  </div>

                  <div style={{ fontSize: '12px', color: '#94a3b8', lineHeight: 1.5, paddingLeft: '28px' }}>
                    {item.desc}
                  </div>

                  <div
                    style={{
                      fontSize: '10px',
                      fontFamily: 'var(--font-mono)',
                      color: isSelected ? '#34d399' : '#64748b',
                      marginTop: '6px',
                      paddingLeft: '28px'
                    }}
                  >
                    {item.metrics}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Packet & Tuning Inspector */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Packet Inspector Terminal */}
            <div
              className="terminal-window"
              style={{
                padding: '22px',
                background: 'rgba(9, 13, 22, 0.95)',
                border: '1px solid rgba(56, 189, 248, 0.25)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div className="terminal-dots">
                    <span className="dot dot-red" />
                    <span className="dot dot-yellow" />
                    <span className="dot dot-green" />
                  </div>
                  <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#38bdf8', fontWeight: 600 }}>
                    Step {lifecycle[selectedStep].step} // Telemetry Packet Inspector
                  </span>
                </div>
                <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#34d399' }}>
                  LIVE BUFFER
                </span>
              </div>

              <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>
                {stepDetails[selectedStep].title}
              </div>

              {/* Headers */}
              <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#64748b', marginBottom: '4px' }}>
                  PROTOCOL HEADERS:
                </div>
                <pre
                  style={{
                    background: '#06080e',
                    padding: '10px',
                    borderRadius: '6px',
                    fontSize: '11px',
                    fontFamily: 'var(--font-mono)',
                    color: '#818cf8',
                    overflowX: 'auto'
                  }}
                >
                  {stepDetails[selectedStep].headers}
                </pre>
              </div>

              {/* Payload */}
              <div style={{ marginBottom: '14px' }}>
                <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#64748b', marginBottom: '4px' }}>
                  PAYLOAD SNAPSHOT:
                </div>
                <pre
                  style={{
                    background: '#06080e',
                    padding: '10px',
                    borderRadius: '6px',
                    fontSize: '11px',
                    fontFamily: 'var(--font-mono)',
                    color: '#34d399',
                    overflowX: 'auto'
                  }}
                >
                  {stepDetails[selectedStep].body}
                </pre>
              </div>

              {/* Architectural Notes */}
              <div
                style={{
                  fontSize: '11px',
                  color: '#94a3b8',
                  padding: '10px 12px',
                  borderRadius: '6px',
                  background: 'rgba(56, 189, 248, 0.05)',
                  border: '1px solid rgba(56, 189, 248, 0.15)'
                }}
              >
                <strong style={{ color: '#38bdf8' }}>Architecture Note: </strong>
                {stepDetails[selectedStep].notes}
              </div>
            </div>

            {/* Tuning Spring Microservices Core Card */}
            <div
              className="glass-card"
              style={{
                padding: '24px',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <Zap size={18} color="#38bdf8" />
                <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#f8fafc' }}>
                  Tuning Spring Microservices Core
                </h4>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '12px', color: '#94a3b8' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.04)', paddingBottom: '6px' }}>
                  <span style={{ color: '#cbd5e1' }}>Virtual Threads (Loom):</span>
                  <span style={{ color: '#34d399', fontFamily: 'var(--font-mono)' }}>Enabled (10k+ concurrent/JVM)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.04)', paddingBottom: '6px' }}>
                  <span style={{ color: '#cbd5e1' }}>HikariCP Pool:</span>
                  <span style={{ color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>maxPoolSize: 20 // idleTimeout: 30s</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.04)', paddingBottom: '6px' }}>
                  <span style={{ color: '#cbd5e1' }}>Redis Serializer:</span>
                  <span style={{ color: '#818cf8', fontFamily: 'var(--font-mono)' }}>GenericJackson2JsonRedisSerializer</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#cbd5e1' }}>Kafka Producer Acks:</span>
                  <span style={{ color: '#f59e0b', fontFamily: 'var(--font-mono)' }}>acks=all (zero data loss)</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 960px) {
          .arch-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
      `}</style>
    </section>
  );
}
