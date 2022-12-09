import React from "react";
import Heading from "../../re-usableUI/Heading/Heading";

function AboutUs() {
  return (
    <>
      <div className="mt-40">
        <div className="px-12  xl:mx-auto xl:container">
          <div className="md:flex items-center justify-between">
            <div className="xl:w-5/12 md:w-1/2 xl:pr-16 md:pr-8">
              <h1
                role="heading"
                className="text-4xl tracking-[-1px] font-semibold mt-10 text-black"
              >
                Who are we?
              </h1>
              <p
                role="contentinfo"
                className="mt-6 text-base leading-6 text-gray-600"
              >
                This is a pure islamic blog and publishes english & urdu islamic
                books on different topics time to time. the sole purpose of this
                blog is to spread the correct information of deen in this day &
                age of fitnah.
                <br />
                <br />
              </p>
              <button
                role="button"
                aria-label="explore more"
                className="sm:w-auto w-full mt-6 text-base font-medium leading-none text-white bg-yellow-700 rounded md:p-4 p-6 focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700 hover:bg-yellow-600 focus:outline-none"
              >
                Explore More
              </button>
            </div>
            <div className="xl:w-2/5 md:w-1/2 w-full md:mt-0 mt-4">
              <img
                src="https://images.unsplash.com/photo-1553755088-ef1973c7b4a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className="md:w-auto w-full h-96"
              />
            </div>
          </div>
          <div className="flex-wrap md:mt-16 mt-8 gap-6 flex items-center justify-between">
            <div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-yellow-700 rounded-full text-base font-semibold leading-4 text-white flex items-center justify-center">
                  1
                </div>
                <h2 className="ml-4 text-base font-semibold leading-4 text-gray-800">
                  Extraordinary Performance
                </h2>
              </div>
              <p className="sm:w-72 w-full text-base mt-5 leading-6 text-gray-600">
                A phrase is a short selection of words which when put together
                create a concept.
              </p>
            </div>
            <div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-yellow-700 rounded-full text-base font-semibold leading-4 text-white flex items-center justify-center">
                  2
                </div>
                <h2 className="ml-4 text-base font-semibold leading-4 text-gray-800">
                  Extraordinary Performance
                </h2>
              </div>
              <p className="sm:w-72 w-full text-base mt-5 leading-6 text-gray-600">
                A phrase is a short selection of words which when put together
                create a concept.
              </p>
            </div>
            <div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-yellow-700 rounded-full text-base font-semibold leading-4 text-white flex items-center justify-center">
                  3
                </div>
                <h2 className="ml-4 text-base font-semibold leading-4 text-gray-800">
                  Extraordinary Performance
                </h2>
              </div>
              <p className="sm:w-72 w-full text-base mt-5 leading-6 text-gray-600">
                A phrase is a short selection of words which when put together
                create a concept.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
