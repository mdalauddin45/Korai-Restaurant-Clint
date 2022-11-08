import React from "react";
import Banner from "./Banner/Banner";
import HomeProduct from "./HomeProduct/HomeProduct";
import Kitchen from "./Kitchen/Kitchen";
import Special from "./Special/Special";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeProduct></HomeProduct>
      <Special></Special>
      <Kitchen></Kitchen>
    </div>
  );
};

export default Home;
