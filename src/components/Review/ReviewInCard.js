import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const ReviewInCard = ({ review, handleDeletReview }) => {
  const { authorName, authorImg, itemName, message, image, _id } = review;
  // console.log(review);

  return (
    <div className="max-w-screen-xl mx-auto ">
      <div className=" p-2 mb-10 shadow-xl flex justify-between  bg-gray-50 text-gray-900  ">
        <div>
          <div className=" p-4 w-100">
            <div className="flex space-x-4">
              <div>
                {review.authorImg === null ? (
                  <>
                    <div className="object-cover w-20 h-20 rounded-full bg-gray-500">
                      <div className="text-5xl text-white px-5 py-3">
                        <FontAwesomeIcon icon={faUser} />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <img
                      src={authorImg}
                      alt=""
                      className="object-cover w-12 h-12 rounded-full bg-gray-500"
                    />
                  </>
                )}
              </div>
              <div>
                <h4 className="font-bold text-xl">{authorName}</h4>
                <div className="flex items-center space-x-2 text-yellow-500">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                  <span className="text-xl font-bold">4.5</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 space-y-2 text-gray-900 text-xl">
            <p>Item Name: {itemName}</p>
            <p>{message}</p>
          </div>
          <div className="flex space-x-2 px-2">
            <button
              type="button"
              className="px-5 py-2 font-semibold rounded-full bg-green-500 text-white "
            >
              Update
            </button>

            <button
              onClick={() => handleDeletReview(_id)}
              type="button"
              className="px-5 py-2 font-semibold rounded-full bg-green-500 text-white "
            >
              Delete
            </button>
          </div>
        </div>
        <div>
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ReviewInCard;
