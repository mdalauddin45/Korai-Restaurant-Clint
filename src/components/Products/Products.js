import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [allProduct, setallProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/product`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(!loading);
        setallProduct(data.data);
      });
  }, [loading]);
  console.log(allProduct);
  return (
    <div className="mx-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto mt-10 mb-6  ">
        {allProduct.map((product) => (
          <ProductCard product={product} key={product._id}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
