import { Badge, Button } from './index';

interface ComparisonCounterProps {
  variant: 'success' | 'error';
  title: string;
  codeExample: string;
  count: number;
  onIncrement: () => void;
  buttonText: string;
  description: string;
  className?: string;
}

const variantStyles = {
  success: {
    backgroundColor: '#E8F5E8',
    borderColor: '#4CAF50',
    badgeText: '✅ RELIABLE',
    titleColor: '#2E7D32',
    countColor: '#1B5E20',
    codeBackgroundColor: '#C8E6C9',
    codeTextColor: '#388E3C',
    descriptionColor: '#388E3C'
  },
  error: {
    backgroundColor: '#FFEBEE',
    borderColor: '#F44336',
    badgeText: '❌ UNRELIABLE',
    titleColor: '#C62828',
    countColor: '#B71C1C',
    codeBackgroundColor: '#FFCDD2',
    codeTextColor: '#D32F2F',
    descriptionColor: '#D32F2F'
  }
};

export const ComparisonCounter = ({
  variant,
  title,
  codeExample,
  count,
  onIncrement,
  buttonText,
  description,
  className = ''
}: ComparisonCounterProps) => {
  const styles = variantStyles[variant];

  return (
    <div 
      className={className}
      style={{
        padding: 'var(--spacing-lg)',
        backgroundColor: styles.backgroundColor,
        borderRadius: 'var(--radius-md)',
        border: `2px solid ${styles.borderColor}`,
        textAlign: 'center'
      }}
    >
      <Badge variant={variant}>{styles.badgeText}</Badge>
      
      <h3 style={{
        fontSize: 'var(--font-size-lg)',
        fontWeight: '600',
        color: styles.titleColor,
        marginBottom: 'var(--spacing-md)'
      }}>
        {title}
      </h3>
      
      <div style={{
        fontSize: 'var(--font-size-sm)',
        color: styles.codeTextColor,
        marginBottom: 'var(--spacing-md)',
        fontFamily: 'var(--font-family-mono)',
        backgroundColor: styles.codeBackgroundColor,
        padding: 'var(--spacing-sm)',
        borderRadius: 'var(--radius-sm)'
      }}>
        {codeExample}
      </div>
      
      <div style={{
        fontSize: 'var(--font-size-4xl)',
        fontWeight: '700',
        color: styles.countColor,
        marginBottom: 'var(--spacing-lg)',
        fontFamily: 'var(--font-family-mono)'
      }}>
        {count}
      </div>
      
      <Button 
        variant={variant} 
        onClick={onIncrement}
        style={{ marginBottom: 'var(--spacing-md)' }}
      >
        {buttonText}
      </Button>
      
      <p style={{
        fontSize: 'var(--font-size-sm)',
        color: styles.descriptionColor,
        margin: 0,
        fontStyle: 'italic'
      }}>
        {description}
      </p>
    </div>
  );
};