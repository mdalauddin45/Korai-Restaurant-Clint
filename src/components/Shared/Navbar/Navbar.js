import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-white shadow-lg text-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/my-review">My reviews</Link>
              </li>
              <li>
                <Link to="/add-service">Add Service</Link>
              </li>
            </ul>
          </div>
          <Link to="/">
            <img src={logo} className="w-12 my-2 mx-2" alt="" />
          </Link>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            KORAI
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/my-review">My reviews</Link>
            </li>
            <li>
              <Link to="/add-service">Add Service</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login">
            <button className=" dark:bg-green-600 block w-full p-3 text-center rounded dark:text-white ">
              Login
            </button>
          </Link>
          <Link to="/register" className="m-2">
            <button className=" dark:bg-green-600 block w-full p-3 text-center rounded dark:text-white">
              Register
            </button>
          </Link>
          <button className="btn">Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
