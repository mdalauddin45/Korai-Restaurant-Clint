import React from "react";
import Banner from "./Banner/Banner";
import Burger from "./Burger/Burger";
import HomeProduct from "./HomeProduct/HomeProduct";
import Kitchen from "./Kitchen/Kitchen";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeProduct></HomeProduct>
      <Burger></Burger>
      <Kitchen></Kitchen>
    </div>
  );
};

export default Home;
