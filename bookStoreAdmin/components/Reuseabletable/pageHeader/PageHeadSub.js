import React from "react";

function PageHeader({
  headingText,
  innerPages,
 
  onClickDelete,
}) {
  return (
    <>
      <div className="lg:flex items-center justify-between ">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
          {headingText}
        </p>
        <div className="md:flex items-center mt-6 lg:mt-0">
          <div className="flex items-center"></div>
          <div className="flex items-center mt-4 md:mt-0 md:ml-3 lg:ml-0">
            {innerPages !== true && (
              <>
                <div className="w-40 py-2 px-3 bg-white lg:ml-3 border rounded border-gray-200">
                  <select className="w-full text-sm leading-3 text-gray-500 focus:outline-none">
                    <option>Sort By</option>
                    <option>Email</option>
                    <option>Date</option>
                  </select>
                </div>
              </>
            )}
            
            {innerPages && (
              <button
                onClick={onClickDelete}
                className="inline-flex ml-1.5 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
              >
                <p className="text-sm font-medium leading-none text-white">
                  Delete
                </p>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default PageHeader;
