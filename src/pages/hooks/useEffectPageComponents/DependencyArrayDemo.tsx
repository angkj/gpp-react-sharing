import { useState, useEffect } from 'react';
import { UniversalDemo } from '../../../shared/components';

export const DependencyArrayDemo = () => {
  const [count, setCount] = useState(0);

  // No dependency array - runs on every render
  useEffect(() => {
    console.log('🔴 No deps: Runs on every render');
  });

  // Empty dependency array - runs only once on mount
  useEffect(() => {
    console.log('🟡 Empty deps: Runs only on mount');
  }, []);

  // With dependencies - runs when count changes
  useEffect(() => {
    console.log('🟢 With deps: Runs when count changes, count =', count);
  }, [count]);

  return (
    <UniversalDemo
      title="Dependency Array Patterns"
      description="Three different ways to control when useEffect runs. Open your console (F12) to see when each effect executes!"
      count={count}
      onIncrement={() => setCount(count + 1)}
      counterTitle="Interactive Controls"
      counterColor="var(--apple-blue)"
      buttonText="Increment"
      infoBoxes={[
        {
          variant: 'warning',
          content: <>🎯 <strong>Try This:</strong> Change the count (triggers count dependency), change the name (doesn't trigger count dependency), and watch the console to see how each useEffect behaves differently!</>
        }
      ]}
    />
  );
};
