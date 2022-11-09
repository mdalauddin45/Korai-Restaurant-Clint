import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateReview = () => {
  const review = useLoaderData();
  console.log(review);
  return (
    <div>
      <h1>hi</h1>
    </div>
  );
};

export default UpdateReview;
