import { useState, useEffect } from 'react';
import { Modal } from 'antd';
import { DemoContainer, InfoBox, Button } from '../../../shared/components';

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
        fontFamily: 'var(--font-family-mono)'
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
    <DemoContainer title="useEffect Cleanup Demo" style={{ marginTop: 'var(--spacing-2xl)' }}>
      <p style={{
        fontSize: 'var(--font-size-base)',
        color: 'var(--apple-text-secondary)',
        lineHeight: '1.6',
        marginBottom: 'var(--spacing-xl)'
      }}>
        Open the modal to mount the timer component, then close it to see cleanup in action. Open your console (F12) to watch the cleanup process!
      </p>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 'var(--spacing-xl)'
      }}>
        <div style={{ textAlign: 'center' }}>
          <Button
            variant="success"
            size="lg"
            onClick={handleOpenTimer}
            style={{
              boxShadow: '0 4px 12px rgba(76, 175, 80, 0.3)',
              marginBottom: 'var(--spacing-md)'
            }}
          >
            ⏰ Open Timer Cleanup Demo
          </Button>
          <div style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--apple-text-secondary)',
            fontStyle: 'italic'
          }}>
            setInterval cleanup example
          </div>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gap: 'var(--spacing-md)'
      }}>
        <InfoBox variant="success">
          ✅ <strong>Watch Console:</strong> When you open the modal, the timer component mounts and starts ticking. When you close the modal, the cleanup function should run and stop the timer!
        </InfoBox>
        
        <InfoBox variant="error">
          ⚠️ <strong>Without Cleanup:</strong> The timer keeps running in the background consuming memory and CPU, even after the component is destroyed. This is a memory leak!
        </InfoBox>
      </div>

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
    </DemoContainer>
  );
};