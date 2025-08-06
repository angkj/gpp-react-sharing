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
    <div style={{
      padding: 'var(--spacing-lg)',
      backgroundColor: '#FFEBEE',
      borderRadius: 'var(--radius-md)',
      border: '2px solid #F44336',
      textAlign: 'center'
    }}>
      <Badge variant="error">❌ WRONG WAY</Badge>
      
      <h3 style={{
        fontSize: 'var(--font-size-lg)',
        fontWeight: '600',
        color: '#C62828',
        marginBottom: 'var(--spacing-md)'
      }}>
        Regular Variable
      </h3>
      
      <div style={{
        fontSize: 'var(--font-size-3xl)',
        fontWeight: '700',
        color: '#B71C1C',
        marginBottom: 'var(--spacing-lg)',
        fontFamily: 'var(--font-family-mono)'
      }}>
        {count}
      </div>
      
      <Button 
        variant="error" 
        onClick={increment}
        style={{ marginBottom: 'var(--spacing-md)' }}
      >
        Click Me! (Check Console)
      </Button>
      
      <p style={{
        fontSize: 'var(--font-size-sm)',
        color: '#D32F2F',
        margin: 0,
        fontStyle: 'italic'
      }}>
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
    <div style={{
      padding: 'var(--spacing-lg)',
      backgroundColor: '#E8F5E8',
      borderRadius: 'var(--radius-md)',
      border: '2px solid #4CAF50',
      textAlign: 'center'
    }}>
      <Badge variant="success">✅ RIGHT WAY</Badge>
      
      <h3 style={{
        fontSize: 'var(--font-size-lg)',
        fontWeight: '600',
        color: '#2E7D32',
        marginBottom: 'var(--spacing-md)'
      }}>
        useState Hook
      </h3>
      
      <div style={{
        fontSize: 'var(--font-size-3xl)',
        fontWeight: '700',
        color: '#1B5E20',
        marginBottom: 'var(--spacing-lg)',
        fontFamily: 'var(--font-family-mono)'
      }}>
        {count}
      </div>
      
      <Button 
        variant="success" 
        onClick={increment}
        style={{ marginBottom: 'var(--spacing-md)' }}
      >
        Click Me! (UI Updates)
      </Button>
      
      <p style={{
        fontSize: 'var(--font-size-sm)',
        color: '#388E3C',
        margin: 0,
        fontStyle: 'italic'
      }}>
        UI updates automatically on every click!
      </p>
    </div>
  );
};

export const WhyNotRegularVariablesDemo = () => {
  return (
    <DemoContainer title="Why Not Regular Variables?">
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--spacing-xl)',
        marginBottom: 'var(--spacing-xl)'
      }}>
        <RegularVariableCounter />
        <UseStateCounter />
      </div>

      <InfoBox 
        variant="info" 
        style={{ marginBottom: 'var(--spacing-lg)' }}
      >
        🎯 <strong>Try This:</strong> Click both buttons multiple times and notice the difference! Open your browser's developer console to see both components logging their values.
      </InfoBox>

      <InfoBox variant="warning">
        🔍 <strong>Key Insight:</strong> React only re-renders when state changes through setState functions. Regular variable mutations are "invisible" to React's rendering system, which is why useState is essential for dynamic UIs.
      </InfoBox>
    </DemoContainer>
  );
};