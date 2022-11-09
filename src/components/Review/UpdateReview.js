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
      <div>
        <h1>hi</h1>
      </div>
    </div>
  );
};

export default UpdateReview;
