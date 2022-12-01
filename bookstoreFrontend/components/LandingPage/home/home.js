import React from "react";
import Nav from "../../layout/navbar";
function home() {
  return (
    <>
      <div className="h-[500px] overflow-hidden relative flex flex-col items-center ">
        <Nav />
        <div className="relative z-10 mt-12">
          <img
            className="flex flex-col items-center justify-center ml-32"
            src="https://i.ibb.co/JrM9hWC/bsml-txt.png"
          />
          <p className="text-5xl mt-2 text-white text-center">
            Islamic Book Library
          </p>
          <p className="text-2xl  mt-2 text-white text-center">
            Authnetic Source For Authnetic Islamic Books
          </p>{" "}
          <div class="flex justify-center">
            <div class="mb-3 xl:w-96">
              <input
                type="search"
                className="form-control block mt-6
         w-full px-3 py-1.5
        text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-30 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-yellow-800 focus:outline-none
      "
                id="exampleSearch"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <img
          src="https://i.ibb.co/0tFPxxv/slide-2.jpg"
          className="absolute top-0"
        />
      </div>
    </>
  );
}

export default home;
