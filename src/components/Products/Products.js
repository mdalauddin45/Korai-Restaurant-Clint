import React, { useEffect, useState } from "react";

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/product`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h1>Products</h1>
    </div>
  );
};

export default Products;
