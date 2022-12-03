import React, { useState } from "react";

const Newsletter = () => {
  const [show, setShow] = useState(true);

  return (
    <div id="modal" className="flex items-center justify-center py-12">
      <div
        className={
          "bg-white  rounded-md mx-4 md:w-10/12 items-center justify-center relative " +
          (show ? "flex" : "hidden")
        }
      >
        <div className="relative z-10 w-full">
          <div className="flex flex-col justify-center pt-10 pb-12 px-4 md:px-10">
            <div className="absolute top-5 right-5">
              <button onClick={() => setShow(false)}></button>
            </div>
            <div class="container w-full ">
              <div class="  flex justify-center items-center">
                <div class="relative">
                  <div class="absolute top-4 left-3">
                    <i class="  text-gray-400 z-20 hover:text-gray-500"></i>
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      class="border border-gray-300 h-14 w-96 pl-4 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
                      placeholder="Enter Your Email"
                    />

                    <div class="absolute top-2 right-2">
                      <button class="h-10 w-24 text-white rounded bg-yellow-700 hover:bg-yellow-800">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
