import React from "react";

function footer() {
  return (
    <>
      <div>
        <img src="" />
      </div>

      <div className="border-t-2 border-gray-300 ">
        <div className=" container mx-auto flex mt-4 flex-cols items-center font-semibold justify-center text-gray-700 hover:text-gray-800">
          <div className="mx-6">Home</div>
          <div className="mx-6">Support</div>
          <div className="mx-6">Offering</div>
          <div className="mx-6">Acknowlegment</div>
          <div className="mx-6z">About Us</div>
        </div>
        <div className="flex justify-end flex-cols items-center mr-10 mb-4  ">
          <span className="text-lg font-semibold text-gray-800"> Join us</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brand-facebook"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#597e8d"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brand-youtube"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ff2825"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="3" y="5" width="18" height="14" rx="4" />
            <path d="M10 9l5 3l-5 3z" />
          </svg>
        </div>
      </div>
    </>
  );
}

export default footer;
