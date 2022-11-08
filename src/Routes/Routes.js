import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../components/Login/Login";
import Home from "../components/Pages/Home";
import Products from "../components/Products/Products";
import Register from "../components/Register/Register";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/product", element: <Products></Products> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
    ],
  },
]);
