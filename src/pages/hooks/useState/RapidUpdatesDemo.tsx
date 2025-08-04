import { useState } from 'react';

export const RapidUpdatesDemo = () => {
  const [directCount, setDirectCount] = useState(0);
  const [functionalCount, setFunctionalCount] = useState(0);

  const handleDirectRapidUpdate = () => {
    console.log('🔴 Direct updates - might lose some!');
    // ❌ BAD: These might not all execute correctly
    setDirectCount(directCount + 1);
    setDirectCount(directCount + 1);
    setDirectCount(directCount + 1);
    setDirectCount(directCount + 1);
    setDirectCount(directCount + 1);
  };

  const handleFunctionalRapidUpdate = () => {
    console.log('🟢 Functional updates - all count!');
    // ✅ GOOD: These will all execute correctly
    setFunctionalCount(prev => prev + 1);
    setFunctionalCount(prev => prev + 1);
    setFunctionalCount(prev => prev + 1);
    setFunctionalCount(prev => prev + 1);
    setFunctionalCount(prev => prev + 1);
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
        Rapid Updates Demo: Direct vs Functional
      </h2>

      <p style={{
        fontSize: 'var(--font-size-base)',
        color: 'var(--apple-text-secondary)',
        lineHeight: '1.6',
        marginBottom: 'var(--spacing-xl)'
      }}>
        Both buttons call setState 5 times rapidly. See which approach works correctly!
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--spacing-xl)',
        marginBottom: 'var(--spacing-xl)'
      }}>
        {/* Direct Updates */}
        <div style={{
          padding: 'var(--spacing-lg)',
          backgroundColor: '#FFEBEE',
          borderRadius: 'var(--radius-md)',
          border: '2px solid #F44336',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'inline-block',
            backgroundColor: '#F44336',
            color: 'white',
            padding: '4px 8px',
            borderRadius: 'var(--radius-sm)',
            fontSize: 'var(--font-size-xs)',
            fontWeight: '600',
            marginBottom: 'var(--spacing-md)'
          }}>
            ❌ UNRELIABLE
          </div>
          
          <h3 style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: '600',
            color: '#C62828',
            marginBottom: 'var(--spacing-md)'
          }}>
            Direct Updates
          </h3>
          
          <div style={{
            fontSize: 'var(--font-size-sm)',
            color: '#D32F2F',
            marginBottom: 'var(--spacing-md)',
            fontFamily: 'SF Mono, Monaco, monospace'
          }}>
            setCount(count + 1)
          </div>
          
          <div style={{
            fontSize: 'var(--font-size-4xl)',
            fontWeight: '700',
            color: '#B71C1C',
            marginBottom: 'var(--spacing-lg)'
          }}>
            {directCount}
          </div>
          
          <button
            onClick={handleDirectRapidUpdate}
            style={{
              padding: 'var(--spacing-md) var(--spacing-lg)',
              backgroundColor: '#F44336',
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
          
          <p style={{
            fontSize: 'var(--font-size-sm)',
            color: '#D32F2F',
            margin: 0,
            fontStyle: 'italic'
          }}>
            Uses stale state - loses updates!
          </p>
        </div>

        {/* Functional Updates */}
        <div style={{
          padding: 'var(--spacing-lg)',
          backgroundColor: '#E8F5E8',
          borderRadius: 'var(--radius-md)',
          border: '2px solid #4CAF50',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'inline-block',
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '4px 8px',
            borderRadius: 'var(--radius-sm)',
            fontSize: 'var(--font-size-xs)',
            fontWeight: '600',
            marginBottom: 'var(--spacing-md)'
          }}>
            ✅ RELIABLE
          </div>
          
          <h3 style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: '600',
            color: '#2E7D32',
            marginBottom: 'var(--spacing-md)'
          }}>
            Functional Updates
          </h3>
          
          <div style={{
            fontSize: 'var(--font-size-sm)',
            color: '#388E3C',
            marginBottom: 'var(--spacing-md)',
            fontFamily: 'SF Mono, Monaco, monospace'
          }}>
            setCount(prev =&gt; prev + 1)
          </div>
          
          <div style={{
            fontSize: 'var(--font-size-4xl)',
            fontWeight: '700',
            color: '#1B5E20',
            marginBottom: 'var(--spacing-lg)'
          }}>
            {functionalCount}
          </div>
          
          <button
            onClick={handleFunctionalRapidUpdate}
            style={{
              padding: 'var(--spacing-md) var(--spacing-lg)',
              backgroundColor: '#4CAF50',
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
          
          <p style={{
            fontSize: 'var(--font-size-sm)',
            color: '#388E3C',
            margin: 0,
            fontStyle: 'italic'
          }}>
            Uses latest state - never loses updates!
          </p>
        </div>
      </div>

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
          💡 <strong>Why This Happens:</strong> setState is asynchronous and batches updates. Direct updates use stale state values, while functional updates always get the latest state from React.
        </p>
      </div>
    </div>
  );
};