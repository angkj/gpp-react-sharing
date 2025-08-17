import { useState } from 'react';
import Container from '../shared/components/Container';
import { MainTitle } from '../shared/components/MainTitle';

// Good Clock - Pure Component (always returns same output for same props)
const GoodClock = () => {
  const [time] = useState(() => new Date());
  return (
    <div style={{
      backgroundColor: 'var(--apple-background-secondary)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--spacing-xl)',
      border: '2px solid var(--apple-separator)',
      borderLeft: '4px solid #34C759', // Green for "correct" approach
      boxShadow: '0 4px 16px var(--apple-shadow)',
      textAlign: 'center',
      position: 'relative'
    }}>
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
        fontFamily: 'var(--font-family-mono)',
        marginBottom: 'var(--spacing-md)'
      }}>
        {time.toLocaleTimeString()}
      </div>
    </div>
  );
};

// Bad Clock - Impure Component (calls Date.now() during render)
const BadClock = () => {
  // 🚨 This is impure! Creating new Date during render
  const currentTime = new Date();
  
  return (
    <div style={{
      backgroundColor: 'var(--apple-background-secondary)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--spacing-xl)',
      border: '2px solid var(--apple-separator)',
      borderLeft: '4px solid #FF3B30', // Red for "wrong" approach
      boxShadow: '0 4px 16px var(--apple-shadow)',
      textAlign: 'center',
      position: 'relative'
    }}>
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
        fontFamily: 'var(--font-family-mono)',
        marginBottom: 'var(--spacing-md)'
      }}>
        {currentTime.toLocaleTimeString()}
      </div>
    </div>
  );
};

const IdempotentDemo = () => {
  const [, setCount] = useState(0);

  return (
    <Container>
      <div>
        <MainTitle title="Good Clock, Bad Clock" />
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
        backgroundColor: 'var(--apple-background)',
        marginBottom: 'var(--spacing-md)',
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
        marginBottom: 'var(--spacing-xl)'
      }}>
        <GoodClock />
        <BadClock />
      </div>

      {/* Explanation */}
      <div style={{
        padding: 'var(--spacing-xl)',
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
      </div>
    </Container>
  );
};

export default IdempotentDemo;
