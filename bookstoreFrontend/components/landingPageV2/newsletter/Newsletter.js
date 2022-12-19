import React from 'react'

function Newsletter() {
  return (
    <>
      <div className="flex justify-center mt-14">
        <input
          className="bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800 p-5 w-1/3 border border-transparent focus:outline-none focus:border-gray-500"
          type="email"
          placeholder="Your Email"
        />
        <button className="w-32 rounded-l-none hover:bg-yellow-700 bg-yellow-800 rounded text-base font-medium leading-none text-white p-5 uppercase ">
          subscribe
        </button>
      </div>
    </>
  );
}

export default Newsletter