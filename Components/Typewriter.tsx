// import Typewriter from '@/node_modules/react-typewriter-animate/dist/@types/Typewriter';
import React from 'react'
import { TypeAnimation } from "react-type-animation";
// import Typewriter from 'react-typewriter-animate';
// import "react-typewriter-animate/dist/Typewriter.css";

const TypewriterC = () => {
  return (
    <>
    <h1>
    <TypeAnimation sequence={['Adegbite Joshua',1000,'Welcome to my Portfolio',2000]} wrapper="span" speed={50} repeat={Infinity}/>
    </h1>
    {/* <div>
        <Typewriter
          dataToRotate={[
            [
              { type: "word", text: "Hello!" }
            ],
            [
              { type: "word", text: "I'm Anh Tu." }
            ]
          ]}
        />
    </div> */}
    
    </>
  )
}

export default TypewriterC