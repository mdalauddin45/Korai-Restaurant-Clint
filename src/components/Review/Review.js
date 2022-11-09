import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ReviewInCard from "./ReviewInCard";

const Review = () => {
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data?.data));
  }, []);
  // console.log(reviews);

  const handleDeletReview = (id) => {
    fetch(`http://localhost:5000/review/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
          setLoading(!loading);
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div className="bg-[#eee]">
      <h1 className="text-4xl text-center text-gray-900 font-bold p-10">
        <span className="text-green-400">Welcome</span> To Our Review
      </h1>
      {reviews.map((review) => (
        <ReviewInCard
          review={review}
          key={review._id}
          handleDeletReview={handleDeletReview}
        ></ReviewInCard>
      ))}
    </div>
  );
};

export default Review;
