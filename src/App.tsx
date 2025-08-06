import { ThemeProvider } from './contexts/ThemeContextProvider'
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  )
}

export default App
