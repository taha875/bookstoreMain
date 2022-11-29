import React from "react";

function Table({ title, data }) {
  const [show, setShow] = React.useState();
  return (
    <>
      <div className="bg-white px-4 md:px-8 xl:px-10 overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="h-20 w-full text-sm leading-none text-gray-600">
              <th className="font-normal text-left pl-4">#</th>
              <th className="font-normal text-left pl-11">{title} Name</th>
              <th className="font-normal text-left pl-10">Price</th>
              <th className="font-normal text-left">Created</th>
              <th className="font-normal text-left">{title} Descrition</th>
              <th className="font-normal text-left w-32">Actions</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {data && (
              <>
                {data?.map((el, i) => {
                  return (
                    <tr
                      key={i}
                      className="h-20 text-sm leading-none text-gray-700 border-b border-t border-gray-200 bg-white hover:bg-gray-50 cursor-pointer"
                    >
                      <td className="pl-4">{el.id}</td>
                      <td className="pl-11">
                        <div className="flex items-center">
                          <a
                            className="hover:text-indigo-700 transition ease-in-out delay-110 hover:-translate-y-1  hover:scale-130  duration-250"
                            href=""
                          >
                            {el.bookname}
                          </a>
                        </div>
                      </td>
                      <td>
                        <p className="mr-16 pl-10">{el.bookPrice} </p>
                      </td>
                      <td>
                        <p className="mr-16">{el.date}</p>
                      </td>
                      <td>
                        <p className="mr-16">{el.bookDescription}</p>
                      </td>
                      <td>
                        <div className="flex items-center">
                          <button className="bg-gray-100 mr-3 hover:bg-indigo-700 hover:text-white py-2.5 px-5 rounded text-sm leading-3 text-gray-500 focus:outline-none  transition ease-in-out delay-110 hover:-translate-y-1 hover:scale-130  duration-250">
                            Edit
                          </button>
                          <button className="bg-gray-100 mr-3 hover:bg-red-600 hover:text-white py-2.5 px-5 rounded text-sm leading-3 text-gray-500 focus:outline-none  transition ease-in-out delay-110 hover:-translate-y-1 hover:scale-130  duration-250">
                            Delete
                          </button>
                          <div className="relative px-5 pt-2">
                            {show == 0 ? (
                              <button
                                className="focus:outline-none"
                                onClick={() => setShow(null)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={20}
                                  viewBox="0 0 20 20"
                                  fill="none"
                                >
                                  <path
                                    d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z"
                                    stroke="#9CA3AF"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z"
                                    stroke="#9CA3AF"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z"
                                    stroke="#9CA3AF"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </button>
                            ) : (
                              <button
                                className="focus:outline-none"
                                onClick={() => setShow(0)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={20}
                                  viewBox="0 0 20 20"
                                  fill="none"
                                >
                                  <path
                                    d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z"
                                    stroke="#9CA3AF"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z"
                                    stroke="#9CA3AF"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z"
                                    stroke="#9CA3AF"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </button>
                            )}
                            {show == 0 && (
                              <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
                                <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                  <p>Edit</p>
                                </div>
                                <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                  <p>Delete</p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
