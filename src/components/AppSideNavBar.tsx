import { Home, BookOpen, Code, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const AppSideNavBar = () => {
  const [selectedPage, setSelectedPage] = useState('home');
  const [expandedSections, setExpandedSections] = useState<string[]>(['hooks', 'concepts']);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page') || 'home';
    setSelectedPage(page);
    
    // Auto-expand sections if related pages are selected
    const hookPages = ['useEffect', 'useState', 'useRef', 'useContext', 'useMemo', 'useCallback', 'useImperativeHandle'];
    const conceptPages = ['concepts-overview', 'framework-comparison', 'idempotent-demo', 'props-down-callbacks-up'];
    
    if (hookPages.includes(page)) {
      setExpandedSections(prev => [...prev.filter(s => s !== 'hooks'), 'hooks']);
    }
    if (conceptPages.includes(page)) {
      setExpandedSections(prev => [...prev.filter(s => s !== 'concepts'), 'concepts']);
    }
  }, []);

  const handleNavClick = (page: string) => {
    setSelectedPage(page);
    
    const url = new URL(window.location.href);
    url.searchParams.set('page', page);
    window.history.pushState({}, '', url.toString());
    
    window.dispatchEvent(new CustomEvent('navigation', { detail: { page } }));
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const menuItems = [
    {
      key: 'home',
      icon: <Home size={18} />,
      label: 'Home',
    },
  ];

  const conceptItems = [
    { key: 'concepts-overview', label: 'Overview' },
    { key: 'idempotent-demo', label: 'Good Clock, Bad Clock' },
    { key: 'props-down-callbacks-up', label: 'Props Down, Callbacks Up' },
  ];

  const hookItems = [
    { key: 'useEffect', label: 'useEffect' },
    { key: 'useState', label: 'useState' },
    { key: 'useMemo', label: 'useMemo' },
    { key: 'useCallback', label: 'useCallback' },
    { key: 'useRef', label: 'useRef' },
    { key: 'useContext', label: 'useContext' },
    { key: 'useImperativeHandle', label: 'useImperativeHandle' },
  ];

  const NavItem = ({ item, isSelected }: { item: { key: string; icon?: React.ReactNode; label: string }, isSelected: boolean }) => (
    <div 
      onClick={() => handleNavClick(item.key)}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-blue-50 ${
        isSelected 
          ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-500' 
          : 'text-gray-700 hover:text-blue-600'
      }`}
    >
      <div className="flex-shrink-0">{item.icon}</div>
      <span className="font-medium">{item.label}</span>
    </div>
  );

  const HookItem = ({ item, isSelected }: { item: { key: string; label: string }, isSelected: boolean }) => (
    <div 
      onClick={() => handleNavClick(item.key)}
      className={`flex items-center px-8 py-2 rounded-lg cursor-pointer transition-all duration-200 hover:bg-gray-50 ${
        isSelected 
          ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-400' 
          : 'text-gray-600 hover:text-blue-600'
      }`}
    >
      <span className="text-sm font-medium">{item.label}</span>
    </div>
  );

  return (
    <div className="h-full bg-white border-r border-gray-200 overflow-y-auto">
      <div className="p-4 space-y-2">
        {/* Regular menu items */}
        {menuItems.map(item => (
          <NavItem 
            key={item.key} 
            item={item} 
            isSelected={selectedPage === item.key} 
          />
        ))}

        {/* Concepts section */}
        <div className="mt-6">
          <div 
            onClick={() => toggleSection('concepts')}
            className="flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-gray-50"
          >
            <div className="flex items-center gap-3">
              <BookOpen size={18} className="text-gray-600" />
              <span className="font-medium text-gray-700">Concepts</span>
            </div>
            <div className={`transition-transform duration-200 ${expandedSections.includes('concepts') ? 'rotate-180' : ''}`}>
              <ChevronDown size={16} className="text-gray-500" />
            </div>
          </div>

          {/* Concept items */}
          {expandedSections.includes('concepts') && (
            <div className="mt-2 space-y-1">
              {conceptItems.map(item => (
                <HookItem 
                  key={item.key} 
                  item={item} 
                  isSelected={selectedPage === item.key} 
                />
              ))}
            </div>
          )}
        </div>

        {/* Hooks section */}
        <div className="mt-4">
          <div 
            onClick={() => toggleSection('hooks')}
            className="flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-gray-50"
          >
            <div className="flex items-center gap-3">
              <Code size={18} className="text-gray-600" />
              <span className="font-medium text-gray-700">Hooks</span>
            </div>
            <div className={`transition-transform duration-200 ${expandedSections.includes('hooks') ? 'rotate-180' : ''}`}>
              <ChevronDown size={16} className="text-gray-500" />
            </div>
          </div>

          {/* Hook items */}
          {expandedSections.includes('hooks') && (
            <div className="mt-2 space-y-1">
              {hookItems.map(item => (
                <HookItem 
                  key={item.key} 
                  item={item} 
                  isSelected={selectedPage === item.key} 
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppSideNavBar;
