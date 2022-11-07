import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../Products/ProductCard";

function HomeProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/product`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
      });
  }, []);
  //   console.log(products);

  return (
    <div className="bg-[#eee] px-20 pt-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto mt-10 mb-6 ">
        {products?.slice(0, 3).map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>

      <div className="text-center">
        <Link to="/product">
          <button className="btn">See All</button>
        </Link>
      </div>
    </div>
  );
}

export default HomeProduct;
