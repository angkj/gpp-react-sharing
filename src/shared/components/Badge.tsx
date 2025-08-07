interface BadgeProps {
  variant: 'success' | 'error' | 'warning' | 'info';
  children: React.ReactNode;
  className?: string;
}


export const Badge = ({ variant, children, className = '' }: BadgeProps) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};