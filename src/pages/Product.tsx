import ProductCard from '../component/ProductCard'

const Product = () => {
  const products = [
    { id: 0, name: 'Wheat', price: '₹2000 per quintal' },
    { id: 1, name: 'Rice', price: '₹2500 per quintal' },
    { id: 2, name: 'Corn', price: '₹1800 per quintal' },
    { id: 3, name: 'Barley', price: '₹2200 per quintal' },
    { id: 4, name: 'Soybean', price: '₹3200 per quintal' },
    { id: 5, name: 'Sugarcane', price: '₹2500 per ton' },
    { id: 6, name: 'Cotton', price: '₹4000 per quintal' },
    { id: 7, name: 'Potato', price: '₹20 per kg' },
    { id: 8, name: 'Tomato', price: '₹30 per kg' },
    { id: 9, name: 'Onion', price: '₹25 per kg' },
    { id: 10, name: 'Carrot', price: '₹35 per kg' },
    { id: 11, name: 'Cauliflower', price: '₹40 per piece' },
    { id: 12, name: 'Cabbage', price: '₹20 per kg' },
    { id: 13, name: 'Brinjal', price: '₹25 per kg' },
    { id: 14, name: 'Pumpkin', price: '₹30 per kg' }
  ]

  return (
    <div className='grid lg:grid-cols-3 grid-cols-2 gap-4'>
      {products.map((product, index) => (
        <ProductCard key={index} id={product.id} name={product.name} price={product.price} />
      ))}
    </div>
  )
}

export default Product
