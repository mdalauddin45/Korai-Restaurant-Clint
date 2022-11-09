import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import ReviewInCard from "./ReviewInCard";
import { AuthContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/review?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data?.data));
  }, [loading, user.email]);

  const handleDeletReview = (id) => {
    console.log(id);
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

  const navigate = useNavigate();
  const handleUpdate = (id) => {
    navigate(`/review/update/${id}`);
  };
  if (reviews.length === 0) {
    return (
      <div className="bg-[#eee]">
        <h1 className="text-4xl text-center text-gray-900 font-bold p-10">
          <span className="text-green-400">No Review</span> Added
        </h1>
      </div>
    );
  }
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
