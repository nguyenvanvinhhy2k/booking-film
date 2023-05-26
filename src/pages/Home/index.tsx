import Body from "../../components/Layout/Body"
import Footer from "../../components/Layout/Footer"
import Header from "../../components/Layout/Header"

function Home() {

  return (
    <div className="flex items-center justify-center">
      <div className="w-full">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  )
}

export default Home
