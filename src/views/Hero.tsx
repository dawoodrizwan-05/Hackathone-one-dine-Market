import React from 'react'
import Image from "next/image"
import { Badge } from '@/components/ui/badge'
import { Button } from "@/components/ui/button"
import heroImage from "/public/hero-Img.webp"

function Hero() {
  return (
    <section className='flex' py-6>
       {/*left*/}
         <div className='flex-1'>
         <Badge className='py-3 px-6 rounded-lg bg-blue-200 text-blue-700 '>Sale 70 %</Badge>
         <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
         An Industrial Take on Streetwear
      </h1>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
         Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
      </p>
      <Button className='bg-black h-12 mt-4'>Start shopping</Button>
         </div>

       {/*right*/}
         <div className='flex-1'>
            <Image src={heroImage} alt="hero" />
         </div>
    </section>
  )
}

export default Hero