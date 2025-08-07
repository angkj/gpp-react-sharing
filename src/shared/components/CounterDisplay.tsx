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
    <div className={className}>
      <h3>{title}</h3>
      <div>{count}</div>
      {children}
    </div>
  );
};