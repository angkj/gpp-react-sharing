import { Input } from "antd";
import { useState } from "react";
import Container from "../shared/components/Container";
import { MainTitle } from "../shared/components/MainTitle";

export const SampleComponent = () => {
  return (
    <Container>
      <MainTitle title="Sample Component" />
      <ParentComponent />
    </Container>
  )
}

export const ParentComponent = () => {
  const [text, setText] = useState('');

  return (
    <div style={{ 
      border: '2px solid var(--apple-separator)', 
      borderRadius: '8px', 
      padding: '20px', 
      marginBottom: '20px',
      backgroundColor: 'var(--apple-background-secondary)'
    }}>
      <h2 style={{ 
        color: 'var(--apple-text-primary)', 
        marginTop: '0',
        fontSize: 'var(--font-size-xl)',
        fontWeight: '600'
      }}>
        Parent Component
      </h2>
      <p style={{ color: 'var(--apple-text-secondary)' }}>Parent Says:</p>
      <Input 
        value={text} 
        onChange={e => setText(e.target.value)} 
        placeholder="Type something here..."
        style={{ 
          marginBottom: '20px',
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
      <ChildComponent text={text} />
    </div>
  )
}

export const ChildComponent = ({text}: {text: string}) => {
  return (
    <div style={{ 
      border: '2px solid var(--apple-separator)', 
      borderRadius: '8px', 
      padding: '15px',
      backgroundColor: 'var(--apple-background)',
      borderLeft: '4px solid var(--apple-blue)'
    }}>
      <h2 style={{ 
        color: 'var(--apple-text-primary)', 
        marginTop: '0',
        fontSize: 'var(--font-size-xl)',
        fontWeight: '600'
      }}>
        Child Component
      </h2>
      <p style={{ color: 'var(--apple-text-secondary)' }}>
        Child Says: <strong style={{ color: 'var(--apple-text-primary)' }}>
          {text || 'Nothing yet...'}
        </strong>
      </p>
    </div>
  )
}
