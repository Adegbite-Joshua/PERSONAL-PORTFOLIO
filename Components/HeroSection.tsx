"use client"

import Image from '@/node_modules/next/image'
import React from 'react'
import Typewriter from './Typewriter'
import SkillsDiv from './SkillsDiv'


const HeroSection = () => {
  return (
    <>
        <div className='w-full grid grid-cols-2 h-72 relative'>
            <div className='h-full text-white'>
                <Typewriter />
            </div>
            <div style={{zIndex: '9999999999999999999'}} className='absolute h-20 w-20 rounded-full left-1/2 top-3/4 transform -translate-x-1/2 -translate-y-1/4'>
              <SkillsDiv />
            </div>
            <div className='h-full background'>
              {/* <Image alt='Profile Image' src='/image.jpg' layout="fill" objectFit="cover" /> */}
            </div>
        </div>
    </>
  )
}

export default HeroSection