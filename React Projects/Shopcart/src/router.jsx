import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";

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

