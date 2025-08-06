import type { MouseEvent } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'success' | 'error' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

const variantStyles = {
  primary: {
    backgroundColor: '#007AFF',
    hoverColor: '#0056CC'
  },
  success: {
    backgroundColor: '#4CAF50',
    hoverColor: '#388E3C'
  },
  error: {
    backgroundColor: '#F44336',
    hoverColor: '#D32F2F'
  },
  warning: {
    backgroundColor: '#FF9800',
    hoverColor: '#F57C00'
  }
};

const sizeStyles = {
  sm: {
    padding: 'var(--spacing-sm) var(--spacing-md)',
    fontSize: 'var(--font-size-sm)'
  },
  md: {
    padding: 'var(--spacing-md) var(--spacing-lg)',
    fontSize: 'var(--font-size-base)'
  },
  lg: {
    padding: 'var(--spacing-lg) var(--spacing-xl)',
    fontSize: 'var(--font-size-lg)'
  }
};

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  onClick, 
  className = '',
  disabled = false,
  style = {}
}: ButtonProps) => {
  const variantStyle = variantStyles[variant];
  const sizeStyle = sizeStyles[size];

  const handleMouseEnter = (e: MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      e.currentTarget.style.backgroundColor = variantStyle.hoverColor;
    }
  };

  const handleMouseLeave = (e: MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      e.currentTarget.style.backgroundColor = variantStyle.backgroundColor;
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        ...sizeStyle,
        backgroundColor: disabled ? 'var(--apple-gray-4)' : variantStyle.backgroundColor,
        color: 'white',
        border: 'none',
        borderRadius: 'var(--radius-md)',
        fontWeight: '600',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'var(--transition-fast)',
        opacity: disabled ? 0.6 : 1,
        ...style
      }}
    >
      {children}
    </button>
  );
};