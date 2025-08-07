import { CodeBlock } from '../shared/components';

interface HookPageLayoutProps {
  title: string;
  description: string;
  whatIs: string;
  codeExample: string;
  children?: React.ReactNode;
}

const HookPageLayout = ({ title, description, whatIs, codeExample, children }: HookPageLayoutProps) => {
  return (
    <div>
      <div>
        <h1>
          {title}
        </h1>
        <p>
          {description}
        </p>
      </div>

      <div>
        <h2>
          What is {title}?
        </h2>
        <p>
          {whatIs}
        </p>
      </div>

      <div>
        <h2>
          Basic Usage
        </h2>
        <CodeBlock>{codeExample}</CodeBlock>
      </div>

      {children}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default HookPageLayout;
