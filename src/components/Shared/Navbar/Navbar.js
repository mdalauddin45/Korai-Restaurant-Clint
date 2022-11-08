import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { toast } from "react-toastify";
import { AuthContext } from "../../../contexts/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  // console.log(user);

  //navigate
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //log out
  const handleLogOut = () => {
    logout()
      .then(() => {
        navigate(from, { replace: true });
        toast.warning("log out successfuly");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
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
          {user?.email ? (
            <>
              <Link
                to="/profile"
                className="py-1 px-2  rounded-full bg-green-400 text-xl text-white"
              >
                <FontAwesomeIcon icon={faUser} />
              </Link>
              <button className="p-2" onClick={handleLogOut}>
                <FontAwesomeIcon icon={faRightFromBracket} />
              </button>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
