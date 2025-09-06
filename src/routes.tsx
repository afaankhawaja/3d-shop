import { createBrowserRouter } from "react-router-dom";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import About from "./Pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
export default router;
