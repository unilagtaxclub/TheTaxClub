import { AnimatePresence } from "framer-motion";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Event from "./pages/events";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/events", element: <Event /> },
  ]);

  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  );
}

export default App
