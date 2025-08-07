interface DemoContainerProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const DemoContainer = ({ title, children, className = '' }: DemoContainerProps) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};
