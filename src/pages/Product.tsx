import ProductCard from '../component/ProductCard'
import products from '../../public/data/products'
const Product = () => {
  

  return (
    <div className='grid lg:grid-cols-3 grid-cols-2 gap-4'>
      {products.map((product, index) => (
        <ProductCard key={index} id={product.id} name={product.name} price={product.price} />
      ))}
    </div>
  )
}

export default Product
