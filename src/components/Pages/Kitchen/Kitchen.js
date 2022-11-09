import React from "react";

const Kitchen = () => {
  return (
    <div className="bg-[#eee]">
      <h1 className="text-3xl text-black font-bold text-center pt-10">
        Our Kitchen Staff
      </h1>
      <hr />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto pt-10 pb-6 p-10">
        <div className="max-w-xs rounded-md shadow-md bg-white text-gray-900   mb-10">
          <img
            src="http://www.themesindustry.com/html/bistro/images/our-cheffs2.jpg"
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">
                Rafsan Hoque
              </h2>
              <p className="text-gray-900">
                Cleaning all dishes, work stations, cooking equipment, and food
                storage areas in accordance with food safety regulations.
                Washing, chopping, shredding, and grating ingredients for
                subsequent use by the chef. Sweeping and mopping floors, as
                required.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-xs rounded-md shadow-md bg-white text-gray-900   mb-10">
          <img
            src="http://www.themesindustry.com/html/bistro/images/our-cheffs1.jpg"
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">
                Angle karina
              </h2>
              <p className="text-gray-900">
                Cleaning all dishes, work stations, cooking equipment, and food
                storage areas in accordance with food safety regulations.
                Washing, chopping, shredding, and grating ingredients for
                subsequent use by the chef. Sweeping and mopping floors, as
                required.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-xs rounded-md shadow-md bg-white text-gray-900   mb-10">
          <img
            src="http://www.themesindustry.com/html/bistro/images/our-cheffs3.jpg"
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">
                Angle Maria
              </h2>
              <p className="text-gray-900">
                Cleaning all dishes, work stations, cooking equipment, and food
                storage areas in accordance with food safety regulations.
                Washing, chopping, shredding, and grating ingredients for
                subsequent use by the chef. Sweeping and mopping floors, as
                required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kitchen;
