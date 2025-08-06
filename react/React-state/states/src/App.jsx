import Hudini from './components/Hudini'
import Landing from './components/Landing';
import Home from './components/Home';
import './App.css'
import { useState } from 'react'

function App() {
 const [data] = useState({
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
  return (
    <>
    <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg border border-gray-200">
      <Hudini />
    </div>
    <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg border border-gray-200">
      <Home store={data.store} />
    </div>
    <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg border border-gray-200">
      <Landing user={data.user} hottestItem={hottestItem}/>
    </div>
    </>
  )
}

export default App
