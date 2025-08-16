import Container from "../shared/components/Container";
import { MainTitle } from "../shared/components/MainTitle";
import { useState } from "react";
import { Button } from "antd";

export const ManagingState = () => {
  return (
    <Container>
      <MainTitle title='Managing State' />
      <UseReducerExample />
      <UseContextExample />
    </Container>
  );
};

// Define the state type
// interface CounterState {
//   count: number;
// }

// // Define action types
// type CounterAction = 
//   | { type: 'PLUS' }
//   | { type: 'MINUS' }
//   | { type: 'MULTIPLY' }
//   | { type: 'DIVIDE' }
//   | { type: 'RESET' }
//   | { type: 'SET_VALUE'; payload: number };

// // Reducer function
// const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
//   switch (action.type) {
//     case 'PLUS':
//       return {
//         count: state.count + 1,
//       };
//     case 'MINUS':
//       return {
//         count: state.count - 1,
//       };
//     case 'MULTIPLY':
//       return {
//         count: state.count * 2,
//       };
//     case 'DIVIDE':
//       return {
//         count: state.count / 2,
//       };
//     case 'RESET':
//       return {
//           count: 0,
//       };
//     case 'SET_VALUE':
//       return {
//         count: action.payload,
//       };
//     default:
//       return state;
//   }
// };

const UseReducerExample = () => {
  // Initial state
  // const initialState: CounterState = { count: 0 };

  // useReducer hook
  // const [state, dispatch] = useReducer(counterReducer, initialState);

  const [state, setState] = useState({ count: 0 });

  return (
    <div style={{
      backgroundColor: 'var(--apple-background-secondary)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--spacing-xl)',
      border: '2px solid var(--apple-separator)',
      borderLeft: '4px solid var(--apple-blue)',
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
            backgroundColor: 'var(--apple-blue)',
            borderRadius: '50%'
          }}></span>
          useReducer Example
        </h2>
        <p style={{
          fontSize: 'var(--font-size-sm)',
          color: 'var(--apple-text-secondary)',
          margin: '0 0 var(--spacing-md) 0',
          lineHeight: '1.5'
        }}>
          useReducer is ideal for complex state logic with multiple actions. It follows the Redux pattern with actions and reducers.
        </p>
      </div>

      <div style={{
        backgroundColor: 'var(--apple-background)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--spacing-lg)',
        marginBottom: 'var(--spacing-md)'
      }}>
        {/* Current Count Display */}
        <div style={{
          textAlign: 'center',
          marginBottom: 'var(--spacing-lg)'
        }}>
          <div style={{
            fontSize: 'var(--font-size-3xl)',
            fontWeight: '700',
            color: 'var(--apple-text-primary)',
            marginBottom: 'var(--spacing-sm)'
          }}>
            {state.count}
          </div>
          <div style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--apple-text-secondary)'
          }}>
            Current Count
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: 'var(--spacing-sm)',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: 'var(--spacing-lg)'
        }}>
          <Button 
            type="primary"
            onClick={() => setState(prev => ({ count: prev.count + 1 }))}
            // onClick={() => dispatch({ type: 'PLUS' })}
            style={{
              backgroundColor: 'var(--apple-blue)',
              borderColor: 'var(--apple-blue)',
              color: 'white'
            }}
          >
            +1
          </Button>
          <Button 
            onClick={() => setState(prev => ({ count: prev.count - 1 }))}
            // onClick={() => dispatch({ type: 'MINUS' })}
            style={{
              backgroundColor: 'var(--apple-blue)',
              borderColor: 'var(--apple-blue)',
              color: 'white'
            }}
          >
            -1
          </Button>
          <Button 
            onClick={() => setState(prev => ({ count: prev.count * 2 }))}
            // onClick={() => dispatch({ type: 'MULTIPLY' })}
            style={{
              backgroundColor: 'var(--apple-blue)',
              borderColor: 'var(--apple-blue)',
              color: 'white'
            }}
          >
            x 2
          </Button>
          <Button 
              onClick={() => setState(prev => ({ count: prev.count / 2 }))}
              // onClick={() => dispatch({ type: 'DIVIDE' })}
            style={{
              backgroundColor: 'var(--apple-blue)',
              borderColor: 'var(--apple-blue)',
              color: 'white'
            }}
          >
            ÷ 2
          </Button>
          <Button 
            onClick={() => setState({...state, count: 10})}
            // onClick={() => dispatch({ type: 'SET_VALUE', payload: 10 })}
            style={{
              backgroundColor: 'var(--apple-blue)',
              borderColor: 'var(--apple-blue)',
              color: 'white'
            }}
          >
            Set to 10
          </Button>
          <Button 
            onClick={() => setState({...state, count: 0})}
            // onClick={() => dispatch({ type: 'RESET' })}
            style={{
              backgroundColor: 'var(--apple-gray-5)',
              borderColor: 'var(--apple-gray-5)',
              color: 'white'
            }}
          >
            Reset
          </Button>
        </div>
      </div>

      <div style={{
        fontSize: 'var(--font-size-xs)',
        color: 'var(--apple-text-tertiary)',
        fontStyle: 'italic'
      }}>
        💡 useReducer is perfect for complex state with multiple related actions
      </div>
    </div>
  )
}

