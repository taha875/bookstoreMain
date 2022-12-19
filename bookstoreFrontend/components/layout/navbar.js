import React from "react";
import Router from "next/router";
function navbar() {
  const [dropdown, setDropdown] = React.useState(false);
  return (
    <nav className="relative z-30">
      <div>
        <div className="flex items-center justify-center mb-10">
          <ul className="flex justify-center  p-2 mt-8">
            <li className="flex cursor-pointer mx-4 text-gray-300 text-sm leading-3 tracking-normal  hover:text-yellow-800  focus:text-indigo-700 focus:outline-none">
              <a href="/">
                <span className="ml-2 font-bold">Home</span>
              </a>
            </li>
            <li
              className="flex cursor-pointer mx-4 text-gray-300 text-sm leading-3 tracking-normal  hover:text-yellow-800 focus:text-indigo-700 focus:outline-none "
              onclick="dropdownHandler(this)"
            >
              <a onClick={() => Router.push("/support")}>
                <span className="ml-2 font-bold">Support</span>
              </a>
            </li>

            <li className="flex cursor-pointer mx-4 text-gray-300 text-sm leading-3 tracking-normal  hover:text-yellow-800 focus:text-indigo-700 focus:outline-none">
              <button
                className={`flex flex-row justify-center duration-300 ease-in-out "ml-2 font-bold ${
                  dropdown ? "" : ""
                }`}
                onClick={() => setDropdown(!dropdown)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`mr-1 duration-300 ease-in-out ${
                    dropdown && "rotate-180 transform"
                  }`}
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#9e9e9e"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="6 9 12 15 18 9" />
                </svg>
                Offering
              </button>
              <div
                className={`${
                  dropdown ? `w-32 h-[228px]` : `w-0 h-0`
                }   rounded-md shadow-lg overflow-hidden bg-white duration-300 ease-in-out top-16 z-30 absolute z-[80]`}
              >
                .
                <ul className="text-sm font-normal">
                  <li className="px-4 py-2 hover:bg-yellow-700 hover:text-white cursor-pointer">
                    <button onClick={() => Router.push("/books")}>Books</button>
                  </li>

                  <li className="px-4 py-2 hover:bg-yellow-700 hover:text-white cursor-pointer">
                    <button onClick={() => Router.push("/audios")}>
                      Audio
                    </button>
                  </li>

                  <li className="px-4 py-2 hover:bg-yellow-700 hover:text-white cursor-pointer">
                    <button onClick={() => Router.push("/videos")}>
                      Video
                    </button>
                  </li>
                  <li className="px-4 py-2 hover:bg-yellow-700 hover:text-white cursor-pointer">
                    <button onClick={() => Router.push("/nasheeds")}>
                      Nasheed
                    </button>
                  </li>
                  <li className="px-4 py-2 hover:bg-yellow-700 hover:text-white cursor-pointer">
                    <button onClick={() => Router.push("/posters")}>
                      Posters
                    </button>
                  </li>
                  <li className="px-4 py-2 hover:bg-yellow-700 hover:text-white cursor-pointer">
                    <button onClick={() => Router.push("/link")}>
                      Islamic Links
                    </button>
                  </li>
                </ul>
              </div>
            </li>

            <li
              className="flex cursor-pointer mx-4 text-gray-300 text-sm leading-3 tracking-normal  hover:text-yellow-800 focus:text-indigo-700 focus:outline-none"
              onclick="dropdownHandler(this)"
            >
              <a onClick={() => Router.push("/aboutus")}>
                <span className="ml-2 font-bold">About Us</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
