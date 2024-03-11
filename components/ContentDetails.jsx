"use client"

import React, {useEffect, useState} from 'react'
import content from '@/app/mockup/content'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import {useAuthState} from "react-firebase-hooks/auth"
import { useRouter } from 'next/navigation'
import { auth } from '@/app/firebase'


const ContentDetails = () => {
    const pathname = usePathname()
    const nameContent = pathname.split('/').slice(2,3)
    const [user] = useAuthState(auth)
    const router = useRouter()

    useEffect(() => {
      if(!user){
        router.push("/login")
    }
    }, [])
    

  return (
    <div className='w-full flex flex-col items-center py-[5%]'>
      {content.filter(cont => cont.Name == nameContent).map(data => (
        <div className='bg-red-500 rounded-xl w-[80%] h-fit p-[5%] text-center' key={data.Name}>
          <h4 className='text-xl md:text-4xl lg:text-5xl xl:text-6xl 3xl:text-8xl 4xl:text-9xl 5xl:text-10xl underline'>{data.Name}</h4>
          <p className='pt-[10%] text-sm md:text-xl lg:text-2xl xl:text-3xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl'>{data.Summary}</p>
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

export default ContentDetails