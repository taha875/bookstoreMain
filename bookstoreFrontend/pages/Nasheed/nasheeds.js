import React, { useState } from "react";
import NasheedsCard from "../Nasheed/nasheedcard"
export default function Index() {
  const [show, setshow] = useState();

  return (
    <div className="mx-auto container py-12 px-4">
      <div className="flex flex-col w-full xl:flex-row justify-center">
        {/* Menu Start */}
        <div
          id="menu"
          className={`xl:block mb-10 xl:mb-0 relative p-8 xl:p-0 w-full bg-gray-50 xl:bg-white xl:w-1/5 flex-col justify-start items-start ${
            show ? "flex" : "hidden"
          }`}
        >
          <div className="w-full xl:w-8/12 flex flex-col justify-start items-start space-y-4 pb-8 border-b border-gray-200">
            <div>
              <p className="text-base font-medium leading-4 text-gray-800">
                Catergory
              </p>
            </div>
            <div className="flex flex-col justify-start items-start space-y-4">
              <div className="flex flex-row justify-center items-center space-x-2">
                <input
                  className="cursor-pointer border rounded border-gray-600"
                  type="checkbox"
                  name="checkbox1"
                  id
                />
                <p className="text-base leading-4 text-gray-600">
                  data.map json file
                </p>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-8/12 flex flex-col justify-start items-start space-y-4 pt-8 xl:py-8 xl:border-b border-gray-200">
            <div>
              <p className="text-base font-medium leading-4 text-gray-800">
                Price
              </p>
            </div>
            <div className="flex flex-col justify-start items-start space-y-4">
              <div className="flex flex-row justify-center items-center space-x-2">
                <input
                  className="cursor-pointer border rounded border-gray-600"
                  type="checkbox"
                  name="checkbox1"
                  id
                />
                <p className="text-base leading-4 text-gray-600">Low to High</p>
              </div>
              <div className="flex flex-row justify-center items-center space-x-2">
                <input
                  className="cursor-pointer border rounded border-gray-600"
                  type="checkbox"
                  name="checkbox1"
                  id
                />
                <p className="text-base leading-4 text-gray-600">High to low</p>
              </div>
            </div>
          </div>
          {/*sidemeanuend*/}

          <div className="xl:hidden absolute top-6 right-6">
            <button onClick={() => setshow(false)}>
              <svg
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 8L8 24"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 8L24 24"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Menu End */}
        {/* Cards Start */}
        <div className="flex flex-col justify-start">
          <div className="flex justify-between items-end w-full">
            <div>
              <p className="text-4xl font-semibold leading-9 bg-yellow-800 rounded-lg text-white w-96 h-12 items-center pt-1 pl-1">
                Islamic Nasheeds
              </p>
            </div>
            <div className="xl:hidden">
              <button
                onClick={() => setshow(true)}
                id="btn"
                className={`relative py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 rounded-sm flex jusitfy-center item-center ${
                  !show ? "flex" : "hidden"
                }`}
              >
                <p className="text-base leading-3 text-gray-600 font-normal">
                  Filters
                </p>
                <div className="absolute top-0.5 right-2 flex jusitfy-center items-center">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.3335 10.6666L21.3335 5.33325L16.0001 5.33325L16.0001 10.6666L21.3335 10.6666Z"
                      stroke="#4B5563"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M26.6665 8L21.3332 8"
                      stroke="#4B5563"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 8L5.33333 8"
                      stroke="#4B5563"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.3335 18.6666L13.3335 13.3333L8.00011 13.3333L8.00011 18.6666L13.3335 18.6666Z"
                      stroke="#4B5563"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M26.6665 16L13.3332 16"
                      stroke="#4B5563"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 16L5.33333 16"
                      stroke="#4B5563"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25.3335 26.6666L25.3335 21.3333L20.0001 21.3333L20.0001 26.6666L25.3335 26.6666Z"
                      stroke="#4B5563"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M26.6665 24L25.3332 24"
                      stroke="#4B5563"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 24L5.33333 24"
                      stroke="#4B5563"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <NasheedsCard/>

          {/* next page 123*/}

          <div className="flex justify-end mt-10">
            <div className="flex flex-row items-center justify-center space-x-4">
              <button className="text-base font-medium focus:font-semibold leading-none text-gray-600 focus:text-gray-800">
                <p>1</p>
              </button>
              <button className="text-base font-medium focus:font-semibold leading-none text-gray-600 focus:text-gray-800">
                <p>2</p>
              </button>
              <button className="text-base font-medium focus:font-semibold leading-none text-gray-600 focus:text-gray-800">
                <p>3</p>
              </button>
              <button className="flex justify-center items-center">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 4L10 8L6 12"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Cards End */}
      </div>
    </div>
  );
}
