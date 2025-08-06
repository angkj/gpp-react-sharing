interface InfoBoxProps {
  variant: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const variantStyles = {
  info: {
    backgroundColor: '#E3F2FD',
    borderColor: '#1976D2',
    titleColor: '#1565C0',
    textColor: '#1565C0'
  },
  success: {
    backgroundColor: '#E8F5E8',
    borderColor: '#4CAF50',
    titleColor: '#2E7D32',
    textColor: '#2E7D32'
  },
  warning: {
    backgroundColor: '#FFF3E0',
    borderColor: '#FF9800',
    titleColor: '#E65100',
    textColor: '#E65100'
  },
  error: {
    backgroundColor: '#FFEBEE',
    borderColor: '#F44336',
    titleColor: '#C62828',
    textColor: '#C62828'
  }
};

export const InfoBox = ({ variant, title, children, className = '', style = {} }: InfoBoxProps) => {
  const styles = variantStyles[variant];
  
  return (
    <div 
      className={className}
      style={{
        padding: 'var(--spacing-lg)',
        backgroundColor: styles.backgroundColor,
        borderRadius: 'var(--radius-md)',
        borderLeft: `4px solid ${styles.borderColor}`,
        ...style
      }}
    >
      {title && (
        <h3 style={{
          fontSize: 'var(--font-size-lg)',
          fontWeight: '600',
          color: styles.titleColor,
          marginBottom: 'var(--spacing-md)',
          margin: 0
        }}>
          {title}
        </h3>
      )}
      <div style={{
        fontSize: 'var(--font-size-base)',
        fontWeight: '500',
        color: styles.textColor,
        margin: title ? 'var(--spacing-sm) 0 0 0' : 0
      }}>
        {children}
      </div>
    </div>
  );
};