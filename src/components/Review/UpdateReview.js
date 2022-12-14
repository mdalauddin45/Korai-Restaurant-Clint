import { faArrowsRotate, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessages } from "@fortawesome/sharp-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useTitle from "../../Hook/UseTitle";

const UpdateReview = () => {
  const router = useParams();
  const { id } = router;
  const [Update, setUpdate] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useTitle("update review");
  useEffect(() => {
    fetch(` https://assignment-11-server-kappa.vercel.app/review/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.success) {
          setUpdate(data.data);
          setLoading(!loading);
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => toast.error(err));
  }, [loading, id]);
  // console.log(products);
  const handleSubmit = (event) => {
    event.preventDefault();
    const Update = {
      message: event.target.message.value,
    };
    // console.log(Update);
    fetch(` https://assignment-11-server-kappa.vercel.app/review/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Update),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.success) {
          toast.success(data.message);
          navigate("/review");
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => toast.error(err));
  };
  return (
    <div className="bg-[#eee]">
      <section className="p-6  text-gray-50 lg:col-span-3">
        <h1 className="text-4xl text-center text-gray-900 font-bold p-10">
          <span className="text-green-400">Thank You</span> For{" "}
          <span className="text-green-400">Update</span> Your feedback
        </h1>
        <form
          onSubmit={handleSubmit}
          className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid w-96"
        >
          <fieldset className=" gap-6 p-6 rounded-md shadow-sm bg-white">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full ">
                <label className="text-xl text-black">Your feedback </label>
                <input
                  name="message"
                  type="text"
                  placeholder="Enter Your Feed back"
                  className="w-full rounded-md   bg-gray-200 text-gray-900 px-5 py-4"
                  defaultValue={Update?.message}
                />
              </div>
              <div className="text-center px-32 sm:px-28 lg:px-18">
                <button
                  type="submit"
                  className="px-5 py-2 font-semibold rounded bg-green-500 text-white "
                >
                  Updated
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto pt-20 pb-20">
        <div className="text-white flex bg-green-400 rounded pt-10 pb-10 shadow-xl m-8">
          <p>
            <FontAwesomeIcon className="text-4xl p-4" icon={faTruckFast} />
          </p>
          <div>
            <h1 className="text-4xl font-bold">Free shipping</h1>
            <p className="text-xl">Free Shipping on orders $199.</p>
          </div>
        </div>
        <div className="text-white flex  bg-yellow-400 rounded pt-10 pb-10 shadow-xl m-8">
          <p>
            <FontAwesomeIcon className="text-4xl p-4" icon={faMessages} />
          </p>
          <div>
            <h1 className="text-4xl font-bold">24/7 Support</h1>
            <p className="text-xl">Online and phone support 24 / 7</p>
          </div>
        </div>
        <div className="text-white flex  bg-red-400 rounded pt-10 pb-10 shadow-xl m-8">
          <p>
            <FontAwesomeIcon className="text-4xl p-4" icon={faArrowsRotate} />
          </p>
          <div>
            <h1 className="text-4xl font-bold">24 Hours Return</h1>
            <p className="text-xl">24 hours money-back guarantee.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateReview;
