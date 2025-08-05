import { useState, useMemo, useEffect } from 'react';

export const UseMemoDemo = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [renderCount, setRenderCount] = useState(0);

  // Simulate expensive calculation
  const expensiveCalculation = (num: number) => {
    console.log('🔄 Running expensive calculation...');
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += num;
    }
    return result;
  };

  // WITH useMemo - only runs when multiplier changes
  const expensiveValueWithMemo = useMemo(() => {
    console.log('✅ useMemo: Expensive calculation executed');
    return expensiveCalculation(multiplier);
  }, [multiplier]);

  // Track renders
  useEffect(() => {
    setRenderCount(prev => prev + 1);
    console.log(`🔄 Component rendered ${renderCount + 1} times`);
  });

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
        🧪 Interactive useMemo Demo
      </h2>

      <div style={{
        display: 'grid',
        gap: 'var(--spacing-lg)',
        marginBottom: 'var(--spacing-xl)'
      }}>
        <div style={{
          padding: 'var(--spacing-lg)',
          backgroundColor: '#E3F2FD',
          borderRadius: 'var(--radius-md)',
          borderLeft: '4px solid #1976D2'
        }}>
          <p style={{
            fontSize: 'var(--font-size-base)',
            fontWeight: '500',
            margin: 0,
            color: '#1565C0'
          }}>
            📊 <strong>Open your browser console (F12)</strong> to see when expensive calculations run!
          </p>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--spacing-xl)',
        marginBottom: 'var(--spacing-xl)'
      }}>
        {/* Controls */}
        <div>
          <h3 style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: '600',
            color: 'var(--apple-text-primary)',
            marginBottom: 'var(--spacing-md)'
          }}>
            🎛️ Controls
          </h3>
          
          <div style={{ marginBottom: 'var(--spacing-lg)' }}>
            <label style={{
              display: 'block',
              fontSize: 'var(--font-size-base)',
              fontWeight: '500',
              color: 'var(--apple-text-primary)',
              marginBottom: 'var(--spacing-sm)'
            }}>
              Count: {count}
            </label>
            <button
              onClick={() => setCount(c => c + 1)}
              style={{
                padding: 'var(--spacing-sm) var(--spacing-lg)',
                backgroundColor: '#FF6B6B',
                color: 'white',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-base)',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'var(--transition-fast)'
              }}
            >
              ➕ Increment Count (Causes Re-render)
            </button>
          </div>

          <div>
            <label style={{
              display: 'block',
              fontSize: 'var(--font-size-base)',
              fontWeight: '500',
              color: 'var(--apple-text-primary)',
              marginBottom: 'var(--spacing-sm)'
            }}>
              Multiplier: {multiplier}
            </label>
            <button
              onClick={() => setMultiplier(m => m + 1)}
              style={{
                padding: 'var(--spacing-sm) var(--spacing-lg)',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-base)',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'var(--transition-fast)'
              }}
            >
              ✖️ Change Multiplier (Triggers Calculation)
            </button>
          </div>
        </div>

        {/* Results */}
        <div>
          <h3 style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: '600',
            color: 'var(--apple-text-primary)',
            marginBottom: 'var(--spacing-md)'
          }}>
            📈 Results
          </h3>
          
          <div style={{
            padding: 'var(--spacing-lg)',
            backgroundColor: 'var(--apple-gray-1)',
            borderRadius: 'var(--radius-md)',
            fontFamily: 'SF Mono, Monaco, monospace'
          }}>
            <div style={{ marginBottom: 'var(--spacing-sm)' }}>
              <strong>Render Count:</strong> {renderCount}
            </div>
            <div style={{ marginBottom: 'var(--spacing-sm)' }}>
              <strong>Current Count:</strong> {count}
            </div>
            <div style={{ marginBottom: 'var(--spacing-sm)' }}>
              <strong>Multiplier:</strong> {multiplier}
            </div>
            <div>
              <strong>Expensive Result:</strong> {expensiveValueWithMemo.toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      {/* Explanation */}
      <div style={{
        padding: 'var(--spacing-lg)',
        backgroundColor: '#FFF3E0',
        borderRadius: 'var(--radius-md)',
        borderLeft: '4px solid #FF9800'
      }}>
        <h3 style={{
          fontSize: 'var(--font-size-lg)',
          fontWeight: '600',
          color: '#E65100',
          marginBottom: 'var(--spacing-md)'
        }}>
          🔍 What's Happening?
        </h3>
        <ul style={{
          fontSize: 'var(--font-size-base)',
          color: '#BF360C',
          lineHeight: '1.6',
          paddingLeft: 'var(--spacing-lg)',
          margin: 0
        }}>
          <li style={{ marginBottom: 'var(--spacing-sm)' }}>
            <strong>Click "Increment Count":</strong> Component re-renders, but useMemo prevents expensive calculation
          </li>
          <li style={{ marginBottom: 'var(--spacing-sm)' }}>
            <strong>Click "Change Multiplier":</strong> useMemo dependency changes, so calculation runs
          </li>
          <li>
            <strong>Check Console:</strong> See exactly when the expensive calculation executes
          </li>
        </ul>
      </div>
    </div>
  );
};