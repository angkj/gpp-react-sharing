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
    badgeText: '✅ RELIABLE'
  },
  error: {
    badgeText: '❌ UNRELIABLE'
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
    <div className={className}>
      <Badge variant={variant}>{styles.badgeText}</Badge>
      <h3>{title}</h3>
      <div>{codeExample}</div>
      <div>{count}</div>
      <Button variant={variant} onClick={onIncrement}>{buttonText}</Button>
      <p>{description}</p>
    </div>
  );
};