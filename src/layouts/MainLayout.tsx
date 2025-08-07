import { useState, useEffect } from 'react';
import { FloatButton } from 'antd';
import { Sun, Moon } from 'lucide-react';
import AppSideNavBar from '../components/AppSideNavBar';
import { useTheme } from '../hooks/useTheme';
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

    const handleNavigation = (event: Event) => {
      const customEvent = event as CustomEvent;
      setCurrentPage(customEvent.detail.page);
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
      case 'framework-comparison':
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
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <div className="w-64 flex-shrink-0">
          <div className="h-full">
            <AppSideNavBar />
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-hidden">
          <div className="h-full overflow-y-auto">
            <div className="max-w-6xl mx-auto p-6">
              {renderPage()}
            </div>
          </div>
        </div>
      </div>
      
      <FloatButton
        icon={theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        onClick={toggleTheme}
        tooltip={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      />
    </div>
  );
};

export default MainLayout;
