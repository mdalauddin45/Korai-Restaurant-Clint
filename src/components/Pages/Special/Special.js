import React from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/sp-2.png";

const Special = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2 max-w-screen-xl mx-auto pt-10 pb-6 p-10">
      <div className="text-center text-black pt-28">
        <h1 className="text-5xl p-5">Our Special Item</h1>
        <p className="texl-xl">
          The first and most important step is to point out the items that you
          don’t want to get rid of. This includes your best sellers and other
          items that are synonymous with your brand.
        </p>
        <div className="p-5">
          <Link to="/register">
            <button className="px-8 py-3 font-semibold rounded-full dark:bg-green-500 dark:text-white m-5">
              Register Now
            </button>
          </Link>
          <Link to="/product">
            {" "}
            <button className="px-8 py-3 font-semibold rounded-full dark:bg-green-500 dark:text-white ">
              Order Now
            </button>
          </Link>
        </div>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Special;
