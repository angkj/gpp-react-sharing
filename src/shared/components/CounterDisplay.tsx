interface CounterDisplayProps {
  title: string;
  count: number;
  color?: string;
  children?: React.ReactNode;
  className?: string;
}

export const CounterDisplay = ({ 
  title, 
  count, 
  color = '#4CAF50', 
  children,
  className = ''
}: CounterDisplayProps) => {
  return (
    <div 
      className={className}
      style={{
        padding: 'var(--spacing-xl)',
        backgroundColor: 'var(--apple-gray-1)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--apple-separator)',
        textAlign: 'center',
        minWidth: '300px'
      }}
    >
      <h3 style={{
        fontSize: 'var(--font-size-lg)',
        fontWeight: '600',
        color: 'var(--apple-text-primary)',
        marginBottom: 'var(--spacing-md)'
      }}>
        {title}
      </h3>
      
      <div style={{
        fontSize: 'var(--font-size-4xl)',
        fontWeight: '700',
        color: color,
        marginBottom: 'var(--spacing-lg)',
        fontFamily: 'var(--font-family-mono)'
      }}>
        {count}
      </div>
      
      {children}
    </div>
  );
};