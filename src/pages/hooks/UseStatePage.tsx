import HookPageLayout from '../../components/HookPageLayout';
import { WhyNotRegularVariablesDemo } from './useState/RegularVariableDemo';
import { InitializationPerformanceDemo } from './useState/InitializationPerformanceDemo';
import { RapidUpdatesDemo } from './useState/RapidUpdatesDemo';
import { AsyncStateDemo } from './useState/AsyncStateDemo';

const UseStatePage = () => {
  return (
    <HookPageLayout
      title="useState Hook"
      description="Learn about the useState hook for managing state in React functional components."
      whatIs="The useState hook allows you to add state to functional components. It returns an array with the current state value and a function to update it, enabling your components to maintain and update local state."
      codeExample={`// Basic initialization
const [count, setCount] = useState(0);

// Functional initialization (for expensive computations)
// This function ONLY runs once during initial render,
// NOT on every re-render - React ignores it after first mount
const [expensiveValue, setExpensiveValue] = useState(() => {
  console.log('This only runs ONCE!');
  return calculateExpensiveValue(); // Expensive operation
});

// ❌ BAD: This would run on every render
// const [badValue, setBadValue] = useState(calculateExpensiveValue());

// Update state
setCount(count + 1);

// Functional update (recommended for state based on previous state)
setCount(prevCount => prevCount + 1);`}
    >
      <WhyNotRegularVariablesDemo />
      <InitializationPerformanceDemo />

      <RapidUpdatesDemo />
      <AsyncStateDemo />
    </HookPageLayout>
  );
};

export default UseStatePage;