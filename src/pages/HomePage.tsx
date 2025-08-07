import { useState } from "react";

const HomePage = () => {
  return (
    <div style={{ 
      maxWidth: '800px',
      animation: 'fadeInUp 0.6s ease-out'
    }}>
      <div style={{
        textAlign: 'center',
        // marginBottom: 'var(--spacing-3xl)'
      }}>
        <h1 style={{
          fontSize: 'var(--font-size-5xl)',
          fontWeight: '700',
          background: 'linear-gradient(135deg, var(--apple-text-primary) 0%, var(--apple-blue) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          // marginBottom: 'var(--spacing-lg)',
          letterSpacing: '-1px'
        }}>
          Working with React
        </h1>
      </div>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;