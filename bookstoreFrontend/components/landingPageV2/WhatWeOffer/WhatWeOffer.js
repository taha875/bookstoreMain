import React from "react";
import Heading from "../../re-usableUI/Heading/Heading";
import Icons from "../../re-usableUI/SVG/icons";
function AboutUs() {
  const data = [
    {
      name: "Books",
      svg: "newBook",
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
    <div className="mx-auto container mt-40">
      {/* heading reusable */}
      <Heading headingText={'What We Offer'}/>
      {/* heading reusable */}
      <div className="mt-12 px-12">
        <div className="flex items-center justify-between">
          {data.map((el, i) => {
            return (
              <div key={i} className="flex flex-col items-center">
                <div className="w-[180px] h-[180px] flex items-center justify-center border border-gray-200 rounded-full shadow group hover:border-yellow-700 cursor-pointer">
                  <div className="w-40 h-40 border border-gray-300 rounded-full shadow flex items-center justify-center text-gray-600 group-hover:bg-yellow-600 group-hover:text-white">
                    <Icons iconElement={el.svg} />
                  </div>
                </div>
                <p className="text-lg font-semibold mt-3">{el.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
