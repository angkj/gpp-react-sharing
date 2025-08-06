import { DemoContainer, InfoBox, Button, CounterDisplay } from './index';

interface UniversalDemoProps {
  title: string;
  description?: string;
  count?: number;
  onIncrement?: () => void;
  counterTitle?: string;
  counterColor?: string;
  children?: React.ReactNode;
  infoBoxes?: Array<{
    variant: 'info' | 'success' | 'warning' | 'error';
    title?: string;
    content: React.ReactNode;
  }>;
  showCounter?: boolean;
  buttonText?: string;
  style?: React.CSSProperties;
}

export const UniversalDemo = ({
  title,
  description,
  count = 0,
  onIncrement,
  counterTitle = "Current Count",
  counterColor = "#4CAF50",
  children,
  infoBoxes = [],
  showCounter = true,
  buttonText = "Increment & Check Console",
  style = {}
}: UniversalDemoProps) => {
  return (
    <DemoContainer title={title} style={style}>
      {description && (
        <p style={{
          fontSize: 'var(--font-size-base)',
          color: 'var(--apple-text-secondary)',
          lineHeight: '1.6',
          marginBottom: 'var(--spacing-xl)'
        }}>
          {description}
        </p>
      )}

      {showCounter && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: 'var(--spacing-xl)'
        }}>
          <CounterDisplay 
            title={counterTitle}
            count={count}
            color={counterColor}
          >
            {onIncrement && (
              <Button 
                variant="success" 
                onClick={onIncrement}
              >
                {buttonText}
              </Button>
            )}
          </CounterDisplay>
        </div>
      )}

      {/* Custom content */}
      {children}

      {/* Info boxes */}
      {infoBoxes.map((box, index) => (
        <InfoBox 
          key={index}
          variant={box.variant}
          title={box.title}
          style={{ 
            marginBottom: index < infoBoxes.length - 1 ? 'var(--spacing-md)' : undefined 
          }}
        >
          {box.content}
        </InfoBox>
      ))}
    </DemoContainer>
  );
};