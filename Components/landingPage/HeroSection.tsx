"use client"

import Image from '@/node_modules/next/image'
import React from 'react'
import Typewriter from './Typewriter'
import SkillsDiv from './SkillsDiv'


const HeroSection = () => {
  return (
    <>
        <div className='w-full p-2 grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 h-[650px] md:h-80 relative'>
            <div className='h-full text-white order-2 md:order-none'>
                <Typewriter />
            </div>
            <div style={{zIndex: '9999999999999999999'}} className='animate-slide-in-right absolute h-20 w-20 rounded-full left-1/2 top-1/2 md:top-3/4 transform -translate-x-1/2 -translate-y-1/4'>
              <SkillsDiv />
            </div>
            <div className='background h-full order-1 md:order-none'>
            </div>
        </div>
    </>
  )
}

export default HeroSection