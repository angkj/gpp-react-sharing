import { useState, useEffect } from 'react';

export const DOMRenderingDemo = () => {
  const [count, setCount] = useState(0);
  
  // This runs during render (before DOM update)
  console.log('🔵 Render phase - DOM not yet updated, count:', count);
  
  // This runs after DOM is updated
  useEffect(() => {
    console.log('🟢 useEffect - DOM updated, count:', count);
  });

  const handleIncrement = () => {
    console.log('🔴 Button clicked - about to update state');
    setCount(count + 1);
  };

  return (
    <div>
      <h2>
        useEffect Runs After DOM Rendering
      </h2>

      <p>
        Open your browser's console (F12) and watch the order: Render → DOM Update → useEffect
      </p>

      <div>
        {/* Counter Display */}
        <div>
          <h3>
            Current Count
          </h3>
          
          <div>
            {count}
          </div>
          
          <button
            onClick={handleIncrement}
          >
            Increment & Check Console
          </button>
        </div>
      </div>

      <div>
        <p>
          💡 <strong>Key Insight:</strong> useEffect runs after the component renders and the DOM is updated. This ensures you can safely access DOM elements and see the latest changes.
        </p>
      </div>
    </div>
  );
};
