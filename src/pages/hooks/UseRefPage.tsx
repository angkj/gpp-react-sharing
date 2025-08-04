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
    />
  );
};

export default UseRefPage;