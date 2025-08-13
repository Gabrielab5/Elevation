import './App.css'
import ShoppingCart from './ShoppingCart'
import Layout from './Ex2/Layout';
import { ThemeProvider } from './Ex2/ThemeContext';

function App() {

  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  )
}

export default App
