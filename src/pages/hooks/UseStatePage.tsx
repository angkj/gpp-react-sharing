import HookPageLayout from '../../components/HookPageLayout';
import { WhyNotRegularVariablesDemo } from './useStatePageComponents/RegularVariableDemo';
import { InitializationPerformanceDemo } from './useStatePageComponents/InitializationPerformanceDemo';
import { RapidUpdatesDemo } from './useStatePageComponents/RapidUpdatesDemo';
// import { AsyncStateDemo } from './useStatePageComponents/AsyncStateDemo';

const UseStatePage = () => {
  return (
    <HookPageLayout
      title="useState Hook"
      description="Learn about the useState hook for managing state in React functional components."
      whatIs="The useState hook allows you to add state to functional components. It returns an array with the current state value and a function to update it, enabling your components to maintain and update local state."
      codeExample={`// Basic initialization
const [count, setCount] = useState(0);

// Functional initialization (runs only once)
const [expensiveValue, setExpensiveValue] = useState(() => {
  return calculateExpensiveValue();
});

// Updating state
setCount(count + 1);

// Functional update (recommended for state updates)
setCount(prevCount => prevCount + 1);

// Multiple rapid updates
setCount(prev => prev + 1);  // ✅ Always works
setCount(prev => prev + 1);
setCount(prev => prev + 1);`}
    >
      <WhyNotRegularVariablesDemo />
      <InitializationPerformanceDemo />

      <RapidUpdatesDemo />
      {/* <AsyncStateDemo /> */}
    </HookPageLayout>
  );
};

export default UseStatePage;