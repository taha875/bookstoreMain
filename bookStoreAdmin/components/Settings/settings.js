import React, { useEffect } from "react";
import Input from "../Reuseabletable/Input/Input";
import Router from "next/router";
function settings() {
  const [showModal, setShowModal] = React.useState(false);
  const [Addusermodal, setaddusermodel] = React.useState(false);
  const [dropdown, setDropdown] = React.useState(false);
  return (
    <>
      <div className="py-12 px-4">
        <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto">
          <div className="lg:max-w-[1124px] md:max-w-[696px] max-w-[343px] mx-auto bg-white px-6 py-4 rounded shadow">
            <div className="pt-6">
              <div className="lg:flex md:block block justify-between gap-4">
                <div className="w-full">
                  {/* <p className="text-base leading-none text-gray-800">
                    Admin Name{" "}
                  </p>
                  <input
                    type="text"
                    name
                    id
                    placeholder="Admin"
                    className="focus:outline-none border border-gray-300 py-3 pl-3 rounded w-full mt-4"
                  /> */}
                  <Input
                    disabled={false}
                    label={"Admin"}
                    placeholder={"Admin"}
                  />
                </div>
                <div className="w-full">
                  <Input
                    disabled={false}
                    label={"Password"}
                    placeholder={"Password"}
                  />
                </div>
              </div>
            </div>

            <div className="lg:flex md:block block justify-center gap-4 pt-6">
              <div className="w-full">
                <Input
                  disabled={false}
                  label={"Email"}
                  placeholder={"Enter Email Address"}
                />
              </div>
              <div className="w-full">
                <p className="text-base leading-none text-gray-800 pt-3 mt-1">
                  Current Users
                </p>
                <div className="dropdown-one w-full rounded outline-none border border-gray-300 bg-inherit relative mt-2">
                  <button
                    onClick={() => setDropdown(!dropdown)}
                    className="dropbtn-one relative px-5 py-[12px] flex items-center justify-between w-full"
                  >
                    <span
                      className="font-noemal text-gray-400 text-sm"
                      id="drop-down-content-setter_form_layout_wizard6"
                    >
                      Current users in admin panel
                    </span>
                    <svg
                      className={`duration-300 ease-in-out ${
                        dropdown ? "rotate-180 " : "rotate-0 transform"
                      }`}
                      width={12}
                      height={8}
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.06216 1.9393L5.43028 7.0368C5.50069 7.11892 5.58803 7.18484 5.68631 7.23003C5.78459 7.27522 5.89148 7.29862 5.99966 7.29862C6.10783 7.29862 6.21472 7.27522 6.313 7.23003C6.41128 7.18484 6.49862 7.11892 6.56903 7.0368L10.9372 1.9393C11.354 1.45273 11.0084 0.701172 10.3678 0.701172H1.63028C0.989656 0.701172 0.644031 1.45273 1.06216 1.9393Z"
                        fill="#1F2937"
                      />
                    </svg>
                  </button>
                  <div
                    className={`${
                      dropdown ? `w-4/5 h-[108px]` : `w-0 h-0`
                    }   rounded-md shadow-lg overflow-hidden bg-white duration-300 ease-in-out  absolute top-10 right-5 z-30`}
                  >
                    <ul className="text-sm font-normal">
                      <li className="px-4 py-2 hover:bg-indigo-700 hover:text-white cursor-pointer flex justify-between">
                        User 1
                        <button
                          className="hover:text-red-700 transition duration-150 ease-out hover:ease-in"
                          onClick={() => setShowModal(true)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-trash"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1="4" y1="7" x2="20" y2="7" />
                            <line x1="10" y1="11" x2="10" y2="17" />
                            <line x1="14" y1="11" x2="14" y2="17" />
                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                          </svg>
                        </button>
                      </li>
                      <li className="px-4 py-2 hover:bg-indigo-700 hover:text-white cursor-pointer flex justify-between">
                        User 2
                        <button
                          className="hover:text-red-700 transition duration-150 ease-out hover:ease-in"
                          onClick={() => setShowModal(true)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-trash"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1="4" y1="7" x2="20" y2="7" />
                            <line x1="10" y1="11" x2="10" y2="17" />
                            <line x1="14" y1="11" x2="14" y2="17" />
                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                          </svg>
                        </button>
                      </li>
                      <li className="px-4 py-2 hover:bg-indigo-700 hover:text-white cursor-pointer flex justify-between">
                        User 3
                        <button
                          className="hover:text-red-700 transition duration-150 ease-out hover:ease-in"
                          onClick={() => setShowModal(true)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-trash"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1="4" y1="7" x2="20" y2="7" />
                            <line x1="10" y1="11" x2="10" y2="17" />
                            <line x1="14" y1="11" x2="14" y2="17" />
                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-2 py-2 mt-6">
              <button
                className="text-white border border-indigo-700 bg-indigo-700 px-6 py-3 rounded font-medium hover:bg-indigo-600"
                onClick={() => setaddusermodel(true)}
              >
                Add New User
              </button>
              <p className="text-base text-gray-800 pt-4 pl-1">
                Add a new user to admin panel.
              </p>

              <div className="lg:block md:hidden hidden">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3 pt-4">
                    <svg
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.1279 3.34088C12.4574 3.67038 12.4574 4.20462 12.1279 4.53412L7.66199 9L12.1279 13.4659C12.4574 13.7954 12.4574 14.3296 12.1279 14.6591C11.7984 14.9886 11.2641 14.9886 10.9346 14.6591L5.87213 9.59662C5.54262 9.26712 5.54262 8.73288 5.87213 8.40338L10.9346 3.34088C11.2641 3.01137 11.7984 3.01137 12.1279 3.34088Z"
                        fill="#4338CA"
                      />
                    </svg>
                    <button
                      className="text-indigo-700 font-medium"
                      onClick={() => Router.push("/")}
                    >
                      Back to Dashboard
                    </button>
                  </div>
                  <div className="flex gap-5 pt-4">
                    <button
                      className="text-indigo-700 border border-indigo-700 px-3 rounded font-medium hover:bg-indigo-50"
                      onClick={() => Router.push("/")}
                    >
                      Cancel Changes
                    </button>
                    <button
                      className="text-white border border-indigo-700 bg-indigo-700 px-6 py-3 rounded font-medium hover:bg-indigo-600"
                      onClick={() => Router.push("xd")}
                    >
                      Save Changes
                      <svg
                        className="mt-1 float-right flex justify-center items-center"
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.87213 3.34088C5.54262 3.67038 5.54262 4.20462 5.87213 4.53412L10.338 9L5.87213 13.4659C5.54262 13.7954 5.54262 14.3296 5.87213 14.6591C6.20163 14.9886 6.73587 14.9886 7.06537 14.6591L12.1279 9.59662C12.4574 9.26712 12.4574 8.73288 12.1279 8.40338L7.06537 3.34088C6.73587 3.01137 6.20163 3.01137 5.87213 3.34088Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Delete</h3>
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
                    Are You Sure you Want to Delete This User?
                  </p>
                </div>

                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-emerald-500 bg-emerlad-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Yes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {Addusermodal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Add a new user</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setaddusermodel(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>

                <div className="w-full mx-auto bg-white px-6 py-4 rounded shadow border border-gray-300">
                  <div className="lg:flex md:block block justify-between gap-4">
                    <div className="w-full">
                      <Input
                        disabled={false}
                        label2={"Name"}
                        placeholder={"Enter new user name"}
                      />
                    </div>
                    <div className="w-full">
                      <Input
                        disabled={false}
                        label2={"Password"}
                        placeholder={"Enter new password"}
                      />
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <Input
                      disabled={false}
                      label2={"Email"}
                      placeholder={"Enter Email Address of New User"}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-emerald-500 bg-emerlad-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setaddusermodel(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-indigo-700 text-white active:bg-indigo-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setaddusermodel(false)}
                  >
                    Add User
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

export default settings;
