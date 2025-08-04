interface HookPageLayoutProps {
  title: string;
  description: string;
  whatIs: string;
  codeExample: string;
  children?: React.ReactNode;
}

const HookPageLayout = ({ title, description, whatIs, codeExample, children }: HookPageLayoutProps) => {
  return (
    <div style={{ 
      maxWidth: '900px',
      animation: 'fadeInUp 0.6s ease-out'
    }}>
      <div style={{ marginBottom: 'var(--spacing-3xl)' }}>
        <h1 style={{
          fontSize: 'var(--font-size-4xl)',
          fontWeight: '700',
          color: 'var(--apple-text-primary)',
          marginBottom: 'var(--spacing-lg)',
          letterSpacing: '-0.5px'
        }}>
          {title}
        </h1>
        <p style={{
          fontSize: 'var(--font-size-lg)',
          color: 'var(--apple-text-secondary)',
          lineHeight: '1.6',
          fontWeight: '400'
        }}>
          {description}
        </p>
      </div>

      <div style={{
        padding: 'var(--spacing-2xl)',
        backgroundColor: 'var(--apple-background)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--apple-separator)',
        boxShadow: '0 4px 16px var(--apple-shadow)',
        marginBottom: 'var(--spacing-2xl)'
      }}>
        <h2 style={{
          fontSize: 'var(--font-size-2xl)',
          fontWeight: '600',
          color: 'var(--apple-text-primary)',
          marginBottom: 'var(--spacing-lg)'
        }}>
          What is {title}?
        </h2>
        <p style={{
          fontSize: 'var(--font-size-base)',
          color: 'var(--apple-text-secondary)',
          lineHeight: '1.7',
          marginBottom: 0
        }}>
          {whatIs}
        </p>
      </div>

      <div style={{
        padding: 'var(--spacing-2xl)',
        backgroundColor: 'var(--apple-background)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--apple-separator)',
        boxShadow: '0 4px 16px var(--apple-shadow)',
        marginBottom: children ? 'var(--spacing-2xl)' : 0
      }}>
        <h2 style={{
          fontSize: 'var(--font-size-2xl)',
          fontWeight: '600',
          color: 'var(--apple-text-primary)',
          marginBottom: 'var(--spacing-lg)'
        }}>
          Basic Usage
        </h2>
        <div style={{
          backgroundColor: 'var(--apple-gray-1)',
          borderRadius: 'var(--radius-md)',
          padding: 'var(--spacing-lg)',
          border: '1px solid var(--apple-gray-2)',
          fontFamily: 'SF Mono, Monaco, Inconsolata, "Roboto Mono", Consolas, "Courier New", monospace',
          fontSize: 'var(--font-size-sm)',
          lineHeight: '1.6',
          color: 'var(--apple-text-primary)',
          overflow: 'auto'
        }}>
          <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
            {codeExample}
          </pre>
        </div>
      </div>

      {children}

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

export default HookPageLayout;