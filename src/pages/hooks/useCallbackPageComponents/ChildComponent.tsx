import { memo } from 'react';

export interface ChildComponentProps {
  label: string;
  onClick: () => void;
  renderCount: React.MutableRefObject<number>;
}

export const ChildComponent = memo(({ label, onClick, renderCount }: ChildComponentProps) => {
  renderCount.current++;
  console.log(`🔄 ${label} child rendered ${renderCount.current} times`);

  return (
    <div style={{
      padding: 'var(--spacing-lg)',
      backgroundColor: 'var(--apple-gray-1)',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--apple-gray-2)',
      marginBottom: 'var(--spacing-md)'
    }}>
      <h4 style={{
        fontSize: 'var(--font-size-base)',
        fontWeight: '600',
        color: 'var(--apple-text-primary)',
        marginBottom: 'var(--spacing-sm)'
      }}>
        {label}
      </h4>
      <div style={{
        fontSize: 'var(--font-size-sm)',
        color: 'var(--apple-text-secondary)',
        marginBottom: 'var(--spacing-md)',
        fontFamily: 'SF Mono, Monaco, monospace'
      }}>
        Render count: {renderCount.current}
      </div>
      <button
        onClick={onClick}
        style={{
          padding: 'var(--spacing-sm) var(--spacing-md)',
          backgroundColor: '#007AFF',
          color: 'white',
          border: 'none',
          borderRadius: 'var(--radius-sm)',
          fontSize: 'var(--font-size-sm)',
          cursor: 'pointer'
        }}
      >
        Click me!
      </button>
    </div>
  );
});