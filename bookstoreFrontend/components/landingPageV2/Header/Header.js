import React from "react";
import Nav from "../../layout/navbar";
function Header() {
  return (
    <>
      <div className="h-[800px] overflow-hidden relative flex flex-col items-center ">
        <Nav />
        <div className="relative z-10 mt-0 flex flex-col items-center justify-center h-full">
          <img
            className="flex flex-col items-center justify-center"
            src="https://i.ibb.co/JrM9hWC/bsml-txt.png"
          />
          <h1 className="text-6xl font-semibold mt-10 text-white text-center">
            Islamic Book Library
          </h1>
          <p className="text-2xl  mt-4 text-gray-200 text-center">
            Authnetic Source For Authnetic Islamic Books
          </p>{" "}
          <div className="flex items-center pl-3 mt-8 bg-white border  rounded border-gray-200 transition ease-in-out  focus:text-gray-700 focus:bg-white focus:border-yellow-800 focus:outline-none w-[500px]">
            <svg
              className="text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M8.33333 13.1667C11.555 13.1667 14.1667 10.555 14.1667 7.33333C14.1667 4.11167 11.555 1.5 8.33333 1.5C5.11167 1.5 2.5 4.11167 2.5 7.33333C2.5 10.555 5.11167 13.1667 8.33333 13.1667Z"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.5 17.5L12.5 12.5"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="text"
              className="py-2.5 pl-2 w-full focus:outline-none text-sm rounded text-gray-600 placeholder-gray-500"
              placeholder="Search"
            />
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

export default Header;
