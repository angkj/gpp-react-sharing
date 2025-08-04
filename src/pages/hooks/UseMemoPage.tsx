import HookPageLayout from '../../components/HookPageLayout';

const UseMemoPage = () => {
  return (
    <HookPageLayout
      title="useMemo Hook"
      description="Learn about the useMemo hook for memoizing expensive calculations."
      whatIs="The useMemo hook returns a memoized value that only recomputes when one of its dependencies has changed. This optimization helps avoid expensive calculations on every render, improving performance for computationally heavy operations."
      codeExample={`const expensiveValue = useMemo(() => {
  return expensiveCalculation(a, b);
}, [a, b]); // Only recalculate if a or b changes

// Memoizing object creation
const memoizedObject = useMemo(() => ({
  name: user.name,
  email: user.email
}), [user.name, user.email]);`}
    />
  );
};

export default UseMemoPage;