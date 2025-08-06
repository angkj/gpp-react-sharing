interface BadgeProps {
  variant: 'success' | 'error' | 'warning' | 'info';
  children: React.ReactNode;
  className?: string;
}

const variantStyles = {
  success: {
    backgroundColor: '#4CAF50',
    text: '✅ RIGHT WAY'
  },
  error: {
    backgroundColor: '#F44336',
    text: '❌ WRONG WAY'
  },
  warning: {
    backgroundColor: '#FF9800',
    text: '⚠️ WARNING'
  },
  info: {
    backgroundColor: '#2196F3',
    text: 'ℹ️ INFO'
  }
};

export const Badge = ({ variant, children, className = '' }: BadgeProps) => {
  const style = variantStyles[variant];
  
  return (
    <div 
      className={className}
      style={{
        display: 'inline-block',
        backgroundColor: style.backgroundColor,
        color: 'white',
        padding: '4px 8px',
        borderRadius: 'var(--radius-sm)',
        fontSize: 'var(--font-size-xs)',
        fontWeight: '600',
        marginBottom: 'var(--spacing-md)'
      }}
    >
      {children}
    </div>
  );
};