import Container from "../../component/defaults/Container";
import Footer from "../../component/defaults/Footer";
import About from "../../component/sections/About";
import BlogStories from "../../component/sections/BlogStories";
import Feedback from "../../component/sections/Feedback";
import Hero from "../../component/sections/Hero";
import LogoScroll from "../../component/sections/LogoScroll";
import Programmes from "../../component/sections/Programmes";
import Upcoming from "../../component/sections/Upcoming";

const Home = () => {
  return (
    <Container>
      <div className="bg-[#f2f2f2] min-h-screen overflow-x-hidden">
        <Hero />
        <LogoScroll />
        <About />
        <Upcoming />
        <Programmes />
        <Feedback />
        <BlogStories />
        <Footer active="Home" />
      </div>
    </Container>
  );
};

export default Home;
