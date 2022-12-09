import React from "react";

function Donation() {
  return (
    <>
      <div className="mt-40 relative">
        <img
          src="https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="donation"
          className="w-full h-[750px] object-cover"
        />
        <div className="absolute bg-black w-full h-full bg-opacity-80 top-0">
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-4xl tracking-[-1px] font-semibold mt-40 text-white text-center">
              Donation
            </h2>
          </div>
          <p className="text-xl font-semibold mt-6 text-white text-center">
            A Donation would be appreciated
          </p>
          <div className="mx-auto container mt-12 flex items-center justify-between">
            <div className="bg-white h-96 w-96 rounded-md relative z-30 cursor-pointer"></div>
            <div className="bg-white h-96 w-96 rounded-md relative z-30"></div>
            <div className="bg-white h-96 w-96 rounded-md relative z-30"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Donation;
