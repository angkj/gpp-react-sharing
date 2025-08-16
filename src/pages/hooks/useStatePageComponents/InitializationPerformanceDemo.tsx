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
        fontSize: 'var(--font-size-sm)',
        color: '#D32F2F',
        marginBottom: 'var(--spacing-md)',
        fontFamily: 'var(--font-family-mono)',
        backgroundColor: '#FFCDD2',
        padding: 'var(--spacing-sm)',
        borderRadius: 'var(--radius-sm)'
      }}>
        useState(expensiveCalculation())
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--spacing-md)',
        marginBottom: 'var(--spacing-lg)'
      }}>
        <div>
          <div style={{ fontSize: 'var(--font-size-sm)', color: '#666' }}>Re-render Count</div>
          <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: '700', color: '#B71C1C', fontFamily: 'var(--font-family-mono)' }}>
            {count}
          </div>
        </div>
        <div>
          <div style={{ fontSize: 'var(--font-size-sm)', color: '#666' }}>Expensive Value</div>
          <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: '700', color: '#B71C1C', fontFamily: 'var(--font-family-mono)' }}>
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
        fontSize: 'var(--font-size-sm)',
        color: '#388E3C',
        marginBottom: 'var(--spacing-md)',
        fontFamily: 'var(--font-family-mono)',
        backgroundColor: '#C8E6C9',
        padding: 'var(--spacing-sm)',
        borderRadius: 'var(--radius-sm)'
      }}>
        useState(() =&gt; expensiveCalculation())
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--spacing-md)',
        marginBottom: 'var(--spacing-lg)'
      }}>
        <div>
          <div style={{ fontSize: 'var(--font-size-sm)', color: '#666' }}>Re-render Count</div>
          <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: '700', color: '#1B5E20', fontFamily: 'var(--font-family-mono)' }}>
            {count}
          </div>
        </div>
        <div>
          <div style={{ fontSize: 'var(--font-size-sm)', color: '#666' }}>Expensive Value</div>
          <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: '700', color: '#1B5E20', fontFamily: 'var(--font-family-mono)' }}>
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
    <div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--spacing-xl)',
        marginBottom: 'var(--spacing-xl)'
      }}>
        <BadInitializationDemo />
        <GoodInitializationDemo />
      </div>
    </div>
  );
};