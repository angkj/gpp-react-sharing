import { useState, useEffect } from 'react';
import { Modal } from 'antd';

const DependencyArrayDemoContent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('John');

  // No dependency array - runs on every render
  useEffect(() => {
    console.log('🔴 No deps: Runs on every render');
  });

  // Empty dependency array - runs only once on mount
  useEffect(() => {
    console.log('🟡 Empty deps: Runs only on mount');
  }, []);

  // With dependencies - runs when count changes
  useEffect(() => {
    console.log('🟢 With deps: Runs when count changes, count =', count);
  }, [count]);

  return (
    <div>
      <div style={{
        marginBottom: 'var(--spacing-xl)',
        textAlign: 'center'
      }}>
        <h3 style={{
          fontSize: 'var(--font-size-xl)',
          fontWeight: '600',
          color: 'var(--apple-text-primary)',
          marginBottom: 'var(--spacing-md)'
        }}>
          Dependency Array Patterns
        </h3>
        <p style={{
          fontSize: 'var(--font-size-base)',
          color: '#000000',
          lineHeight: '1.6',
          margin: 0
        }}>
          Open your console (F12) to see when each effect executes!
        </p>
      </div>

      {/* Controls */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 'var(--spacing-xl)'
      }}>
        <div style={{
          padding: 'var(--spacing-xl)',
          backgroundColor: 'var(--apple-gray-1)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--apple-separator)',
          minWidth: '400px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--spacing-md)',
            justifyContent: 'center',
            marginBottom: 'var(--spacing-lg)'
          }}>
            <span style={{ fontSize: 'var(--font-size-base)', color: '#FFFFFF', fontWeight: '600' }}>Count:</span>
            <span style={{ 
              fontSize: 'var(--font-size-3xl)', 
              fontWeight: '700', 
              color: 'var(--apple-blue)',
              minWidth: '60px',
              textAlign: 'center'
            }}>
              {count}
            </span>
            <button
              onClick={() => setCount(count + 1)}
              style={{
                padding: 'var(--spacing-md) var(--spacing-lg)',
                backgroundColor: 'var(--apple-blue)',
                color: 'white',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-base)',
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              Increment
            </button>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--spacing-md)',
            justifyContent: 'center'
          }}>
            <span style={{ fontSize: 'var(--font-size-base)', color: '#FFFFFF', fontWeight: '600' }}>Name:</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                padding: 'var(--spacing-sm)',
                border: '1px solid var(--apple-separator)',
                borderRadius: 'var(--radius-sm)',
                fontSize: 'var(--font-size-base)',
                minWidth: '150px'
              }}
            />
          </div>
        </div>
      </div>

      <div style={{
        padding: 'var(--spacing-lg)',
        backgroundColor: '#FFF3E0',
        borderRadius: 'var(--radius-md)',
        borderLeft: '4px solid #FF9800'
      }}>
        <p style={{
          fontSize: 'var(--font-size-base)',
          fontWeight: '500',
          margin: 0,
          color: '#E65100'
        }}>
          🎯 <strong>Try This:</strong> Click increment (triggers count dependency) or change the name (doesn't trigger count dependency) and watch the console to see how each useEffect behaves differently!
        </p>
      </div>
    </div>
  );
};

export const DependencyArrayModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    console.log('🚀 Opening modal - DependencyArrayDemo component will mount');
    setIsOpen(true);
  };

  const handleClose = () => {
    console.log('🗑️ Closing modal - DependencyArrayDemo component will unmount');
    setIsOpen(false);
  };

  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 'var(--spacing-2xl)',
        marginBottom: 'var(--spacing-lg)'
      }}>
        <button
          onClick={handleOpen}
          style={{
            padding: 'var(--spacing-lg) var(--spacing-2xl)',
            backgroundColor: 'var(--apple-blue)',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--radius-md)',
            fontSize: 'var(--font-size-lg)',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'var(--transition-fast)',
            boxShadow: '0 4px 12px rgba(0, 122, 255, 0.3)'
          }}
        >
          🎯 Open Dependency Array Demo
        </button>
      </div>

      <div style={{
        padding: 'var(--spacing-lg)',
        backgroundColor: '#E8F5E8',
        borderRadius: 'var(--radius-md)',
        borderLeft: '4px solid #4CAF50',
        marginBottom: 'var(--spacing-xl)'
      }}>
        <p style={{
          fontSize: 'var(--font-size-base)',
          fontWeight: '500',
          margin: 0,
          color: '#2E7D32'
        }}>
          ✅ <strong>Watch Console:</strong> When you click the button above, the modal opens and the component mounts. You'll see all three useEffect hooks run immediately - demonstrating component lifecycle!
        </p>
      </div>

      <Modal
        title="useEffect Dependency Array Patterns"
        open={isOpen}
        onCancel={handleClose}
        footer={null}
        width={600}
        destroyOnHidden
        centered
      >
        <DependencyArrayDemoContent />
      </Modal>
    </>
  );
};