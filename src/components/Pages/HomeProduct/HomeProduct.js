import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomeProduct() {
  const [allProduct, setallProduct] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/product`)
      .then((res) => res.json())
      .then((data) => setallProduct(data.data));
  }, []);
  console.log(allProduct);
  return (
    <div className="bg-[#eee] text-center">
      <Link to="/products">
        <button className="btn">See All</button>
      </Link>
    </div>
  );
}

export default HomeProduct;
