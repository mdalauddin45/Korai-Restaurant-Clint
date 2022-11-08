import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";

const ProductCard = ({ product }) => {
  //   console.log(product);
  const { image, name, price, rating, description, _id } = product;
  return (
    <div className="mb-10">
      <div className="max-w-xs p-6 rounded-md shadow-xl  bg-gray-50 text-gray-900">
        <PhotoProvider>
          <PhotoView src={image}>
            <img
              src={image}
              alt="/"
              className="object-cover object-center w-full rounded-md h-72 bg-gray-900"
            />
          </PhotoView>
        </PhotoProvider>

        <div className="mt-6 mb-2">
          <span className="block text-2xl font-medium tracking-widest uppercase text-green-400">
            {name}
          </span>
          <h2 className="text-xl  font-semibold tracking-wide">
            Price: ${price}
          </h2>
        </div>
        <p className="text-gray-900">{description.slice(0, 100) + "..."}</p>
        <div className=" mb-2 ">
          <h2 className="text-sm  font-semibold tracking-wide">
            Rating:{rating}
          </h2>
        </div>
        <div>
          <Link to={`/product/${_id}`}>
            <button className="block w-full p-3 text-center rounded-sm text-white font-semibold dark:bg-green-500">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
