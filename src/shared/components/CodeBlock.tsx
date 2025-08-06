interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

export const CodeBlock = ({ children, className = '' }: CodeBlockProps) => {
  return (
    <div 
      className={className}
      style={{
        backgroundColor: 'var(--apple-gray-1)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--spacing-lg)',
        border: '1px solid var(--apple-gray-2)',
        fontFamily: 'var(--font-family-mono)',
        fontSize: 'var(--font-size-sm)',
        lineHeight: '1.6',
        color: 'var(--apple-text-primary)',
        overflow: 'auto'
      }}
    >
      <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
        {children}
      </pre>
    </div>
  );
};