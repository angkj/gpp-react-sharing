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
  buttonText = "Increment & Check Console"
}: UniversalDemoProps) => {
  return (
    <DemoContainer title={title}>
      {description && <p>{description}</p>}

      {showCounter && (
        <div>
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

      {children}

      {infoBoxes.map((box, index) => (
        <InfoBox 
          key={index}
          variant={box.variant}
          title={box.title}
        >
          {box.content}
        </InfoBox>
      ))}
    </DemoContainer>
  );
};
