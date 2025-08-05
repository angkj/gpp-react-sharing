import HookPageLayout from '../../components/HookPageLayout';
import { DOMRenderingDemo } from './useEffect/DOMRenderingDemo';
import { DependencyArrayModal } from './useEffect/DependencyArrayModal';
import { CleanupDemo } from './useEffect/CleanupDemo';

const UseEffectPage = () => {
  return (
    <HookPageLayout
      title="useEffect Hook"
      description="Learn about the useEffect hook for handling side effects in React components."
      whatIs="The useEffect hook lets you perform side effects in function components. It runs after the component renders and the DOM is updated, making it perfect for data fetching, setting up subscriptions, and manually changing the DOM."
      codeExample={`// Basic useEffect - runs after every render
useEffect(() => {
  document.title = \`Count: \${count}\`;
});

// With cleanup
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Timer tick');
  }, 1000);
  
  return () => clearInterval(timer); // Cleanup
});`}
    >
      <DOMRenderingDemo />
      
      {/* Dependency Array Code Example */}
      <div style={{
        padding: 'var(--spacing-lg)',
        backgroundColor: 'var(--apple-gray-1)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--apple-gray-2)',
        fontFamily: 'SF Mono, Monaco, Inconsolata, "Roboto Mono", Consolas, "Courier New", monospace',
        fontSize: 'var(--font-size-sm)',
        lineHeight: '1.6',
        color: 'var(--apple-text-primary)',
        marginTop: 'var(--spacing-2xl)',
        marginBottom: 'var(--spacing-lg)'
      }}>
        <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
{`// No dependency array - runs on every render
useEffect(() => {
  console.log('Runs on every render');
});

// Empty dependency array - runs only once on mount
useEffect(() => {
  console.log('Runs only on mount');
}, []);

// With dependencies - runs when dependencies change
useEffect(() => {
  console.log('Runs when count changes');
}, [count]);`}
        </pre>
      </div>
      <DependencyArrayModal />
      
      {/* Cleanup Code Example */}
      <div style={{
        padding: 'var(--spacing-lg)',
        backgroundColor: 'var(--apple-gray-1)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--apple-gray-2)',
        fontFamily: 'SF Mono, Monaco, Inconsolata, "Roboto Mono", Consolas, "Courier New", monospace',
        fontSize: 'var(--font-size-sm)',
        lineHeight: '1.6',
        color: 'var(--apple-text-primary)',
        marginTop: 'var(--spacing-2xl)',
        marginBottom: 'var(--spacing-lg)'
      }}>
        <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
{`// Timer cleanup example
useEffect(() => {
  const timer = setInterval(() => {
    setCount(prev => prev + 1);
  }, 1000);
  
  // Cleanup function prevents memory leaks
  return () => {
    clearInterval(timer);
  };
}, []);`}
        </pre>
      </div>
      <CleanupDemo />
    </HookPageLayout>
  );
};

export default UseEffectPage;