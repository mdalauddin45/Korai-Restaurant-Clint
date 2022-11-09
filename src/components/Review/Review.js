import React, { useEffect, useState } from "react";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data?.data));
  }, []);
  console.log(reviews);
  return (
    <div>
      <h1 className="text-4xl text-center text-gray-900 font-bold p-10">
        <span className="text-green-400">Welcome</span> To Our Review
      </h1>
    </div>
  );
};

export default Review;
