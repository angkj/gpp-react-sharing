import { useState } from 'react';
import { ComparisonCounter } from '../../../shared/components';

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
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--spacing-xl)',
      marginBottom: 'var(--spacing-xl)'
    }}>
      <ComparisonCounter
        variant="error"
        title="Direct Updates"
        codeExample="setCount(count + 1)"
        count={directCount}
        onIncrement={handleDirectRapidUpdate}
        buttonText="+5 (Might Only Add 1!)"
        description="Uses stale state - loses updates!"
      />
      <ComparisonCounter
        variant="success"
        title="Functional Updates"
        codeExample="setCount(prev => prev + 1)"
        count={functionalCount}
        onIncrement={handleFunctionalRapidUpdate}
        buttonText="+5 (Always Works!)"
        description="Uses latest state - never loses updates!"
      />
    </div>
  );
};