import React from "react";
import { Link } from "react-router-dom";
import img3 from "../../../assets/Products image/3.webp";

const Burger3 = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 pb-4 pt-10 max-w-screen-xl mx-auto ">
        <div>
          <img src={img3} alt="" />
        </div>
        <div>
          <div className="text-gray-800 px-10 py-20">
            <h1 className="text-5xl font-bold">CLASSIC</h1>
            <h1 className="text-3xl font-bold"> BURGER</h1>
            <p className="text-xl pt-5">
              Quisque nec libero ut sapien dictum commodo. Nam ac felis id
              libero rutrum pharetra eu non lacus
            </p>
            <div className="flex pt-5">
              <h1 className="text-4xl font-bold mr-4">$9</h1>
              <Link to="/product">
                <button
                  type="button"
                  className="px-8 py-3 font-semibold rounded-full dark:bg-green-500 dark:text-white "
                >
                  BUY NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Burger3;
