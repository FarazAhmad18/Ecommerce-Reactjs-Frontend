import './index.css';
import React from 'react'
import CartPage from './Pages/Cart-page';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import About from './Pages/About';
import Productdetail from './Pages/Productdetail';
import WishlistPage from './Pages/WishlistPage';
import ErrorNotFound from './Pages/ErrorNotFound';
const router = createBrowserRouter([
  {
    path:'/',
    element:(
      <div>
        <Navbar/>
        <MainPage/>
        <Footer/>
      </div>
    ),
  },
  {
    path:'/cart',
    element:(
      <div>
        <Navbar/>
        <CartPage/>
        <Footer/>
      </div>
    )
  },
  {
    path:'/about',
    element:([
      <div>
        <Navbar/>
        <About/>
        <Footer/>
      </div>
    ])
  },
  {
    path:'/productdetail',
    element:([
      <div>
        <Navbar/>
        <Productdetail/>
        <Footer/>
      </div>
    ])
  },
  {
    path:'/wishlist',
    element:(
      <div>
        <Navbar/>
        <WishlistPage/>
        <Footer/>
      </div>
    )
  },
  {
    path:'/NotFoundError',
    element:(
      <div>
        <Navbar/>
        <ErrorNotFound/>
        <Footer/>
      </div>
    )
  }
])

const App = () => {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
