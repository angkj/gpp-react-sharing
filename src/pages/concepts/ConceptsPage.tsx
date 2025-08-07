const ConceptsPage = () => {
  return (
    <div>
      <div>
        <h1>
          React Concepts
        </h1>
        <p>
          Master the fundamental concepts that power modern React applications
        </p>
      </div>

      <div>
        <h2>
          What is React?
        </h2>
        <p>
          React is a powerful JavaScript library for building user interfaces. It enables developers to create reusable UI components and manage application state efficiently, making complex applications more maintainable and performant.
        </p>
      </div>

      <div>
        <h2>
          Core Concepts
        </h2>
        
        <div>
          {[
            {
              title: 'Components',
              description: 'Reusable pieces of UI that can accept props and manage their own state. Think of them as custom HTML elements with their own logic and styling.'
            },
            {
              title: 'JSX',
              description: 'A syntax extension that allows you to write HTML-like code directly in JavaScript, making component development more intuitive and readable.'
            },
            {
              title: 'Props',
              description: 'Data passed down from parent components to child components. Props are read-only and help create a unidirectional data flow.'
            },
            {
              title: 'State',
              description: 'Data that can change over time and cause the component to re-render. State is managed locally within components or through external state management.'
            },
            {
              title: 'Virtual DOM',
              description: 'React\'s efficient way of updating the actual DOM by maintaining a virtual representation and only updating what has actually changed.'
            }
          ].map((concept, index) => (
            <div 
              key={index}
            >
              <h3>
                {concept.title}
              </h3>
              <p>
                {concept.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2>
          Rules of React
        </h2>
        
        <div>
          {[
            {
              title: '🔧 Components Must Be Pure',
              description: 'Always return the same output for given inputs. Never mutate props or state directly. No side effects during rendering.'
            },
            {
              title: '⚡ React Controls Lifecycle',
              description: 'Never call component functions directly. Only use components within JSX. Let React manage rendering.'
            },
            {
              title: '🪝 Hooks Have Strict Rules',
              description: 'Call hooks ONLY at the top level. Never inside loops, conditions, or nested functions.'
            },
          ].map((rule, index) => (
            <div 
              key={index}
            >
              <h3>
                {rule.title}
              </h3>
              <p>
                {rule.description}
              </p>
            </div>
          ))}
        </div>
        
        <div>
          <p>
            💡 <strong>Key Takeaway:</strong> Following these rules prevents bugs and makes your React apps more predictable and maintainable.
          </p>
        </div>
      </div>

      <div>
        <h2>
          🪝 Hook Rules in Detail
        </h2>
        
        <p>
          Hooks (functions starting with "use") have strict usage rules. Here's where you <strong>cannot</strong> call them:
        </p>

        <div>
          {[
            'Do not call Hooks inside conditions or loops',
            'Do not call Hooks after a conditional return statement', 
            'Do not call Hooks in event handlers',
            'Do not call Hooks in class components',
            'Do not call Hooks inside functions passed to useMemo, useReducer, or useEffect',
            'Do not call Hooks inside try/catch/finally blocks'
          ].map((rule, index) => (
            <div 
              key={index}
            >
              <span>
                🔴
              </span>
              <span>
                {rule}
              </span>
            </div>
          ))}
        </div>

        <div>
          <p>
            ✅ <strong>Remember:</strong> Always call Hooks at the top level of your React functions, in the same order, every time.
          </p>
        </div>
      </div>

    </div>
  );
};

export default ConceptsPage;