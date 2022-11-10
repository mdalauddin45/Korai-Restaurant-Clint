import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../Products/ProductCard";

function HomeProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://assignment-11-server-kappa.vercel.app/product`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
      });
  }, []);
  //   console.log(products);

  return (
    <div className="bg-[#eee] px-20 pt-10">
      <h1 className="text-center font-bold text-2xl text-black">
        OUR POPULAR ITEM
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto mt-10 mb-6 ">
        {products?.slice(0, 3).map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>

      <div className="text-center pb-10">
        <Link to="/product">
          <button
            type="button"
            className="px-8 py-3 font-semibold rounded-full bg-green-500 text-white "
          >
            See All
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomeProduct;
