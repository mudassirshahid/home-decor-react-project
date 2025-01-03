import React from 'react'
import { products } from '../products'
import ProductCart from '../components/productCart'
import CustomCarousel from '../components/customCarousel'
const Home = () => {
  return (
    <div className='p-5'>
      <CustomCarousel />
        <h1 id='products' className='text-3xl my-5 text-center'>List Products</h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
            {products.map((product, key) => 
                <ProductCart key={key} data={product}/>
            )}
        </div>
    </div>
  )
}

export default Home