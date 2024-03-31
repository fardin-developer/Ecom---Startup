import Product from './Product'
import Animation from '../component/Animation'

const Home = () => {
  return (
    <>
      <Animation />

      <h1 className='text-center text-2xl mb-8 mt-4'>Home</h1>
      <Product />
    </>
  )
}

export default Home
