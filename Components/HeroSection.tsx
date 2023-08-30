import React from 'react'
import Typewriter from './Typewriter'

const HeroSection = () => {
  return (
    <>
        <div className='w-full grid grid-cols-2 bottom-1 border-red-500 h-52 bg-white'>
            <div>
                <Typewriter />
            </div>
            <div></div>
        </div>
    </>
  )
}

export default HeroSection