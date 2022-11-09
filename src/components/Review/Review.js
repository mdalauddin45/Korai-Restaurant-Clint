import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import ReviewInCard from "./ReviewInCard";
import { AuthContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Review = () => {
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/review?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data?.data));
  }, [user.email]);

  const handleDeletReview = (id) => {
    fetch(`http://localhost:5000/review/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(data.message);
        setLoading(!loading);
        if (data.success) {
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => toast.error(err.message));
  };

  const navigate = useNavigate();
  const handleUpdate = (id) => {
    navigate(`/review/update/${id}`);
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
          handleUpdate={handleUpdate}
        ></ReviewInCard>
      ))}
    </div>
  );
};

export default Review;
