import { Button } from "antd";
import Container from "../shared/components/Container";
import { useState } from "react";
import { MainTitle } from "../shared/components/MainTitle";

export const UpdatingVariables = () => {
  return (
    <Container>
      <div>
        {/* Header Section */}
        <MainTitle title="Updating Variables" />
        {/* Demo Components */}
        <div style={{
          display: 'grid',
          gap: 'var(--spacing-xl)',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))'
        }}>
          <UpdatingStateVariable />
          <UpdatingRegularVariable />
          <UpdatingArrayCorrectly />
          <UpdatingArrayWrongly />
          <UpdatingObjectCorrectly />
          <UpdatingObjectWrongly />
        </div>
      </div>
    </Container>
  );
};

const UpdatingStateVariable = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div style={{
      backgroundColor: 'var(--apple-background-secondary)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--spacing-xl)',
      border: '2px solid var(--apple-separator)',
      borderLeft: '4px solid #34C759', // Green for "working" state
      boxShadow: '0 4px 16px var(--apple-shadow)'
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
          State Variable
        </h2>
        <p style={{
          fontSize: 'var(--font-size-sm)',
          color: 'var(--apple-text-secondary)',
          margin: '0 0 var(--spacing-md) 0',
          lineHeight: '1.5'
        }}>
          Uses React's useState hook. When updated, it triggers a re-render and the UI updates automatically.
        </p>
      </div>

      <div style={{
        backgroundColor: 'var(--apple-background)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--spacing-lg)',
        marginBottom: 'var(--spacing-md)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <Button 
          type="primary"
          onClick={() => setCount(count + 1)}
          style={{
            marginBottom: 'var(--spacing-md)',
            backgroundColor: 'var(--apple-blue)',
            borderColor: 'var(--apple-blue)'
          }}
        >
          Increment State
        </Button>
        <div style={{
          fontSize: 'var(--font-size-lg)',
          fontWeight: '600',
          color: 'var(--apple-text-primary)'
        }}>
          Current count: <span style={{ color: '#34C759' }}>{count}</span>
        </div>
      </div>

      <div style={{
        fontSize: 'var(--font-size-xs)',
        color: 'var(--apple-text-tertiary)',
        fontStyle: 'italic'
      }}>
        ✅ Updates automatically when state changes
      </div>
    </div>
  );
};

const UpdatingRegularVariable = () => {
  let count = 0;

  const onClick = () => {
    count++;
    console.log(`Count is now: ${count}`);
  }

  return (
    <div style={{
      backgroundColor: 'var(--apple-background-secondary)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--spacing-xl)',
      border: '2px solid var(--apple-separator)',
      borderLeft: '4px solid #FF3B30', // Red for "problematic" approach
      boxShadow: '0 4px 16px var(--apple-shadow)'
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
            backgroundColor: '#FF3B30',
            borderRadius: '50%'
          }}></span>
          Regular Variable
        </h2>
        <p style={{
          fontSize: 'var(--font-size-sm)',
          color: 'var(--apple-text-secondary)',
          margin: '0 0 var(--spacing-md) 0',
          lineHeight: '1.5'
        }}>
          Uses a regular JavaScript variable. When updated, it doesn't trigger a re-render, so the UI stays the same.
        </p>
      </div>

      <div style={{
        backgroundColor: 'var(--apple-background)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--spacing-lg)',
        marginBottom: 'var(--spacing-md)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <Button 
          onClick={onClick}
          style={{
            marginBottom: 'var(--spacing-md)',
            backgroundColor: '#FF3B30',
            borderColor: '#FF3B30',
            color: 'white'
          }}
        >
          Increment Variable
        </Button>
        <div style={{
          fontSize: 'var(--font-size-lg)',
          fontWeight: '600',
          color: 'var(--apple-text-primary)'
        }}>
          Current count: <span style={{ color: '#FF3B30' }}>{count}</span>
        </div>
      </div>

      <div style={{
        fontSize: 'var(--font-size-xs)',
        color: 'var(--apple-text-tertiary)',
        fontStyle: 'italic'
      }}>
        ❌ UI doesn't update (check console.log for actual value)
      </div>
    </div>
  );
};

const UpdatingArrayWrongly = () => {
  const [items, setItems] = useState([1, 2, 3]);
  const addItem = () => {
    items.push(items.length + 1);
    console.log(items)
    setItems(items);
  }
  
  return (
    <div style={{
      backgroundColor: 'var(--apple-background-secondary)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--spacing-xl)',
      border: '2px solid var(--apple-separator)',
      borderLeft: '4px solid #FF3B30', // Red for "wrong" approach
      boxShadow: '0 4px 16px var(--apple-shadow)'
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
            backgroundColor: '#FF3B30',
            borderRadius: '50%'
          }}></span>
          Updating Array Wrongly
        </h2>
        <p style={{
          fontSize: 'var(--font-size-sm)',
          color: 'var(--apple-text-secondary)',
          margin: '0 0 var(--spacing-md) 0',
          lineHeight: '1.5'
        }}>
          Mutates the original array directly with push(), which doesn't trigger re-renders because React doesn't detect the change.
        </p>
      </div>

      <div style={{
        backgroundColor: 'var(--apple-background)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--spacing-lg)',
        marginBottom: 'var(--spacing-md)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <Button 
          onClick={addItem}
          style={{
            marginBottom: 'var(--spacing-md)',
            backgroundColor: '#FF3B30',
            borderColor: '#FF3B30',
            color: 'white'
          }}
        >
          Add Item
        </Button>
        <div style={{
          fontSize: 'var(--font-size-lg)',
          fontWeight: '600',
          color: 'var(--apple-text-primary)',
          marginBottom: 'var(--spacing-sm)'
        }}>
          Items: <span style={{ color: '#FF3B30' }}>[{items.join(", ")}]</span>
        </div>
      </div>

      <div style={{
        fontSize: 'var(--font-size-xs)',
        color: 'var(--apple-text-tertiary)',
        fontStyle: 'italic'
      }}>
        ❌ Mutates original array - UI won't update (check console.log)
      </div>
    </div>
  );
}

const UpdatingArrayCorrectly = () => {
  const [items, setItems] = useState([1, 2, 3]);
  const addItem = () => {
    setItems([...items, items.length + 1]);
  }

  return (
    <div style={{
      backgroundColor: 'var(--apple-background-secondary)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--spacing-xl)',
      border: '2px solid var(--apple-separator)',
      borderLeft: '4px solid #34C759', // Green for "correct" approach
      boxShadow: '0 4px 16px var(--apple-shadow)'
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
          Updating Array Correctly
        </h2>
        <p style={{
          fontSize: 'var(--font-size-sm)',
          color: 'var(--apple-text-secondary)',
          margin: '0 0 var(--spacing-md) 0',
          lineHeight: '1.5'
        }}>
          Creates a new array using spread operator (...), which triggers re-renders because React detects the state change.
        </p>
      </div>

      <div style={{
        backgroundColor: 'var(--apple-background)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--spacing-lg)',
        marginBottom: 'var(--spacing-md)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <Button 
          type="primary"
          onClick={addItem}
          style={{
            marginBottom: 'var(--spacing-md)',
            backgroundColor: 'var(--apple-blue)',
            borderColor: 'var(--apple-blue)'
          }}
        >
          Add Item
        </Button>
        <div style={{
          fontSize: 'var(--font-size-lg)',
          fontWeight: '600',
          color: 'var(--apple-text-primary)',
          marginBottom: 'var(--spacing-sm)'
        }}>
          Items: <span style={{ color: '#34C759' }}>[{items.join(", ")}]</span>
        </div>
      </div>

      <div style={{
        fontSize: 'var(--font-size-xs)',
        color: 'var(--apple-text-tertiary)',
        fontStyle: 'italic'
      }}>
        ✅ Creates new array - UI updates automatically
      </div>
    </div>
  );
}


const UpdatingObjectCorrectly = () => {
  const [obj, setObj] = useState({ count: 0 });
  const addItem = () => {
    setObj(prevObj => ({ ...prevObj, count: prevObj.count + 1 }));
  }

  return (
    <div style={{
      backgroundColor: 'var(--apple-background-secondary)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--spacing-xl)',
      border: '2px solid var(--apple-separator)',
      borderLeft: '4px solid #34C759', // Green for "correct" approach
      boxShadow: '0 4px 16px var(--apple-shadow)'
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
          Updating Object Correctly
        </h2>
        <p style={{
          fontSize: 'var(--font-size-sm)',
          color: 'var(--apple-text-secondary)',
          margin: '0 0 var(--spacing-md) 0',
          lineHeight: '1.5'
        }}>
          Creates a new object using spread operator (...), which triggers re-renders because React detects the state change.
        </p>
      </div>

      <div style={{
        backgroundColor: 'var(--apple-background)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--spacing-lg)',
        marginBottom: 'var(--spacing-md)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <Button 
          type="primary"
          onClick={addItem}
          style={{
            marginBottom: 'var(--spacing-md)',
            backgroundColor: 'var(--apple-blue)',
            borderColor: 'var(--apple-blue)'
          }}
        >
          Increment Count
        </Button>
        <div style={{
          fontSize: 'var(--font-size-lg)',
          fontWeight: '600',
          color: 'var(--apple-text-primary)',
          marginBottom: 'var(--spacing-sm)'
        }}>
          Object: <span style={{ color: '#34C759' }}>{`{ count: ${obj.count} }`}</span>
        </div>
      </div>

      <div style={{
        fontSize: 'var(--font-size-xs)',
        color: 'var(--apple-text-tertiary)',
        fontStyle: 'italic'
      }}>
        ✅ Creates new object - UI updates automatically
      </div>
    </div>
  )
}

const UpdatingObjectWrongly = () => {
  const [obj, setObj] = useState({ count: 0 });
  const addItem = () => {
    obj.count += 1; // Mutating the object directly
    console.log(obj)
    setObj(obj);
  }

  return (
    <div style={{
      backgroundColor: 'var(--apple-background-secondary)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--spacing-xl)',
      border: '2px solid var(--apple-separator)',
      borderLeft: '4px solid #FF3B30', // Red for "wrong" approach
      boxShadow: '0 4px 16px var(--apple-shadow)'
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
            backgroundColor: '#FF3B30',
            borderRadius: '50%'
          }}></span>
          Updating Object Wrongly
        </h2>
        <p style={{
          fontSize: 'var(--font-size-sm)',
          color: 'var(--apple-text-secondary)',
          margin: '0 0 var(--spacing-md) 0',
          lineHeight: '1.5'
        }}>
          Mutates the original object directly, which doesn't trigger re-renders because React doesn't detect the change.
        </p>
      </div>

      <div style={{
        backgroundColor: 'var(--apple-background)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--spacing-lg)',
        marginBottom: 'var(--spacing-md)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <Button 
          onClick={addItem}
          style={{
            marginBottom: 'var(--spacing-md)',
            backgroundColor: '#FF3B30',
            borderColor: '#FF3B30',
            color: 'white'
          }}
        >
          Increment Count
        </Button>
        <div style={{
          fontSize: 'var(--font-size-lg)',
          fontWeight: '600',
          color: 'var(--apple-text-primary)',
          marginBottom: 'var(--spacing-sm)'
        }}>
          Object: <span style={{ color: '#FF3B30' }}>{`{ count: ${obj.count} }`}</span>
        </div>
      </div>

      <div style={{
        fontSize: 'var(--font-size-xs)',
        color: 'var(--apple-text-tertiary)',
        fontStyle: 'italic'
      }}>
        ❌ Mutates original object - UI won't update (check console.log)
      </div>
    </div>
  )
}
