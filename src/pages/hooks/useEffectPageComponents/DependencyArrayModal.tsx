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
      <div>
        <h3>
          Dependency Array Patterns
        </h3>
        <p>
          Open your console (F12) to see when each effect executes!
        </p>
      </div>

      {/* Controls */}
      <div>
        <div>
          <div>
            <span>Count:</span>
            <span>
              {count}
            </span>
            <button
              onClick={() => setCount(count + 1)}
            >
              Increment
            </button>
          </div>
          
          <div>
            <span>Name:</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div>
        <p>
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
      <div>
        <button
          onClick={handleOpen}
        >
          🎯 Open Dependency Array Demo
        </button>
      </div>

      <div>
        <p>
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
