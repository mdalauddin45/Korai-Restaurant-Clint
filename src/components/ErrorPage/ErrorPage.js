import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto text-center pt-20">
      <img
        className="w-100"
        src="http://themes.potenzaglobalsolutions.com/html/nezzy/images/404.png"
        alt=""
      />
      <br />
      <div>
        <h1 className="text-5xl font-bold text-gray-900 pb-10 pt-10">
          Opps! Page Not Found
        </h1>
        <h1 className="text-gray-900 pb-10">
          Can't find what you looking for? Take a moment and do a search below
          or start from our <Link className="text-green-500">Home Page</Link>
        </h1>
        <div className="pb-32">
          <Link to="/">
            <span className="px-5 py-2 font-semibold rounded bg-green-500 text-white ">
              Go back to the homepage
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
