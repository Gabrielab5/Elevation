import Hudini from './components/Hudini'
import Landing from './components/Landing';
import Home from './components/Home';
import './App.css'
import { useState } from 'react'

function App() {
 const [data, setData] = useState({
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
    ],
    shouldDiscount: false,
    currentPage: "Landing"
 })
   const hottestItem = data.store.find(item => item.hottest);

  const navigateTo = (page) => {
    setData(prevData => ({
      ...prevData,
      currentPage: page
    }));
  };

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100"><div className="flex justify-center gap-4 mb-6 w-full max-w-2xl">
        <button
          onClick={() => navigateTo("Landing")}
          className={`px-6 py-3 rounded-lg shadow-md font-semibold transition-all duration-300 ease-in-out transform hover:scale-105
            ${data.currentPage === "Landing" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}
        >
          Go to Landing
        </button>
        <button
          onClick={() => navigateTo("Home")}
          className={`px-6 py-3 rounded-lg shadow-md font-semibold transition-all duration-300 ease-in-out transform hover:scale-105
            ${data.currentPage === "Home" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}
        >
          Go to Home
        </button>
      </div>

      <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        {data.currentPage === "Landing" ? (
          <Landing user={data.user} hottestItem={hottestItem} />
        ) : (
          <Home store={data.store} />
        )}
      </div>
    </div>
    
    <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg border border-gray-200">
      <Hudini />
    </div>
   
    </>
  )
}

export default App
