"use client"

import React, {useEffect, useState} from 'react'
import categories from '@/app/mockup/categories'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import {useAuthState} from "react-firebase-hooks/auth"
import { useRouter } from 'next/navigation'
import { auth } from '@/app/firebase'


const ContentCategory = () => {
  const pathname = usePathname()
  const nameCategory = pathname.split('/').slice(2,3)
  const [user] = useAuthState(auth)
  const router = useRouter()

  useEffect(() => {
    if(!user){
      router.push("/login")
  }
  }, [])
  

return (
  <div className='w-full flex flex-col items-center py-[5%]'>
    {categories.filter(cat => cat.Name == nameCategory).map(data => (
      <div className='bg-red-500 rounded-xl w-[80%] h-fit p-[5%]' key={data.Name}>
        <h4 className='text-xl md:text-4xl lg:text-5xl xl:text-6xl 3xl:text-8xl 4xl:text-9xl 5xl:text-10xl text-center underline'>Content for {data.Name}</h4>
        <div className='text-sm md:text-xl lg:text-2xl xl:text-3xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl pt-[10%] flex flex-col space-y-[5%]'>
          <Link href={`/details/${data.Content1}`} className='hover:bg-black hover:text-red-500 hover:rounded-2xl hover:scale-105 ease-in duration-300 p-[2%]'><h4>{data.Content1}</h4></Link>
          <Link href={`/details/${data.Content2}`} className='hover:bg-black hover:text-red-500 hover:rounded-2xl hover:scale-105 ease-in duration-300 p-[2%]'><h4>{data.Content2}</h4></Link>
          <Link href={`/details/${data.Content3}`} className='hover:bg-black hover:text-red-500 hover:rounded-2xl hover:scale-105 ease-in duration-300 p-[2%]'><h4>{data.Content3}</h4></Link>
        </div>
        <div className='w-full flex justify-center pt-[5%] text-sm md:text-xl lg:text-2xl xl:text-3xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl'>
          <Link href="/content" className='w-[50%] h-fit p-[1%] flex items-center bg-gray-500 hover:scale-105 ease-in duration-300 justify-center rounded-2xl hover:bg-black hover:text-red-500 font-bold tracking-wide'><button>
            Return
          </button></Link>
        </div>
      </div>
    ))}
  </div>
)
}

export default ContentCategory