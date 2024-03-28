import ProductCard from '../component/ProductCard'

const Product = () => {
  const products = [
    { id: 1, name: 'Product 1', price: '₹599' },
    { id: 2, name: 'Product 2', price: '₹799' },
    { id: 3, name: 'Product 3', price: '₹999' }
    // Add more products as needed
  ]

  return (
    <div className='grid sm:grid-cols-3 grid-cols-2 gap-4'>
      {products.map((product, index) => (
        <ProductCard key={index} name={product.name} price={product.price} />
      ))}
    </div>
  )
}

export default Product
