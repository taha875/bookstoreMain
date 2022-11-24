import React from "react";
import Cardsdata from "../../../Arrays/cardsdata.json";

export default function card() {
  return (
    <>
      <div className="flex flex-wrap gap-4 items-center w-full py-8 ml-12 drop-shadow-xl">
        {Cardsdata.map((Cardsdata) => {
          return (
            <>
              <div className="max-w-sm rounded shadow bg-white dark:bg-gray-800">
                <div className="flex">
                  <div className="px-6 py-5">
                    <p1 className="text-base font-medium leading-none text-gray-800 dark:text-gray-100">
                      {Cardsdata.title}
                    </p1>
                    <p className="text-xs leading-3 text-gray-500 dark:text-gray-400 pt-2">
                      Check inventory of Books
                    </p>
                    <p className="text-xl font-semibold leading-tight text-indigo-700 dark:text-gray-100 pt-6 pt-3">
                      Total Books
                    </p>
                    <div className="pt-4">
                      <button className="py-2 px-4 text-xs font-semibold leading-3 bg-indigo-700 rounded hover:bg-indigo-600 focus:outline-none text-white">
                        View Details
                      </button>
                    </div>
                  </div>
                  <div className="ml-24 px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-book"
                      width="50"
                      height="60"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                      <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                      <line x1="3" y1="6" x2="3" y2="19" />
                      <line x1="12" y1="6" x2="12" y2="19" />
                      <line x1="21" y1="6" x2="21" y2="19" />
                    </svg>
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
