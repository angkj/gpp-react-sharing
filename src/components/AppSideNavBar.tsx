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
    const conceptPages = ['concepts-overview', 'idempotent-demo', 'props-down-callbacks-up'];
    
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

  const NavItem = ({ item, isSelected }: { item: any, isSelected: boolean }) => (
    <div
      onClick={() => handleNavClick(item.key)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-sm)',
        padding: 'var(--spacing-sm) var(--spacing-lg)',
        margin: '2px var(--spacing-md)',
        borderRadius: 'var(--radius-sm)',
        cursor: 'pointer',
        backgroundColor: isSelected ? 'var(--apple-blue)' : 'transparent',
        color: isSelected ? 'white' : 'var(--apple-text-primary)',
        transition: 'var(--transition-fast)',
        fontSize: 'var(--font-size-base)',
        fontWeight: '500',
        userSelect: 'none'
      }}
      onMouseEnter={(e) => {
        if (!isSelected) {
          e.currentTarget.style.backgroundColor = 'var(--apple-gray-1)';
        }
      }}
      onMouseLeave={(e) => {
        if (!isSelected) {
          e.currentTarget.style.backgroundColor = 'transparent';
        }
      }}
    >
      <div style={{ color: isSelected ? 'rgba(255,255,255,0.9)' : 'var(--apple-text-secondary)' }}>
        {item.icon}
      </div>
      <span>{item.label}</span>
    </div>
  );

  const HookItem = ({ item, isSelected }: { item: any, isSelected: boolean }) => (
    <div
      onClick={() => handleNavClick(item.key)}
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: 'var(--spacing-xs) var(--spacing-lg)',
        marginLeft: 'var(--spacing-2xl)',
        marginRight: 'var(--spacing-md)',
        marginBottom: '2px',
        borderRadius: 'var(--radius-sm)',
        cursor: 'pointer',
        backgroundColor: isSelected ? 'var(--apple-blue)' : 'transparent',
        color: isSelected ? 'white' : 'var(--apple-text-secondary)',
        transition: 'var(--transition-fast)',
        fontSize: 'var(--font-size-sm)',
        fontWeight: '500',
        userSelect: 'none'
      }}
      onMouseEnter={(e) => {
        if (!isSelected) {
          e.currentTarget.style.backgroundColor = 'var(--apple-gray-1)';
          e.currentTarget.style.color = 'var(--apple-text-primary)';
        }
      }}
      onMouseLeave={(e) => {
        if (!isSelected) {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = 'var(--apple-text-secondary)';
        }
      }}
    >
      <span>{item.label}</span>
    </div>
  );

  return (
    <div style={{ padding: 'var(--spacing-sm) 0' }}>
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
        <div
          onClick={() => toggleSection('concepts')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--spacing-sm)',
            padding: 'var(--spacing-sm) var(--spacing-lg)',
            margin: '2px var(--spacing-md)',
            borderRadius: 'var(--radius-sm)',
            cursor: 'pointer',
            color: 'var(--apple-text-primary)',
            transition: 'var(--transition-fast)',
            fontSize: 'var(--font-size-base)',
            fontWeight: '500',
            userSelect: 'none'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--apple-gray-1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <div style={{ color: 'var(--apple-text-secondary)' }}>
            <BookOpen size={18} />
          </div>
          <span style={{ flex: 1 }}>Concepts</span>
          <div style={{ 
            color: 'var(--apple-text-tertiary)',
            transition: 'var(--transition-fast)',
            transform: expandedSections.includes('concepts') ? 'rotate(0deg)' : 'rotate(-90deg)'
          }}>
            <ChevronDown size={16} />
          </div>
        </div>

        {/* Concept items */}
        {expandedSections.includes('concepts') && (
          <div style={{
            marginTop: 'var(--spacing-xs)',
            marginBottom: 'var(--spacing-sm)'
          }}>
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
        <div
          onClick={() => toggleSection('hooks')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--spacing-sm)',
            padding: 'var(--spacing-sm) var(--spacing-lg)',
            margin: '2px var(--spacing-md)',
            borderRadius: 'var(--radius-sm)',
            cursor: 'pointer',
            color: 'var(--apple-text-primary)',
            transition: 'var(--transition-fast)',
            fontSize: 'var(--font-size-base)',
            fontWeight: '500',
            userSelect: 'none'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--apple-gray-1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <div style={{ color: 'var(--apple-text-secondary)' }}>
            <Code size={18} />
          </div>
          <span style={{ flex: 1 }}>Hooks</span>
          <div style={{ 
            color: 'var(--apple-text-tertiary)',
            transition: 'var(--transition-fast)',
            transform: expandedSections.includes('hooks') ? 'rotate(0deg)' : 'rotate(-90deg)'
          }}>
            <ChevronDown size={16} />
          </div>
        </div>

        {/* Hook items */}
        {expandedSections.includes('hooks') && (
          <div style={{
            marginTop: 'var(--spacing-xs)',
            marginBottom: 'var(--spacing-sm)'
          }}>
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