import { useState } from "react";
import Container from "../shared/components/Container"
import { MainTitle } from "../shared/components/MainTitle"
import { Button, Input } from "antd";

export const DefiningInternalComponent = () => {
  const [count, setCount] = useState(0);
  
  // Internal Component defined inside the main component
  const InternalComponent = () => {
    const [state, setState] = useState('');
    return (
      <div style={{
        backgroundColor: 'var(--apple-background)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--spacing-lg)',
        border: '2px solid var(--apple-blue)',
        marginBottom: 'var(--spacing-lg)'
      }}>
        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <h3 style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: '600',
            color: 'var(--apple-blue)',
            marginBottom: 'var(--spacing-sm)',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--spacing-sm)'
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              backgroundColor: 'var(--apple-blue)',
              borderRadius: '50%'
            }}></span>
            Internal Component
          </h3>
          <p style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--apple-text-secondary)',
            margin: 0,
            lineHeight: '1.5'
          }}>
            This component is defined inside the parent component and has its own state.
          </p>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-md)',
          alignItems: 'center'
        }}>
          <Input 
            value={state}
            onChange={e => setState(e.target.value)} 
            placeholder="Type something here..."
            style={{
              backgroundColor: 'var(--apple-background)',
              borderColor: 'var(--apple-separator)',
              color: 'var(--apple-text-primary)'
            }}
            styles={{
              input: {
                backgroundColor: 'var(--apple-background)',
                color: 'var(--apple-text-primary)',
                fontSize: 'var(--font-size-base)'
              }
            }}
          />
          <div style={{
            fontSize: 'var(--font-size-base)',
            fontWeight: '500',
            color: 'var(--apple-text-primary)',
            textAlign: 'center',
            padding: 'var(--spacing-sm)',
            backgroundColor: 'rgba(0, 122, 255, 0.1)',
            borderRadius: 'var(--radius-sm)',
            minHeight: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            "{state}"
          </div>
        </div>
      </div>
    )
  }

  return (
    <Container>
      <MainTitle title="Defining Internal Component" />
      
      {/* Educational Description */}
      <div style={{
        backgroundColor: 'var(--apple-background-secondary)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--spacing-xl)',
        border: '2px solid var(--apple-separator)',
        borderLeft: '4px solid #FF9500',
        boxShadow: '0 4px 16px var(--apple-shadow)',
        marginBottom: 'var(--spacing-xl)'
      }}>
        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
          <h2 style={{
            fontSize: 'var(--font-size-xl)',
            fontWeight: '600',
            color: 'var(--apple-text-primary)',
            marginBottom: 'var(--spacing-sm)',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--spacing-sm)'
          }}>
            <span style={{
              width: '12px',
              height: '12px',
              backgroundColor: '#FF9500',
              borderRadius: '50%'
            }}></span>
            Main Component (Parent)
          </h2>
          <p style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--apple-text-secondary)',
            margin: '0 0 var(--spacing-md) 0',
            lineHeight: '1.5'
          }}>
            This is the main component that defines an internal component inside it. Both have their own independent state.
          </p>
        </div>

        <div style={{
          backgroundColor: 'var(--apple-background)',
          borderRadius: 'var(--radius-md)',
          padding: 'var(--spacing-lg)',
          marginBottom: 'var(--spacing-lg)'
        }}>
          {/* Main Component State Display */}
          <div style={{
            textAlign: 'center',
            marginBottom: 'var(--spacing-lg)'
          }}>
            <div style={{
              fontSize: 'var(--font-size-2xl)',
              fontWeight: '700',
              color: 'var(--apple-text-primary)',
              marginBottom: 'var(--spacing-sm)'
            }}>
              {count}
            </div>
            <div style={{
              fontSize: 'var(--font-size-sm)',
              color: 'var(--apple-text-secondary)',
              marginBottom: 'var(--spacing-md)'
            }}>
              Main Component Counter
            </div>
            <Button 
              type="primary"
              onClick={() => setCount(count + 1)}
              style={{
                backgroundColor: '#FF9500',
                borderColor: '#FF9500',
                fontSize: 'var(--font-size-base)',
                height: '40px',
                paddingLeft: 'var(--spacing-lg)',
                paddingRight: 'var(--spacing-lg)'
              }}
            >
              Increment Main Counter
            </Button>
          </div>

          {/* Internal Component */}
          <InternalComponent />
        </div>

        <div style={{
          fontSize: 'var(--font-size-xs)',
          color: 'var(--apple-text-tertiary)',
          fontStyle: 'italic'
        }}>
          💡 Internal components have access to the parent's scope but maintain their own state
        </div>
      </div>
    </Container>
  )
}
