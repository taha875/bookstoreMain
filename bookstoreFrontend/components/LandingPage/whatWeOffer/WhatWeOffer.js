import React from "react";
import Icons from "../../re-usableUI/SVG/icons";
function WhatWeOffer() {
  const data = [
    {
      name: "Books",
      svg: "book",
    },
    {
      name: "Video",
      svg: "video",
    },

    {
      name: "Posters",
      svg: "posters",
    },
  ];
  const data2 = [
    {
      name: "Links",
      svg: "links",
    },
    {
      name: "Audio",
      svg: "audio",
    },
    {
      name: "Nasheeds",
      svg: "nasheeds",
    },
  ];
  return (
    <div className=" mx-auto container  flex flex-col items-center justify-center my-12">
      <div className="mb-12 mx-auto container  flex flex-col items-center justify-center">
        <h2 className="text-yellow-800 text-3xl font-bold ">
          Welcome To Islamic Library
          <div className="bg-gradient-to-r from-yellow-700 h-1 ml-1 rounded "></div>
        </h2>

        <div className="text-gray-800 text-center font font-semibold ">
          <br /> <h className="font-bold text-2xl">Our Offerings</h>{" "}
        </div>
      </div>

      <div className="flex justify-between mb-5 mt-5">
        <div className="flex justify-center items-center ">
          <div className="h-[380px] w-[380px] border-[15px] absolute border-yellow-500"></div>
          <img
            className="z-20"
            src="https://nauthemes.net/alim/wp-content/uploads/2020/05/hstry-img.png"
          ></img>
        </div>
        <div className="w-4/5">
          {/* Card is full width. Use in 12 col grid for best view. */}
          {/* Card code block start */}
          <div className=" ml-12 flex flex-col lg:flex-row mx-auto bg-white dark:bg-gray-800 shadow rounded">
            <div className="w-full lg:w-1/3 flex-col lg:border-l border-gray-300 flex justify-center items-center px-12 py-8">
              {data.map((el, i) => {
                return (
                  <>
                    <div className=" bg-yellow-700 rounded-xl shadow-lg w-full h-12 mb-4 container grid grid-cols-3 gap-8 mt-4 ">
                      <div key={i}> </div> 
                      <div className="text-white text-center flex justify-center items-center  ">
                        <Icons iconElement={el.svg} />
                        <div className="m-2"> {el.name}</div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="w-full lg:w-1/3 px-12 lg:border-l border-gray-300 flex flex-col items-center py-10">
              {data2.map((el, i) => {
                return (
                  <>
                    <div className=" bg-yellow-700 rounded-xl shadow-lg w-full h-12 mb-4 container grid grid-cols-3 gap-8 mt-4 ">
                      <div key={i}> </div>
                      <div className="text-white text-center flex justify-center items-center  ">
                        <Icons iconElement={el.svg} />
                        <div className="m-2"> {el.name}</div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          {/* Card code block end */}
        </div>
      </div>
    </div>
  );
}

export default WhatWeOffer;
