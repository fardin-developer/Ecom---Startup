import React from 'react';

interface AnimationProps {
  color2: boolean;
  color3: boolean;
}

const Animation2: React.FC<AnimationProps> = ({ color2, color3 }) => {
  return (
    <>
      <div className="bg-gray-100 pt-4 pb-12 rounded-lg shadow-lg w-11/12 m-auto relative ml-auto mr-auto">
        <h1 className="text-3xl text-center mt-3 mb-3">Easy Steps</h1>

        <div className="banner flex items-center justify-between m-auto w-11/12 text-gray-700 ">
          <div className="absolute left-0 right-0 h-7 rounded-2xl  mx-auto w-11/12 bg-green-100"></div>

          <div className={`step relative w-24 h-16 flex rounded-full flex-col justify-center items-center z-3 text-center rounded ${color2 ? 'bg-green-200' : 'bg-green-100'} w-44`} id="step1">
            <img src="/images/check.png" alt="" width={'17px'} className="z-10" />
            <p className="animate-visible text-xs">Select</p>
          </div>

          <div className={`step relative w-32 h-24 flex rounded-full flex-col justify-center items-center z-3 text-center rounded ${color2 ? 'bg-green-200' : 'bg-green-100'} w-44`} id="step2">
            <img src="/images/cart.png" alt="" width={'30px'} className="z-10" />
            <p className="animate-visible">Add to cart</p>
          </div>

          <div className={`step relative w-32 h-24 flex rounded flex-col justify-center items-center z-3 text-center rounded-full ${color3 ? 'bg-green-200' : 'bg-green-100'} w-44`}>
            <img src="/images/checkout.png" alt="" width={'17px'} className="z-10" />
            <p className="animate-visible text-xs">Check Out</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Animation2;
