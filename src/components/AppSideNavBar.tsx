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
    { key: 'framework-comparison', label: 'Framework Comparison' },
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
    <div onClick={() => handleNavClick(item.key)}>
      <div>{item.icon}</div>
      <span>{item.label}</span>
    </div>
  );

  const HookItem = ({ item, isSelected }: { item: { key: string; label: string }, isSelected: boolean }) => (
    <div onClick={() => handleNavClick(item.key)}>
      <span>{item.label}</span>
    </div>
  );

  return (
    <div>
      {/* Regular menu items */}
      {menuItems.map(item => (
        <NavItem 
          key={item.key} 
          item={item} 
          isSelected={selectedPage === item.key} 
        />
      ))}

      {/* Concepts section */}
      <div>
        <div onClick={() => toggleSection('concepts')}>
          <div>
            <BookOpen size={18} />
          </div>
          <span>Concepts</span>
          <div>
            <ChevronDown size={16} />
          </div>
        </div>

        {/* Concept items */}
        {expandedSections.includes('concepts') && (
          <div>
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
      <div>
        <div onClick={() => toggleSection('hooks')}>
          <div>
            <Code size={18} />
          </div>
          <span>Hooks</span>
          <div>
            <ChevronDown size={16} />
          </div>
        </div>

        {/* Hook items */}
        {expandedSections.includes('hooks') && (
          <div>
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
  );
};

export default AppSideNavBar;
