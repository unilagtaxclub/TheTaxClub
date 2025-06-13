import { AnimatePresence } from "framer-motion";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import FeaturedPublications from "./pages/publications/featured";
import Anthology from "./pages/publications/anthology";
import Blog from "./pages/blog";
import BlogPost from "./pages/blog/BlogPost";
import OurPeople from "./pages/people";
import Gallery from "./pages/gallery";
import Tntd from "./pages/programmes/tntd";
import Tte from "./pages/programmes/tte";
import Ttss from "./pages/programmes/ttss";
import Ttm from "./pages/programmes/ttm";
import Ttw from "./pages/programmes/ttw";
import Pasec from "./pages/programmes/pasec";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/publications/featured", element: <FeaturedPublications /> },
    { path: "/publications/anthology", element: <Anthology /> },
    { path: "/blog", element: <Blog /> },
    { path: "/blog/:slug", element: <BlogPost /> },
    { path: "/our-people", element: <OurPeople /> },
    { path: "/gallery", element: <Gallery /> },

    // programme links
    { path: "/programmes/tntd", element: <Tntd /> },
    { path: "/programmes/tte", element: <Tte /> },
    { path: "/programmes/ttss", element: <Ttss /> },
    { path: "/programmes/ttm", element: <Ttm /> },
    { path: "/programmes/ttw", element: <Ttw /> },
    { path: "/programmes/pasec", element: <Pasec /> },
  ]);

  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  );
};

export default App;
