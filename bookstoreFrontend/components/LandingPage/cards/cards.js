import React from "react";
import Data from "../../../Carddata/data.json";
function cards() {
  return (
    <>
      <div className=" mx-auto container mt-12 px-12 grid grid-cols-3 gap-6 ">
        {Data.map((card) => (
          <>
            <div className="  bg-gray-200 items-center border rouned-md  mt-2 ">
              <div className="  object-cover rounded-t-lg h-auto w-auto  ">
                <img className="h-64 w-96 object-cover " src={card.img} />
              </div> 
              
                <div className="flex justify-start ml-4  mt-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  <div>{card.name}</div>
                </div>

                <div className="flex justify-start ml-4 mb-3 text-left font-medium text-gray-700">
                  <div>{card.title}</div>
                </div>
              </div>

          </>
        ))}
      </div>
    </>
  );
}

export default cards;
