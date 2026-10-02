import React from 'react';
import { GraduationCap, Award, Languages, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function EducationSection() {
  const { education, certifications, personal } = portfolioData;

  return (
    <section
      id="education"
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
            ACADEMIC &amp; CREDENTIALS
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
            Education &amp; Certifications
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: '#94a3b8',
              maxWidth: '720px',
              lineHeight: 1.6
            }}
          >
            Formal technical degrees from Newton’s Institute of Science and Technology paired with NXT Wave verified developer certifications.
          </p>
        </div>

        {/* 2-Column Grid: Education vs Certifications & Languages */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '28px'
          }}
          className="edu-grid"
        >
          {/* Left Column: Education */}
          <div
            className="glass-card spotlight-card"
            style={{
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  paddingBottom: '16px',
                  marginBottom: '24px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <GraduationCap size={22} color="#38bdf8" />
                <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#f8fafc' }}>
                  Education
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {education.map((item, idx) => (
                  <div
                    key={idx}
                    className="interactive-card"
                    data-cursor-label="DEGREE"
                    style={{
                      padding: '20px 22px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.06)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px', flexWrap: 'wrap', gap: '8px' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#ffffff' }}>
                        {item.degree}
                      </h4>
                      <span
                        style={{
                          fontSize: '11px',
                          fontFamily: 'var(--font-mono)',
                          color: '#38bdf8',
                          background: 'rgba(56, 189, 248, 0.1)',
                          border: '1px solid rgba(56, 189, 248, 0.25)',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          fontWeight: 700
                        }}
                      >
                        {item.year}
                      </span>
                    </div>

                    <div style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '8px', fontWeight: 600 }}>
                      {item.institution}
                    </div>

                    <div style={{ fontSize: '13px', color: '#34d399', fontWeight: 700, marginBottom: '6px' }}>
                      Score: {item.grade}
                    </div>

                    <div style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.5 }}>
                      {item.details}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Section */}
            <div
              style={{
                marginTop: '32px',
                paddingTop: '20px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <Languages size={17} color="#f59e0b" />
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#f8fafc' }}>
                  Spoken Languages
                </span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                {personal.languages.map((lang) => (
                  <span
                    key={lang}
                    data-cursor-label="LANG"
                    className="badge-pill"
                    style={{ borderColor: 'rgba(245, 158, 11, 0.3)', color: '#f59e0b', background: 'rgba(245, 158, 11, 0.08)' }}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: NXT Wave Certifications */}
          <div
            className="glass-card spotlight-card"
            style={{
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  paddingBottom: '16px',
                  marginBottom: '24px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <Award size={22} color="#34d399" />
                <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#f8fafc' }}>
                  NXT Wave Certifications
                </h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="interactive-card"
                    data-cursor-label="CERT"
                    style={{
                      padding: '16px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: 'inline-block',
                          fontSize: '10px',
                          fontFamily: 'var(--font-mono)',
                          color: '#34d399',
                          background: 'rgba(52, 211, 153, 0.1)',
                          border: '1px solid rgba(52, 211, 153, 0.25)',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          marginBottom: '8px',
                          fontWeight: 700
                        }}
                      >
                        {cert.badge}
                      </div>

                      <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc', lineHeight: 1.4, marginBottom: '6px' }}>
                        {cert.name}
                      </h4>

                      <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                        {cert.issuer}
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: '14px',
                        paddingTop: '10px',
                        borderTop: '1px solid rgba(255, 255, 255, 0.04)',
                        fontSize: '10px',
                        fontFamily: 'var(--font-mono)',
                        color: '#64748b'
                      }}
                    >
                      <span style={{ color: '#38bdf8' }}>VERIFIED CREDENTIAL</span>
                      <CheckCircle2 size={12} color="#34d399" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 960px) {
          .edu-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
