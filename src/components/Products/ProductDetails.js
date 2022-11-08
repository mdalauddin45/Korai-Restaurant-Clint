import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div>
      <h1>this is ProductDetails</h1>
    </div>
  );
};

export default ProductDetails;
