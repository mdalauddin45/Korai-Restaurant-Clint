import React from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/Products image/slider-courier-mask.png";
const Banner = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2">
      <div className="text-black pl-20 pt-20 lg:pl-60 md:pt-32 lg:pt-32">
        <h1 className="text-6xl font-extrabold pb-5">
          <span className="text-yellow-400">Korai</span> <br />
          <span className="text-green-500"> Home Delivery</span>
        </h1>
        <p className="text-xl pb-10">
          Curabitur imperdiet varius lacus, id placerat purus vulputate non.
          Fusce in felis vel arcu maximus placerat eu ut arcu. Ut nunc ex,
          gravida vel porttitor et, pretium ac sapien.
        </p>
        <Link to="/product">
          <button
            type="button"
            className="px-8 py-3 font-semibold rounded-full dark:bg-green-500 dark:text-white mb-4"
          >
            Order Now
          </button>
        </Link>
      </div>
      <div className="m-2">
        <img src={img} alt="/" />
      </div>
    </div>
  );
};

export default Banner;
