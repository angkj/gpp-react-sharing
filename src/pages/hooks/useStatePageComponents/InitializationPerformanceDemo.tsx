import { useState } from 'react';

// Expensive operation simulation
const expensiveCalculation = () => {
  console.log('🔥 EXPENSIVE CALCULATION RUNNING...');
  // Simulate expensive computation
  let result = 0;
  for (let i = 0; i < 1000000; i++) {
    result += Math.random();
  }
  return Math.floor(result);
};

// BAD: Direct initialization - runs on every render
export const BadInitializationDemo = () => {
  const [count, setCount] = useState(0);
  
  // ❌ BAD: This runs on every render!
  const [expensiveValue] = useState(expensiveCalculation());

  return (
    <div>
      <div>
        ❌ BAD PERFORMANCE
      </div>
      
      <h3>
        Direct Initialization
      </h3>
      
      <div>
        useState(expensiveCalculation())
      </div>
      
      <div>
        <div>
          <div>Re-render Count</div>
          <div>
            {count}
          </div>
        </div>
        <div>
          <div>Expensive Value</div>
          <div>
            {expensiveValue}
          </div>
        </div>
      </div>
      
      <button
        onClick={() => setCount(count + 1)}
      >
        Re-render (Check Console!) 🐌
      </button>
      
      <p>
        Expensive calculation runs on EVERY render!
      </p>
    </div>
  );
};

// GOOD: Functional initialization - runs only once
export const GoodInitializationDemo = () => {
  const [count, setCount] = useState(0);
  
  // ✅ GOOD: This only runs once!
  const [expensiveValue] = useState(() => expensiveCalculation());

  return (
    <div>
      <div>
        ✅ GOOD PERFORMANCE
      </div>
      
      <h3>
        Functional Initialization
      </h3>
      
      <div>
        useState(() =&gt; expensiveCalculation())
      </div>
      
      <div>
        <div>
          <div>Re-render Count</div>
          <div>
            {count}
          </div>
        </div>
        <div>
          <div>Expensive Value</div>
          <div>
            {expensiveValue}
          </div>
        </div>
      </div>
      
      <button
        onClick={() => setCount(count + 1)}
      >
        Re-render (Check Console!) ⚡
      </button>
      
      <p>
        Expensive calculation runs ONLY ONCE!
      </p>
    </div>
  );
};

export const InitializationPerformanceDemo = () => {
  return (
    <div>
      <h2>
        Initialization Performance Demo
      </h2>

      <p>
        Watch the console to see the difference between direct vs functional initialization!
      </p>

      <div>
        <BadInitializationDemo />
        <GoodInitializationDemo />
      </div>

      <div>
        <p>
          🎯 <strong>Try This:</strong> Open your browser's console, then click both "Re-render" buttons multiple times. Notice how the left component logs on every click, while the right component only logged once during initial mount!
        </p>
      </div>
    </div>
  );
};
