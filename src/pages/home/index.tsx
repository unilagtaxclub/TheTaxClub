import Header from "../../component/defaults/Header"
import About from "../../component/sections/About"
import Hero from "../../component/sections/Hero"
import LogoScroll from "../../component/sections/LogoScroll"
import Testimonials from "../../component/sections/Testimonials"

const Home = () => {
  return (
    <div className="bg-[#f2f2f2] min-h-screen pt-10">
        <Header />
        <Hero />
        <About />
        <LogoScroll />
        <Testimonials />
    </div>
  )
}

export default Home
