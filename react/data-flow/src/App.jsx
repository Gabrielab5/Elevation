import Gallery from './Gallery'
import './App.css'

function App() {

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Image Gallery</h1>
        <Gallery />
      </div>      
    </>
  )
}

export default App
