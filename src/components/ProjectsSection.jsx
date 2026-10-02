import React, { useState, useEffect } from 'react';
import { ExternalLink, Layers, Database, Cpu, Terminal, Activity, CheckCircle, Zap, Shield, Play, Wifi, WifiOff, RefreshCw, UserCheck, Clock } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ProjectsSection() {
  const { projects } = portfolioData;

  // ==========================================================
  // PROJECT 1: ARCHIBUS WORKPLACE SIMULATOR
  // ==========================================================
  const [selectedFloor, setSelectedFloor] = useState(4);
  const [desks, setDesks] = useState([
    { id: 'ROOM-401', name: 'Conference Alpha', status: 'available', x: 25, y: 35, type: 'Room' },
    { id: 'ROOM-402', name: 'Boardroom Beta', status: 'occupied', x: 55, y: 35, type: 'Room' },
    { id: 'ASSET-403', name: 'Projector Pod', status: 'available', x: 85, y: 35, type: 'Asset' },
    { id: 'RES-404', name: 'Workstation 404', status: 'reserved', x: 25, y: 65, type: 'Resource' },
    { id: 'RES-405', name: 'Workstation 405', status: 'available', x: 55, y: 65, type: 'Resource' },
    { id: 'RES-406', name: 'Executive Pod', status: 'occupied', x: 85, y: 65, type: 'Resource' },
  ]);
  const [reservationLog, setReservationLog] = useState('MSSQL: Query executed in 14ms (70% optimization)');

  const toggleDesk = (id) => {
    setDesks(prev => prev.map(d => {
      if (d.id === id) {
        const nextStatus = d.status === 'available' ? 'reserved' : 'available';
        setReservationLog(`Spring Boot REST: ${d.name} (${id}) updated to ${nextStatus.toUpperCase()} in MSSQL`);
        return { ...d, status: nextStatus };
      }
      return d;
    }));
  };

  // ==========================================================
  // PROJECT 2: A4N-OPS (REACT PWA) OFFLINE-FIRST SIMULATOR
  // ==========================================================
  const [isOnline, setIsOnline] = useState(true);
  const [offlineQueue, setOfflineQueue] = useState([]);
  const [syncStatus, setSyncStatus] = useState('Synchronized with MSSQL');
  const [isSyncing, setIsSyncing] = useState(false);

  const addOfflineWorkRequest = () => {
    const newId = `WR-${Math.floor(1000 + Math.random() * 9000)}`;
    const newReq = {
      id: newId,
      title: 'HVAC Filter Replacement & Inspection',
      time: new Date().toLocaleTimeString(),
      synced: isOnline
    };

    if (isOnline) {
      setSyncStatus(`REST API: ${newId} dispatched to Spring Boot & MSSQL`);
    } else {
      setOfflineQueue(prev => [newReq, ...prev]);
      setSyncStatus(`IndexedDB: ${newId} saved locally in 100% offline storage`);
    }
  };

  const triggerReconnectSync = () => {
    setIsOnline(true);
    if (offlineQueue.length > 0) {
      setIsSyncing(true);
      setTimeout(() => {
        setIsSyncing(false);
        setSyncStatus(`IndexedDB ➔ MSSQL: Synced ${offlineQueue.length} offline work requests successfully`);
        setOfflineQueue([]);
      }, 1000);
    } else {
      setSyncStatus('Network online. All field records synchronized with MSSQL');
    }
  };

  // ==========================================================
  // PROJECT 3: FACILITIES MANAGEMENT SERVICE (TECHNICIAN ASSIGNMENT)
  // ==========================================================
  const [technicians, setTechnicians] = useState([
    { id: 'TECH-1', name: 'Rajesh V.', status: 'Assigned', zone: 'Zone A', task: 'HVAC Maintenance' },
    { id: 'TECH-2', name: 'Amit K.', status: 'Available', zone: 'Zone B', task: 'Idle / Ready' },
    { id: 'TECH-3', name: 'Suresh M.', status: 'In Transit', zone: 'Zone C', task: 'Asset Inspection' }
  ]);
  const [slaStatus, setSlaStatus] = useState('99.4% SLA Compliance (Optimal)');

  const assignNextTechnician = () => {
    setTechnicians(prev => prev.map(t => {
      if (t.id === 'TECH-2') {
        return { ...t, status: 'Assigned', task: 'Emergency Room Booking Support' };
      }
      return t;
    }));
    setSlaStatus('Automated Dynamic Assignment: TECH-2 assigned within 1.2s');
  };

  return (
    <section
      id="projects"
      style={{
        paddingTop: '60px',
        paddingBottom: '80px',
        position: 'relative',
        zIndex: 5
      }}
    >
      <div className="container-max">
        
        {/* Section Header */}
        <div style={{ marginBottom: '48px' }}>
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
            PROJECT DEEP DIVES
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
            Engineered for Scale &amp; Performance
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: '#94a3b8',
              maxWidth: '720px',
              lineHeight: 1.6
            }}
          >
            Enterprise-level Facilities Management systems built with React.js, Spring Boot, Microservices, and MSSQL.
          </p>
        </div>

        {/* Project List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          
          {/* ========================================================
              PROJECT 1: ARCHIBUS WORKPLACE
             ======================================================== */}
          <div
            className="glass-card spotlight-card"
            style={{
              padding: '36px',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '32px',
                alignItems: 'center'
              }}
              className="project-grid"
            >
              {/* Left Content */}
              <div>
                <div
                  style={{
                    display: 'inline-block',
                    fontSize: '11px',
                    fontFamily: 'var(--font-mono)',
                    color: '#38bdf8',
                    background: 'rgba(56, 189, 248, 0.1)',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    marginBottom: '16px'
                  }}
                >
                  {projects[0].badge}
                </div>
                
                <h3
                  style={{
                    fontSize: '30px',
                    fontWeight: 800,
                    color: '#ffffff',
                    marginBottom: '14px',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {projects[0].title}
                </h3>

                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.7,
                    color: '#94a3b8',
                    marginBottom: '20px'
                  }}
                >
                  {projects[0].description}
                </p>

                {/* Key Outcomes from Resume */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#cbd5e1', fontWeight: 700, marginBottom: '10px' }}>
                    KEY ARCHITECTURAL OUTCOMES:
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {projects[0].outcomes.map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <CheckCircle size={15} color="#38bdf8" style={{ marginTop: '3px', flexShrink: 0 }} />
                        <span style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: 1.6 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {projects[0].tags.map(tag => (
                    <span key={tag} className="badge-pill" data-cursor-label="STACK">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Right Interactive Simulator: Archibus Workplace Reservation Engine */}
              <div
                className="terminal-window"
                style={{
                  padding: '22px',
                  background: 'rgba(7, 10, 18, 0.95)',
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
                    <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#94a3b8' }}>
                      archibus_booking_matrix // Floor {selectedFloor}
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    {[4, 5, 6].map(fl => (
                      <button
                        key={fl}
                        onClick={() => setSelectedFloor(fl)}
                        data-cursor-label="FLOOR"
                        style={{
                          background: selectedFloor === fl ? '#38bdf8' : 'rgba(255, 255, 255, 0.05)',
                          color: selectedFloor === fl ? '#0a0d14' : '#94a3b8',
                          border: 'none',
                          padding: '3px 10px',
                          borderRadius: '4px',
                          fontSize: '10px',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 700,
                          cursor: 'pointer'
                        }}
                      >
                        FL {fl}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ fontSize: '11px', color: '#64748b', marginBottom: '12px', fontFamily: 'var(--font-mono)' }}>
                  CLICK TO TEST ROOM / ASSET / RESOURCE BOOKING
                </div>

                {/* Reservation Items Grid */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '10px',
                    marginBottom: '16px'
                  }}
                >
                  {desks.map((d) => (
                    <div
                      key={d.id}
                      onClick={() => toggleDesk(d.id)}
                      data-cursor-label="BOOK"
                      style={{
                        padding: '12px 10px',
                        borderRadius: '6px',
                        textAlign: 'center',
                        cursor: 'pointer',
                        background: d.status === 'available'
                          ? 'rgba(52, 211, 153, 0.12)'
                          : d.status === 'reserved'
                          ? 'rgba(56, 189, 248, 0.22)'
                          : 'rgba(255, 255, 255, 0.03)',
                        border: `1px solid ${
                          d.status === 'available'
                            ? '#34d399'
                            : d.status === 'reserved'
                            ? '#38bdf8'
                            : 'rgba(255, 255, 255, 0.08)'
                        }`,
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div style={{ fontSize: '11px', fontWeight: 800, fontFamily: 'var(--font-mono)', color: '#fff' }}>
                        {d.id}
                      </div>
                      <div style={{ fontSize: '10px', color: '#94a3b8', marginTop: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {d.name}
                      </div>
                      <div
                        style={{
                          fontSize: '9px',
                          marginTop: '4px',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          color: d.status === 'available' ? '#34d399' : d.status === 'reserved' ? '#38bdf8' : '#64748b'
                        }}
                      >
                        {d.status}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Live Reservation Log */}
                <div
                  style={{
                    padding: '8px 12px',
                    borderRadius: '6px',
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    fontSize: '11px',
                    fontFamily: 'var(--font-mono)',
                    color: '#38bdf8',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <Terminal size={13} color="#38bdf8" />
                  <span>{reservationLog}</span>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              PROJECT 2: A4N-OPS (REACT PWA)
             ======================================================== */}
          <div
            className="glass-card spotlight-card"
            style={{
              padding: '36px',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '32px',
                alignItems: 'center'
              }}
              className="project-grid"
            >
              {/* Left Content */}
              <div>
                <div
                  style={{
                    display: 'inline-block',
                    fontSize: '11px',
                    fontFamily: 'var(--font-mono)',
                    color: '#818cf8',
                    background: 'rgba(99, 102, 241, 0.1)',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    border: '1px solid rgba(99, 102, 241, 0.25)',
                    marginBottom: '16px'
                  }}
                >
                  {projects[1].badge}
                </div>
                
                <h3
                  style={{
                    fontSize: '30px',
                    fontWeight: 800,
                    color: '#ffffff',
                    marginBottom: '14px',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {projects[1].title}
                </h3>

                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.7,
                    color: '#94a3b8',
                    marginBottom: '20px'
                  }}
                >
                  {projects[1].description}
                </p>

                {/* Outcomes */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#cbd5e1', fontWeight: 700, marginBottom: '10px' }}>
                    KEY ARCHITECTURAL OUTCOMES:
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {projects[1].outcomes.map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <CheckCircle size={15} color="#818cf8" style={{ marginTop: '3px', flexShrink: 0 }} />
                        <span style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: 1.6 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {projects[1].tags.map(tag => (
                    <span key={tag} className="badge-pill" data-cursor-label="STACK">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Right Interactive Simulator: IndexedDB Offline-First Sync */}
              <div
                className="terminal-window"
                style={{
                  padding: '22px',
                  background: 'rgba(7, 10, 18, 0.95)',
                  border: '1px solid rgba(129, 140, 248, 0.3)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {isOnline ? <Wifi size={16} color="#34d399" /> : <WifiOff size={16} color="#ef4444" />}
                    <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#f8fafc', fontWeight: 700 }}>
                      IndexedDB Offline Engine // {isOnline ? 'ONLINE' : 'OFFLINE MODE'}
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '6px' }}>
                    {isOnline ? (
                      <button
                        onClick={() => setIsOnline(false)}
                        data-cursor-label="OFFLINE"
                        style={{
                          background: 'rgba(239, 68, 68, 0.15)',
                          border: '1px solid rgba(239, 68, 68, 0.35)',
                          color: '#ef4444',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          fontSize: '10px',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 700,
                          cursor: 'pointer'
                        }}
                      >
                        Disconnect (Simulate Offline)
                      </button>
                    ) : (
                      <button
                        onClick={triggerReconnectSync}
                        data-cursor-label="SYNC"
                        style={{
                          background: 'rgba(52, 211, 153, 0.15)',
                          border: '1px solid rgba(52, 211, 153, 0.35)',
                          color: '#34d399',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          fontSize: '10px',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 700,
                          cursor: 'pointer'
                        }}
                      >
                        Reconnect &amp; Sync
                      </button>
                    )}
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '11px', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                    OFFLINE QUEUED REQUESTS: <strong style={{ color: offlineQueue.length > 0 ? '#ef4444' : '#34d399' }}>{offlineQueue.length}</strong>
                  </span>
                  <button
                    onClick={addOfflineWorkRequest}
                    data-cursor-label="LOG"
                    style={{
                      background: 'rgba(129, 140, 248, 0.15)',
                      border: '1px solid rgba(129, 140, 248, 0.4)',
                      color: '#818cf8',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      fontSize: '11px',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    + Log Work Request
                  </button>
                </div>

                {/* Queued Requests Display */}
                <div
                  style={{
                    height: '110px',
                    borderRadius: '6px',
                    background: '#04060a',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    padding: '8px 12px',
                    overflowY: 'auto',
                    marginBottom: '14px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px'
                  }}
                >
                  {offlineQueue.length === 0 ? (
                    <div style={{ fontSize: '11px', color: '#64748b', fontFamily: 'var(--font-mono)', textAlign: 'center', paddingTop: '35px' }}>
                      {isOnline ? '100% Offline Access Ready • All Work Requests Synced' : 'Ready to store work requests in local IndexedDB'}
                    </div>
                  ) : (
                    offlineQueue.map(item => (
                      <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#f8fafc' }}>
                        <span style={{ color: '#ef4444' }}>{item.id} - {item.title}</span>
                        <span style={{ color: '#64748b' }}>{item.time} (IndexedDB)</span>
                      </div>
                    ))
                  )}
                </div>

                {/* Status Bar */}
                <div
                  style={{
                    padding: '8px 12px',
                    borderRadius: '6px',
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    fontSize: '11px',
                    fontFamily: 'var(--font-mono)',
                    color: isOnline ? '#34d399' : '#f59e0b',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <RefreshCw size={12} className={isSyncing ? 'animate-spin' : ''} />
                  <span>{syncStatus}</span>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              PROJECT 3: FACILITIES MANAGEMENT SERVICE
             ======================================================== */}
          <div
            className="glass-card spotlight-card"
            style={{
              padding: '36px',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '32px',
                alignItems: 'center'
              }}
              className="project-grid"
            >
              {/* Left Content */}
              <div>
                <div
                  style={{
                    display: 'inline-block',
                    fontSize: '11px',
                    fontFamily: 'var(--font-mono)',
                    color: '#34d399',
                    background: 'rgba(52, 211, 153, 0.1)',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    border: '1px solid rgba(52, 211, 153, 0.25)',
                    marginBottom: '16px'
                  }}
                >
                  {projects[2].badge}
                </div>
                
                <h3
                  style={{
                    fontSize: '30px',
                    fontWeight: 800,
                    color: '#ffffff',
                    marginBottom: '14px',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {projects[2].title}
                </h3>

                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.7,
                    color: '#94a3b8',
                    marginBottom: '20px'
                  }}
                >
                  {projects[2].description}
                </p>

                {/* Outcomes */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#cbd5e1', fontWeight: 700, marginBottom: '10px' }}>
                    KEY ARCHITECTURAL OUTCOMES:
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {projects[2].outcomes.map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <CheckCircle size={15} color="#34d399" style={{ marginTop: '3px', flexShrink: 0 }} />
                        <span style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: 1.6 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {projects[2].tags.map(tag => (
                    <span key={tag} className="badge-pill" data-cursor-label="STACK">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Right Interactive Simulator: Dynamic Technician Assignment & SLA Manager */}
              <div
                className="terminal-window"
                style={{
                  padding: '22px',
                  background: 'rgba(7, 10, 18, 0.95)',
                  border: '1px solid rgba(52, 211, 153, 0.3)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <UserCheck size={17} color="#34d399" />
                    <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#fff', fontWeight: 700 }}>
                      Dynamic Technician Assignment Engine
                    </span>
                  </div>
                  <button
                    onClick={assignNextTechnician}
                    data-cursor-label="DISPATCH"
                    style={{
                      background: 'rgba(52, 211, 153, 0.15)',
                      border: '1px solid rgba(52, 211, 153, 0.4)',
                      color: '#34d399',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      fontSize: '11px',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    Auto-Assign Next
                  </button>
                </div>

                {/* Technicians List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                  {technicians.map((t) => (
                    <div
                      key={t.id}
                      style={{
                        padding: '10px 14px',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc' }}>
                          {t.name} <span style={{ fontSize: '11px', color: '#64748b', fontWeight: 400 }}>({t.zone})</span>
                        </div>
                        <div style={{ fontSize: '11px', color: '#94a3b8' }}>{t.task}</div>
                      </div>
                      <span
                        style={{
                          fontSize: '10px',
                          fontFamily: 'var(--font-mono)',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          fontWeight: 700,
                          background: t.status === 'Assigned' ? 'rgba(56, 189, 248, 0.15)' : t.status === 'Available' ? 'rgba(52, 211, 153, 0.15)' : 'rgba(245, 158, 11, 0.15)',
                          color: t.status === 'Assigned' ? '#38bdf8' : t.status === 'Available' ? '#34d399' : '#f59e0b',
                          border: `1px solid ${t.status === 'Assigned' ? 'rgba(56, 189, 248, 0.3)' : t.status === 'Available' ? 'rgba(52, 211, 153, 0.3)' : 'rgba(245, 158, 11, 0.3)'}`
                        }}
                      >
                        {t.status}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Status Bar */}
                <div
                  style={{
                    padding: '8px 12px',
                    borderRadius: '6px',
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    fontSize: '11px',
                    fontFamily: 'var(--font-mono)',
                    color: '#34d399',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span>{slaStatus}</span>
                  <span style={{ fontWeight: 700, color: '#38bdf8' }}>SLA 70% GAIN</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 960px) {
          .project-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
