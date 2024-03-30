import ProductCard from '../component/ProductCard'

const Product = () => {
   const products = [
    { id: 0, name: 'Wheat', price: '2000' },
    { id: 1, name: 'Rice', price: '2500' },
    { id: 2, name: 'Corn', price: '1800' },
    { id: 3, name: 'Barley', price: '2200' },
    { id: 4, name: 'Soybean', price: '3200' },
    { id: 5, name: 'Sugarcane', price: '2500' },
    { id: 6, name: 'Cotton', price: '4000' },
    { id: 7, name: 'Potato', price: '20' },
    { id: 8, name: 'Tomato', price: '30' },
    { id: 9, name: 'Onion', price: '25' },
    { id: 10, name: 'Carrot', price: '35' },
    { id: 11, name: 'Cauliflower', price: '40' },
    { id: 12, name: 'Cabbage', price: '20' },
    { id: 13, name: 'Brinjal', price: '25' },
    { id: 14, name: 'Pumpkin', price: '30' }
];

  return (
    <div className='grid lg:grid-cols-3 grid-cols-2 gap-4'>
      {products.map((product, index) => (
        <ProductCard key={index} id={product.id} name={product.name} price={product.price} />
      ))}
    </div>
  )
}

export default Product
