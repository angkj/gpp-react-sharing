import { useRef, useState } from 'react';
import HookPageLayout from '../components/HookPageLayout';

const UseRefPage = () => {
  return (
    <HookPageLayout
      title="useRef Hook"
      description="Learn about the useRef hook for accessing DOM elements and storing mutable values."
      whatIs="The useRef hook returns a mutable ref object whose .current property is initialized to the passed argument. The returned object will persist for the full lifetime of the component and doesn't cause re-renders when mutated."
      codeExample={`const inputRef = useRef(null);
const countRef = useRef(0);

// Access DOM element
inputRef.current.focus();

// Store mutable value without triggering re-renders
countRef.current += 1;

// JSX usage
<input ref={inputRef} type="text" />`}
    >
      <MutableValueDemo />
    </HookPageLayout>
  );
};

// Demo 2: Mutable Values without Re-renders
const MutableValueDemo = () => {
  const [stateCount, setStateCount] = useState(0);
  const refCount = useRef(0);
  const renderCount = useRef(0);

  // Track renders
  renderCount.current += 1;

  const incrementState = () => {
    setStateCount(prev => prev + 1);
  };

  const incrementRef = () => {
    refCount.current += 1;
    console.log('🔄 Ref count is now:', refCount.current);
  };

  const showRefValue = () => {
    alert(`Current ref value: ${refCount.current}`);
  };

  return (
    <div style={{
      padding: 'var(--spacing-2xl)',
      backgroundColor: 'var(--apple-background)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--apple-separator)',
      boxShadow: '0 4px 16px var(--apple-shadow)',
      marginBottom: 'var(--spacing-2xl)'
    }}>
      <h2 style={{
        fontSize: 'var(--font-size-2xl)',
        fontWeight: '600',
        color: 'var(--apple-text-primary)',
        marginBottom: 'var(--spacing-lg)'
      }}>
        💾 Mutable Values Demo
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
          📊 <strong>Open your console (F12)</strong> to see ref value changes without re-renders!
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--spacing-xl)'
      }}>
        {/* State Counter */}
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
            🔄 State Counter (Causes Re-render)
          </h3>
          
          <div style={{
            fontSize: 'var(--font-size-2xl)',
            fontWeight: '700',
            color: '#C62828',
            marginBottom: 'var(--spacing-md)',
            fontFamily: 'var(--font-family-mono)'
          }}>
            {stateCount}
          </div>
          
          <button
            onClick={incrementState}
            style={{
              padding: 'var(--spacing-sm) var(--spacing-lg)',
              backgroundColor: '#F44336',
              color: 'white',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              fontSize: 'var(--font-size-base)',
              cursor: 'pointer'
            }}
          >
            ➕ Increment State
          </button>
        </div>

        {/* Ref Counter */}
        <div style={{
          padding: 'var(--spacing-lg)',
          backgroundColor: '#E8F5E8',
          borderRadius: 'var(--radius-md)',
          borderLeft: '4px solid #4CAF50'
        }}>
          <h3 style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: '600',
            color: '#2E7D32',
            marginBottom: 'var(--spacing-md)'
          }}>
            📌 Ref Counter (No Re-render)
          </h3>
          
          <div style={{
            fontSize: 'var(--font-size-base)',
            color: '#1B5E20',
            marginBottom: 'var(--spacing-md)',
            fontFamily: 'var(--font-family-mono)'
          }}>
            Value stored in ref (check console)
          </div>
          
          <div style={{
            display: 'flex',
            gap: 'var(--spacing-sm)'
          }}>
            <button
              onClick={incrementRef}
              style={{
                padding: 'var(--spacing-sm) var(--spacing-md)',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-sm)',
                cursor: 'pointer'
              }}
            >
              ➕ Increment Ref
            </button>
            <button
              onClick={showRefValue}
              style={{
                padding: 'var(--spacing-sm) var(--spacing-md)',
                backgroundColor: '#2196F3',
                color: 'white',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-sm)',
                cursor: 'pointer'
              }}
            >
              👁️ Show Value
            </button>
          </div>
        </div>
      </div>

      {/* Render Counter */}
      <div style={{
        marginTop: 'var(--spacing-xl)',
        padding: 'var(--spacing-lg)',
        backgroundColor: 'var(--apple-gray-1)',
        borderRadius: 'var(--radius-md)',
        textAlign: 'center'
      }}>
        <div style={{
          fontSize: 'var(--font-size-lg)',
          fontWeight: '600',
          color: 'var(--apple-text-primary)',
          fontFamily: 'var(--font-family-mono)'
        }}>
          🔄 Component Render Count: {renderCount.current}
        </div>
        <div style={{
          fontSize: 'var(--font-size-sm)',
          color: 'var(--apple-text-secondary)',
          marginTop: 'var(--spacing-sm)'
        }}>
          Notice: Only state changes cause re-renders!
        </div>
      </div>
    </div>
  );
};

export default UseRefPage;