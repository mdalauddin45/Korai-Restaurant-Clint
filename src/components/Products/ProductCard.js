import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  console.log(product);
  const { image, name, price, rating, description } = product;
  return (
    <div className="mb-10">
      <div className="max-w-xs p-6 rounded-md shadow-md bg-gray-900 text-gray-50">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-2xl font-medium tracking-widest uppercase text-green-400">
            {name}
          </span>
          <h2 className="text-xl  font-semibold tracking-wide">
            Price: ${price}
          </h2>
        </div>
        <p className="text-gray-100">
          {description.slice(0, 100) + "..."}
          <Link>Details</Link>
        </p>
        <div className="mt-6 mb-2">
          <h2 className="text-sm  font-semibold tracking-wide">
            Rating:{rating}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
