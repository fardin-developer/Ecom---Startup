import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Product from './pages/Product'
import ProductPage from './pages/ProductPage'
import ProductDetails from './pages/ProductDetails'

function App () {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />}></Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/product-page' element={<ProductDetails />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
