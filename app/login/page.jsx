import Login from "@/components/Login"
import Image from "next/image"
import vaderTop from "@/public/assets/vaderTop.webp"

const page = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center space-y-[5%] pt-[2%]'>
        <Image src={vaderTop} className="w-[30%]" alt="Darth Vader"/>
        <h1 className="text-xl md:text-4xl lg:text-5xl xl:text-6xl 3xl:text-8xl 4xl:text-9xl 5xl:text-10xl">Join the dark side</h1>
        <Login/>
    </div>
  )
}

export default page