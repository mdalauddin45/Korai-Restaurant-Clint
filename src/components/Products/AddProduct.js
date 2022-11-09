import React from "react";
import { toast } from "react-toastify";

const AddProduct = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const product = {
      name: event.target.name.value,
      price: parseInt(event.target.price.value),
      rating: event.target.rating.value,
      image: event.target.image.value,
      description: event.target.description.value,
    };
    // console.log(product);
    fetch("http://localhost:5000/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast.success(data.message);
          event.target.reset();
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => toast.error(err));
  };
  return (
    <div className="bg-[#eee]">
      <section className="max-w-screen-xl mx-auto p-10 md:grid md:grid-cols-2  lg:grid lg:grid-cols-2 ">
        <div>
          <img
            src="http://www.ansonika.com/fooyes/img/how_3.svg"
            alt=""
            className="w-full p-10"
          />
        </div>
        <div>
          <div>
            <div className="w-fullmax-w-screen-xl mx-auto max-w-md p-8 space-y-3 rounded-xl bg-white text-gray-900 shadow-xl">
              <h1 className="text-2xl font-bold text-center">Add Services</h1>
              <form
                onSubmit={handleSubmit}
                className="space-y-6 ng-untouched ng-pristine ng-valid"
              >
                <div className="space-y-1 text-sm">
                  <label className="block text-gray-900">Product Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Product Name"
                    className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-green-400"
                  />
                </div>
                <div className="space-y-1 text-sm flex">
                  <div className="py-3">
                    <label className="block text-gray-900">Price</label>
                    <input
                      name="price"
                      type="number"
                      placeholder="Price"
                      className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-green-400"
                    />
                  </div>
                  <div className="px-3 py-2">
                    <label className="block text-gray-900">Rating</label>
                    <input
                      name="rating"
                      type="number"
                      placeholder="Rating"
                      className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-green-400"
                    />
                  </div>
                </div>
                <div className="space-y-1 text-sm">
                  <label className="block text-gray-900">Description</label>
                  <textarea
                    rows="3"
                    name="description"
                    type="text"
                    placeholder="Enter Your Description "
                    className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-green-400"
                  />
                </div>
                <div className="space-y-1 text-sm"></div>
                <div className="space-y-1 text-sm">
                  <label className="block text-gray-400">Photo URL</label>
                  <input
                    name="image"
                    type="text"
                    placeholder="Photo URL"
                    className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-green-400"
                  />
                </div>
                <button
                  type="submit"
                  className="block w-full p-3 text-center rounded-sm text-gray-900 bg-green-400"
                >
                  Add Item
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AddProduct;
