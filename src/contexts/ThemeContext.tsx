import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage first, then system preference
    const saved = localStorage.getItem('theme') as Theme;
    if (saved) return saved;
    
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    
    // Apply theme to document root
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    
    // Update CSS custom properties
    if (theme === 'dark') {
      document.documentElement.style.setProperty('--apple-blue', '#0A84FF');
      document.documentElement.style.setProperty('--apple-gray-1', '#1C1C1E');
      document.documentElement.style.setProperty('--apple-gray-2', '#2C2C2E');
      document.documentElement.style.setProperty('--apple-gray-3', '#3A3A3C');
      document.documentElement.style.setProperty('--apple-gray-4', '#48484A');
      document.documentElement.style.setProperty('--apple-gray-5', '#636366');
      document.documentElement.style.setProperty('--apple-gray-6', '#8E8E93');
      document.documentElement.style.setProperty('--apple-text-primary', '#FFFFFF');
      document.documentElement.style.setProperty('--apple-text-secondary', '#EBEBF5');
      document.documentElement.style.setProperty('--apple-text-tertiary', '#EBEBF599');
      document.documentElement.style.setProperty('--apple-background', '#000000');
      document.documentElement.style.setProperty('--apple-background-secondary', '#1C1C1E');
      document.documentElement.style.setProperty('--apple-separator', '#EBEBF529');
      document.documentElement.style.setProperty('--apple-shadow', 'rgba(0, 0, 0, 0.3)');
      document.documentElement.style.setProperty('--apple-shadow-heavy', 'rgba(0, 0, 0, 0.5)');
    } else {
      document.documentElement.style.setProperty('--apple-blue', '#007AFF');
      document.documentElement.style.setProperty('--apple-gray-1', '#F2F2F7');
      document.documentElement.style.setProperty('--apple-gray-2', '#E5E5EA');
      document.documentElement.style.setProperty('--apple-gray-3', '#D1D1D6');
      document.documentElement.style.setProperty('--apple-gray-4', '#C7C7CC');
      document.documentElement.style.setProperty('--apple-gray-5', '#AEAEB2');
      document.documentElement.style.setProperty('--apple-gray-6', '#8E8E93');
      document.documentElement.style.setProperty('--apple-text-primary', '#000000');
      document.documentElement.style.setProperty('--apple-text-secondary', '#3C3C43');
      document.documentElement.style.setProperty('--apple-text-tertiary', '#3C3C4399');
      document.documentElement.style.setProperty('--apple-background', '#FFFFFF');
      document.documentElement.style.setProperty('--apple-background-secondary', '#F2F2F7');
      document.documentElement.style.setProperty('--apple-separator', '#3C3C4329');
      document.documentElement.style.setProperty('--apple-shadow', 'rgba(0, 0, 0, 0.1)');
      document.documentElement.style.setProperty('--apple-shadow-heavy', 'rgba(0, 0, 0, 0.15)');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};