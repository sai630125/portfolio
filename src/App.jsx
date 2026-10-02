import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MetricsRibbon from './components/MetricsRibbon';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ArchitectureSection from './components/ArchitectureSection';
import PrinciplesSection from './components/PrinciplesSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import CommandPalette from './components/CommandPalette';
import { Palette } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState('cyan'); // 'cyan' (matches uploaded screenshot!)
  const [cursorMode, setCursorMode] = useState('glow'); // glow | minimal | system
  const [spotlightEnabled, setSpotlightEnabled] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-app-root" data-theme={theme} style={{ minHeight: '100vh', position: 'relative' }}>
      
      {/* Top Scroll Reading Progress Indicator */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

      {/* Ambient Floating Aurora Mesh (Deep Atmospheric Glow) */}
      <div className="aurora-mesh">
        <div className="aurora-orb aurora-orb-1" />
        <div className="aurora-orb aurora-orb-2" />
        <div className="aurora-orb aurora-orb-3" />
      </div>

      {/* Interactive Custom Cursor & Ambient Spotlight */}
      <CustomCursor mode={cursorMode} enabled={spotlightEnabled} />

      {/* Navigation Header with Theme & Cursor Controls */}
      <Navbar
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        cursorMode={cursorMode}
        setCursorMode={setCursorMode}
        theme={theme}
        setTheme={setTheme}
      />

      {/* Main Page Flow Matching Teluri Sai Krishna Reddy's Verified Resume */}
      <main>
        {/* 1. Hero Section with Live Request Pipeline */}
        <Hero onOpenContact={() => setIsContactOpen(true)} />

        {/* 2. 5-Metric Ribbon */}
        <MetricsRibbon />

        {/* 3. Engineering with a Product Mindset (Crestere Technologies & Health Telemetry) */}
        <AboutSection />

        {/* 4. Production Track Record (Role, Impact, Architecture details) */}
        <ExperienceSection />

        {/* 5. Engineered for Scale & Performance (Archibus Workplace, A4N-Ops PWA, FM Service) */}
        <ProjectsSection />

        {/* 6. Full-Stack Ecosystem (Skills Matrix with Live Search & Filter) */}
        <SkillsSection />

        {/* 7. Full-Stack Request Lifecycle (6-Step Architecture & MSSQL Optimization) */}
        <ArchitectureSection />

        {/* 8. How I Build (4 Core Engineering Principles) */}
        <PrinciplesSection />

        {/* 9. Education & NXT Wave Certifications */}
        <EducationSection />

        {/* 10. Let's Build Something Great Together (Contact Section) */}
        <ContactSection onOpenContactModal={() => setIsContactOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Developer Command Palette (Cmd+K / Ctrl+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenContact={() => setIsContactOpen(true)}
        cursorMode={cursorMode}
        setCursorMode={setCursorMode}
        theme={theme}
        setTheme={setTheme}
      />

      {/* Floating Theme & Cursor Customization Toolbar (Bottom Right) */}
      <div
        className="floating-cursor-widget"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 40,
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '6px 14px',
          borderRadius: '9999px',
          background: 'rgba(11, 16, 28, 0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid var(--border-hover)',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.6), 0 0 16px var(--accent-glow)'
        }}
      >
        {/* Theme Picker */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Palette size={13} color="var(--accent-primary)" />
          <div style={{ display: 'flex', gap: '4px' }}>
            {[
              { id: 'cyan', label: 'Cyan', color: '#38bdf8' },
              { id: 'violet', label: 'Violet', color: '#a855f7' },
              { id: 'emerald', label: 'Emerald', color: '#10b981' },
              { id: 'ember', label: 'Ember', color: '#f97316' }
            ].map(t => (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                data-cursor-label={t.label.toUpperCase()}
                title={`Switch to ${t.label} Theme`}
                style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  background: t.color,
                  border: theme === t.id ? '2px solid #ffffff' : '1px solid rgba(255,255,255,0.2)',
                  boxShadow: theme === t.id ? `0 0 10px ${t.color}` : 'none',
                  cursor: 'pointer',
                  transform: theme === t.id ? 'scale(1.15)' : 'scale(1)',
                  transition: 'all 0.2s ease'
                }}
              />
            ))}
          </div>
        </div>

        <div style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.15)' }} />

        {/* Cursor Mode Switcher */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <button
            onClick={() => setCursorMode('glow')}
            data-cursor-label="GLOW"
            title="Interactive Neon Glow Cursor"
            style={{
              background: cursorMode === 'glow' ? 'var(--accent-primary)' : 'transparent',
              color: cursorMode === 'glow' ? '#07090e' : 'var(--text-muted)',
              border: 'none',
              padding: '2px 8px',
              borderRadius: '10px',
              fontSize: '10px',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            Glow
          </button>

          <button
            onClick={() => setCursorMode('minimal')}
            data-cursor-label="MINIMAL"
            title="Minimal Precision Cursor"
            style={{
              background: cursorMode === 'minimal' ? 'var(--accent-primary)' : 'transparent',
              color: cursorMode === 'minimal' ? '#07090e' : 'var(--text-muted)',
              border: 'none',
              padding: '2px 8px',
              borderRadius: '10px',
              fontSize: '10px',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            Minimal
          </button>
        </div>
      </div>

    </div>
  );
}
