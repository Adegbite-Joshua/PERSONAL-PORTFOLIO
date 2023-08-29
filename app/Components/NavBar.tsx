'use client'

import React from 'react'
import NavButton from './NavButton'
// import { useRouter } from 'next/router';
// import Link from 'next/link';
// import { useRouter } from '@/node_modules/next/router';


const NavBar = () => {
  // const router = useRouter();

  // const isActive = (pathname) => {
  //   return router.pathname === pathname;
  // };

  return (
    <>
        <div className='flex justify-center h-24'>
            <ul className='flex my-auto text-white gap-x-10 bg-white bg-opacity-10 p-3 rounded-lg shadow-lg'>
                {/* <li><Link to='/'><NavButton name='ADEGBITE JOSHUA' /></Link></li> */}
                <li><NavButton name='PROJECTS' /></li>
                <li><NavButton name='RESUME' /></li>
                <li><NavButton name='CONTACT ME' /></li>
                <li><NavButton name='HIRE ME' /></li>
            </ul>
        </div>
    </>
  )
}

export default NavBar