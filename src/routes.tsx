import { createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
export default router;
