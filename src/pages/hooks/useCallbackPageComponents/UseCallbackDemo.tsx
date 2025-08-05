import { useState, useCallback, useEffect, useRef } from 'react';
import { ChildComponent } from './ChildComponent';

export const UseCallbackDemo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [renderCount, setRenderCount] = useState(0);

  // Render counters for child components
  const withoutCallbackRenderCount = useRef(0);
  const withCallbackRenderCount = useRef(0);

  // WITHOUT useCallback - creates new function on every render
  const handleClickWithoutCallback = () => {
    console.log('❌ Function WITHOUT useCallback called');
    alert('Button clicked!');
  };

  // WITH useCallback - function reference stays the same
  const handleClickWithCallback = useCallback(() => {
    console.log('✅ Function WITH useCallback called');
    alert('Button clicked!');
  }, []); // Empty dependency array means function never changes

  // Track parent renders
  useEffect(() => {
    setRenderCount(prev => prev + 1);
    console.log(`🔄 Parent component rendered ${renderCount + 1} times`);
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
        🧪 Interactive useCallback Demo
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
            📊 <strong>Open your browser console (F12)</strong> to see child component re-render patterns!
          </p>
        </div>
      </div>

      {/* Parent Controls */}
      <div style={{
        marginBottom: 'var(--spacing-xl)',
        padding: 'var(--spacing-lg)',
        backgroundColor: '#F5F5F5',
        borderRadius: 'var(--radius-md)'
      }}>
        <h3 style={{
          fontSize: 'var(--font-size-lg)',
          fontWeight: '600',
          color: 'var(--apple-text-primary)',
          marginBottom: 'var(--spacing-md)'
        }}>
          🎛️ Parent Component Controls
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--spacing-lg)',
          marginBottom: 'var(--spacing-lg)'
        }}>
          <div>
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
                cursor: 'pointer'
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
              Name: {name || '(empty)'}
            </label>
            <button
              onClick={() => setName(n => n + 'x')}
              style={{
                padding: 'var(--spacing-sm) var(--spacing-lg)',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-base)',
                cursor: 'pointer'
              }}
            >
              ✏️ Change Name (Causes Re-render)
            </button>
          </div>
        </div>

        <div style={{
          padding: 'var(--spacing-md)',
          backgroundColor: 'var(--apple-background)',
          borderRadius: 'var(--radius-sm)',
          fontFamily: 'SF Mono, Monaco, monospace',
          fontSize: 'var(--font-size-sm)'
        }}>
          <strong>Parent Render Count:</strong> {renderCount}
        </div>
      </div>

      {/* Child Components Comparison */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--spacing-xl)'
      }}>
        {/* Without useCallback */}
        <div>
          <h3 style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: '600',
            color: '#D32F2F',
            marginBottom: 'var(--spacing-md)'
          }}>
            ❌ WITHOUT useCallback
          </h3>
          <ChildComponent
            label="Child without useCallback"
            onClick={handleClickWithoutCallback}
            renderCount={withoutCallbackRenderCount}
          />
          <div style={{
            fontSize: 'var(--font-size-sm)',
            color: '#D32F2F',
            fontStyle: 'italic'
          }}>
            Re-renders every time parent renders because function reference changes
          </div>
        </div>

        {/* With useCallback */}
        <div>
          <h3 style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: '600',
            color: '#2E7D32',
            marginBottom: 'var(--spacing-md)'
          }}>
            ✅ WITH useCallback
          </h3>
          <ChildComponent
            label="Child with useCallback"
            onClick={handleClickWithCallback}
            renderCount={withCallbackRenderCount}
          />
          <div style={{
            fontSize: 'var(--font-size-sm)',
            color: '#2E7D32',
            fontStyle: 'italic'
          }}>
            Only renders once! Function reference stays the same due to useCallback
          </div>
        </div>
      </div>

      {/* Explanation */}
      <div style={{
        marginTop: 'var(--spacing-xl)',
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
            <strong>Left child (❌):</strong> Re-renders every time because it receives a new function reference
          </li>
          <li style={{ marginBottom: 'var(--spacing-sm)' }}>
            <strong>Right child (✅):</strong> Uses React.memo() + useCallback, so it only renders once
          </li>
          <li style={{ marginBottom: 'var(--spacing-sm)' }}>
            <strong>Key insight:</strong> useCallback prevents unnecessary child re-renders by keeping function references stable
          </li>
          <li>
            <strong>Check Console:</strong> See exactly when each child component re-renders
          </li>
        </ul>
      </div>
    </div>
  );
};