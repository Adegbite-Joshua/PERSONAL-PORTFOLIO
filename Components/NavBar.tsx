'use client'

import React from 'react'
import NavButton from './NavButton'
import Link from 'next/link';


const NavBar = () => {
  // const router = useRouter();

  // const isActive = (pathname) => {
  //   return router.pathname === pathname;
  // };

  return (
    <>
        <div className='flex justify-center h-24'>
            <ul className='flex my-auto text-white gap-x-10 bg-white bg-opacity-10 p-3 rounded-lg shadow-lg'>
                <li><Link href='/'><NavButton name='ADEGBITE JOSHUA' /></Link></li>
            </ul>
            <button className=''><i className='fas fa-bars text-2xl'></i></button>
            <ul className='hidden md:flex my-auto text-white gap-x-10 bg-white bg-opacity-10 p-3 rounded-lg shadow-lg'>
                <li><Link href='/'><NavButton name='PROJECTS' /></Link></li>
                <li><NavButton name='RESUME' /></li>
                <li><NavButton name='CONTACT ME' /></li>
                <li><NavButton name='HIRE ME' /></li>
            </ul>
        </div>
    </>
  )
}

export default NavBar