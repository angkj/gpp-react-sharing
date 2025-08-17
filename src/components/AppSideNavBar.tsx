import { Goal } from 'lucide-react';
import { useState } from 'react';

const AppSideNavBar = () => {
  const [selectedPage, setSelectedPage] = useState('home');

  const handleNavClick = (page: string) => {
    setSelectedPage(page);
    
    const url = new URL(window.location.href);
    url.searchParams.set('page', page);
    window.history.pushState({}, '', url.toString());
    
    window.dispatchEvent(new CustomEvent('navigation', { detail: { page } }));
  };

  const menuItems = [
    {
      key: 'home',
      icon: <Goal size={18} />,
      label: 'Home',
    },
    {
      key: 'sampleComponent',
      icon: <Goal size={18} />,
      label: 'Sample Component',
    },
    {
      key: 'pureComponent',
      icon: <Goal size={18} />,
      label: 'Pure Component',
    },
    {
      key: 'updatingVariables',
      icon: <Goal size={18} />,
      label: 'Updating Variables',
    },
    {
      key: 'useState',
      icon: <Goal size={18} />,
      label: 'useState Forms',
    },
    {
      key: 'props-down-callbacks-up',
      icon: <Goal size={18} />,
      label: 'Props Down, Callbacks Up',
    },
    {
      key: 'managing-state',
      icon: <Goal size={18} />,
      label: 'Managing State',
    },
    {
      key: 'defining-internal-component',
      icon: <Goal size={18} />,
      label: 'Defining Internal Components',
    },
    {
      key: 'useEffect',
      icon: <Goal size={18} />,
      label: 'Escape Hatch - useEffect',
    }
  ];

  const NavItem = ({ item, isSelected }: { item: { key: string; icon?: React.ReactNode; label: string }, isSelected: boolean }) => (
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
    </div>
  );
};

export default AppSideNavBar;
