interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

export const CodeBlock = ({ children, className = '' }: CodeBlockProps) => {
  return (
    <div className={className}>
      <pre>
        {children}
      </pre>
    </div>
  );
};