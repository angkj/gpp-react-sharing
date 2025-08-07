import { useState } from 'react';
import { DemoContainer, InfoBox, Button, Badge } from '../../../shared/components';

// Wrong Way - Regular Variable Component
export const RegularVariableCounter = () => {
  let count = 0; // Regular variable

  const increment = () => {
    count++; // Updates variable
    console.log('Regular variable count:', count); // Shows new value in console
    // BUT: Component doesn't re-render!
  };

  return (
    <div>
      <Badge variant="error">❌ WRONG WAY</Badge>
      
      <h3>
        Regular Variable
      </h3>
      
      <div>
        {count}
      </div>
      
      <Button 
        variant="error" 
        onClick={increment}
      >
        Click Me! (Check Console)
      </Button>
      
      <p>
        UI never updates, but check the console!
      </p>
    </div>
  );
};

// Right Way - useState Component
export const UseStateCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1); // Updates state
    console.log('useState count:', count + 1); // Shows new value in console
    // React schedules a re-render!
  };

  return (
    <div>
      <Badge variant="success">✅ RIGHT WAY</Badge>
      
      <h3>
        useState Hook
      </h3>
      
      <div>
        {count}
      </div>
      
      <Button 
        variant="success" 
        onClick={increment}
      >
        Click Me! (UI Updates)
      </Button>
      
      <p>
        UI updates automatically on every click!
      </p>
    </div>
  );
};

export const WhyNotRegularVariablesDemo = () => {
  return (
    <DemoContainer title="Why Not Regular Variables?">
      <div>
        <RegularVariableCounter />
        <UseStateCounter />
      </div>

      <InfoBox 
        variant="info"
      >
        🎯 <strong>Try This:</strong> Click both buttons multiple times and notice the difference! Open your browser's developer console to see both components logging their values.
      </InfoBox>

      <InfoBox variant="warning">
        🔍 <strong>Key Insight:</strong> React only re-renders when state changes through setState functions. Regular variable mutations are "invisible" to React's rendering system, which is why useState is essential for dynamic UIs.
      </InfoBox>
    </DemoContainer>
  );
};
