import { useState } from 'react';
import { UniversalDemo } from '../../../shared/components';

export const UseCallbackDemo = () => {
  const [count, setCount] = useState(0);

  // WITHOUT useCallback - creates new function on every render
  const handleButtonClick = () => {
    console.log('🔄 New function created on render! Count:', count);
  };

  // Log when function is created (this happens on every render)
  console.log('🆕 Function recreated on render! Current count:', count);

  return (
    <UniversalDemo
      title="🧪 useCallback Demo - WITHOUT Memoization"
      count={count}
      onIncrement={() => {
        setCount(c => c + 1);
        handleButtonClick();
      }}
      counterTitle="Current Count"
      counterColor="#FF9800"
      buttonText="Increment & Check Console"
      infoBoxes={[
        {
          variant: 'info',
          content: <>📊 <strong>Open your browser console (F12)</strong> to see the function being recreated on every render!</>
        },
        {
          variant: 'error',
          title: '⚠️ Problem: Function Recreated on Every Render',
          content: (
            <ul style={{
              fontSize: 'var(--font-size-base)',
              lineHeight: '1.6',
              paddingLeft: 'var(--spacing-lg)',
              margin: 0
            }}>
              <li style={{ marginBottom: 'var(--spacing-sm)' }}>
                <strong>Every re-render</strong> creates a new function, even if the function logic hasn't changed
              </li>
              <li style={{ marginBottom: 'var(--spacing-sm)' }}>
                <strong>Performance waste:</strong> New function references cause unnecessary child component re-renders
              </li>
              <li>
                <strong>Solution:</strong> Wrap the function in <code>useCallback()</code> to maintain the same reference
              </li>
            </ul>
          )
        }
      ]}
    />
  );
};