import HookPageLayout from '../../components/HookPageLayout';

const UseContextPage = () => {
  return (
    <HookPageLayout
      title="useContext Hook"
      description="Learn about the useContext hook for consuming context values in React components."
      whatIs="The useContext hook accepts a context object and returns the current context value for that context. It provides a clean way to consume context without wrapping your component in a Consumer component."
      codeExample={`const MyContext = createContext();

function MyComponent() {
  const value = useContext(MyContext);
  return <div>{value}</div>;
}

// Usage with Provider
<MyContext.Provider value="Hello World">
  <MyComponent />
</MyContext.Provider>`}
    />
  );
};

export default UseContextPage;