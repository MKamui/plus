import ContentDetails from "@/components/ContentDetails"
import Navbar from "@/components/Navbar"

const page = ({ params }) => {
    return (
      <main>
        <Navbar/>
        <ContentDetails params={params} />
      </main>
    )
  }
  
  export default page