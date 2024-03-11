"use client"
import React, {useEffect, useState} from 'react'
import {useAuthState} from "react-firebase-hooks/auth"
import { auth } from '@/app/firebase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import usersData from "@/app/mockup/data"

const Home = () => {
    const [user] = useAuthState(auth)
    const router = useRouter()
    const [emailUser, setEmailUser] = useState()

    useEffect(() => {
        if(!user){
            router.push("/login")
        }
        if(user){
            setEmailUser(user.email)
        }
      }, [user]);
    

  return (
    <div className='w-full flex flex-col items-center text-center py-[5%]'>
        {usersData.filter((user) => user.Email === emailUser).map((data) =>
            <div className='w-full flex flex-col items-center pt-[2%]'>
                <h3 className='text-xl md:text-4xl lg:text-5xl xl:text-6xl 3xl:text-8xl 4xl:text-9xl 5xl:text-10xl'>Welcome Again</h3>
                <h3 className='text-xl md:text-4xl lg:text-5xl xl:text-6xl 3xl:text-8xl 4xl:text-9xl 5xl:text-10xl'>{data.Name}</h3>
                <div className='pt-[5%] w-[80%] grid grid-cols-2 md:grid-cols-3 place-items-center gap-y-[5%] text-sm md:text-xl lg:text-2xl xl:text-3xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl'>
                    <Link href={`/content/${data.Category1}`} className='bg-red-500 w-[80%] aspect-square rounded-2xl hover:scale-105 ease-in duration-300'>
                    <div className='w-full h-full flex items-center justify-center'>
                        <h4>{data.Category1}</h4>
                    </div>
                    </Link>
                    <Link href={`/content/${data.Category2}`} className='bg-red-500 w-[80%] aspect-square rounded-2xl hover:scale-105 ease-in duration-300'>
                    <div className='w-full h-full flex items-center justify-center'>
                        <h4>{data.Category2}</h4>
                    </div>
                    </Link>
                    <Link href={`/content/${data.Category3}`} className='bg-red-500 w-[80%] aspect-square rounded-2xl hover:scale-105 ease-in duration-300'>
                    <div className='w-full h-full flex items-center justify-center'>
                        <h4>{data.Category3}</h4>
                    </div>
                    </Link>
                    <Link href={`/content/${data.Category4}`} className='bg-red-500 w-[80%] aspect-square rounded-2xl hover:scale-105 ease-in duration-300'>
                    <div className='w-full h-full flex items-center justify-center'>
                        <h4>{data.Category4}</h4>
                    </div>
                    </Link>
                    <Link href={`/content/${data.Category5}`} className='bg-red-500 w-[80%] aspect-square rounded-2xl hover:scale-105 ease-in duration-300'>
                    <div className='w-full h-full flex items-center justify-center'>
                        <h4>{data.Category5}</h4>
                    </div>
                    </Link>
                </div>
            </div>
        )}
    </div>    
  )
}

export default Home