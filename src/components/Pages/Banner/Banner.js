import React from "react";
import img1 from "../../../assets/London-Slide-Cover.jpg";
// import img1 from "../../../assets/popular1.png";
import img2 from "../../../assets/popular2.png";
import img3 from "../../../assets/popular4.png";
import img4 from "../../../assets/trending1.png";
import img5 from "../../../assets/trending2.png";
import img6 from "../../../assets/trending3.png";
import BannerData from "./BannerData";
import "./BannerItem.css";

const bannerData = [
  {
    image: img1,
    prev: 6,
    id: 1,
    next: 2,
  },
  {
    image: img2,
    prev: 1,
    id: 2,
    next: 3,
  },
  {
    image: img3,
    prev: 2,
    id: 3,
    next: 4,
  },
  {
    image: img4,
    prev: 3,
    id: 4,
    next: 5,
  },
  {
    image: img5,
    prev: 4,
    id: 5,
    next: 6,
  },
  {
    image: img6,
    prev: 5,
    id: 6,
    next: 1,
  },
];

const Banner = () => {
  return (
    <div className="carousel w-full py-10">
      {bannerData.map((slide) => (
        <BannerData key={slide.id} slide={slide}></BannerData>
      ))}
    </div>
  );
};

export default Banner;
