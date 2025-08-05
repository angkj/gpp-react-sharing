import { useState, useEffect } from 'react';
import { Modal } from 'antd';

// Timer component that will be mounted/unmounted
const TimerComponent = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log('🟢 Timer mounted - starting interval');
    
    let tickCount = 0;
    // const interval = setInterval(() => {
    setInterval(() => {
      tickCount++;
      console.log('⏰ Timer tick:', tickCount, '(This should stop when component unmounts!)');
      
      // Only update state if component is still mounted
      setSeconds(tickCount);
    }, 1000);

    // Cleanup function - COMMENTED OUT TO SHOW MEMORY LEAK
    // Uncomment the below to "FIX" the memory leak
    // return () => {
    //   console.log('🔴 Timer cleanup - clearing interval');
    //   clearInterval(interval);
    //   console.log('🔴 Interval cleared - no more memory leaks!');
    // };
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h3 style={{
        fontSize: 'var(--font-size-xl)',
        fontWeight: '600',
        color: '#2E7D32',
        marginBottom: 'var(--spacing-lg)'
      }}>
        🕐 Active Timer
      </h3>
      
      <div style={{
        fontSize: 'var(--font-size-4xl)',
        fontWeight: '700',
        color: '#1B5E20',
        marginBottom: 'var(--spacing-lg)',
        fontFamily: 'SF Mono, Monaco, monospace'
      }}>
        {seconds}s
      </div>
      
      <div style={{
        fontSize: 'var(--font-size-base)',
        color: '#388E3C',
        fontStyle: 'italic'
      }}>
        Timer updates every second via setInterval
      </div>
    </div>
  );
};


export const CleanupDemo = () => {
  const [showTimerModal, setShowTimerModal] = useState(false);

  const handleOpenTimer = () => {
    console.log('🚀 Opening timer modal - TimerComponent will mount');
    setShowTimerModal(true);
  };

  const handleCloseTimer = () => {
    console.log('🗑️ Closing timer modal - TimerComponent will unmount and cleanup');
    setShowTimerModal(false);
  };

  return (
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
        useEffect Cleanup Demo
      </h2>

      <p style={{
        fontSize: 'var(--font-size-base)',
        color: 'var(--apple-text-secondary)',
        lineHeight: '1.6',
        marginBottom: 'var(--spacing-xl)'
      }}>
        Open the modal to mount the timer component, then close it to see cleanup in action. Open your console (F12) to watch the cleanup process!
      </p>

      {/* Modal Button */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 'var(--spacing-xl)'
      }}>
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={handleOpenTimer}
            style={{
              padding: 'var(--spacing-lg) var(--spacing-2xl)',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              fontSize: 'var(--font-size-lg)',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'var(--transition-fast)',
              boxShadow: '0 4px 12px rgba(76, 175, 80, 0.3)',
              marginBottom: 'var(--spacing-md)'
            }}
          >
            ⏰ Open Timer Cleanup Demo
          </button>
          <div style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--apple-text-secondary)',
            fontStyle: 'italic'
          }}>
            setInterval cleanup example
          </div>
        </div>
      </div>

      {/* Info boxes */}
      <div style={{
        display: 'grid',
        gap: 'var(--spacing-md)'
      }}>
        <div style={{
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
            ✅ <strong>Watch Console:</strong> When you open the modal, the timer component mounts and starts ticking. When you close the modal, the cleanup function should run and stop the timer!
          </p>
        </div>
        
        <div style={{
          padding: 'var(--spacing-lg)',
          backgroundColor: '#FFEBEE',
          borderRadius: 'var(--radius-md)',
          borderLeft: '4px solid #F44336'
        }}>
          <p style={{
            fontSize: 'var(--font-size-base)',
            fontWeight: '500',
            margin: 0,
            color: '#C62828'
          }}>
            ⚠️ <strong>Without Cleanup:</strong> The timer keeps running in the background consuming memory and CPU, even after the component is destroyed. This is a memory leak!
          </p>
        </div>
      </div>

      {/* Modal */}
      <Modal
        title="⏰ Timer Cleanup Demo"
        open={showTimerModal}
        onCancel={handleCloseTimer}
        footer={null}
        width={500}
        destroyOnClose={true}
        centered
      >
        <TimerComponent />
      </Modal>
    </div>
  );
};