import { useState } from 'react';
import { UniversalDemo } from '../../../shared/components';

// Simulate expensive calculation
const expensiveCalculation = () => {
  console.log('💸 Expensive calculation running on every render!');
  let result = 0;
  for (let i = 0; i < 50000000; i++) {
    result += Math.random();
  }
  return result;
};

export const UseMemoDemo = () => {
  const [count, setCount] = useState(0);
  // WITHOUT useMemo - runs on EVERY render (even when the result doesn't depend on count)
  expensiveCalculation();

  return (
    <UniversalDemo
      title="🧪 useMemo Demo - WITHOUT Memoization"
      count={count}
      onIncrement={() => setCount(c => c + 1)}
      counterTitle="Current Count"
      counterColor="#4CAF50"
      buttonText="Increment & Check Console"
      infoBoxes={[
        {
          variant: 'info',
          content: <>📊 <strong>Open your browser console (F12)</strong> to see the expensive calculation running on every render!</>
        },
        {
          variant: 'error',
          title: '⚠️ Problem: Expensive Function Runs on Every Render',
          content: (
            <ul>
              <li>
                <strong>Every click</strong> triggers a re-render and runs the expensive calculation
              </li>
              <li>
                <strong>Performance waste:</strong> The calculation result doesn't even depend on the count!
              </li>
              <li>
                <strong>Solution:</strong> Wrap the expensive calculation in <code>useMemo()</code> to prevent unnecessary re-execution
              </li>
            </ul>
          )
        }
      ]}
    />
  );
};
