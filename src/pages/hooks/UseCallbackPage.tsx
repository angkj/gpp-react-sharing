import HookPageLayout from '../../components/HookPageLayout';

const UseCallbackPage = () => {
  return (
    <HookPageLayout
      title="useCallback Hook"
      description="Learn about the useCallback hook for memoizing functions."
      whatIs="The useCallback hook returns a memoized callback function that only changes if one of its dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders."
      codeExample={`const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]); // Only recreate if a or b changes

// Passing to child component
<ChildComponent onClick={memoizedCallback} />

// Event handler example
const handleClick = useCallback((id) => {
  setSelectedId(id);
}, []);`}
    />
  );
};

export default UseCallbackPage;