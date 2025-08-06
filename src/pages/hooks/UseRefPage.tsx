import { useRef, useState, useEffect } from 'react';
import HookPageLayout from '../../components/HookPageLayout';

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
      <DOMManipulationDemo />
      <MutableValueDemo />
      <PreviousValueDemo />
    </HookPageLayout>
  );
};

// Demo 1: DOM Manipulation with useRef
const DOMManipulationDemo = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  };

  const scrollToBottom = () => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth'
    });
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
        🎯 DOM Manipulation Demo
      </h2>

      <div style={{
        display: 'grid',
        gap: 'var(--spacing-xl)'
      }}>
        {/* Input Focus Demo */}
        <div style={{
          padding: 'var(--spacing-lg)',
          backgroundColor: 'var(--apple-gray-1)',
          borderRadius: 'var(--radius-md)'
        }}>
          <h3 style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: '600',
            color: 'var(--apple-text-primary)',
            marginBottom: 'var(--spacing-md)'
          }}>
            📝 Input Focus Control
          </h3>
          
          <div style={{ marginBottom: 'var(--spacing-md)' }}>
            <input
              ref={inputRef}
              type="text"
              placeholder="Type something here..."
              style={{
                width: '100%',
                padding: 'var(--spacing-sm)',
                border: '1px solid var(--apple-gray-3)',
                borderRadius: 'var(--radius-sm)',
                fontSize: 'var(--font-size-base)',
                fontFamily: 'var(--font-family-primary)'
              }}
            />
          </div>
          
          <div style={{
            display: 'flex',
            gap: 'var(--spacing-md)'
          }}>
            <button
              onClick={focusInput}
              style={{
                padding: 'var(--spacing-sm) var(--spacing-lg)',
                backgroundColor: '#007AFF',
                color: 'white',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-base)',
                cursor: 'pointer'
              }}
            >
              🎯 Focus Input
            </button>
            <button
              onClick={clearInput}
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
              🗑️ Clear & Focus
            </button>
          </div>
        </div>

        {/* Scroll Demo */}
        <div style={{
          padding: 'var(--spacing-lg)',
          backgroundColor: 'var(--apple-gray-1)',
          borderRadius: 'var(--radius-md)'
        }}>
          <h3 style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: '600',
            color: 'var(--apple-text-primary)',
            marginBottom: 'var(--spacing-md)'
          }}>
            📜 Scroll Control
          </h3>
          
          <div
            ref={scrollRef}
            style={{
              height: '150px',
              overflowY: 'scroll',
              border: '1px solid var(--apple-gray-3)',
              borderRadius: 'var(--radius-sm)',
              padding: 'var(--spacing-md)',
              backgroundColor: 'var(--apple-background)',
              marginBottom: 'var(--spacing-md)'
            }}
          >
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} style={{
                padding: 'var(--spacing-sm)',
                borderBottom: '1px solid var(--apple-gray-2)',
                fontSize: 'var(--font-size-base)'
              }}>
                📄 Scroll item {i + 1} - Lorem ipsum dolor sit amet
              </div>
            ))}
          </div>
          
          <button
            onClick={scrollToBottom}
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
            ⬇️ Scroll to Bottom
          </button>
        </div>
      </div>
    </div>
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

// Demo 3: Previous Value Tracking
const PreviousValueDemo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const prevCount = useRef(0);
  const prevName = useRef('');

  // Update previous values after render
  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  useEffect(() => {
    prevName.current = name;
  }, [name]);

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
        🕰️ Previous Value Tracking Demo
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--spacing-xl)',
        marginBottom: 'var(--spacing-xl)'
      }}>
        {/* Count Tracker */}
        <div style={{
          padding: 'var(--spacing-lg)',
          backgroundColor: 'var(--apple-gray-1)',
          borderRadius: 'var(--radius-md)'
        }}>
          <h3 style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: '600',
            color: 'var(--apple-text-primary)',
            marginBottom: 'var(--spacing-md)'
          }}>
            🔢 Count Tracker
          </h3>
          
          <div style={{
            marginBottom: 'var(--spacing-md)',
            fontFamily: 'var(--font-family-mono)'
          }}>
            <div style={{ marginBottom: 'var(--spacing-sm)' }}>
              <strong>Current:</strong> {count}
            </div>
            <div style={{ color: 'var(--apple-text-secondary)' }}>
              <strong>Previous:</strong> {prevCount.current}
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            gap: 'var(--spacing-sm)'
          }}>
            <button
              onClick={() => setCount(c => c + 1)}
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
              ➕
            </button>
            <button
              onClick={() => setCount(c => c - 1)}
              style={{
                padding: 'var(--spacing-sm) var(--spacing-md)',
                backgroundColor: '#FF6B6B',
                color: 'white',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-sm)',
                cursor: 'pointer'
              }}
            >
              ➖
            </button>
          </div>
        </div>

        {/* Name Tracker */}
        <div style={{
          padding: 'var(--spacing-lg)',
          backgroundColor: 'var(--apple-gray-1)',
          borderRadius: 'var(--radius-md)'
        }}>
          <h3 style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: '600',
            color: 'var(--apple-text-primary)',
            marginBottom: 'var(--spacing-md)'
          }}>
            📝 Name Tracker
          </h3>
          
          <div style={{
            marginBottom: 'var(--spacing-md)',
            fontFamily: 'var(--font-family-mono)'
          }}>
            <div style={{ marginBottom: 'var(--spacing-sm)' }}>
              <strong>Current:</strong> "{name || '(empty)'}"
            </div>
            <div style={{ color: 'var(--apple-text-secondary)' }}>
              <strong>Previous:</strong> "{prevName.current || '(empty)'}"
            </div>
          </div>
          
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type a name..."
            style={{
              width: '100%',
              padding: 'var(--spacing-sm)',
              border: '1px solid var(--apple-gray-3)',
              borderRadius: 'var(--radius-sm)',
              fontSize: 'var(--font-size-base)'
            }}
          />
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
          🔍 How Previous Value Tracking Works
        </h3>
        <ul style={{
          fontSize: 'var(--font-size-base)',
          color: '#BF360C',
          lineHeight: '1.6',
          paddingLeft: 'var(--spacing-lg)',
          margin: 0
        }}>
          <li style={{ marginBottom: 'var(--spacing-sm)' }}>
            <strong>useRef stores the previous value</strong> without causing re-renders
          </li>
          <li style={{ marginBottom: 'var(--spacing-sm)' }}>
            <strong>useEffect updates the ref</strong> after each render with the new value
          </li>
          <li>
            <strong>Common pattern:</strong> Compare current vs previous values for animations, logging, or conditional effects
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UseRefPage;