import React from "react";
import Router from "next/router"; 
function footer() {
  return (
    <>
      <div>
        <img src="" />
      </div>

      <div className="border-t-2 border-gray-300 ">
        <div className="m-4 container mx-auto flex mt-4 flex-cols items-center font-semibold justify-center text-gray-700 hover:text-gray-800">
          <button
            className="mx-6"
            type="button"
            onClick={() => Router.push("/")}
          >
            Home
          </button>
          <button
            className="mx-6"
            type="button"
            onClick={() => Router.push("")}
          >
            Support
          </button>

          <button
            className="mx-6"
            type="button"
            onClick={() => Router.push("")}
          >
            Offering
          </button>
          <button
            className="mx-6"
            type="button"
            onClick={() => Router.push("")}
          >
            Acknowlegment
          </button>
          <button
            className="mx-6"
            type="button"
            onClick={() => Router.push("/aboutus")}
          >
            About Us
          </button>
        </div>
        <div className="flex justify-end flex-cols items-center mr-10 mb-4  "></div>
      </div>
    </>
  );
}

export default footer;
