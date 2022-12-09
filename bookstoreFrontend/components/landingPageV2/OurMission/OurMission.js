import React from "react";

function OurMission() {
  return (
    <>
      <div className="mt-40 px-12 mx-auto container">
        <div className="md:flex items-center justify-between">
          <div className="xl:w-5/12 md:w-1/2 xl:pr-16 md:pr-8">
            <h1
              role="heading"
              className="text-4xl tracking-[-1px] font-semibold mt-10 text-black"
            >
              Our Mission?
            </h1>
            <p
              role="contentinfo"
              className="mt-6 text-base leading-6 text-gray-600"
            >
              This is a pure islamic blog and publishes english & urdu islamic
              books on different topics time to time. the sole purpose of this
              blog is to spread the correct information of deen in this day &
              age of fitnah. (Change this text)
            </p>
            <button
              role="button"
              aria-label="explore more"
              className="sm:w-auto w-full mt-6 text-base font-medium leading-none text-white bg-yellow-700 rounded md:p-4 p-6 focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700 hover:bg-yellow-600 focus:outline-none"
            >
              Read More
            </button>
          </div>
          <div className="xl:w-2/5 md:w-1/2 flex items-center justify-end w-full md:mt-0 mt-4">
            <div className="w-[450px] h-[450px] flex items-center justify-center rounded-full bg-yellow-700">
              <div className="w-[440px] h-[440px] rounded-full bg-white flex items-center justify-center">
                <div className="w-[430px] h-[430px] flex items-center justify-center rounded-full bg-yellow-700">
                  <div className="w-[420px] h-[420px] rounded-full bg-white flex items-center justify-center">
                    <div className="w-[410px] h-[410px] flex items-center justify-center rounded-full bg-yellow-700">
                      <div className="w-[400px] h-[400px] rounded-full bg-white flex items-center justify-center">
                        <div className="w-[390px] h-[390px] flex flex-col items-center justify-center rounded-full bg-yellow-700">
                          <p className="text-white font-bold text-[100px] leading-[100px]">
                            99%
                          </p>
                          <p className="text-white font-bold text-[20px]">
                            Authenticated Books
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurMission;
