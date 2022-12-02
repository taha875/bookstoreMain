import Router from "next/router";
import React from "react";
import Data from "../DataArrays/carddata.json";

function cards() {
  return (
    <>
      <div className="mx-auto container mt-12 px-12 grid grid-cols-3 gap-8    ">
        {Data.map((card) => (
          <div className="  bg-gray-50 hover:bg-gray-100    ease-in-out duration-500  items-center  rouned-md  mt-2  ">
            <div>
              <a href={card.link}>
                <button className="hover:ease-in-out duration-500   w-full">
                  <div className="  object-cover rounded-t-lg h-auto w-full  ">
                    <img className="h-64 w-full object-cover " src={card.img} />
                  </div>

                  <div className="flex justify-start ml-4 mt-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    <div>{card.name}</div>
                  </div>

                  <div className="flex justify-start ml-4 mb-3 text-left font-medium text-gray-700">
                    <div>{card.title}</div>
                  </div>
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default cards;
