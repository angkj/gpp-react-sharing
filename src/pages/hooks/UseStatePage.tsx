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

// Updating state
setCount(count + 1);`}
    >
      <WhyNotRegularVariablesDemo />
      
      {/* Initialization Performance Demo */}
      <div style={{
        padding: 'var(--spacing-lg)',
        backgroundColor: 'var(--apple-gray-1)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--apple-gray-2)',
        fontFamily: 'var(--font-family-mono)',
        fontSize: 'var(--font-size-sm)',
        lineHeight: '1.6',
        color: 'var(--apple-text-primary)',
        marginTop: 'var(--spacing-2xl)',
        marginBottom: 'var(--spacing-lg)'
      }}>
        <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
{`// ❌ BAD: Runs expensive calculation on every render
const [value, setValue] = useState(expensiveCalculation());

// ✅ GOOD: Runs expensive calculation only once
const [value, setValue] = useState(() => expensiveCalculation());`}
        </pre>
      </div>
      <InitializationPerformanceDemo />

      {/* Rapid Updates Demo */}
      <div style={{
        padding: 'var(--spacing-lg)',
        backgroundColor: 'var(--apple-gray-1)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--apple-gray-2)',
        fontFamily: 'var(--font-family-mono)',
        fontSize: 'var(--font-size-sm)',
        lineHeight: '1.6',
        color: 'var(--apple-text-primary)',
        marginTop: 'var(--spacing-2xl)',
        marginBottom: 'var(--spacing-lg)'
      }}>
        <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
{`// ❌ BAD: Uses stale state, might lose updates
setCount(count + 1);
setCount(count + 1);  // Still uses old count value

// ✅ GOOD: Always uses latest state
setCount(prev => prev + 1);
setCount(prev => prev + 1);  // Uses updated value`}
        </pre>
      </div>
      <RapidUpdatesDemo />
      
      {/* <AsyncStateDemo /> */}
    </HookPageLayout>
  );
};

export default UseStatePage;