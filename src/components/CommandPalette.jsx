import React, { useState, useEffect } from 'react';
import { Search, ArrowRight, CornerDownLeft, Sparkles, Terminal, Mail, Download, Layers, Shield, Cpu, BookOpen, Linkedin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function CommandPalette({ isOpen, onClose, onOpenContact, cursorMode, setCursorMode }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const commands = [
    {
      id: 'jump-projects',
      title: 'Projects Showcase (Archibus, A4N-Ops PWA, FM Service)',
      category: 'Navigation',
      icon: <Layers size={14} color="#38bdf8" />,
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'jump-experience',
      title: 'Work Experience (Crestere Technologies LLP - 4.6 Yrs)',
      category: 'Navigation',
      icon: <Terminal size={14} color="#34d399" />,
      action: () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'jump-skills',
      title: 'Skills Matrix (React.js, Spring Boot, MSSQL, Redux)',
      category: 'Navigation',
      icon: <Cpu size={14} color="#f59e0b" />,
      action: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'jump-architecture',
      title: 'Architecture & Full-Stack Request Lifecycle',
      category: 'Navigation',
      icon: <Shield size={14} color="#818cf8" />,
      action: () => {
        document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'jump-education',
      title: 'Education & NXT Wave Certifications',
      category: 'Navigation',
      icon: <BookOpen size={14} color="#ec4899" />,
      action: () => {
        document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'action-linkedin',
      title: 'Open LinkedIn Profile (/in/teluri-saikrishna-reddy-9aa348161)',
      category: 'Social Channels',
      icon: <Linkedin size={14} color="#38bdf8" />,
      action: () => {
        window.open(portfolioData.personal.linkedinUrl, '_blank');
        onClose();
      }
    },
    {
      id: 'action-email',
      title: `Copy Email (${portfolioData.personal.email})`,
      category: 'Quick Actions',
      icon: <Mail size={14} color="#34d399" />,
      action: () => {
        navigator.clipboard.writeText(portfolioData.personal.email);
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
        alert(`Copied ${portfolioData.personal.email} to clipboard!`);
        onClose();
      }
    },
    {
      id: 'action-contact',
      title: 'Send a Message (Direct Inquiry Modal)',
      category: 'Quick Actions',
      icon: <Mail size={14} color="#818cf8" />,
      action: () => {
        onClose();
        onOpenContact();
      }
    },
    {
      id: 'cursor-toggle',
      title: `Switch Cursor Mode (Current: ${cursorMode})`,
      category: 'Preferences',
      icon: <Sparkles size={14} color="#f59e0b" />,
      action: () => {
        setCursorMode(prev => prev === 'glow' ? 'minimal' : prev === 'minimal' ? 'system' : 'glow');
        onClose();
      }
    }
  ];

  const filteredCommands = commands.filter(cmd =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(false);
      }
      if (isOpen) {
        if (e.key === 'Escape') onClose();
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex(prev => (prev + 1) % (filteredCommands.length || 1));
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
        }
        if (e.key === 'Enter' && filteredCommands[selectedIndex]) {
          e.preventDefault();
          filteredCommands[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999999,
        background: 'rgba(5, 7, 12, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '12vh',
        paddingLeft: '16px',
        paddingRight: '16px'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '580px',
          borderRadius: '12px',
          border: '1px solid rgba(56, 189, 248, 0.35)',
          boxShadow: '0 25px 70px rgba(0, 0, 0, 0.9), 0 0 40px rgba(56, 189, 248, 0.2)',
          overflow: 'hidden'
        }}
      >
        {/* Search Input Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '16px 20px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            background: 'rgba(255, 255, 255, 0.02)'
          }}
        >
          <Search size={18} color="#38bdf8" />
          <input
            autoFocus
            type="text"
            placeholder="Type a command (e.g. Archibus, Crestere, Skills, LinkedIn)..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            style={{
              width: '100%',
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#fff',
              fontSize: '15px',
              fontFamily: 'var(--font-main)'
            }}
          />
          <kbd
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              padding: '3px 6px',
              borderRadius: '4px',
              fontSize: '10px',
              fontFamily: 'var(--font-mono)',
              color: '#94a3b8'
            }}
          >
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div style={{ maxHeight: '360px', overflowY: 'auto', padding: '10px' }}>
          {filteredCommands.length === 0 ? (
            <div style={{ padding: '24px', textAlign: 'center', color: '#64748b', fontSize: '13px' }}>
              No commands matching "{query}"
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const isSelected = selectedIndex === idx;
              return (
                <div
                  key={cmd.id}
                  onClick={cmd.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  data-cursor-label="SELECT"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    background: isSelected ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
                    border: `1px solid ${isSelected ? 'rgba(56, 189, 248, 0.3)' : 'transparent'}`,
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {cmd.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: isSelected ? '#fff' : '#cbd5e1' }}>
                        {cmd.title}
                      </div>
                      <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#64748b' }}>
                        {cmd.category}
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <CornerDownLeft size={13} color="#38bdf8" />
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Shortcut Guide */}
        <div
          style={{
            padding: '10px 18px',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            background: 'rgba(0, 0, 0, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '11px',
            fontFamily: 'var(--font-mono)',
            color: '#64748b'
          }}
        >
          <div style={{ display: 'flex', gap: '12px' }}>
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span style={{ color: '#38bdf8' }}>Teluri Sai Krishna Reddy // Dev Engine</span>
        </div>
      </div>
    </div>
  );
}
