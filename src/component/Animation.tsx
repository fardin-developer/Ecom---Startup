import { useState, useEffect } from "react"



const Animation = () => {
  const [step1, setStep1] = useState<Boolean>(true);
  const [step2, setStep2] = useState<Boolean>(false);
  const [step3, setStep3] = useState<Boolean>(false);


  useEffect(() => {
    setTimeout(() => {
      if (step1) {
        setStep1(false)
        setStep2(true);
        setStep3(false)
      } else if (step2) {
        setStep2(false)
        setStep1(false)
        setStep3(true)
      } else {
        setStep1(true)
        setStep2(false)
        setStep3(false)
      }

    }, 2300);
  }, [step1, step2, step3])



  return (
    <>
      <div className="bg-gray-100 pt-6 pb-16 rounded-lg shadow-lg w-11/12 m-aut relative ml-auto mr-auto">
        <h1 className="text-3xl text-center mt-3 mb-3">Easy Steps</h1>

        <div className={`banner flex items-center justify-between m-auto w-11/12 text-gray-700 `}>
          <div className={`absolute left-0 right-0 h-10 rounded-2xl  mx-auto w-11/12 ${step1 ? 'bg-green-100' : (step2 ? 'bg-green-200' : 'bg-green-300')}`}>
          </div>
          <audio src="/sounds/click.mp3">Play</audio>

          <div className={`step relative w-32 h-32 flex rounded-full flex-col justify-center items-center z-3 text-center rounded  ${step1 ? ' bg-green-100 w-44' : ''}`} id="step1">
            <img src="/images/check.png" alt="" width={'30px'} className="z-10" />
            <p className={`${step1 ? 'animate- visible' : 'hidden'}`}>Select</p>
          </div>
          <div className={`step relative w-32 h-32 flex rounded-full flex-col justify-center items-center z-3 text-center rounded ${step2 ? 'bg-green-200 w-44' : ''}`} id="step2">
            <img src="/images/cart.png" alt="" width={'30px'} className="z-10" />
            <p className={`${step2 ? 'animate- visible' : 'hidden'}`}>Add to cart</p>
          </div>
          <div className={`step relative w-32 h-32 flex rounded flex-col justify-center items-center z-3 text-center rounded-full ${step3 ? 'animate-pulse	 bg-green-300 w-44 ' : ''}`} id="step3">
            <img src="/images/checkout.png" alt="" width={'30px'} className="z-10" />
            <p className={`${step3 ? 'animate- visible' : 'hidden'}`}>Check Out</p>
          </div>






        </div>
      </div>
    </>
  )
}

export default Animation