import React from "react";
import Router from "next/router";

function Index() {
  return (
    <div className="pt-16">
      <div className="w-full bg-gray-100 py-12">
        <div className="container mx-auto xl:flex lg:flex text-center xl:text-left lg:text-left">
          <div className="xl:w-3/6 lg:w-3/6 sm:w-full text-center xl:text-left mb-6 xl:mb-0 lg:mb-0">
            <p className="text-lg text-gray-800">Islamic Book Store</p>
          </div>
          <div className="xl:w-3/6 lg:w-3/6 sm:w-full">
            <ul className="xl:flex lg:flex md:flex sm:flex justify-center ">
              <li className="text-gray-800 hover:text-gray-900 text-lg mx-4 mb-3 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0">
                <button onClick={() => Router.push("./")}>Home</button>
              </li>
              <li className="text-gray-800 hover:text-gray-900 text-lg mx-4 mb-3 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0">
                <button onClick={() => Router.push("./aboutus")}>
                  About Us
                </button>
              </li>

              <li className="text-gray-800 hover:text-gray-900 text-lg mx-4 mb-3 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0">
                <button onClick={() => Router.push("./support")}>
                  Support
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
