import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import Deals from "./pages/Deals";
import About from "./pages/About";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: < Home/>,
      },
      {
        path: '/deals',
        element: <Deals />
      },
      {
        path: '/about-us',
        element: <About />
      },
      {
        path: '/contact-us',
        element: <Contact />
      },
      {
        path: "/cart",
        element: < Cart/>,
      },
      {
        path: "/login",
        element: < Login/>,
      },
            {
        path: "/register",
        element: < Register/>,
      },
            {
        path: "/product",
        element: < Product/>,
      }
    ],
  },
]);

export default router;

