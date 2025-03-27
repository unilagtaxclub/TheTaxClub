import Header from "../../component/defaults/Header"
import About from "../../component/sections/About"
import BlogStories from "../../component/sections/BlogStories"
import Events from "../../component/sections/Events"
import Hero from "../../component/sections/Hero"
import Leadership from "../../component/sections/Leadership"
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
        <BlogStories />
        <Leadership />
        <Events />
    </div>
  )
}

export default Home
