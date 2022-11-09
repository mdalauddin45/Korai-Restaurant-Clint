import React from "react";
import { Link } from "react-router-dom";
import img2 from "../../../assets/Products image/2.webp";

const Burger2 = () => {
  return (
    <div className="bg-[#eee] p-10">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 max-w-screen-xl mx-auto pt-10">
        <div>
          <div className="text-gray-800 px-10 py-20">
            <h1 className="text-5xl font-bold">CHICKEN</h1>
            <h1 className="text-3xl font-bold"> BURGER</h1>
            <p className="text-xl pt-5">
              Quisque nec libero ut sapien dictum commodo. Nam ac felis id
              libero rutrum pharetra eu non lacus
            </p>
            <div className="flex pt-5">
              <h1 className="text-4xl font-bold mr-4">$12</h1>
              <Link to="/product">
                <button
                  type="button"
                  className="px-8 py-3 font-semibold rounded-full bg-green-500 text-white "
                >
                  BUY NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Burger2;
