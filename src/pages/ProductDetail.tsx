
const productPage = () => {
  return (
    <>
      <div className='productpage flex p-8  h-scren'>
        <div className='left w-6/12'>
          <div className='img w-full'>
            <img src='https://picsum.photos/400/400' alt='' />
          </div>
        </div>
        <div className='right w-6/12 p-8'>
          <div className='title text-4xl mt-8'>Title of product</div>
          <div className='price mt-4 text-2xl'>$401</div>
          <div className='desc mt-4'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              non? Molestiae optio eius voluptas architecto repudiandae sed
              iusto deserunt! Doloribus mollitia praesentium vero sunt?
            </p>
            <button className='bg-green-100 p-3 w-6/12 mt-4 text-sm rounded-3xl'>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default productPage
