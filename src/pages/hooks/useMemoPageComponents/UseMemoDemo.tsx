import { useState } from 'react';



  // Simulate expensive calculation
const expensiveCalculation = () => {
    console.log('💸 Expensive calculation running on every render!');
    let result = 0;
    for (let i = 0; i < 50000000; i++) {
      result += Math.random();
    }
    return result;
  };

export const UseMemoDemo = () => {
  const [count, setCount] = useState(0);
  // WITHOUT useMemo - runs on EVERY render (even when the result doesn't depend on count)
  expensiveCalculation();

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
        🧪 useMemo Demo - WITHOUT Memoization
      </h2>

      <div style={{
        padding: 'var(--spacing-lg)',
        backgroundColor: '#E3F2FD',
        borderRadius: 'var(--radius-md)',
        borderLeft: '4px solid #1976D2',
        marginBottom: 'var(--spacing-xl)'
      }}>
        <p style={{
          fontSize: 'var(--font-size-base)',
          fontWeight: '500',
          margin: 0,
          color: '#1565C0'
        }}>
          📊 <strong>Open your browser console (F12)</strong> to see the expensive calculation running on every render!
        </p>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 'var(--spacing-xl)'
      }}>
        {/* Counter Display */}
        <div style={{
          padding: 'var(--spacing-xl)',
          backgroundColor: 'var(--apple-gray-1)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--apple-separator)',
          textAlign: 'center',
          minWidth: '300px'
        }}>
          <h3 style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: '600',
            color: 'var(--apple-text-primary)',
            marginBottom: 'var(--spacing-md)'
          }}>
            Current Count
          </h3>
          
          <div style={{
            fontSize: 'var(--font-size-4xl)',
            fontWeight: '700',
            color: '#4CAF50',
            marginBottom: 'var(--spacing-lg)'
          }}>
            {count}
          </div>
          
          <button
            onClick={() => setCount(c => c + 1)}
            style={{
              padding: 'var(--spacing-md) var(--spacing-xl)',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              fontSize: 'var(--font-size-base)',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'var(--transition-fast)'
            }}
          >
            Increment & Check Console
          </button>
        </div>
      </div>

      {/* Explanation */}
      <div style={{
        padding: 'var(--spacing-lg)',
        backgroundColor: '#FFEBEE',
        borderRadius: 'var(--radius-md)',
        borderLeft: '4px solid #F44336'
      }}>
        <h3 style={{
          fontSize: 'var(--font-size-lg)',
          fontWeight: '600',
          color: '#D32F2F',
          marginBottom: 'var(--spacing-md)'
        }}>
          ⚠️ Problem: Expensive Function Runs on Every Render
        </h3>
        <ul style={{
          fontSize: 'var(--font-size-base)',
          color: '#C62828',
          lineHeight: '1.6',
          paddingLeft: 'var(--spacing-lg)',
          margin: 0
        }}>
          <li style={{ marginBottom: 'var(--spacing-sm)' }}>
            <strong>Every click</strong> triggers a re-render and runs the expensive calculation
          </li>
          <li style={{ marginBottom: 'var(--spacing-sm)' }}>
            <strong>Performance waste:</strong> The calculation result doesn't even depend on the count!
          </li>
          <li>
            <strong>Solution:</strong> Wrap the expensive calculation in <code>useMemo()</code> to prevent unnecessary re-execution
          </li>
        </ul>
      </div>
    </div>
  );
};