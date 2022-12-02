import React from 'react'
import Audiodata from "../DataArrays/audiodata.json"
function audiocard() {
  return (
    <>
      <div className="container mx-auto mt-6 grid  bg-gray-200 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
        {Audiodata.map((data) => (
          <div className="relative pt-16 pb-24 bg-gray-100 w-52 h-56 px-16 flex justify-center items-center">
            <img className src={data.img} />

            <div className="flex flex-col absolute bottom-4 left-4 w-full pr-8">
              <div>
                <p className="text-base leading-none text-gray-900">
                  {data.name}
                </p>
              </div>
              <div className="flex justify-between mt-2">
                <div>
                  <p className="text-base font-semibold leading-none text-gray-800">
                    {data.price}
                  </p>
                </div>
                <button className="cursor-pointer hover:opacity-75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-shopping-cart"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#a16207"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="6" cy="19" r="2" />
                    <circle cx="17" cy="19" r="2" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l14 1l-1 7h-13" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default audiocard