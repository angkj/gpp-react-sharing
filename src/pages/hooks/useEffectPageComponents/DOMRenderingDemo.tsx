import { useState, useEffect } from 'react';

export const DOMRenderingDemo = () => {
  const [count, setCount] = useState(0);
  
  // This runs during render (before DOM update)
  console.log('🔵 Render phase - DOM not yet updated, count:', count);
  
  // This runs after DOM is updated
  useEffect(() => {
    console.log('🟢 useEffect - DOM updated, count:', count);
  });

  const handleIncrement = () => {
    console.log('🔴 Button clicked - about to update state');
    setCount(count + 1);
  };

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
        useEffect Runs After DOM Rendering
      </h2>

      <p style={{
        fontSize: 'var(--font-size-base)',
        color: 'var(--apple-text-secondary)',
        lineHeight: '1.6',
        marginBottom: 'var(--spacing-xl)'
      }}>
        Open your browser's console (F12) and watch the order: Render → DOM Update → useEffect
      </p>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 'var(--spacing-xl)'
      }}>
        {/* Counter Display */}
        <div style={{
          padding: 'var(--spacing-xl)',
          backgroundColor: 'var(--apple-gray-1)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--apple-separator)',
          textAlign: 'center',
          minWidth: '300px'
        }}>
          <h3 style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: '600',
            color: 'var(--apple-text-primary)',
            marginBottom: 'var(--spacing-md)'
          }}>
            Current Count
          </h3>
          
          <div style={{
            fontSize: 'var(--font-size-4xl)',
            fontWeight: '700',
            color: 'var(--apple-blue)',
            marginBottom: 'var(--spacing-lg)',
            fontFamily: 'var(--font-family-mono)'
          }}>
            {count}
          </div>
          
          <button
            onClick={handleIncrement}
            style={{
              padding: 'var(--spacing-md) var(--spacing-xl)',
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
      </div>

      <div style={{
        padding: 'var(--spacing-lg)',
        backgroundColor: '#E3F2FD',
        borderRadius: 'var(--radius-md)',
        borderLeft: '4px solid var(--apple-blue)'
      }}>
        <p style={{
          fontSize: 'var(--font-size-base)',
          fontWeight: '500',
          margin: 0,
          color: '#1565C0'
        }}>
          💡 <strong>Key Insight:</strong> useEffect runs after the component renders and the DOM is updated. This ensures you can safely access DOM elements and see the latest changes.
        </p>
      </div>
    </div>
  );
};