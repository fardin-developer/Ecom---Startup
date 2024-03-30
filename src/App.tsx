import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Product from './pages/Product'
import ProductDetails from './pages/ProductDetails'
import Animation from './component/Animation'

function App () {
  return (
    <>
      <Router>
        <Navbar />
        <Animation/>
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
