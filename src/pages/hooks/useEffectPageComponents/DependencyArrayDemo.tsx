import { useState, useEffect } from 'react';

export const DependencyArrayDemo = () => {
  const [count, setCount] = useState(0);

  // No dependency array - runs on every render
  useEffect(() => {
    console.log('🔴 No deps: Runs on every render');
  });

  // Empty dependency array - runs only once on mount
  useEffect(() => {
    console.log('🟡 Empty deps: Runs only on mount');
  }, []);

  // With dependencies - runs when count changes
  useEffect(() => {
    console.log('🟢 With deps: Runs when count changes, count =', count);
  }, [count]);

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
        Dependency Array Patterns
      </h2>

      <p style={{
        fontSize: 'var(--font-size-base)',
        color: 'var(--apple-text-secondary)',
        lineHeight: '1.6',
        marginBottom: 'var(--spacing-xl)'
      }}>
        Three different ways to control when useEffect runs. Open your console (F12) to see when each effect executes!
      </p>

      {/* Controls */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 'var(--spacing-xl)'
      }}>
        <div style={{
          padding: 'var(--spacing-xl)',
          backgroundColor: 'var(--apple-gray-1)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--apple-separator)',
          minWidth: '400px'
        }}>
          <h3 style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: '600',
            color: 'var(--apple-text-primary)',
            marginBottom: 'var(--spacing-lg)',
            textAlign: 'center'
          }}>
            Interactive Controls
          </h3>
          
          <div style={{ marginBottom: 'var(--spacing-lg)' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-md)',
              marginBottom: 'var(--spacing-lg)',
              justifyContent: 'center'
            }}>
              <span style={{ minWidth: '60px', fontSize: 'var(--font-size-base)' }}>Count:</span>
              <span style={{ 
                fontSize: 'var(--font-size-2xl)', 
                fontWeight: '700', 
                color: 'var(--apple-blue)',
                minWidth: '40px',
                textAlign: 'center'
              }}>
                {count}
              </span>
              <button
                onClick={() => setCount(count + 1)}
                style={{
                  padding: 'var(--spacing-sm) var(--spacing-md)',
                  backgroundColor: 'var(--apple-blue)',
                  color: 'white',
                  border: 'none',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: 'var(--font-size-sm)',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}
              >
                Increment
              </button>
            </div>
          </div>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gap: 'var(--spacing-md)'
      }}>
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
            🎯 <strong>Try This:</strong> Change the count (triggers count dependency), change the name (doesn't trigger count dependency), and watch the console to see how each useEffect behaves differently!
          </p>
        </div>
      </div>
    </div>
  );
};