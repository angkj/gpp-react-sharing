import { useState } from 'react';

export const AsyncStateDemo = () => {
  const [count, setCount] = useState(0);
  const [logMessages, setLogMessages] = useState<string[]>([]);

  const handleAsyncDemo = () => {
    const startingCount = count;
    console.log('🔍 Before setState:', count);
    
    setCount(count + 1);
    
    // ❌ This will NOT show the updated value!
    console.log('🔍 Right after setState:', count);
    console.log('🔍 Expected:', count + 1, 'Actual:', count);
    
    // Update log messages for display
    setLogMessages([
      `Before setState: ${startingCount}`,
      `Right after setState: ${startingCount} (NOT ${startingCount + 1}!)`,
      `State updates are asynchronous!`
    ]);
  };

  return (
    <div>
      <h2>
        Asynchronous State Demo
      </h2>

      <p>
        State updates are asynchronous! The variable doesn't update immediately after setState.
      </p>

      <div>
        {/* Current State Display */}
        <div>
          <h3>
            Current State
          </h3>
          
          <div>
            setCount(count + 1)
          </div>
          
          <div>
            {count}
          </div>
          
          <button
            onClick={handleAsyncDemo}
          >
            Increment & Check Console
          </button>
        </div>

        {/* Log Messages Display */}
        <div>
          <h3>
            Console Log
          </h3>
          
          <div>
            console.log('After setState:', count)
          </div>
          
          <div>
            {logMessages.length === 0 ? (
              <div>Click the button to see the demo...</div>
            ) : (
              logMessages.map((message, index) => (
                <div key={index}>
                  {message}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div>
        <p>
          ⚠️ <strong>Important:</strong> Never rely on the state variable immediately after calling setState. If you need the new value, use useEffect or the functional update pattern.
        </p>
      </div>
    </div>
  );
};
