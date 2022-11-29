import React from "react";
import Cardsdata from "../../../Arrays/cardsdata.json";
import Icon from "../../Svg/Svg_reuse/icons";
import Router from "next/router";
export default function card() {
  return (
    <>
      <div className=" flex flex-wrap gap-4 items-center w-full py-8 ml-12 drop-shadow-xl">
        {Cardsdata.map((Cardsdata) => {
          return (
            <>
              <div className=" container max-w-sm rounded shadow bg-white dark:bg-gray-800">
                <div className="flex">
                  <div className="px-6 py-5">
                    <p1 className="text-base font-medium leading-none text-gray-800 dark:text-gray-100">
                      {Cardsdata.title}
                    </p1>

                    <p className="text-xl font-semibold leading-tight text-indigo-700 dark:text-gray-100 pt-6 pt-3">
                      {Cardsdata.Inventory}
                    </p>
                    <div className="pt-4">
                      <a href={Cardsdata.link}>
                        <button className="py-3 px-7 text-xs font-semibold leading-3 bg-indigo-700 rounded hover:bg-indigo-600 focus:outline-none text-white">
                          View Details
                        </button>   
                      </a>
                    </div>
                  </div>
                  {/* SVG DIV bar body starts here */}
                  <div>
                    <Icon iconparam={Cardsdata?.svg} />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
