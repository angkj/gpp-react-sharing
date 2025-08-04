import { ThemeProvider } from './contexts/ThemeContext'
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  )
}

export default App
