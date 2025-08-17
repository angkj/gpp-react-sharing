import { useState } from 'react';

// Expensive operation simulation
const expensiveCalculation = () => {
  console.log('🔥 EXPENSIVE CALCULATION RUNNING...');
  // Simulate expensive computation
  let result = 0;
  for (let i = 0; i < 10000000; i++) {
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
      backgroundColor: 'var(--apple-background-secondary)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--spacing-xl)',
      border: '2px solid var(--apple-separator)',
      borderLeft: '4px solid #FF3B30', // Red for "wrong" approach
      boxShadow: '0 4px 16px var(--apple-shadow)'
    }}>
      <div style={{ marginBottom: 'var(--spacing-lg)' }}>
        <h2 style={{
          fontSize: 'var(--font-size-xl)',
          fontWeight: '600',
          color: 'var(--apple-text-primary)',
          marginBottom: 'var(--spacing-sm)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-sm)'
        }}>
          <span style={{
            width: '12px',
            height: '12px',
            backgroundColor: '#FF3B30',
            borderRadius: '50%'
          }}></span>
          Direct Initialization
        </h2>
        <p style={{
          fontSize: 'var(--font-size-sm)',
          color: 'var(--apple-text-secondary)',
          margin: '0 0 var(--spacing-md) 0',
          lineHeight: '1.5'
        }}>
          Runs expensive calculation on every render, causing performance issues.
        </p>
      </div>

      <div style={{
        backgroundColor: 'var(--apple-background)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--spacing-lg)',
        marginBottom: 'var(--spacing-md)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <div style={{
          fontSize: 'var(--font-size-sm)',
          color: '#FF3B30',
          marginBottom: 'var(--spacing-md)',
          fontFamily: 'var(--font-family-mono)',
          backgroundColor: 'rgba(255, 59, 48, 0.1)',
          padding: 'var(--spacing-sm)',
          borderRadius: 'var(--radius-sm)'
        }}>
          useState(expensiveCalculation())
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--spacing-md)',
          marginBottom: 'var(--spacing-lg)',
          width: '100%'
        }}>
          <div>
            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--apple-text-secondary)' }}>Re-render Count</div>
            <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: '700', color: '#FF3B30', fontFamily: 'var(--font-family-mono)' }}>
              {count}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--apple-text-secondary)' }}>Expensive Value</div>
            <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: '700', color: '#FF3B30', fontFamily: 'var(--font-family-mono)' }}>
              {expensiveValue}
            </div>
          </div>
        </div>
        
        <button
          onClick={() => setCount(count + 1)}
          style={{
            padding: 'var(--spacing-md) var(--spacing-lg)',
            backgroundColor: '#FF3B30',
            borderColor: '#FF3B30',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--radius-md)',
            fontSize: 'var(--font-size-base)',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'var(--transition-fast)',
            marginBottom: 'var(--spacing-md)'
          }}
        >
          Re-render
        </button>
      </div>

      <div style={{
        fontSize: 'var(--font-size-xs)',
        color: 'var(--apple-text-tertiary)',
        fontStyle: 'italic'
      }}>
        ❌ Expensive calculation runs on EVERY render!
      </div>
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
      backgroundColor: 'var(--apple-background-secondary)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--spacing-xl)',
      border: '2px solid var(--apple-separator)',
      borderLeft: '4px solid #34C759', // Green for "correct" approach
      boxShadow: '0 4px 16px var(--apple-shadow)'
    }}>
      <div style={{ marginBottom: 'var(--spacing-lg)' }}>
        <h2 style={{
          fontSize: 'var(--font-size-xl)',
          fontWeight: '600',
          color: 'var(--apple-text-primary)',
          marginBottom: 'var(--spacing-sm)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-sm)'
        }}>
          <span style={{
            width: '12px',
            height: '12px',
            backgroundColor: '#34C759',
            borderRadius: '50%'
          }}></span>
          Functional Initialization
        </h2>
        <p style={{
          fontSize: 'var(--font-size-sm)',
          color: 'var(--apple-text-secondary)',
          margin: '0 0 var(--spacing-md) 0',
          lineHeight: '1.5'
        }}>
          Uses function initialization to run expensive calculation only once during component mount.
        </p>
      </div>

      <div style={{
        backgroundColor: 'var(--apple-background)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--spacing-lg)',
        marginBottom: 'var(--spacing-md)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <div style={{
          fontSize: 'var(--font-size-sm)',
          color: '#34C759',
          marginBottom: 'var(--spacing-md)',
          fontFamily: 'var(--font-family-mono)',
          backgroundColor: 'rgba(52, 199, 89, 0.1)',
          padding: 'var(--spacing-sm)',
          borderRadius: 'var(--radius-sm)'
        }}>
          useState(() =&gt; expensiveCalculation())
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--spacing-md)',
          marginBottom: 'var(--spacing-lg)',
          width: '100%'
        }}>
          <div>
            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--apple-text-secondary)' }}>Re-render Count</div>
            <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: '700', color: '#34C759', fontFamily: 'var(--font-family-mono)' }}>
              {count}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--apple-text-secondary)' }}>Expensive Value</div>
            <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: '700', color: '#34C759', fontFamily: 'var(--font-family-mono)' }}>
              {expensiveValue}
            </div>
          </div>
        </div>
        
        <button
          onClick={() => setCount(count + 1)}
          type="button"
          style={{
            padding: 'var(--spacing-md) var(--spacing-lg)',
            backgroundColor: '#34C759',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--radius-md)',
            fontSize: 'var(--font-size-base)',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'var(--transition-fast)',
            marginBottom: 'var(--spacing-md)'
          }}
        >
          Re-render
        </button>
      </div>

      <div style={{
        fontSize: 'var(--font-size-xs)',
        color: 'var(--apple-text-tertiary)',
        fontStyle: 'italic'
      }}>
        ✅ Expensive calculation runs ONLY ONCE!
      </div>
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
