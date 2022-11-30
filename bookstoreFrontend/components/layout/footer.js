import React from "react";

function footer() {
  return (
    <>
      <div>
        <img src="" />
      </div>

      <div className="border-t-2 border-gray-300 ">
        <div className="m-4 container mx-auto flex mt-4 flex-cols items-center font-semibold justify-center text-gray-700 hover:text-gray-800">
          <button>
            <div className="mx-6">Home</div>
          </button>
          <button>
            <div className="mx-6">Support</div>
          </button>
          <button>
            <div className="mx-6">Offering</div>
          </button>
          <button>
            <div className="mx-6">Acknowlegment</div>
          </button>
          <button>
            <div className="mx-6">About Us</div>
          </button>
        </div>
        <div className="flex justify-end flex-cols items-center mr-10 mb-4  "></div>
      </div>
    </>
  );
}

export default footer;
