import React, { useState } from "react";

const Newsletter = () => {
  const [show, setShow] = useState(true);

  return (
    <div id="modal" className="flex items-center justify-center py-12">
      <div
        className={
          "bg-white border rounded-md mx-4 md:w-10/12 items-center justify-center relative " +
          (show ? "flex" : "hidden")
        }
      >
        <div className="relative z-10 w-full">
          <div className="flex flex-col justify-center pt-10 pb-12 px-4 md:px-10">
            <div className="absolute top-5 right-5">
              <button onClick={() => setShow(false)}></button>
            </div>

            <div className="flex justify-center flex-col md:flex-row gap-4 md:gap-7">
              <input
                type="email"
                placeholder="Enter your Email to join"
                className="bg-white border rounded-md placeholder-gray-400 border-gray-300 p-4 w-full lg:w-1/2 focus:outline-none"
              />
              <button className="px-8 py-4 bg-yellow-700 rounded-md text-white font-medium text-base focus:outline-none focus:ring-2 focus:ring-yellow-900 focus:ring-opacity-50 hover:bg-yellow-900 w-full md:w-auto">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
