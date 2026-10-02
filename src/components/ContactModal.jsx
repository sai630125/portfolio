import React, { useState } from 'react';
import { X, Send, CheckCircle2, Sparkles, AlertCircle, Mail, ExternalLink, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Senior Full-Stack Engineering Role',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    setErrorMessage('');

    try {
      // Real-time email delivery via FormSubmit AJAX API directly to user's verified Gmail
      const response = await fetch(`https://formsubmit.co/ajax/${portfolioData.personal.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `Inquiry from Portfolio: ${formData.name}`,
          message: formData.message,
          recipient: portfolioData.personal.email,
          _subject: `New Portfolio Message: ${formData.subject || 'Opportunity Inquiry'} from ${formData.name}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const result = await response.json();

      if (response.ok || result.success === "true" || result.success === true) {
        setStatus('success');
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
        setTimeout(() => {
          setStatus('idle');
          onClose();
        }, 4000);
      } else {
        throw new Error(result.message || 'Transmission error. Please try direct email.');
      }
    } catch (err) {
      console.error('Email dispatch error:', err);
      // Fallback: If network block or CORS issue, open mailto directly
      setStatus('error');
      setErrorMessage(err.message || 'Unable to connect to transmission gateway.');
    }
  };

  const openDirectMailto = () => {
    const subject = encodeURIComponent(formData.subject || `Opportunity for Teluri Sai Krishna Reddy`);
    const body = encodeURIComponent(`Hi Sai Krishna,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        background: 'rgba(5, 7, 12, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '520px',
          padding: '32px',
          borderRadius: '16px',
          border: '1px solid rgba(56, 189, 248, 0.35)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.85), 0 0 40px rgba(56, 189, 248, 0.25)',
          position: 'relative'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          data-cursor-label="CLOSE"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'transparent',
            border: 'none',
            color: '#94a3b8',
            cursor: 'pointer',
            padding: '6px'
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#38bdf8', marginBottom: '8px' }}>
            <Sparkles size={13} />
            <span>REAL-TIME INQUIRY GATEWAY</span>
          </div>
          <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#f8fafc' }}>
            Let's Connect Directly
          </h3>
          <p style={{ fontSize: '13px', color: '#94a3b8', marginTop: '4px', lineHeight: 1.5 }}>
            Submitting this form sends an instant real-time message directly to <strong style={{ color: '#38bdf8' }}>{portfolioData.personal.email}</strong>.
          </p>
        </div>

        {status === 'success' ? (
          <div style={{ textAlign: 'center', padding: '36px 0' }}>
            <CheckCircle2 size={52} color="#34d399" style={{ margin: '0 auto 16px' }} />
            <h4 style={{ fontSize: '20px', fontWeight: 800, color: '#f8fafc' }}>Email Dispatched in Real Time!</h4>
            <p style={{ fontSize: '14px', color: '#cbd5e1', marginTop: '8px', lineHeight: 1.6 }}>
              Your message was sent to <strong>{portfolioData.personal.email}</strong>.
            </p>
            <div
              style={{
                marginTop: '16px',
                padding: '10px 14px',
                borderRadius: '8px',
                background: 'rgba(52, 211, 153, 0.1)',
                border: '1px solid rgba(52, 211, 153, 0.25)',
                fontSize: '12px',
                fontFamily: 'var(--font-mono)',
                color: '#34d399'
              }}
            >
              ✓ FormSubmit Live API: HTTP 200 OK • Message Delivered
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            {status === 'error' && (
              <div
                style={{
                  padding: '12px 14px',
                  borderRadius: '8px',
                  background: 'rgba(239, 68, 68, 0.12)',
                  border: '1px solid rgba(239, 68, 68, 0.35)',
                  color: '#f87171',
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '10px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <AlertCircle size={16} />
                  <span>{errorMessage || 'Connection issue.'}</span>
                </div>
                <button
                  type="button"
                  onClick={openDirectMailto}
                  style={{
                    background: '#ef4444',
                    border: 'none',
                    color: '#fff',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Send via Gmail App
                </button>
              </div>
            )}

            <div>
              <label style={{ display: 'block', fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#cbd5e1', marginBottom: '6px' }}>
                YOUR NAME / RECRUITER NAME
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Hiring Manager / Tech Lead"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                  width: '100%',
                  padding: '11px 14px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  fontSize: '13px',
                  outline: 'none',
                  fontFamily: 'var(--font-main)'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#cbd5e1', marginBottom: '6px' }}>
                YOUR EMAIL ADDRESS (FOR SAI KRISHNA TO REPLY)
              </label>
              <input
                type="email"
                required
                placeholder="recruiter@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{
                  width: '100%',
                  padding: '11px 14px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  fontSize: '13px',
                  outline: 'none',
                  fontFamily: 'var(--font-main)'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#cbd5e1', marginBottom: '6px' }}>
                SUBJECT
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                style={{
                  width: '100%',
                  padding: '11px 14px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  fontSize: '13px',
                  outline: 'none',
                  fontFamily: 'var(--font-main)'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#cbd5e1', marginBottom: '6px' }}>
                MESSAGE
              </label>
              <textarea
                rows={4}
                required
                placeholder="Share role requirements, company overview, or meeting proposal..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  width: '100%',
                  padding: '11px 14px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  fontSize: '13px',
                  outline: 'none',
                  fontFamily: 'var(--font-main)',
                  resize: 'vertical'
                }}
              />
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
              <button
                type="submit"
                disabled={status === 'sending'}
                data-cursor-label="SEND"
                className="btn-primary"
                style={{
                  flex: 1,
                  background: '#38bdf8',
                  borderColor: '#38bdf8',
                  color: '#07090e',
                  fontWeight: 700
                }}
              >
                {status === 'sending' ? (
                  <>
                    <RefreshCw size={15} className="animate-spin" />
                    <span>Sending in Real Time...</span>
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    <span>Send Real-Time Email</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={openDirectMailto}
                data-cursor-label="GMAIL"
                className="btn-secondary"
                title="Open in your default Mail or Gmail app"
                style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }}
              >
                <Mail size={15} />
                <span>Open Gmail</span>
              </button>
            </div>

            <div style={{ textAlign: 'center', fontSize: '11px', color: '#64748b', fontFamily: 'var(--font-mono)', marginTop: '4px' }}>
              ⚡ Real-time SSL encrypted delivery to {portfolioData.personal.email}
            </div>

          </form>
        )}
      </div>
    </div>
  );
}
