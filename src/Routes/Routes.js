import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Pages/Home";
import Main from "../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
    ],
  },
]);
