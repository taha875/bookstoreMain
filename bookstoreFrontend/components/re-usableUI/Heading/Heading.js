import React from "react";

function Heading({headingText}) {
  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-4xl tracking-[-1px] font-semibold mt-10 text-black text-center">
          {headingText}
        </h2>
        <div className="h-1 mt-5 w-32 bg-gradient-to-r from-yellow-700 "></div>
      </div>
    </>
  );
}

export default Heading;
