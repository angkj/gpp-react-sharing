import HookPageLayout from '../../components/HookPageLayout';

const UseEffectPage = () => {
  return (
    <HookPageLayout
      title="useEffect Hook"
      description="Learn about the useEffect hook for handling side effects in React components."
      whatIs="The useEffect hook lets you perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount combined in React class components, providing a unified API for managing component lifecycle events."
      codeExample={`useEffect(() => {
  // Side effect code here
  console.log('Component rendered');
  
  // Cleanup function (optional)
  return () => {
    console.log('Cleanup');
  };
}, []); // Empty dependency array means this runs once on mount

// Effect with dependencies
useEffect(() => {
  fetchUserData(userId);
}, [userId]); // Runs when userId changes`}
    />
  );
};

export default UseEffectPage;