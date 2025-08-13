import './App.css'
import ShoppingCart from './Ex1/ShoppingCart'
import Layout from './Ex2/Layout';
import { ThemeProvider } from './Ex2/ThemeContext';
import { FormProvider } from './Ex3/FormContext'; 
import MultiStepForm from './Ex3/MultiStepForm';

function App() {

  return (
  <FormProvider>
      <div className="App">
        <h1>Form</h1>
        <MultiStepForm />
      </div>
    </FormProvider>
  )
}

export default App
