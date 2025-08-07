interface InfoBoxProps {
  variant: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const InfoBox = ({ variant, title, children, className = '' }: InfoBoxProps) => {
  return (
    <div className={className}>
      {title && <h3>{title}</h3>}
      <div>{children}</div>
    </div>
  );
};
