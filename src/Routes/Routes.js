import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Pages/Home";
import Products from "../components/Products/Products";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/products", element: <Products></Products> },
    ],
  },
]);
