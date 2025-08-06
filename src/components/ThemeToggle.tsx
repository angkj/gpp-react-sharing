import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        border: 'none',
        backgroundColor: 'var(--apple-gray-1)',
        color: 'var(--apple-text-secondary)',
        cursor: 'pointer',
        transition: 'var(--transition-fast)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: '0 2px 8px var(--apple-shadow)',
        outline: 'none'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--apple-gray-2)';
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--apple-gray-1)';
        e.currentTarget.style.transform = 'scale(1)';
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'scale(0.95)';
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div style={{
        transition: 'var(--transition-base)',
        transform: theme === 'dark' ? 'rotate(0deg)' : 'rotate(180deg)'
      }}>
        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
      </div>
    </button>
  );
};

export default ThemeToggle;