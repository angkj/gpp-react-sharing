import { useState } from 'react';

// BAD: Direct updates - uses stale state
export const BadRapidUpdatesDemo = () => {
  const [count, setCount] = useState(0);

  const handleDirectRapidUpdate = () => {
    console.log('🔴 Direct updates - might lose some!');
    // ❌ BAD: These might not all execute correctly
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

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
          Direct Updates
        </h2>
        <p style={{
          fontSize: 'var(--font-size-sm)',
          color: 'var(--apple-text-secondary)',
          margin: '0 0 var(--spacing-md) 0',
          lineHeight: '1.5'
        }}>
          Uses stale state values, causing updates to be lost when multiple setState calls happen rapidly.
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
          setCount(count + 1)
        </div>
        
        <div style={{
          marginBottom: 'var(--spacing-lg)',
          width: '100%'
        }}>
          <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--apple-text-secondary)' }}>Current Count</div>
          <div style={{ fontSize: 'var(--font-size-3xl)', fontWeight: '700', color: '#FF3B30', fontFamily: 'var(--font-family-mono)' }}>
            {count}
          </div>
        </div>
        
        <button
          onClick={handleDirectRapidUpdate}
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
          +5 (Might Only Add 1!)
        </button>
      </div>

      <div style={{
        fontSize: 'var(--font-size-xs)',
        color: 'var(--apple-text-tertiary)',
        fontStyle: 'italic'
      }}>
        ❌ Uses stale state - loses updates!
      </div>
    </div>
  );
};

// GOOD: Functional updates - uses latest state
export const GoodRapidUpdatesDemo = () => {
  const [count, setCount] = useState(0);

  const handleFunctionalRapidUpdate = () => {
    console.log('🟢 Functional updates - all count!');
    // ✅ GOOD: These will all execute correctly
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  };

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
          Functional Updates
        </h2>
        <p style={{
          fontSize: 'var(--font-size-sm)',
          color: 'var(--apple-text-secondary)',
          margin: '0 0 var(--spacing-md) 0',
          lineHeight: '1.5'
        }}>
          Uses functional updates to access the latest state value, ensuring all updates are applied correctly.
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
          setCount(prev =&gt; prev + 1)
        </div>
        
        <div style={{
          marginBottom: 'var(--spacing-lg)',
          width: '100%'
        }}>
          <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--apple-text-secondary)' }}>Current Count</div>
          <div style={{ fontSize: 'var(--font-size-3xl)', fontWeight: '700', color: '#34C759', fontFamily: 'var(--font-family-mono)' }}>
            {count}
          </div>
        </div>
        
        <button
          onClick={handleFunctionalRapidUpdate}
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
          +5 (Always Works!)
        </button>
      </div>

      <div style={{
        fontSize: 'var(--font-size-xs)',
        color: 'var(--apple-text-tertiary)',
        fontStyle: 'italic'
      }}>
        ✅ Uses latest state - never loses updates!
      </div>
    </div>
  );
};

export const RapidUpdatesDemo = () => {
  return (
    <div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--spacing-xl)',
        marginBottom: 'var(--spacing-xl)'
      }}>
        <BadRapidUpdatesDemo />
        <GoodRapidUpdatesDemo />
      </div>
    </div>
  );
};
