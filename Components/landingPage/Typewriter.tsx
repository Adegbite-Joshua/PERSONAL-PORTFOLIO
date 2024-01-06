// import Typewriter from '@/node_modules/react-typewriter-animate/dist/@types/Typewriter';
import React from 'react'
import { TypeAnimation } from "react-type-animation";
// import Typewriter from 'react-typewriter-animate';
// import "react-typewriter-animate/dist/Typewriter.css";

const TypewriterC = () => {
  return (
    <>
      <h1 className='text-4xl'>
        <TypeAnimation sequence={['Passionate full stack web developer creating user-centered experiences.',1000,'Translating complex ideas into elegant, functional code.',2000, 'Building innovative, impactful websites through continuous learning.', 2000]} wrapper="span" speed={50} repeat={Infinity}/>
      </h1>    
    </>
  )
}

export default TypewriterC