import React, { useState, useEffect } from 'react'
interface Product {
  id: number
  name: string
  price: string
  quantity: number
}
const Cart = () => {
  const [totalPrice, setTotalPrice] = useState<Number>(0)
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const storedProductsString = localStorage.getItem('products');
    const storedProducts: Product[] = storedProductsString 
      ? JSON.parse(storedProductsString)
      : [];
        let totalPrice = 0


    
    storedProducts.forEach(product => {
      let price = parseFloat(product.price.replace('₹', ''))
      let qty = product.quantity
      let totalPriceForProduct = price * qty
      totalPrice += totalPriceForProduct
    })

    setTotalPrice(totalPrice)
    setProducts(storedProducts)
  }, [])

  return (
   <>
   <h1 className='text-center mt-4'>Cart Page</h1>
    <div className='cartPage w-screen h-auto bg-yellow flex pr-6 pt-6'>
      <div className='left w-8/12 h-auto  bg-red-'>
        {products.map((product, index) => (
          <div
            key={index}
            className='item bg-green-50 h-22 m-auto w-10/12 flex justify-between mb-3 items-center p-3 cursor-pointer rounded shadow-md hover:shadow-xl transition duration-500 transform hover:scale-110'
            >
            <div className='img w-20 bg-yellow-400'>
              <img src='/public/images/logo2.png' alt={product.name} />
            </div>
            <div className='title-qty'>{product.name}</div>
            <div className='title-qty'>{product.quantity}</div>
            <div className='price'>{product.price}</div>
          </div>
        ))}
      </div>
      <div className='right w-2/6'>
        <div className='priceSummary flex flex-col w-full h-auto m-auto bg-gray-100 rounded'>
          <div className='title-price m-auto mt-4 w-full flex flex-col p-8 border-b border-gray-300'>
            {products.map((product, index) => (
              <div
                key={index}
                className='flex justify-between items-center mt-4 mb-4 border-b border-gray-300'
              >
                <div className='title'>{product.name}</div>
                <div className='price'>{Number(product.price.replace(/[^\d.-]/g, ''))*Number(product.quantity)} ₹</div>
                
              </div>
            ))}
          </div>
          <div className='tax-price m-auto w-full flex justify-between items-center p-8'>
            <div className='tax'>
              <p>Tax</p>
            </div>
            <div className='price'>18%</div>
          </div>
          <div className='total-price m-auto w-full flex justify-between items-center p-8'>
            <div className='tax'>
              <p>Total</p>
            </div>
            <div className='price'>Rs {(Number(totalPrice)+(Number(totalPrice) * 18) / 100).toFixed(2)}</div>
          </div>
        </div>
        <button className='button w-full m-auto mt-4 bg-red-300 p-3 flex rounded items-center justify-center shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105'>
          <p>Check Out</p>
        </button>
      </div>
    </div>
    </>
  )
}

export default Cart
