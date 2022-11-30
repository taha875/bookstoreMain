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
          The Sole Purpose of Our Work is to Spread the Correct Information Of
          Deen in This Day & Age of Fitnah.
          <br /> <span className="font-bold">Our Offering</span>{" "}
        </div>
      </div>
      <div className="mt-8 flex justify-center container items-center ">
        <img
          className=" w-auto h-80 mr-24"
          src="https://i.ibb.co/Zm8CcZs/hstry-img.png"
        />

        <div>
          {data.map((el, i) => {
            return (
              <>
                <div className=" bg-yellow-700 rounded-xl shadow-lg w-full h-12 mb-4 container grid grid-cols-3 gap-8">
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
    </div>
  );
}

export default WhatWeOffer;
