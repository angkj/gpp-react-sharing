import { useState } from 'react';

// Expensive operation simulation
const expensiveCalculation = () => {
  console.log('🔥 EXPENSIVE CALCULATION RUNNING...');
  // Simulate expensive computation
  let result = 0;
  for (let i = 0; i < 1000000; i++) {
    result += Math.random();
  }
  return Math.floor(result);
};

// BAD: Direct initialization - runs on every render
export const BadInitializationDemo = () => {
  const [count, setCount] = useState(0);
  
  // ❌ BAD: This runs on every render!
  const [expensiveValue] = useState(expensiveCalculation());

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
        ❌ BAD PERFORMANCE
      </div>
      
      <h3 style={{
        fontSize: 'var(--font-size-lg)',
        fontWeight: '600',
        color: '#C62828',
        marginBottom: 'var(--spacing-md)'
      }}>
        Direct Initialization
      </h3>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--spacing-md)',
        marginBottom: 'var(--spacing-lg)'
      }}>
        <div>
          <div style={{ fontSize: 'var(--font-size-sm)', color: '#666' }}>Re-render Count</div>
          <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: '700', color: '#B71C1C' }}>
            {count}
          </div>
        </div>
        <div>
          <div style={{ fontSize: 'var(--font-size-sm)', color: '#666' }}>Expensive Value</div>
          <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: '700', color: '#B71C1C' }}>
            {expensiveValue}
          </div>
        </div>
      </div>
      
      <button
        onClick={() => setCount(count + 1)}
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
        Re-render (Check Console!) 🐌
      </button>
      
      <p style={{
        fontSize: 'var(--font-size-sm)',
        color: '#D32F2F',
        margin: 0,
        fontStyle: 'italic'
      }}>
        Expensive calculation runs on EVERY render!
      </p>
    </div>
  );
};

// GOOD: Functional initialization - runs only once
export const GoodInitializationDemo = () => {
  const [count, setCount] = useState(0);
  
  // ✅ GOOD: This only runs once!
  const [expensiveValue] = useState(() => expensiveCalculation());

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
        ✅ GOOD PERFORMANCE
      </div>
      
      <h3 style={{
        fontSize: 'var(--font-size-lg)',
        fontWeight: '600',
        color: '#2E7D32',
        marginBottom: 'var(--spacing-md)'
      }}>
        Functional Initialization
      </h3>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--spacing-md)',
        marginBottom: 'var(--spacing-lg)'
      }}>
        <div>
          <div style={{ fontSize: 'var(--font-size-sm)', color: '#666' }}>Re-render Count</div>
          <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: '700', color: '#1B5E20' }}>
            {count}
          </div>
        </div>
        <div>
          <div style={{ fontSize: 'var(--font-size-sm)', color: '#666' }}>Expensive Value</div>
          <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: '700', color: '#1B5E20' }}>
            {expensiveValue}
          </div>
        </div>
      </div>
      
      <button
        onClick={() => setCount(count + 1)}
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
        Re-render (Check Console!) ⚡
      </button>
      
      <p style={{
        fontSize: 'var(--font-size-sm)',
        color: '#388E3C',
        margin: 0,
        fontStyle: 'italic'
      }}>
        Expensive calculation runs ONLY ONCE!
      </p>
    </div>
  );
};

export const InitializationPerformanceDemo = () => {
  return (
    <div style={{
      padding: 'var(--spacing-2xl)',
      backgroundColor: 'var(--apple-background)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--apple-separator)',
      boxShadow: '0 4px 16px var(--apple-shadow)',
      marginTop: 'var(--spacing-2xl)'
    }}>
      <h2 style={{
        fontSize: 'var(--font-size-2xl)',
        fontWeight: '600',
        color: 'var(--apple-text-primary)',
        marginBottom: 'var(--spacing-lg)'
      }}>
        Initialization Performance Demo
      </h2>

      <p style={{
        fontSize: 'var(--font-size-base)',
        color: 'var(--apple-text-secondary)',
        lineHeight: '1.6',
        marginBottom: 'var(--spacing-xl)'
      }}>
        Watch the console to see the difference between direct vs functional initialization!
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--spacing-xl)',
        marginBottom: 'var(--spacing-xl)'
      }}>
        <BadInitializationDemo />
        <GoodInitializationDemo />
      </div>

      <div style={{
        padding: 'var(--spacing-lg)',
        backgroundColor: '#E3F2FD',
        borderRadius: 'var(--radius-md)',
        borderLeft: '4px solid var(--apple-blue)'
      }}>
        <p style={{
          fontSize: 'var(--font-size-base)',
          fontWeight: '500',
          margin: 0,
          color: '#1565C0'
        }}>
          🎯 <strong>Try This:</strong> Open your browser's console, then click both "Re-render" buttons multiple times. Notice how the left component logs on every click, while the right component only logged once during initial mount!
        </p>
      </div>
    </div>
  );
};