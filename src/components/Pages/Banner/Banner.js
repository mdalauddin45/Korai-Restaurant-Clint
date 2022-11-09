import React from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/Products image/slider-courier-mask.png";
const Banner = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-10 ">
      <div className="grid md:grid-cols-2 lg:grid-cols-2">
        <div className="text-black ">
          <h1 className="text-5xl font-extrabold pb-5">
            <span className="text-yellow-400">Korai</span> <br />
            <span className="text-green-500"> Home Delivery</span>
          </h1>
          <p className="text-xl pb-10">
            Retail food delivery is a courier service in which a restaurant,
            store, or independent food-delivery company delivers food to a
            customer. An order is typically made either through a restaurant or
            grocer's website or mobile app, or through a food ordering company.
          </p>
          <Link to="/product">
            <button
              type="button"
              className="px-8 py-3 font-semibold rounded-full bg-green-500 text-white mb-4"
            >
              Order Now
            </button>
          </Link>
        </div>
        <div className="m-2">
          <img src={img} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
