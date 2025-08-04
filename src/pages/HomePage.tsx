const HomePage = () => {
  return (
    <div style={{ 
      maxWidth: '800px',
      animation: 'fadeInUp 0.6s ease-out'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: 'var(--spacing-3xl)'
      }}>
        <h1 style={{
          fontSize: 'var(--font-size-5xl)',
          fontWeight: '700',
          background: 'linear-gradient(135deg, var(--apple-text-primary) 0%, var(--apple-blue) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: 'var(--spacing-lg)',
          letterSpacing: '-1px'
        }}>
          Welcome to React 101
        </h1>
        <p style={{
          fontSize: 'var(--font-size-xl)',
          color: 'var(--apple-text-secondary)',
          lineHeight: '1.5',
          fontWeight: '400'
        }}>
          Your comprehensive guide to mastering React development
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'var(--spacing-xl)',
        marginTop: 'var(--spacing-2xl)'
      }}>
        <div style={{
          padding: 'var(--spacing-xl)',
          backgroundColor: 'var(--apple-background)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--apple-separator)',
          boxShadow: '0 4px 16px var(--apple-shadow)',
          transition: 'var(--transition-base)'
        }}>
          <h3 style={{
            fontSize: 'var(--font-size-xl)',
            fontWeight: '600',
            color: 'var(--apple-text-primary)',
            marginBottom: 'var(--spacing-md)'
          }}>
            Learn the Fundamentals
          </h3>
          <p style={{
            color: 'var(--apple-text-secondary)',
            lineHeight: '1.6',
            marginBottom: 0
          }}>
            Start with core React concepts including components, JSX, props, and state management.
          </p>
        </div>

        <div style={{
          padding: 'var(--spacing-xl)',
          backgroundColor: 'var(--apple-background)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--apple-separator)',
          boxShadow: '0 4px 16px var(--apple-shadow)',
          transition: 'var(--transition-base)'
        }}>
          <h3 style={{
            fontSize: 'var(--font-size-xl)',
            fontWeight: '600',
            color: 'var(--apple-text-primary)',
            marginBottom: 'var(--spacing-md)'
          }}>
            Master React Hooks
          </h3>
          <p style={{
            color: 'var(--apple-text-secondary)',
            lineHeight: '1.6',
            marginBottom: 0
          }}>
            Dive deep into React Hooks like useState, useEffect, and more advanced patterns.
          </p>
        </div>
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