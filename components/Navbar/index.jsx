"use client"
import Image from 'next/image';
import menuIcon from '@/public/assets/menuIcon.svg';
import React, { useState } from 'react';
import Link from 'next/link';
import NavLinks from './NavLinks';
import empire from '@/public/assets/empire.webp'
import { auth } from '@/app/firebase'
import { signOut } from 'firebase/auth'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev)=>!prev);
  };  
  const handleModalClick = (event) => {
    event.stopPropagation();
  };
  return (
    <>
    <nav className={`sticky  top-0 z-50 flex flex-col items-center bg-red-700 transition-all duration-300 text-white w-full h-[50px] sm:h-[60px] md:h-[65px] xl:h-[90px] 3xl:h-[120px] 4xl:h-[160px]`}>
      <div className={` relative h-full top-0 z-1 w-full max-w-screen-5xl `}>
        <div className='flex items-center h-full xl:text-base justify-between px-[6%] xl:px-[100px] 3xl:px-[250px] 4xl:px-[14.648%]'>
          
          <Link href='/content' className='flex relative h-full w-[80px] min-w-[50px] sm:w-[100px] xl:w-[140px] items-center justify-center md:z-50 3xl:w-[180px] 4xl:w-[300px]'>
            <Image src={empire} className='rounded-full'/>
          </Link>
          <div className='xl:flex w-fit justify-end hidden h-full items-center gap-[50px] 3xl:gap-[70px] 4xl:gap-[120px] 5xl:gap-[120px]'>          
            <NavLinks handleMenu={handleClick}/>          
          </div>
          <div className='h-full md:w-[140px] flex xl:hidden items-center justify-end z-50' onClick={handleClick} >
            <Image alt='menu Icon' priority={true} src={menuIcon} className=' w-[20px] h-[15px] md:w-[25px] md:h-[25px] object-contain object-center text-base '/>
          </div>
          <button onClick={() => signOut(auth)} className='hover:underline-offset-[6px] xl:hover:underline decoration-2 text-sm md:text-lg lg:text-xl xl:text-2xl 3xl:text-5xl 4xl:text-6xl 5xl:text-7xl'>
            <h3>Log out</h3>
          </button>
          
        </div>
          
      </div>
    </nav>

    {/* Mobile */}
    <div className={`
          xl:hidden z-40 font-normal fixed h-full w-[100vw] bg-black bg-opacity-50 transition-all top-0 p-3  overflow-y-auto right-0
          duration-500 text-black ${open ? 'right-0 opacity-100': 'right-[-100%] opacity-0'}
          `}
          onClick={handleClick}>
        <div className={`
          xl:hidden z-50 font-normal fixed h-full w-full transition-all sm:w-[370px] text-medium-blue bg-white top-0  overflow-y-auto right-0 pt-[20vw] sm:pt-0 duration-500 ${open ? 'right-0 ' : 'right-[-100%]'}
          `}
          onClick={handleModalClick}>
         
          <div className="flex h-full sm:pt-[60px] md:pt-[65px] flex-col items-start text-base">
          <NavLinks handleMenu={handleClick}/>

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar