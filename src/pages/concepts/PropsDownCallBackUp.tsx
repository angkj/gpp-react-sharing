import { useState } from 'react';

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
    <div>
      <h3>
        {label}
      </h3>
      
      <div>
        {count}
      </div>
      
      <div>
        <button
          onClick={onDecrement}
        >
          −
        </button>
        
        <button
          onClick={onIncrement}
        >
          +
        </button>
        
        <button
          onClick={onReset}
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
    <div>
      <div>
        <h1>
          Props Down, Callbacks Up ⬆️⬇️
        </h1>
        <p>
          How parent and child components communicate in React
        </p>
      </div>

      {/* Parent State Display */}
      <div>
        <div>
          PARENT COMPONENT
        </div>
        
        <h2>
          Parent's State Summary
        </h2>
        
        <div>
          <div>
            <div>
              Parent Counter
            </div>
            <div>
              {parentCount}
            </div>
          </div>
          
          <div>
            <div>
              Child A Counter
            </div>
            <div>
              {childACount}
            </div>
          </div>
          
          <div>
            <div>
              Child B Counter
            </div>
            <div>
              {childBCount}
            </div>
          </div>
        </div>
        
        <div>
          Total: {parentCount + childACount + childBCount}
        </div>
        
        <button
          onClick={() => {
            setParentCount(0);
            setChildACount(10);
            setChildBCount(20);
          }}
        >
          🔄 Reset All Counters
        </button>
      </div>

      {/* Child Components */}
      <div>
        <div>
          <div>
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
          <div>
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
          <div>
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

      {/* Explanation */}
      <div>
        <h2>
          How It Works
        </h2>

        <div>
          <div>
            <h3>
              ⬇️ Props Down
            </h3>
            <ul>
              <li>Parent passes <code>count</code> value to child</li>
              <li>Parent passes callback functions as props</li>
              <li>Child receives these as props</li>
              <li>Data flows from parent to child</li>
            </ul>
          </div>

          <div>
            <h3>
              ⬆️ Callbacks Up
            </h3>
            <ul>
              <li>Child calls the callback functions</li>
              <li>Callbacks execute in parent's context</li>
              <li>Parent's state gets updated</li>
              <li>Changes flow back down as new props</li>
            </ul>
          </div>
        </div>

        <div>
          <p>
            💡 <strong>Key Insight:</strong> This pattern maintains unidirectional data flow while allowing child components to communicate changes back to their parent. The parent remains the single source of truth!
          </p>
        </div>
      </div>

    </div>
  );
};

export default PropsDownCallBackUp;