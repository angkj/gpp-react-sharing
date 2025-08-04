import { useState } from 'react';

// Wrong Way - Regular Variable Component
export const RegularVariableCounter = () => {
  let count = 0; // Regular variable

  const increment = () => {
    count++; // Updates variable
    console.log('Regular variable count:', count); // Shows new value in console
    // BUT: Component doesn't re-render!
  };

  return (
    <div style={{
      padding: 'var(--spacing-lg)',
      backgroundColor: '#FFEBEE',
      borderRadius: 'var(--radius-md)',
      border: '2px solid #F44336',
      textAlign: 'center'
    }}>
      <div style={{
        display: 'inline-block',
        backgroundColor: '#F44336',
        color: 'white',
        padding: '4px 8px',
        borderRadius: 'var(--radius-sm)',
        fontSize: 'var(--font-size-xs)',
        fontWeight: '600',
        marginBottom: 'var(--spacing-md)'
      }}>
        ❌ WRONG WAY
      </div>
      
      <h3 style={{
        fontSize: 'var(--font-size-lg)',
        fontWeight: '600',
        color: '#C62828',
        marginBottom: 'var(--spacing-md)'
      }}>
        Regular Variable
      </h3>
      
      <div style={{
        fontSize: 'var(--font-size-3xl)',
        fontWeight: '700',
        color: '#B71C1C',
        marginBottom: 'var(--spacing-lg)',
        fontFamily: 'SF Mono, Monaco, monospace'
      }}>
        {count}
      </div>
      
      <button
        onClick={increment}
        style={{
          padding: 'var(--spacing-md) var(--spacing-lg)',
          backgroundColor: '#F44336',
          color: 'white',
          border: 'none',
          borderRadius: 'var(--radius-md)',
          fontSize: 'var(--font-size-base)',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'var(--transition-fast)',
          marginBottom: 'var(--spacing-md)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#D32F2F';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#F44336';
        }}
      >
        Click Me! (Check Console)
      </button>
      
      <p style={{
        fontSize: 'var(--font-size-sm)',
        color: '#D32F2F',
        margin: 0,
        fontStyle: 'italic'
      }}>
        UI never updates, but check the console!
      </p>
    </div>
  );
};

// Right Way - useState Component
export const UseStateCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1); // Updates state
    console.log('useState count:', count + 1); // Shows new value in console
    // React schedules a re-render!
  };

  return (
    <div style={{
      padding: 'var(--spacing-lg)',
      backgroundColor: '#E8F5E8',
      borderRadius: 'var(--radius-md)',
      border: '2px solid #4CAF50',
      textAlign: 'center'
    }}>
      <div style={{
        display: 'inline-block',
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '4px 8px',
        borderRadius: 'var(--radius-sm)',
        fontSize: 'var(--font-size-xs)',
        fontWeight: '600',
        marginBottom: 'var(--spacing-md)'
      }}>
        ✅ RIGHT WAY
      </div>
      
      <h3 style={{
        fontSize: 'var(--font-size-lg)',
        fontWeight: '600',
        color: '#2E7D32',
        marginBottom: 'var(--spacing-md)'
      }}>
        useState Hook
      </h3>
      
      <div style={{
        fontSize: 'var(--font-size-3xl)',
        fontWeight: '700',
        color: '#1B5E20',
        marginBottom: 'var(--spacing-lg)',
        fontFamily: 'SF Mono, Monaco, monospace'
      }}>
        {count}
      </div>
      
      <button
        onClick={increment}
        style={{
          padding: 'var(--spacing-md) var(--spacing-lg)',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: 'var(--radius-md)',
          fontSize: 'var(--font-size-base)',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'var(--transition-fast)',
          marginBottom: 'var(--spacing-md)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#388E3C';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#4CAF50';
        }}
      >
        Click Me! (UI Updates)
      </button>
      
      <p style={{
        fontSize: 'var(--font-size-sm)',
        color: '#388E3C',
        margin: 0,
        fontStyle: 'italic'
      }}>
        UI updates automatically on every click!
      </p>
    </div>
  );
};

export const WhyNotRegularVariablesDemo = () => {
  return (
    <div style={{
      padding: 'var(--spacing-2xl)',
      backgroundColor: 'var(--apple-background)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--apple-separator)',
      boxShadow: '0 4px 16px var(--apple-shadow)'
    }}>
      <h2 style={{
        fontSize: 'var(--font-size-2xl)',
        fontWeight: '600',
        color: 'var(--apple-text-primary)',
        marginBottom: 'var(--spacing-lg)'
      }}>
        Why Not Regular Variables?
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--spacing-xl)',
        marginBottom: 'var(--spacing-xl)'
      }}>
        <RegularVariableCounter />
        <UseStateCounter />
      </div>

      <div style={{
        padding: 'var(--spacing-lg)',
        backgroundColor: '#E3F2FD',
        borderRadius: 'var(--radius-md)',
        borderLeft: '4px solid var(--apple-blue)',
        marginBottom: 'var(--spacing-lg)'
      }}>
        <p style={{
          fontSize: 'var(--font-size-base)',
          fontWeight: '500',
          margin: 0,
          color: '#1565C0'
        }}>
          🎯 <strong>Try This:</strong> Click both buttons multiple times and notice the difference! Open your browser's developer console to see both components logging their values.
        </p>
      </div>

      <div style={{
        padding: 'var(--spacing-lg)',
        backgroundColor: '#FFF3E0',
        borderRadius: 'var(--radius-md)',
        borderLeft: '4px solid #FF9800'
      }}>
        <p style={{
          fontSize: 'var(--font-size-base)',
          fontWeight: '500',
          margin: 0,
          color: '#E65100'
        }}>
          🔍 <strong>Key Insight:</strong> React only re-renders when state changes through setState functions. Regular variable mutations are "invisible" to React's rendering system, which is why useState is essential for dynamic UIs.
        </p>
      </div>
    </div>
  );
};