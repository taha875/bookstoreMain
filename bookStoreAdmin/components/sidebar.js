import React, { useState } from "react";
import Icon from "./Svg/Svg_reuse/sidebaricon";
import { useRouter } from "next/router";
export default function Index() {
  const Router = useRouter();
  const [show, setShow] = useState(false);
  const sideNav = [
    {
      name: "Dashboard",
      link: "/",
    },
    {
      name: "Books",
      link: "/books",
    },
    {
      name: "Video",
      link: "/video",
    },
    {
      name: "Nasheed",
      link: "/nasheed",
    },
    {
      name: "Audio",
      link: "/audio",
    },
    {
      name: "Poster",
      link: "/poster",
    },
    {
      name: "Links",
      link: "/link",
    },
    {
      name: "Subscriber",
      link: "/subscriber",
    },
  ];

  return (
    <>
      {/* side bar body starts here */}
      <div
        id="Main"
        className={`${
          show ? "-translate-x-full" : "translate-x-0"
        } bg-white transform  xl:translate-x-0 ease-in-out transition duration-500 flex justify-start items-start  border-r border-gray-200 w-64  flex-col h-screen`}
      >
        <div className="m-auto mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-affiliate"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275" />
            <path d="M11.683 12.317l5.759 -5.759" />
            <circle cx="5.5" cy="5.5" r="1.5" />
            <circle cx="18.5" cy="5.5" r="1.5" />
            <circle cx="18.5" cy="18.5" r="1.5" />
            <circle cx="8.5" cy="15.5" r="4.5" />
          </svg>
          <h1 className="font-bold text-sm m-auto">BookStore</h1>
        </div>
        <div className="xl: mt-6 flex flex-col justify-start items-start px-4 w-full space-y-3 pb-5 h-full ">
          {sideNav.map((el, i) => {
            return (
              <>
                <button
                  role="button"
                  onClick={() => Router.push(el?.link)}
                  className={`focus:outline-none flex jusitfy-start 
            ${
              Router.pathname == el.link
                ? "bg-indigo-700 text-white rounded py-3 pl-4 items-center space-x-6 w-full "
                : "hover:text-white focus:bg-indigo-700 focus:text-white hover:bg-indigo-700 text-gray-600 rounded py-3 pl-4 items-center space-x-6 w-full focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 "
            }`}
                >
                  <Icon iconparam={el?.name}></Icon>
                  <p className="text-base leading-4">{el?.name}</p>
                </button>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
