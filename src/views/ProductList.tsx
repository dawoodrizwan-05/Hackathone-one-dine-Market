import React from 'react'
import Image from "next/image"
import p1 from "/public/p1.webp"

const ProductList = () => {
  return (
    <div>
        <Image src={p1} alt="product" />
        <h3 className='font-bold text-lg'>Flex Sweatshirt</h3>
        <p className='font-bold text-lg'>$175</p>
    </div>
  )
}

export default ProductList