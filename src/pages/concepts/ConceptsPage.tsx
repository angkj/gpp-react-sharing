const ConceptsPage = () => {
  return (
    <div style={{ 
      maxWidth: '900px',
      animation: 'fadeInUp 0.6s ease-out'
    }}>
      <div style={{ marginBottom: 'var(--spacing-3xl)' }}>
        <h1 style={{
          fontSize: 'var(--font-size-4xl)',
          fontWeight: '700',
          color: 'var(--apple-text-primary)',
          marginBottom: 'var(--spacing-lg)',
          letterSpacing: '-0.5px'
        }}>
          React Concepts
        </h1>
        <p style={{
          fontSize: 'var(--font-size-lg)',
          color: 'var(--apple-text-secondary)',
          lineHeight: '1.6',
          fontWeight: '400'
        }}>
          Master the fundamental concepts that power modern React applications
        </p>
      </div>

      <div style={{
        padding: 'var(--spacing-2xl)',
        backgroundColor: 'var(--apple-background)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--apple-separator)',
        boxShadow: '0 4px 16px var(--apple-shadow)',
        marginBottom: 'var(--spacing-2xl)'
      }}>
        <h2 style={{
          fontSize: 'var(--font-size-2xl)',
          fontWeight: '600',
          color: 'var(--apple-text-primary)',
          marginBottom: 'var(--spacing-lg)'
        }}>
          What is React?
        </h2>
        <p style={{
          fontSize: 'var(--font-size-base)',
          color: 'var(--apple-text-secondary)',
          lineHeight: '1.7',
          marginBottom: 0
        }}>
          React is a powerful JavaScript library for building user interfaces. It enables developers to create reusable UI components and manage application state efficiently, making complex applications more maintainable and performant.
        </p>
      </div>

      <div style={{
        padding: 'var(--spacing-2xl)',
        backgroundColor: 'var(--apple-background)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--apple-separator)',
        boxShadow: '0 4px 16px var(--apple-shadow)',
        marginBottom: 'var(--spacing-2xl)'
      }}>
        <h2 style={{
          fontSize: 'var(--font-size-2xl)',
          fontWeight: '600',
          color: 'var(--apple-text-primary)',
          marginBottom: 'var(--spacing-xl)'
        }}>
          Core Concepts
        </h2>
        
        <div style={{
          display: 'grid',
          gap: 'var(--spacing-lg)'
        }}>
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
              style={{
                padding: 'var(--spacing-lg)',
                backgroundColor: 'var(--apple-gray-1)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--apple-gray-2)',
                transition: 'var(--transition-base)'
              }}
            >
              <h3 style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: '600',
                color: 'var(--apple-text-primary)',
                marginBottom: 'var(--spacing-sm)'
              }}>
                {concept.title}
              </h3>
              <p style={{
                fontSize: 'var(--font-size-base)',
                color: 'var(--apple-text-secondary)',
                lineHeight: '1.6',
                marginBottom: 0
              }}>
                {concept.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        padding: 'var(--spacing-2xl)',
        backgroundColor: 'var(--apple-background)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--apple-separator)',
        boxShadow: '0 4px 16px var(--apple-shadow)'
      }}>
        <h2 style={{
          fontSize: 'var(--font-size-2xl)',
          fontWeight: '600',
          color: 'var(--apple-text-primary)',
          marginBottom: 'var(--spacing-xl)'
        }}>
          Rules of React
        </h2>
        
        <div style={{
          display: 'grid',
          gap: 'var(--spacing-lg)'
        }}>
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
              style={{
                padding: 'var(--spacing-lg)',
                backgroundColor: 'var(--apple-gray-1)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--apple-gray-2)',
                transition: 'var(--transition-base)'
              }}
            >
              <h3 style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: '600',
                color: 'var(--apple-text-primary)',
                marginBottom: 'var(--spacing-sm)'
              }}>
                {rule.title}
              </h3>
              <p style={{
                fontSize: 'var(--font-size-base)',
                color: 'var(--apple-text-secondary)',
                lineHeight: '1.6',
                marginBottom: 0
              }}>
                {rule.description}
              </p>
            </div>
          ))}
        </div>
        
        <div style={{
          marginTop: 'var(--spacing-xl)',
          padding: 'var(--spacing-lg)',
          backgroundColor: 'var(--apple-blue)',
          borderRadius: 'var(--radius-md)',
          color: 'white'
        }}>
          <p style={{
            fontSize: 'var(--font-size-base)',
            fontWeight: '500',
            margin: 0,
            textAlign: 'center'
          }}>
            💡 <strong>Key Takeaway:</strong> Following these rules prevents bugs and makes your React apps more predictable and maintainable.
          </p>
        </div>
      </div>

      <div style={{
        padding: 'var(--spacing-2xl)',
        backgroundColor: 'var(--apple-background)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--apple-separator)',
        boxShadow: '0 4px 16px var(--apple-shadow)',
        marginTop: 'var(--spacing-2xl)'
      }}>
        <h2 style={{
          fontSize: 'var(--font-size-2xl)',
          fontWeight: '600',
          color: 'var(--apple-text-primary)',
          marginBottom: 'var(--spacing-lg)'
        }}>
          🪝 Hook Rules in Detail
        </h2>
        
        <p style={{
          fontSize: 'var(--font-size-base)',
          color: 'var(--apple-text-secondary)',
          lineHeight: '1.6',
          marginBottom: 'var(--spacing-xl)'
        }}>
          Hooks (functions starting with "use") have strict usage rules. Here's where you <strong>cannot</strong> call them:
        </p>

        <div style={{
          display: 'grid',
          gap: 'var(--spacing-md)'
        }}>
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
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 'var(--spacing-sm)',
                padding: 'var(--spacing-md)',
                backgroundColor: '#FFEBEE',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid #FFCDD2'
              }}
            >
              <span style={{
                color: '#F44336',
                fontSize: 'var(--font-size-lg)',
                fontWeight: '700',
                minWidth: '20px'
              }}>
                🔴
              </span>
              <span style={{
                fontSize: 'var(--font-size-base)',
                color: '#C62828',
                fontWeight: '500'
              }}>
                {rule}
              </span>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 'var(--spacing-xl)',
          padding: 'var(--spacing-lg)',
          backgroundColor: '#E8F5E8',
          borderRadius: 'var(--radius-md)',
          borderLeft: '4px solid #4CAF50'
        }}>
          <p style={{
            fontSize: 'var(--font-size-base)',
            fontWeight: '500',
            margin: 0,
            color: '#2E7D32'
          }}>
            ✅ <strong>Remember:</strong> Always call Hooks at the top level of your React functions, in the same order, every time.
          </p>
        </div>
      </div>

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

export default ConceptsPage;