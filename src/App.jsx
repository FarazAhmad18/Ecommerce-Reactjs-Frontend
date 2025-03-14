import './index.css';
import React from 'react'
import CartPage from './Pages/Cart-page';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
   <Navbar/>
      <CartPage/>
      <Footer/>
    </div>
  )
}

export default App
