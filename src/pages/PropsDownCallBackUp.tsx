import { useState } from 'react';
import Container from '../shared/components/Container';
import { MainTitle } from '../shared/components/MainTitle';

// Child Component that receives props and callback
const Counter = ({ 
  count, 
  onIncrement, 
  onDecrement, 
  onReset,
  label 
}: {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
  label: string;
}) => {
  return (
    <div style={{
      padding: 'var(--spacing-xl)',
      backgroundColor: 'var(--apple-gray-1)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--apple-separator)',
      textAlign: 'center'
    }}>
      <h3 style={{
        fontSize: 'var(--font-size-lg)',
        fontWeight: '600',
        color: 'var(--apple-text-primary)',
        marginBottom: 'var(--spacing-md)'
      }}>
        {label}
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
      
      <div style={{
        display: 'flex',
        gap: 'var(--spacing-sm)',
        justifyContent: 'center'
      }}>
        <button
          onClick={onDecrement}
          style={{
            padding: 'var(--spacing-sm) var(--spacing-md)',
            backgroundColor: '#F44336',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--radius-sm)',
            fontSize: 'var(--font-size-lg)',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'var(--transition-fast)',
            minWidth: '40px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#D32F2F';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#F44336';
          }}
        >
          −
        </button>
        
        <button
          onClick={onIncrement}
          style={{
            padding: 'var(--spacing-sm) var(--spacing-md)',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--radius-sm)',
            fontSize: 'var(--font-size-lg)',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'var(--transition-fast)',
            minWidth: '40px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#388E3C';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#4CAF50';
          }}
        >
          +
        </button>
        
        <button
          onClick={onReset}
          style={{
            padding: 'var(--spacing-sm) var(--spacing-md)',
            backgroundColor: 'var(--apple-gray-6)',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--radius-sm)',
            fontSize: 'var(--font-size-sm)',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'var(--transition-fast)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--apple-gray-5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--apple-gray-6)';
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

const PropsDownCallBackUp = () => {
  // Parent state - this will be shared with children
  const [parentCount, setParentCount] = useState(0);
  const [childACount, setChildACount] = useState(10);
  const [childBCount, setChildBCount] = useState(20);

  // Callback functions that children will use to update parent state
  const incrementParent = () => setParentCount(prev => prev + 1);
  const decrementParent = () => setParentCount(prev => prev - 1);
  const resetParent = () => setParentCount(0);

  // Callback functions for child A
  const incrementChildA = () => setChildACount(prev => prev + 1);
  const decrementChildA = () => setChildACount(prev => prev - 1);
  const resetChildA = () => setChildACount(10);

  // Callback functions for child B
  const incrementChildB = () => setChildBCount(prev => prev + 1);
  const decrementChildB = () => setChildBCount(prev => prev - 1);
  const resetChildB = () => setChildBCount(20);

  return (
    <Container>
      <MainTitle title='Props Down, Callbacks Up' />

      {/* Parent State Display */}
      <div style={{
        padding: 'var(--spacing-md)',
        backgroundColor: 'var(--apple-background)',
        borderRadius: 'var(--radius-lg)',
        border: '2px solid var(--apple-blue)',
        boxShadow: '0 4px 16px var(--apple-shadow)',
        marginBottom: 'var(--spacing-md)',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'inline-block',
          backgroundColor: 'var(--apple-blue)',
          color: 'white',
          padding: '4px 12px',
          borderRadius: 'var(--radius-sm)',
          fontSize: 'var(--font-size-xs)',
          fontWeight: '600',
          marginBottom: 'var(--spacing-md)'
        }}>
          PARENT COMPONENT
        </div>
        
        <h2 style={{
          fontSize: 'var(--font-size-2xl)',
          fontWeight: '600',
          color: 'var(--apple-text-primary)',
          marginBottom: 'var(--spacing-md)'
        }}>
          Parent's State Summary
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'var(--spacing-lg)',
          marginBottom: 'var(--spacing-lg)'
        }}>
          <div style={{
            padding: 'var(--spacing-md)',
            backgroundColor: 'var(--apple-gray-1)',
            borderRadius: 'var(--radius-md)'
          }}>
            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--apple-text-secondary)' }}>
              Parent Counter
            </div>
            <div style={{ fontSize: 'var(--font-size-xl)', fontWeight: '700', color: 'var(--apple-blue)' }}>
              {parentCount}
            </div>
          </div>
          
          <div style={{
            padding: 'var(--spacing-md)',
            backgroundColor: 'var(--apple-gray-1)',
            borderRadius: 'var(--radius-md)'
          }}>
            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--apple-text-secondary)' }}>
              Child A Counter
            </div>
            <div style={{ fontSize: 'var(--font-size-xl)', fontWeight: '700', color: '#4CAF50' }}>
              {childACount}
            </div>
          </div>
          
          <div style={{
            padding: 'var(--spacing-md)',
            backgroundColor: 'var(--apple-gray-1)',
            borderRadius: 'var(--radius-md)'
          }}>
            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--apple-text-secondary)' }}>
              Child B Counter
            </div>
            <div style={{ fontSize: 'var(--font-size-xl)', fontWeight: '700', color: '#FF9800' }}>
              {childBCount}
            </div>
          </div>
        </div>
        
        <div style={{
          fontSize: 'var(--font-size-base)',
          color: 'var(--apple-text-secondary)',
          fontStyle: 'italic',
          marginBottom: 'var(--spacing-md)'
        }}>
          Total: {parentCount + childACount + childBCount}
        </div>
        
        <button
          onClick={() => {
            setParentCount(0);
            setChildACount(10);
            setChildBCount(20);
          }}
          style={{
            padding: 'var(--spacing-md) var(--spacing-xl)',
            backgroundColor: '#FF9800',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--radius-md)',
            fontSize: 'var(--font-size-base)',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'var(--transition-fast)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#F57C00';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#FF9800';
          }}
        >
          🔄 Reset All Counters
        </button>
      </div>

      {/* Child Components */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 'var(--spacing-xl)',
        marginBottom: 'var(--spacing-2xl)'
      }}>
        <div>
          <div style={{
            textAlign: 'center',
            marginBottom: 'var(--spacing-md)',
            fontSize: 'var(--font-size-xs)',
            fontWeight: '600',
            color: 'var(--apple-blue)',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Child Component
          </div>
          <Counter
            count={parentCount}
            onIncrement={incrementParent}
            onDecrement={decrementParent}
            onReset={resetParent}
            label="Parent Counter"
          />
        </div>

        <div>
          <div style={{
            textAlign: 'center',
            marginBottom: 'var(--spacing-md)',
            fontSize: 'var(--font-size-xs)',
            fontWeight: '600',
            color: '#4CAF50',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Child Component A
          </div>
          <Counter
            count={childACount}
            onIncrement={incrementChildA}
            onDecrement={decrementChildA}
            onReset={resetChildA}
            label="Child A Counter"
          />
        </div>

        <div>
          <div style={{
            textAlign: 'center',
            marginBottom: 'var(--spacing-md)',
            fontSize: 'var(--font-size-xs)',
            fontWeight: '600',
            color: '#FF9800',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Child Component B
          </div>
          <Counter
            count={childBCount}
            onIncrement={incrementChildB}
            onDecrement={decrementChildB}
            onReset={resetChildB}
            label="Child B Counter"
          />
        </div>
      </div>
    </Container>
  );
};

export default PropsDownCallBackUp;