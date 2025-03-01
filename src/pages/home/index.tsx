import Header from "../../component/defaults/Header"
import About from "../../component/sections/About"
import Hero from "../../component/sections/Hero"

const Home = () => {
  return (
    <div className="bg-[#f2f2f2] min-h-screen pt-10">
        <Header />
        <Hero />
        <About />
    </div>
  )
}

export default Home
