import { useState } from 'react';

export const AsyncStateDemo = () => {
  const [count, setCount] = useState(0);
  const [logMessages, setLogMessages] = useState<string[]>([]);

  const handleAsyncDemo = () => {
    const startingCount = count;
    console.log('🔍 Before setState:', count);
    
    setCount(count + 1);
    
    // ❌ This will NOT show the updated value!
    console.log('🔍 Right after setState:', count);
    console.log('🔍 Expected:', count + 1, 'Actual:', count);
    
    // Update log messages for display
    setLogMessages([
      `Before setState: ${startingCount}`,
      `Right after setState: ${startingCount} (NOT ${startingCount + 1}!)`,
      `State updates are asynchronous!`
    ]);
  };

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
        Asynchronous State Demo
      </h2>

      <p style={{
        fontSize: 'var(--font-size-base)',
        color: 'var(--apple-text-secondary)',
        lineHeight: '1.6',
        marginBottom: 'var(--spacing-xl)'
      }}>
        State updates are asynchronous! The variable doesn't update immediately after setState.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--spacing-xl)',
        marginBottom: 'var(--spacing-xl)'
      }}>
        {/* Current State Display */}
        <div style={{
          padding: 'var(--spacing-lg)',
          backgroundColor: 'var(--apple-gray-1)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--apple-separator)',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: '600',
            color: 'var(--apple-text-primary)',
            marginBottom: 'var(--spacing-md)'
          }}>
            Current State
          </h3>
          
          <div style={{
            fontSize: 'var(--font-size-4xl)',
            fontWeight: '700',
            color: 'var(--apple-blue)',
            marginBottom: 'var(--spacing-lg)'
          }}>
            {count}
          </div>
          
          <button
            onClick={handleAsyncDemo}
            style={{
              padding: 'var(--spacing-md) var(--spacing-lg)',
              backgroundColor: 'var(--apple-blue)',
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

        {/* Log Messages Display */}
        <div style={{
          padding: 'var(--spacing-lg)',
          backgroundColor: '#F5F5F5',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--apple-separator)'
        }}>
          <h3 style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: '600',
            color: '#2C2C2C',
            marginBottom: 'var(--spacing-md)'
          }}>
            Console Log
          </h3>
          
          <div style={{
            fontFamily: 'SF Mono, Monaco, monospace',
            fontSize: 'var(--font-size-sm)',
            backgroundColor: '#000',
            color: '#00FF00',
            padding: 'var(--spacing-md)',
            borderRadius: 'var(--radius-sm)',
            minHeight: '120px',
            overflow: 'auto'
          }}>
            {logMessages.length === 0 ? (
              <div style={{ color: '#666' }}>Click the button to see the demo...</div>
            ) : (
              logMessages.map((message, index) => (
                <div key={index} style={{ marginBottom: '4px' }}>
                  {message}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div style={{
        padding: 'var(--spacing-lg)',
        backgroundColor: '#FFEBEE',
        borderRadius: 'var(--radius-md)',
        borderLeft: '4px solid #F44336'
      }}>
        <p style={{
          fontSize: 'var(--font-size-base)',
          fontWeight: '500',
          margin: 0,
          color: '#C62828'
        }}>
          ⚠️ <strong>Important:</strong> Never rely on the state variable immediately after calling setState. If you need the new value, use useEffect or the functional update pattern.
        </p>
      </div>
    </div>
  );
};