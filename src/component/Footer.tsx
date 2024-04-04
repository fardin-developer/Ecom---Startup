import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { decrement, increment } from '../features/pageNumber/pageSlice';

const Footer = () => {
  const pageNo = useSelector((state: RootState) => state.pageNumber.pageValue);
  const dispatch = useDispatch();
  const [totalPages, setTotalPages] = useState<number>();

  useEffect(() => {
    setTotalPages(Math.floor(40 / 16)+1);
  }, []);

  return (
    <>
      <div className="fixed w-screen bg-black text-white p-4 flex items-center justify-center bottom-0	mt-4">
        <button
          disabled={pageNo === 1}
          onClick={() => dispatch(decrement())}
          className="mr-2 py-2 px-4 rounded bg-green-50 text-gray-600 disabled:bg-gray-800 disabled:text-black"
        >
          Previous
        </button>
        <span>{`Page ${pageNo} of ${totalPages}`}</span>
        <button
          disabled={pageNo === totalPages}
          onClick={() => dispatch(increment())}
          className="ml-2 py-2 px-4 rounded bg-green-50 text-gray-600 disabled:bg-gray-800 disabled:text-black"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Footer;