const UseContextExample = () => {
  return (
    <div style={{
      backgroundColor: 'var(--apple-background-secondary)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--spacing-xl)',
      border: '2px solid var(--apple-separator)',
      borderLeft: '4px solid #34C759',
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
            backgroundColor: '#34C759',
            borderRadius: '50%'
          }}></span>
          useContext Example - Component Hierarchy
        </h2>
      </div>

      <div style={{
        backgroundColor: 'var(--apple-background)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--spacing-lg)',
        marginBottom: 'var(--spacing-md)'
      }}>
        <GreatGrandFather />
      </div>

      <div style={{
        fontSize: 'var(--font-size-xs)',
        color: 'var(--apple-text-tertiary)',
        fontStyle: 'italic'
      }}>
        🌳 Component tree showing nested hierarchy - useContext helps avoid prop drilling through all these levels
      </div>
    </div>
  )
}

const GreatGrandFather = () => {
  return (
    <div style={{
      border: '2px solid #8E44AD',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--spacing-md)',
      marginBottom: 'var(--spacing-sm)',
      backgroundColor: 'rgba(142, 68, 173, 0.1)'
    }}>
      <div style={{
        fontSize: 'var(--font-size-lg)',
        fontWeight: '600',
        color: '#8E44AD',
        marginBottom: 'var(--spacing-sm)'
      }}>
        👴 GreatGrandFather
      </div>
      <div style={{ paddingLeft: 'var(--spacing-lg)' }}>
        <GrandFather />
      </div>
    </div>
  )
}

const GrandFather = () => {
  return (
    <div style={{
      border: '2px solid #E67E22',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--spacing-md)',
      marginBottom: 'var(--spacing-sm)',
      backgroundColor: 'rgba(230, 126, 34, 0.1)'
    }}>
      <div style={{
        fontSize: 'var(--font-size-lg)',
        fontWeight: '600',
        color: '#E67E22',
        marginBottom: 'var(--spacing-sm)'
      }}>
        👨‍🦳 GrandFather
      </div>
      <div style={{ paddingLeft: 'var(--spacing-lg)' }}>
        <Father />
      </div>
    </div>
  )
}

const Father = () => {
  return (
    <div style={{
      border: '2px solid #3498DB',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--spacing-md)',
      marginBottom: 'var(--spacing-sm)',
      backgroundColor: 'rgba(52, 152, 219, 0.1)'
    }}>
      <div style={{
        fontSize: 'var(--font-size-lg)',
        fontWeight: '600',
        color: '#3498DB',
        marginBottom: 'var(--spacing-sm)'
      }}>
        👨 Father
      </div>
      <div style={{ paddingLeft: 'var(--spacing-lg)' }}>
        <Son />
      </div>
    </div>
  )
}

const Son = () => {
  return (
    <div style={{
      border: '2px solid #E74C3C',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--spacing-md)',
      marginBottom: 'var(--spacing-sm)',
      backgroundColor: 'rgba(231, 76, 60, 0.1)'
    }}>
      <div style={{
        fontSize: 'var(--font-size-lg)',
        fontWeight: '600',
        color: '#E74C3C',
        marginBottom: 'var(--spacing-sm)'
      }}>
        👦 Son
      </div>
      <div style={{ paddingLeft: 'var(--spacing-lg)' }}>
        <GrandSon />
      </div>
    </div>
  )
}

const GrandSon = () => {
  return (
    <div style={{
      border: '2px solid #27AE60',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--spacing-md)',
      backgroundColor: 'rgba(39, 174, 96, 0.1)'
    }}>
      <div style={{
        fontSize: 'var(--font-size-lg)',
        fontWeight: '600',
        color: '#27AE60'
      }}>
        👶 GrandSon
      </div>
    </div>
  )
}
