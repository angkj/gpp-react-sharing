export const MainTitle = ({ title }: { title: string }) => {
  return (
    <div style={{ 
      textAlign: 'center', 
      marginBottom: 'var(--spacing-xl)' 
    }}>
      <h1 style={{ 
        fontSize: 'var(--font-size-4xl)',
        fontWeight: '700',
        background: 'linear-gradient(135deg, var(--apple-text-primary) 0%, var(--apple-blue) 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        marginBottom: 'var(--spacing-md)'
      }}>
        {title}
      </h1>
    </div>
  )
}
