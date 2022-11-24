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
    <div className=" mx-auto container flex flex-col items-center justify-center mt-20">
      <h2 className="text-yellow-800 text-3xl font-bold ">
        Welcome To Islamic Library
        <div className="bg-gradient-to-r from-yellow-700 h-1 ml-1 rounded "></div>
      </h2>

      <div className="text-gray-800 text-center font font-semibold ">
        The Sole Purpose of Our Work is to Spread the Correct Information Of
        Deen in This Day & Age of Fitnah.
        <br /> <span className="font-bold">Our Offering</span>{" "}
      </div>
      <div className="mt-8 flex items-center justify-center">
        <img
          className=" w-auto h-96 mr-24"
          src="https://i.ibb.co/Zm8CcZs/hstry-img.png"
        />
        <div>
          {data.map((el, i) => {
            return (
              <>
                <div
                  key={i}
                  class=" font-semibold flex items-center text-gray-800"
                >
                  <Icons iconElement={el.svg} />
                  <div class="ml-2 text-lg">{el.name}</div>
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
