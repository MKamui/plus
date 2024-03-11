"use client"
import React, {useEffect} from 'react'
import Image from "next/image";
import Link from "next/link";
import rebel from "@/public/assets/rebel.webp"
import empire from "@/public/assets/empire.webp"
import Swal from "sweetalert2";
import {useAuthState} from "react-firebase-hooks/auth"
import {auth} from "@/app/firebase"
import { useRouter } from "next/navigation";

const Side = () => {
    const handleScum = () => {
        Swal.fire({
            text: "Go away rebel scum, this is the dark side!",
            imageUrl: "https://i.pinimg.com/736x/46/8f/14/468f14f43afbec1bee41f0e2f26043a0.jpg",
            imageAlt: "Darth Vader",
            showConfirmButton: false,
            timer: 4000
          });
        }
    const router = useRouter()
    const [user] = useAuthState(auth)
    useEffect(() => {
      if(user){
          router.push("/content")
      }
    }, [user]);
    
  return (
    <div className="pt-[5%] w-[70%] flex justify-between">
        <Image src={rebel} className="w-[40%] aspect-square object-cover object-center rounded-2xl hover:scale-105 cursor-pointer ease-in duration-300" onClick={handleScum} alt='Rebel icon'/>
        <Link href="/login" className='w-[40%] aspect-square'><Image src={empire} className="object-cover object-center rounded-2xl hover:scale-105 cursor-pointer ease-in duration-300" alt='Empire icon'/></Link>
    </div>
  )
}

export default Side