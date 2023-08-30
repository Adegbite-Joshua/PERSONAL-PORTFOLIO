"use client"

import Image from '@/node_modules/next/image'
import React from 'react'
import Typewriter from './Typewriter'


const HeroSection = () => {
  return (
    <>
        <div className='w-full grid grid-cols-2 border-1 border-red-500 h-52 bg-white relative'>
            <div className='h-full border border-1 border-green-500'>
                <Typewriter />
            </div>
            <div className='absolute h-20 w-20 rounded-full bg-black left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/4'>
              
            </div>
            <div className='h-full border border-1 border-green-500'>
              <Image src='/image.jpg' height='100' width='100' />
            </div>
        </div>
    </>
  )
}

export default HeroSection