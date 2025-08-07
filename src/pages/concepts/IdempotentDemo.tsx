import { useState } from 'react';

// Good Clock - Pure Component (always returns same output for same props)
const GoodClock = () => {
  const [time] = useState(() => new Date());
  return (
    <div>
      <div>
        ✅ GOOD
      </div>
      
      <h3>
        Good Clock 👮‍♀️
      </h3>
      
      <div>
        {time.toLocaleTimeString()}
      </div>
      
      <p>
        "I always return the same time for the same input!"
      </p>
    </div>
  );
};

// Bad Clock - Impure Component (calls Date.now() during render)
const BadClock = () => {
  // 🚨 This is impure! Creating new Date during render
  const currentTime = new Date();
  
  return (
    <div>
      <div>
        ❌ BAD
      </div>
      
      <h3>
        Bad Clock 👮‍♂️
      </h3>
      
      <div>
        {currentTime.toLocaleTimeString()}
      </div>
      
      <p>
        "I create different times on every render!"
      </p>
    </div>
  );
};

const IdempotentDemo = () => {
  const [, setCount] = useState(0);

  return (
    <div>
      <div>
        <h1>
          Good Clock, Bad Clock 🕐
        </h1>
        <p>
          A tale of two components: one pure, one impure
        </p>
      </div>

      {/* Control Panel */}
      <div>
        <button
          onClick={() => setCount(prevState => prevState + 1)}
        >
          Re-render components
        </button>
      </div>

      {/* Clock Comparison */}
      <div>
        <GoodClock />
        <BadClock />
      </div>

      {/* Explanation */}
      <div>
        <h2>
          Why This Matters
        </h2>

        <div>
          <div>
            <h3>
              ✅ Good Clock (Pure)
            </h3>
            <ul>
              <li>Receives time as a prop</li>
              <li>Same input = same output</li>
              <li>Predictable rendering</li>
              <li>React can optimize it</li>
              <li>Easy to test</li>
            </ul>
          </div>

          <div>
            <h3>
              ❌ Bad Clock (Impure)
            </h3>
            <ul>
              <li>Creates new Date() during render</li>
              <li>Different output every time</li>
              <li>Unpredictable behavior</li>
              <li>Breaks React optimizations</li>
              <li>Hard to test and debug</li>
            </ul>
          </div>
        </div>

        <div>
          <p>
            💡 <strong>Remember:</strong> Pure components are the "good cops" of React - they're predictable, reliable, and make your app perform better!
          </p>
        </div>
      </div>

    </div>
  );
};

export default IdempotentDemo;