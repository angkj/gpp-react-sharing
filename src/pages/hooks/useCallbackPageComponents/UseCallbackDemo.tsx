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
            <ul>
              <li>
                <strong>Every re-render</strong> creates a new function, even if the function logic hasn't changed
              </li>
              <li>
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
