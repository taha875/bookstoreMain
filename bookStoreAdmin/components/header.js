import React from "react";

const header = () => {
  const [dropdown, setDropdown] = React.useState(false);
  return (
    // vertical nav bar
    <nav class="bg-white border-gray-200 rounded dark:bg-white-900 w-full  ">
      <div class=" flex  items-center justify-between w-full pl-6">
        <div className="flex items-center pl-3 bg-white border w-64 rounded border-gray-200">
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
            className="py-2.5 pl-1 w-full focus:outline-none text-sm rounded text-gray-600 placeholder-gray-500"
            placeholder="Search"
          />
        </div>

        <div
          class="hidden w-full md:block md:w-auto relative"
          id="navbar-default"
        >
          <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <div>
                <button className="mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-bell"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                    <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                  </svg>
                </button>
              </div>
            </li>

            <li>
              <div className="flex flex-row content-center items-center cursor-pointer">
                <div className="w-8 h-8 lg:mb-0 bg-cover rounded-full mr-2 flex justify-center items-center bg-gray-100 dark:bg-gray-800 shadow-md">
                  <p className="text-indigo-700 font-bold">RS</p>
                </div>

                <div
                  className={`${
                    dropdown ? `w-32 h-[108px]` : `w-0 h-0`
                  }   rounded-md shadow-lg overflow-hidden bg-white duration-300 ease-in-out  absolute top-10 right-5 z-30`}
                >
                  <ul className="text-sm font-normal">
                    <li className="px-4 py-2 hover:bg-indigo-700 hover:text-white cursor-pointer">
                      Profile
                    </li>
                    <li className="px-4 py-2 hover:bg-indigo-700 hover:text-white cursor-pointer">
                      Setting
                    </li>
                    <li className="px-4 py-2 hover:bg-indigo-700 hover:text-white cursor-pointer">
                      Sign Out
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-gray-300 "></hr>
    </nav>
  );
};

export default header;
