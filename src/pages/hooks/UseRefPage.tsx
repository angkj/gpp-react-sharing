import { useRef, useState, useEffect } from 'react';
import HookPageLayout from '../../components/HookPageLayout';

const UseRefPage = () => {
  return (
    <HookPageLayout
      title="useRef Hook"
      description="Learn about the useRef hook for accessing DOM elements and storing mutable values."
      whatIs="The useRef hook returns a mutable ref object whose .current property is initialized to the passed argument. The returned object will persist for the full lifetime of the component and doesn't cause re-renders when mutated."
      codeExample={`const inputRef = useRef(null);
const countRef = useRef(0);

// Access DOM element
inputRef.current.focus();

// Store mutable value without triggering re-renders
countRef.current += 1;

// JSX usage
<input ref={inputRef} type="text" />`}
    >
      <DOMManipulationDemo />
      <MutableValueDemo />
      <PreviousValueDemo />
    </HookPageLayout>
  );
};

// Demo 1: DOM Manipulation with useRef
const DOMManipulationDemo = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  };

  const scrollToBottom = () => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <h2>
        🎯 DOM Manipulation Demo
      </h2>

      <div>
        {/* Input Focus Demo */}
        <div>
          <h3>
            📝 Input Focus Control
          </h3>
          
          <div>
            <input
              ref={inputRef}
              type="text"
              placeholder="Type something here..."
            />
          </div>
          
          <div>
            <button
              onClick={focusInput}
            >
              🎯 Focus Input
            </button>
            <button
              onClick={clearInput}
            >
              🗑️ Clear & Focus
            </button>
          </div>
        </div>

        {/* Scroll Demo */}
        <div>
          <h3>
            📜 Scroll Control
          </h3>
          
          <div
            ref={scrollRef}
          >
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i}>
                📄 Scroll item {i + 1} - Lorem ipsum dolor sit amet
              </div>
            ))}
          </div>
          
          <button
            onClick={scrollToBottom}
          >
            ⬇️ Scroll to Bottom
          </button>
        </div>
      </div>
    </div>
  );
};

// Demo 2: Mutable Values without Re-renders
const MutableValueDemo = () => {
  const [stateCount, setStateCount] = useState(0);
  const refCount = useRef(0);
  const renderCount = useRef(0);

  // Track renders
  renderCount.current += 1;

  const incrementState = () => {
    setStateCount(prev => prev + 1);
  };

  const incrementRef = () => {
    refCount.current += 1;
    console.log('🔄 Ref count is now:', refCount.current);
  };

  const showRefValue = () => {
    alert(`Current ref value: ${refCount.current}`);
  };

  return (
    <div>
      <h2>
        💾 Mutable Values Demo
      </h2>

      <div>
        <p>
          📊 <strong>Open your console (F12)</strong> to see ref value changes without re-renders!
        </p>
      </div>

      <div>
        {/* State Counter */}
        <div>
          <h3>
            🔄 State Counter (Causes Re-render)
          </h3>
          
          <div>
            {stateCount}
          </div>
          
          <button
            onClick={incrementState}
          >
            ➕ Increment State
          </button>
        </div>

        {/* Ref Counter */}
        <div>
          <h3>
            📌 Ref Counter (No Re-render)
          </h3>
          
          <div>
            Value stored in ref (check console)
          </div>
          
          <div>
            <button
              onClick={incrementRef}
            >
              ➕ Increment Ref
            </button>
            <button
              onClick={showRefValue}
            >
              👁️ Show Value
            </button>
          </div>
        </div>
      </div>

      {/* Render Counter */}
      <div>
        <div>
          🔄 Component Render Count: {renderCount.current}
        </div>
        <div>
          Notice: Only state changes cause re-renders!
        </div>
      </div>
    </div>
  );
};

// Demo 3: Previous Value Tracking
const PreviousValueDemo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const prevCount = useRef(0);
  const prevName = useRef('');

  // Update previous values after render
  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <h2>
        🕰️ Previous Value Tracking Demo
      </h2>

      <div>
        {/* Count Tracker */}
        <div>
          <h3>
            🔢 Count Tracker
          </h3>
          
          <div>
            <div>
              <strong>Current:</strong> {count}
            </div>
            <div>
              <strong>Previous:</strong> {prevCount.current}
            </div>
          </div>
          
          <div>
            <button
              onClick={() => setCount(c => c + 1)}
            >
              ➕
            </button>
            <button
              onClick={() => setCount(c => c - 1)}
            >
              ➖
            </button>
          </div>
        </div>

        {/* Name Tracker */}
        <div>
          <h3>
            📝 Name Tracker
          </h3>
          
          <div>
            <div>
              <strong>Current:</strong> "{name || '(empty)'}"
            </div>
            <div>
              <strong>Previous:</strong> "{prevName.current || '(empty)'}"
            </div>
          </div>
          
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type a name..."
          />
        </div>
      </div>

      {/* Explanation */}
      <div>
        <h3>
          🔍 How Previous Value Tracking Works
        </h3>
        <ul>
          <li>
            <strong>useRef stores the previous value</strong> without causing re-renders
          </li>
          <li>
            <strong>useEffect updates the ref</strong> after each render with the new value
          </li>
          <li>
            <strong>Common pattern:</strong> Compare current vs previous values for animations, logging, or conditional effects
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UseRefPage;
