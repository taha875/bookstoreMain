import React from "react";

function navbar() {
  return (
    <nav className="relative z-30">
      <div>
        <div className="flex items-center justify-center mb-10">
          <ul className="flex justify-center  p-2 mt-8">
            <li className="flex cursor-pointer mx-4 text-gray-300 text-sm leading-3 tracking-normal  hover:text-yellow-800  focus:text-indigo-700 focus:outline-none">
              <a href="./home.html">
                <span className="ml-2 font-bold">Home</span>
              </a>
            </li>
            <li
              className="flex cursor-pointer mx-4 text-gray-300 text-sm leading-3 tracking-normal  hover:text-yellow-800 focus:text-indigo-700 focus:outline-none "
              onclick="dropdownHandler(this)"
            >
              <a href=".html">
                <span className="ml-2 font-bold">Support</span>
              </a>
            </li>
            <li className=" flex cursor-pointer mx-4 text-gray-300 text-sm leading-3 tracking-normal  hover:text-yellow-800 focus:text-indigo-700 focus:outline-none">
              <a href=".html">
                <button className="ml-2 font-bold">Offering</button>

              </a>
            </li>
            <li
              className="flex cursor-pointer mx-4 text-gray-300 text-sm leading-3 tracking-normal  hover:text-yellow-800 focus:text-indigo-700 focus:outline-none "
              onclick="dropdownHandler(this)"
            >
              <a href="./blog.html">
                <span className="ml-2 font-bold">Acknowlegment</span>
              </a>
            </li>
            <li
              className="flex cursor-pointer mx-4 text-gray-300 text-sm leading-3 tracking-normal  hover:text-yellow-800 focus:text-indigo-700 focus:outline-none"
              onclick="dropdownHandler(this)"
            >
              <a href="./aboutUs.html">
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
