import { AnimatePresence } from "framer-motion";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Event from "./pages/events";
import FeaturedPublications from "./pages/publications/featured";
import Anthology from "./pages/publications/anthology";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/events", element: <Event /> },
    { path: "/publications/featured", element: <FeaturedPublications /> },
    { path: "/publications/anthology", element: <Anthology /> },
  ]);

  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  );
}

export default App
