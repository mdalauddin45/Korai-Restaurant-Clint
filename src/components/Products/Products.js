import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [allProduct, setallProduct] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/product`)
      .then((res) => res.json())
      .then((data) => setallProduct(data.data));
  }, []);
  console.log(allProduct);
  return (
    <div className="grid grid-cols-3 max-w-screen-xl mx-auto">
      {allProduct.map((product) => (
        <ProductCard product={product} key={product._id}></ProductCard>
      ))}
    </div>
  );
};

export default Products;
