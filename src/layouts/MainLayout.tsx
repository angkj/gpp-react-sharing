import { useState, useEffect } from 'react';
import { FloatButton } from 'antd';
import { Sun, Moon } from 'lucide-react';
import AppSideNavBar from '../components/AppSideNavBar';
import { useTheme } from '../contexts/ThemeContext';
import PageContents from '../pages/PageContents';
import HomePage from '../pages/HomePage';
import ConceptsPage from '../pages/concepts/ConceptsPage';
import IdempotentDemo from '../pages/concepts/IdempotentDemo';
import PropsDownCallBackUp from '../pages/concepts/PropsDownCallBackUp';
import UseEffectPage from '../pages/hooks/UseEffectPage';
import UseStatePage from '../pages/hooks/UseStatePage';
import UseRefPage from '../pages/hooks/UseRefPage';
import UseContextPage from '../pages/hooks/UseContextPage';
import UseMemoPage from '../pages/hooks/UseMemoPage';
import UseCallbackPage from '../pages/hooks/UseCallbackPage';
import UseImperativeHandlePage from '../pages/hooks/UseImperativeHandlePage';
import reactLogo from '../assets/react.svg';

const MainLayout = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const { theme, toggleTheme } = useTheme();
  console.log('Current theme:', theme);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page') || 'home';
    setCurrentPage(page);

    const handleNavigation = (event: any) => {
      setCurrentPage(event.detail.page);
    };

    window.addEventListener('navigation', handleNavigation);
    return () => window.removeEventListener('navigation', handleNavigation);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'concepts-overview':
        return <ConceptsPage />;
      case 'idempotent-demo':
        return <IdempotentDemo />;
      case 'props-down-callbacks-up':
        return <PropsDownCallBackUp />;
      case 'useEffect':
        return <UseEffectPage />;
      case 'useState':
        return <UseStatePage />;
      case 'useRef':
        return <UseRefPage />;
      case 'useContext':
        return <UseContextPage />;
      case 'useMemo':
        return <UseMemoPage />;
      case 'useCallback':
        return <UseCallbackPage />;
      case 'useImperativeHandle':
        return <UseImperativeHandlePage />;
      default:
        return <PageContents />;
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: 'var(--apple-background)',
      fontFamily: 'var(--font-family-primary)'
    }}>
      {/* Main Header */}
      <header style={{
        height: '60px',
        backgroundColor: 'var(--apple-background)',
        borderBottom: '1px solid var(--apple-separator)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 var(--spacing-xl)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 1px 3px var(--apple-shadow)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-md)'
        }}>
          <img 
            src={reactLogo} 
            alt="React" 
            style={{ 
              width: '32px', 
              height: '32px',
              filter: 'drop-shadow(0 2px 4px var(--apple-shadow))'
            }} 
          />
          <h1 style={{ 
            margin: 0, 
            fontSize: 'var(--font-size-2xl)',
            fontWeight: '700',
            color: 'var(--apple-text-primary)',
            letterSpacing: '-0.5px'
          }}>
            React 101
          </h1>
        </div>
      </header>

      {/* Main Content Area */}
      <div style={{ 
        display: 'flex', 
        flex: 1,
        minHeight: 0
      }}>
        {/* Sidebar */}
        <div style={{
          width: '280px',
          backgroundColor: 'var(--apple-background)',
          borderRight: '1px solid var(--apple-separator)',
          display: 'flex',
          flexDirection: 'column',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          position: 'sticky',
          top: '60px',
          height: 'calc(100vh - 60px)',
          overflow: 'auto'
        }}>
          {/* Navigation */}
          <div style={{ flex: 1, padding: 'var(--spacing-lg) 0' }}>
            <AppSideNavBar />
          </div>
        </div>

        {/* Main Content */}
        <div style={{ 
          flex: 1,
          backgroundColor: 'var(--apple-background-secondary)',
          overflow: 'auto'
        }}>
          <div style={{
            padding: 'var(--spacing-3xl) var(--spacing-2xl)',
            maxWidth: '1200px',
            margin: '0 auto',
            minHeight: '100%'
          }}>
            <div style={{
              backgroundColor: 'var(--apple-background)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--spacing-2xl)',
              boxShadow: '0 8px 32px var(--apple-shadow)',
              border: '1px solid var(--apple-separator)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              transition: 'var(--transition-base)',
              minHeight: 'calc(100vh - 200px)'
            }}>
              {renderPage()}
            </div>
          </div>
        </div>
      </div>
      {/* Floating Theme Toggle */}
      <FloatButton
        icon={theme === 'light' ? <Moon size={18} color="#3C3C43" /> : <Sun size={18} color="#FFFFFF" />}
        onClick={toggleTheme}
        style={{
          backgroundColor: theme === 'light' ? '#FFFFFF' : '#1C1C1E',
          borderColor: theme === 'light' ? '#3C3C4329' : '#EBEBF529',
          border: `1px solid ${theme === 'light' ? '#3C3C4329' : '#EBEBF529'}`,
          boxShadow: theme === 'light' 
            ? '0 8px 32px rgba(0, 0, 0, 0.15)' 
            : '0 8px 32px rgba(0, 0, 0, 0.5)',
          color: theme === 'light' ? '#FFFFFF' : '#3C3C43'
        }}
        className={theme === 'dark' ? 'dark-float-button' : ''}
        tooltip={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      />
    </div>
  );
};

export default MainLayout;