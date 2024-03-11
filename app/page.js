import Side from "@/components/Side";

export default function Home() {
  
  return (
    <main className="bg-black flex flex-col items-center text-center justify-center md:justify-start md:pt-[2%] w-full min-h-screen h-[700px] md:h-fit text-white text-xl md:text-4xl lg:text-5xl xl:text-6xl 3xl:text-8xl 4xl:text-9xl 5xl:text-10xl">
      <h1>Welcome to the dark side<br/> of entertainment</h1>
      <h2 className="pt-[5%]">Which side are you?</h2>
      <Side/>
    </main>
  );
}
