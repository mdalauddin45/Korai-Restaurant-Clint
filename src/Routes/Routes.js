import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../components/Login/Login";
import Home from "../components/Pages/Home";
import AddProduct from "../components/Products/AddProduct";
import ProductDetails from "../components/Products/ProductDetails";
import Products from "../components/Products/Products";
import Profile from "../components/Profile/Profile";
import Register from "../components/Register/Register";
import Review from "../components/Review/Review";
import UpdateReview from "../components/Review/UpdateReview";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

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
      { path: "/profile", element: <Profile></Profile> },
      { path: "/blog", element: <Blog></Blog> },
      {
        path: "/review",
        element: (
          <PrivateRoute>
            <Review></Review>
          </PrivateRoute>
        ),
      },
      {
        path: "/review/update/:id",
        element: <UpdateReview></UpdateReview>,
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-kappa.vercel.app/product/${params.id}`
          ),
      },
    ],
  },
]);
