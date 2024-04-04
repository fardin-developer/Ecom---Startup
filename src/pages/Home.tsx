import { useEffect, useState } from 'react';
import Product from './Product'
import Animation from '../component/Animation'
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import 'react-toastify/dist/ReactToastify.css'

const Home = () => {
  const cartNumber = useSelector((state: RootState) => state.cartNumber.cartNumber);
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    if (!initialRender && cartNumber !== 0) {
      toast.success('Product has been added to Cart', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    setInitialRender(false);
  }, [cartNumber]); 

  return (
    <>
      <div className='min-h-screen m-auto'>
        <Animation />
        <h1 className='text-center text-3xl mb-8 mt-4'>Home</h1>
        <Product />
        <ToastContainer />
       
      </div>
    </>
  )
}

export default Home;
