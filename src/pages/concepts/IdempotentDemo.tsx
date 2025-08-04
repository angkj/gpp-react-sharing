import { useState } from 'react';

// Good Clock - Pure Component (always returns same output for same props)
const GoodClock = () => {
  const [time, _] = useState(() => new Date());
  return (
    <div style={{
      padding: 'var(--spacing-xl)',
      backgroundColor: '#E8F5E8',
      borderRadius: 'var(--radius-lg)',
      border: '2px solid #4CAF50',
      textAlign: 'center',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        top: 'var(--spacing-sm)',
        left: 'var(--spacing-sm)',
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '4px 8px',
        borderRadius: 'var(--radius-sm)',
        fontSize: 'var(--font-size-xs)',
        fontWeight: '600'
      }}>
        ✅ GOOD
      </div>
      
      <h3 style={{
        fontSize: 'var(--font-size-xl)',
        fontWeight: '600',
        color: '#2E7D32',
        marginBottom: 'var(--spacing-md)'
      }}>
        Good Clock 👮‍♀️
      </h3>
      
      <div style={{
        fontSize: 'var(--font-size-3xl)',
        fontWeight: '700',
        color: '#1B5E20',
        fontFamily: 'SF Mono, Monaco, monospace',
        marginBottom: 'var(--spacing-md)'
      }}>
        {time.toLocaleTimeString()}
      </div>
      
      <p style={{
        fontSize: 'var(--font-size-sm)',
        color: '#388E3C',
        margin: 0,
        fontStyle: 'italic'
      }}>
        "I always return the same time for the same input!"
      </p>
    </div>
  );
};

// Bad Clock - Impure Component (calls Date.now() during render)
const BadClock = () => {
  // 🚨 This is impure! Creating new Date during render
  const currentTime = new Date();
  
  return (
    <div style={{
      padding: 'var(--spacing-xl)',
      backgroundColor: '#FFEBEE',
      borderRadius: 'var(--radius-lg)',
      border: '2px solid #F44336',
      textAlign: 'center',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        top: 'var(--spacing-sm)',
        left: 'var(--spacing-sm)',
        backgroundColor: '#F44336',
        color: 'white',
        padding: '4px 8px',
        borderRadius: 'var(--radius-sm)',
        fontSize: 'var(--font-size-xs)',
        fontWeight: '600'
      }}>
        ❌ BAD
      </div>
      
      <h3 style={{
        fontSize: 'var(--font-size-xl)',
        fontWeight: '600',
        color: '#C62828',
        marginBottom: 'var(--spacing-md)'
      }}>
        Bad Clock 👮‍♂️
      </h3>
      
      <div style={{
        fontSize: 'var(--font-size-3xl)',
        fontWeight: '700',
        color: '#B71C1C',
        fontFamily: 'SF Mono, Monaco, monospace',
        marginBottom: 'var(--spacing-md)'
      }}>
        {currentTime.toLocaleTimeString()}
      </div>
      
      <p style={{
        fontSize: 'var(--font-size-sm)',
        color: '#D32F2F',
        margin: 0,
        fontStyle: 'italic'
      }}>
        "I create different times on every render!"
      </p>
    </div>
  );
};

const IdempotentDemo = () => {
  const [_, setCount] = useState(0);

  return (
    <div style={{ 
      maxWidth: '1000px',
      animation: 'fadeInUp 0.6s ease-out'
    }}>
      <div style={{ marginBottom: 'var(--spacing-3xl)' }}>
        <h1 style={{
          fontSize: 'var(--font-size-4xl)',
          fontWeight: '700',
          color: 'var(--apple-text-primary)',
          marginBottom: 'var(--spacing-lg)',
          letterSpacing: '-0.5px',
          textAlign: 'center'
        }}>
          Good Clock, Bad Clock 🕐
        </h1>
        <p style={{
          fontSize: 'var(--font-size-lg)',
          color: 'var(--apple-text-secondary)',
          lineHeight: '1.6',
          fontWeight: '400',
          textAlign: 'center'
        }}>
          A tale of two components: one pure, one impure
        </p>
      </div>

      {/* Control Panel */}
      <div style={{
        padding: 'var(--spacing-xl)',
        backgroundColor: 'var(--apple-background)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--apple-separator)',
        boxShadow: '0 4px 16px var(--apple-shadow)',
        marginBottom: 'var(--spacing-2xl)',
        textAlign: 'center'
      }}>
        <button
          onClick={() => setCount(prevState => prevState + 1)}
          style={{
            padding: 'var(--spacing-md) var(--spacing-xl)',
            backgroundColor: 'var(--apple-blue)',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--radius-md)',
            fontSize: 'var(--font-size-base)',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'var(--transition-fast)',
            marginRight: 'var(--spacing-md)'
          }}
        >
          Re-render components
        </button>
      </div>

      {/* Clock Comparison */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--spacing-xl)',
        marginBottom: 'var(--spacing-2xl)'
      }}>
        <GoodClock />
        <BadClock />
      </div>

      {/* Explanation */}
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
          Why This Matters
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--spacing-xl)'
        }}>
          <div>
            <h3 style={{
              color: '#4CAF50',
              fontSize: 'var(--font-size-lg)',
              marginBottom: 'var(--spacing-md)'
            }}>
              ✅ Good Clock (Pure)
            </h3>
            <ul style={{
              color: 'var(--apple-text-secondary)',
              lineHeight: '1.6',
              paddingLeft: 'var(--spacing-lg)'
            }}>
              <li>Receives time as a prop</li>
              <li>Same input = same output</li>
              <li>Predictable rendering</li>
              <li>React can optimize it</li>
              <li>Easy to test</li>
            </ul>
          </div>

          <div>
            <h3 style={{
              color: '#F44336',
              fontSize: 'var(--font-size-lg)',
              marginBottom: 'var(--spacing-md)'
            }}>
              ❌ Bad Clock (Impure)
            </h3>
            <ul style={{
              color: 'var(--apple-text-secondary)',
              lineHeight: '1.6',
              paddingLeft: 'var(--spacing-lg)'
            }}>
              <li>Creates new Date() during render</li>
              <li>Different output every time</li>
              <li>Unpredictable behavior</li>
              <li>Breaks React optimizations</li>
              <li>Hard to test and debug</li>
            </ul>
          </div>
        </div>

        <div style={{
          marginTop: 'var(--spacing-xl)',
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
            💡 <strong>Remember:</strong> Pure components are the "good cops" of React - they're predictable, reliable, and make your app perform better!
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default IdempotentDemo;