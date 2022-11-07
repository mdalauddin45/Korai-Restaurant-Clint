import React from "react";
import { Link } from "react-router-dom";

function HomeProduct() {
  return (
    <div className="bg-[#eee] text-center">
      <Link to="/products">
        <button className="btn">See All</button>
      </Link>
    </div>
  );
}

export default HomeProduct;
