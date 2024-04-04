import ProductCard from '../component/ProductCard';
import products from '../products';
import { RootState } from '../app/store';
import { useSelector, shallowEqual } from 'react-redux';

const Product = () => {
  const searchData = useSelector((state: RootState) => state.search.searchValue, shallowEqual);
  const pageNo = useSelector((state: RootState) => state.pageNumber.pageValue, shallowEqual);
  const productsPerPage = 16;
  
  const startIndex = (pageNo - 1) * productsPerPage;

  const filteredProducts = products
    .filter(product => product.name.toLowerCase().startsWith(searchData?.toLowerCase() || ''))
    .slice(startIndex, startIndex + productsPerPage);

  return (
    <div className='grid lg:grid-cols-3 grid-cols-2 gap-4 mb-24'>
      {filteredProducts.map((product, index) => (
        <ProductCard key={index} id={product.id} name={product.name} price={product.price} image={product.image || 'https://masterbundles.com/wp-content/uploads/2023/04/2106.m02.i008.n028--673-1024x678.jpg'} />
      ))}
    </div>
  );
};

export default Product;
