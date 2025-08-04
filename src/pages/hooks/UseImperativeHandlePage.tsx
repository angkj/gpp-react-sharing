import HookPageLayout from '../../components/HookPageLayout';

const UseImperativeHandlePage = () => {
  return (
    <HookPageLayout
      title="useImperativeHandle Hook"
      description="Learn about the useImperativeHandle hook for customizing the instance value exposed to parent components."
      whatIs="The useImperativeHandle hook customizes the instance value that is exposed to parent components when using ref. It should be used with forwardRef and is typically reserved for library components where you need to expose imperative APIs."
      codeExample={`const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    getValue: () => {
      return inputRef.current.value;
    }
  }));
  
  return <input ref={inputRef} />;
});`}
    />
  );
};

export default UseImperativeHandlePage;