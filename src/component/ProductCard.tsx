import React, { useState } from 'react';

const ProductCard = ({ name, price }) => {
  
  const [product, setProduct] = useState({ name: '', price: '', qty: 0 });

  const [counter, setCounter] = useState(0);



  const handleClick = () => {
    // Increment the counter when clicked
    setCounter(counter + 1);

    setProduct({
      name: name,
      price: price,
      qty: counter + 1
    });

    // Call the setLocStor function to update localStorage with the updated product data
    setLocStor(product);
  };
  const setLocStor = (product) => {
    localStorage.setItem('product', JSON.stringify(product));
  };


  return (
    <div className="container sm:w-80 sm:h-auto w-40 h-auto bg-green-100 m-auto sm:mb-10 mb-4 sm:pt-2 pt-1 sm:pb-6 pb-2 rounded-xl">
      <div className="upperDiv sm:w-11/12 sm:h-64 w-11/12 h-32 bg-blue-100 m-auto sm:my-2 rounded-xl">
        <div className="imgDiv w-full h-full"></div>
      </div>
      <div className="lowerDiv sm:w-11/12 w-11/12 m-auto">
        <div className="title">
          <h1 className="sm:text-3xl text-sm">{name}</h1>
        </div>
        <div className="price-wishlist flex place-content-between items-center sm:mb-2">
          <h2 className="price sm:text-2xl text-xs">{price}</h2>
          <a href="#">
            <i className="ri-heart-line w-1/3 sm:text-lg text-xs font-thin"></i>
          </a>
        </div>
        <div className="add-to-cart flex w-9/12 bg-black justify-center items-center gap-4 text-white rounded-3xl sm:p-2 p-0.5 m-auto">
          <a href="#">
            <i className="ri-shopping-cart-line sm:text-base text-xs font-thin "></i>
          </a>
          <h3 className="sm:text-lg text-xs" onClick={handleClick}>
            Add to cart
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
