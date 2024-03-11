import ContentCategory from "@/components/ContentCategory"
import Navbar from "@/components/Navbar"

const page = ({ params }) => {
    return (
      <main>
        <Navbar/>
        <ContentCategory params={params} />
      </main>
    )
  }
  
  export default page