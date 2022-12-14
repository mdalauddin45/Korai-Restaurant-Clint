import React, { useEffect, useState } from "react";
import useTitle from "../../Hook/UseTitle";
import ProductCard from "./ProductCard";

const Products = () => {
  const [allProduct, setallProduct] = useState([]);
  useTitle("Services");

  useEffect(() => {
    fetch("https://assignment-11-server-kappa.vercel.app/product")
      .then((res) => res.json())
      .then((data) => setallProduct(data?.data));
  }, []);
  //   console.log(allProduct);
  return (
    <div className="px-20 bg-[#eee]">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto pt-10 pb-6  ">
        {allProduct?.map((product) => (
          <ProductCard product={product} key={product._id}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
