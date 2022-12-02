import React from "react";

const aboutus = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <p className="font-normal text-sm leading-3 text-yellow-700 hover:text-indigo-800 cursor-pointer pb-2">
        About Us
      </p>
      <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
        <div className="w-full lg:w-6/12">
          <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9">
            Welcome to Islamic Books Library, the Authentic Source for Authentic
            Islamic Books!
          </h2>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            This Is a Pure Islamic Blog and Publishes English & Urdu Islamic
            Books on Different Topics Time to Time. The Sole Purpose of This
            Blog Is to Spread the Correct Information of Deen in This Day & Age
            of Fitnah. There Are Many Deviant Groups Out There Who Claim to Be
            on the Correct Deen Whereas Some of Them Are Indulged in Bid’Aat &
            Shirk While Others Are Rejecting the Manhaj and Tareeqah of Salaf
            As-Saliheen by Refuting Taqleed of the Four Imams. These Deviant
            Groups Are Not Only Working Hard to Deviate People From Manhaj &
            Tareeqah of Our Elders Practically but Also Has a Very Strong
            Presence on the Internet, Hence Confusing the Youth of Ummah Even
            More in This Age of Technology.So It Is a Necessity of the Time That
            More & More Blogs or Websites Be Made Available on the Internet So
            That the Youth of the Ummah Has Access to the Correct Knowledge of
            Deen.
          </p>
        </div>
        <div className="w-full lg:w-6/12 drop-shadow-lg">
          <img
            className="lg:block hidden w-full"
            src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="people discussing on board"
          />
        </div>
      </div>

      <div className="sm:hidden block relative mt-8">
        <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
          <svg
            className="z-20"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24" cy="24" r="24" fill="#1F2937" />
            <path
              d="M21 23C23.2091 23 25 21.2091 25 19C25 16.7909 23.2091 15 21 15C18.7909 15 17 16.7909 17 19C17 21.2091 18.7909 23 21 23Z"
              stroke="white"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 33V31C15 29.9391 15.4214 28.9217 16.1716 28.1716C16.9217 27.4214 17.9391 27 19 27H23C24.0609 27 25.0783 27.4214 25.8284 28.1716C26.5786 28.9217 27 29.9391 27 31V33"
              stroke="white"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M28 15.1301C28.8604 15.3504 29.623 15.8508 30.1676 16.5524C30.7122 17.254 31.0078 18.117 31.0078 19.0051C31.0078 19.8933 30.7122 20.7562 30.1676 21.4578C29.623 22.1594 28.8604 22.6598 28 22.8801"
              stroke="white"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M33 33.0001V31.0001C32.9949 30.1173 32.6979 29.2609 32.1553 28.5645C31.6126 27.8682 30.8548 27.3708 30 27.1501"
              stroke="white"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
      </div>
      <div className="sm:hidden grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
        <div>
          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
            400k User
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
        <div className="w-full lg:w-6/12">
          <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">
            Our Mission
          </h2>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6 w-full lg:w-10/12 xl:w-9/12"></p>
          <p className="font-normal text-base leading-6 text-gray-600 w-full lg:w-10/12 xl:w-9/12 mt-10"></p>
          <p className="font-normal text-base leading-6 text-gray-600 w-full lg:w-10/12 xl:w-9/12 mt-10">
            Through This Blog Inshallah I Intend to Publish Books of the Middle
            & Correct Path of Ahlus Sunnah Wal Jamaah, as Shown to Us by Salaf
            As-Saliheen.
          </p>
        </div>
        <div className="w-full lg:w-6/12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
            {/* <!-- Team Card --> */}
            <div className="flex p-4 shadow-md">
              <div className="mr-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-book"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                  <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                  <line x1="3" y1="6" x2="3" y2="19" />
                  <line x1="12" y1="6" x2="12" y2="19" />
                  <line x1="21" y1="6" x2="21" y2="19" />
                </svg>
              </div>
              <div className="">
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">
                  Books
                </p>
                <p className="mt-2 font-normal text-base leading-6 text-gray-600">
                  Books Have Been Categorised Under Different Topics for Easy
                  Searching. All English Books Have Also Been Collected Under
                  One Category Called “English Books”
                </p>
              </div>
            </div>

            {/* <!-- Board Card --> */}
            <div className="flex p-4 shadow-md">
              <div className="mr-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-columns"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="4" y1="6" x2="9.5" y2="6" />
                  <line x1="4" y1="10" x2="9.5" y2="10" />
                  <line x1="4" y1="14" x2="9.5" y2="14" />
                  <line x1="4" y1="18" x2="9.5" y2="18" />
                  <line x1="14.5" y1="6" x2="20" y2="6" />
                  <line x1="14.5" y1="10" x2="20" y2="10" />
                  <line x1="14.5" y1="14" x2="20" y2="14" />
                  <line x1="14.5" y1="18" x2="20" y2="18" />
                </svg>
              </div>
              <div className="">
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">
                  Other
                </p>
                <p className="mt-2 font-normal text-base leading-6 text-gray-600">
                  Video, Audio & Nasheed Sections Are Also Introduced Where
                  Different Islamic Stuff Is Uploaded & Updated Regularly. This
                  Section Does Not Show Updates at the Main Page
                </p>
              </div>
            </div>

            {/* <!-- Press Card --> */}
            <div className="flex p-4 shadow-md">
              <div className="mr-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-alert-circle"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="12" r="9" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <div className="">
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">
                  Disclaimer
                </p>
                <p className="mt-2 font-normal text-base leading-6 text-gray-600">
                  If You See Something That Infringes the Copyright Laws, Please
                  Inform Me and I Will Remove It Immediately. Provide Legal
                  Proof of Your Right to Demand Removal. If Verified, Material
                  Will Be Removed Immediately Unless Permission Is Given for Its
                  Use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutus;
