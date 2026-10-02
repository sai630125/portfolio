import React, { useState } from 'react';
import { Code2, Server, Database, Cloud, CheckSquare, Search, Filter } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function SkillsSection() {
  const { skills } = portfolioData;
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'frontend': return <Code2 size={16} color="#38bdf8" />;
      case 'backend': return <Server size={16} color="#34d399" />;
      case 'database': return <Database size={16} color="#f59e0b" />;
      case 'cloud': return <Cloud size={16} color="#818cf8" />;
      case 'testing': return <CheckSquare size={16} color="#fb7185" />;
      default: return null;
    }
  };

  const filteredCategories = skills.categories
    .filter(cat => activeCategory === 'all' || cat.id === activeCategory)
    .map(cat => ({
      ...cat,
      items: cat.items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }))
    .filter(cat => cat.items.length > 0);

  return (
    <section
      id="skills"
      style={{
        paddingTop: '60px',
        paddingBottom: '80px',
        position: 'relative'
      }}
    >
      <div className="container-max">
        
        {/* Section Header */}
        <div style={{ marginBottom: '36px' }}>
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
            SKILLS &amp; ARCHITECTURE
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
            Full-Stack Ecosystem
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: '#94a3b8',
              maxWidth: '720px',
              lineHeight: 1.6
            }}
          >
            Battle-tested tools, languages, and frameworks used to deliver robust enterprise products.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            marginBottom: '32px'
          }}
        >
          {/* Category Tabs */}
          <div className="skills-category-tabs" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <button
              onClick={() => setActiveCategory('all')}
              data-cursor-label="FILTER"
              style={{
                padding: '6px 14px',
                borderRadius: '6px',
                fontSize: '12px',
                fontFamily: 'var(--font-mono)',
                fontWeight: 600,
                background: activeCategory === 'all' ? '#38bdf8' : 'rgba(255, 255, 255, 0.04)',
                color: activeCategory === 'all' ? '#07090e' : '#94a3b8',
                border: `1px solid ${activeCategory === 'all' ? '#38bdf8' : 'rgba(255, 255, 255, 0.08)'}`,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap'
              }}
            >
              All Categories
            </button>
            {skills.categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                data-cursor-label="FILTER"
                style={{
                  padding: '6px 14px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  background: activeCategory === cat.id ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                  color: activeCategory === cat.id ? '#38bdf8' : '#94a3b8',
                  border: `1px solid ${activeCategory === cat.id ? '#38bdf8' : 'rgba(255, 255, 255, 0.08)'}`,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap'
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div
            className="skills-search-container"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '260px'
            }}
          >
            <Search size={14} color="#64748b" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Search skill (e.g. Kafka, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px 8px 36px',
                borderRadius: '6px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: '#fff',
                fontSize: '12px',
                outline: 'none',
                fontFamily: 'var(--font-mono)'
              }}
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}
        >
          {filteredCategories.map(cat => (
            <div
              key={cat.id}
              className="glass-card"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Category Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: '14px',
                    marginBottom: '16px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {getCategoryIcon(cat.id)}
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc' }}>
                      {cat.name}
                    </h3>
                  </div>
                  <span
                    style={{
                      fontSize: '10px',
                      fontFamily: 'var(--font-mono)',
                      background: 'rgba(255, 255, 255, 0.04)',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      color: '#94a3b8',
                      border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}
                  >
                    {cat.badge}
                  </span>
                </div>

                {/* Items Grid */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '8px'
                  }}
                >
                  {cat.items.map(item => (
                    <div
                      key={item.name}
                      className="interactive-card"
                      data-cursor-label="TECH"
                      style={{
                        padding: '10px 12px',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: 600, color: '#e2e8f0' }}>
                          {item.name}
                        </div>
                        <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>
                          {item.desc}
                        </div>
                      </div>
                      <span
                        style={{
                          fontSize: '10px',
                          fontFamily: 'var(--font-mono)',
                          color: item.level === 'Expert' ? '#38bdf8' : '#34d399',
                          fontWeight: 600
                        }}
                      >
                        {item.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
