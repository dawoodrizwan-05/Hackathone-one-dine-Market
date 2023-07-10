import React from 'react'
import p1 from "/public/p1.webp"
import ProductCard from '@/components/ProductCard'

const ProductList = () => {
  return (
    <div className='flex justify-evenly mt-16'>
        <ProductCard title="Flex Sweatshirt" price={175} img={p1}/>
        <ProductCard title="assjsj" price={14} img={p2}/>
        <ProductCard title="asd" price={123} img={p3}/>
       
    </div>
  )
}
 
export default ProductList