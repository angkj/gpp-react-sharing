interface DemoContainerProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const DemoContainer = ({ title, children, className = '', style = {} }: DemoContainerProps) => {
  return (
    <div 
      className={className}
      style={{
        padding: 'var(--spacing-2xl)',
        backgroundColor: 'var(--apple-background)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--apple-separator)',
        boxShadow: '0 4px 16px var(--apple-shadow)',
        ...style
      }}
    >
      <h2 style={{
        fontSize: 'var(--font-size-2xl)',
        fontWeight: '600',
        color: 'var(--apple-text-primary)',
        marginBottom: 'var(--spacing-lg)'
      }}>
        {title}
      </h2>
      {children}
    </div>
  );
};