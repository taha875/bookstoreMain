import React from "react";

function support() {
  const [dropdown, setDropdown] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div className="px-2 py-12 ">
        <div className="flex flex-no-wrap items-start">
          <div className="w-full ">
            <div className="py-4 px-2">
              <div className="bg-white rounded shadow py-7">
                {/* end */}
                <div className="mt-2 px-7">
                  <p className="text-xl font-semibold leading-tight text-gray-800">
                    Support
                  </p>
                  <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        What Type of Issue You are Facing?
                      </p>
                      {/*-Dropdown*/}
                      <div className="relative top-2 ">
                        <div className="relative w-full mt-2 border border-gray-300 rounded outline-none">
                          <button
                            onClick={() => setDropdown(!dropdown)}
                            className={`duration-300 ease-in-out relative flex items-center justify-between w-full px-5 py-4 ${
                              dropdown ? "" : ""
                            }`}
                          >
                            <span
                              className="pr-4 text-sm font-medium text-gray-600"
                              id="drop-down-content-setter_form_layout_wizard3"
                            >
                              Select
                            </span>
                            <svg
                              className={`duration-300 ease-in-out ${
                                dropdown ? "rotate-180 " : "rotate-0 transform"
                              }`}
                              id="rotate"
                              width={10}
                              height={6}
                              viewBox="0 0 10 6"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0.5 0.75L5 5.25L9.5 0.75"
                                stroke="#4B5563"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                          <div
                            className={`${
                              dropdown ? `mt-1 w-full h-[108px]` : `w-0 h-0`
                            }   rounded-md shadow-lg overflow-hidden bg-white duration-300 ease-in-out  absolute  z-30`}
                          >
                            <ul className="text-sm font-normal">
                              <form>
                                <li className="px-4 py-2 hover:bg-yellow-700 hover:text-white cursor-pointer">
                                  Website Bug
                                </li>
                                <li className="px-4 py-2 hover:bg-yellow-700 hover:text-white cursor-pointer">
                                  Purchase Issue
                                </li>
                                <li className="px-4 py-2 hover:bg-yellow-700 hover:text-white cursor-pointer">
                                  Other
                                </li>
                              </form>
                            </ul>
                          </div>
                        </div>
                        {/* end */}
                      </div>
                      {/* end */}
                    </div>

                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        Subject :
                      </p>
                      <input className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50 focus:border-yellow-700" />
                      <p className="mt-3 text-xs leading-3 text-gray-600">
                        Set a simple and precise complain / Subject title.
                      </p>
                    </div>
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        Enter Your Name :
                      </p>
                      <input className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50 focus:border-yellow-700" />
                      <p className="mt-3 text-xs leading-[15px] text-gray-600">
                        Enter Your Name.
                      </p>
                    </div>
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        Enter Email Address :
                      </p>
                      <input className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50 focus:border-yellow-700" />
                      <p className="mt-3 text-xs leading-[15px] text-gray-600">
                        Enter your email address so we can reach you as soon as
                        possible.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-gray-300 mt-2 px-7">
                  <p className="text-base font-semibold leading-4 text-gray-800 ">
                    Brief Description :
                  </p>
                  <div className="mt-4 border border-gray-300 rounded">
                    <textarea
                      className="resize-none w-full h-[170px] px-4 py-4 text-base outline-none text-slate-600"
                      placeholder="Start typing here ..."
                      defaultValue={" "}
                    />
                  </div>
                </div>
                <p className="mt-3 text-xs leading-[15px] text-gray-600 px-7">
                  Enter Brief Description about the issue you are facing.
                </p>
                <hr className="h-[1px] bg-gray-100 my-14" />
                <div className="flex flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">
                  <button
                    className="bg-yellow-700 rounded hover:bg-yellow-900 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full "
                    onClick={() => setShowModal(true)}
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Thank You</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>

                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    We will respond to your email soon.
                  </p>
                </div>

                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-yellow-700 text-white active:bg-gray-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-800 duration-250"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default support;
