import Home from './pages/Home'
import Cart from './pages/Cart'
import './App.css'
import Navbar from './component/Navbar'
import Product from './pages/Product'
function App () {
  return (
    <div>
       <Navbar />
     {/* <Home />
      <Product/> */}
      <Cart />
    </div>
  )
}

export default App
