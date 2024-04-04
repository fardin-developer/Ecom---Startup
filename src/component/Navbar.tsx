import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { update } from '../features/search/searchSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
interface Product {
  id: number;
  name: string;
  price: string;
  quantity: number;
}

const Navbar= () => {
  const cartNumber = useSelector((state: RootState) => state.cartNumber.cartNumber);

  const [searchInput, setsearchInput] = useState<string>('');
  const [cartLength, setcartLength] = useState<number>()
  const dispatch = useDispatch()
  useEffect(() => {
    const existingproduct = localStorage.getItem("products");
    const existingProducts: Product[] = existingproduct ? JSON.parse(existingproduct) : [];
    setcartLength(existingProducts.length);

  }, [cartLength])
  

  const handleSearch = () => {
    dispatch(update(searchInput));

  }
  return (
    <div className='nav flex place-content-between h-28 w-100 '>
      <div className='left flex place-content-evenly items-center sm:w-1/4 w-1/6'>
        <Link to='/'>
          <img
            src='images/logo2.png'
            alt=''
            className='sm:rounded-full sm:w-52 sm:h-52 h-28'
          />
        </Link>
      </div>
      <div className='middle flex place-content-evenly items-center sm:w-1/2 w-5/12 '>
        <div className='searchBar flex h-10 w-full bg-gray-200 rounded-full place-content-around items-center'>
          <input
            className='outline-none bg-gray-200 ms-4 h-full w-4/5 '
            type='text'
            placeholder='Search Items'
            value={searchInput}
            onChange={e => {
              setsearchInput(e.target.value)
              // dispatch(update(e.target.value))
            }}
          />
          <button onClick={handleSearch}>
            <i className='ri-search-2-line sm:text-2xl p-2 text-l'></i>
          </button>
        </div>
      </div>
      <div className='right flex  place-content-evenly items-center w-1/6'>
        <div>
          <i className='ri-heart-line w-1/3 sm:text-3xl text-xl font-thin'></i>
        </div>

        <a href='/cart'>
          <i className='ri-shopping-cart-line sm:text-3xl text-xl font-thin'><span className='font-bold text-red-600'>{cartNumber}</span></i>
        </a>
      </div>
    </div>
  )
}

export default Navbar
