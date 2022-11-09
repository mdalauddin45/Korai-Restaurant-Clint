import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateReview = () => {
  const router = useParams();
  const { id } = router;
  const [Update, setUpdate] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(` http://localhost:5000/review/${id}`)
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
    console.log(Update);
    fetch(` http://localhost:5000/review/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Update),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
    <div>
      <section className="p-6 bg-white text-gray-50 lg:col-span-3">
        <form
          onSubmit={handleSubmit}
          className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid w-96"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full ">
                <label className="text-sm">Your feedback </label>
                <input
                  name="message"
                  type="text"
                  placeholder="Enter Your Feed back"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-green-400 border-gray-700 text-gray-100 px-5 py-4"
                  defaultValue={Update?.message}
                />
              </div>
              <div className="text-center px-28 sm:px-28 lg:px-16">
                <button
                  type="submit"
                  className="px-8 py-3 font-semibold rounded dark:bg-gray-100 dark:text-gray-800"
                >
                  Updated
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default UpdateReview;
