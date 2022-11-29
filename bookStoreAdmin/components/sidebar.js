import React, { useState } from "react";
import Icon from "./Svg/Svg_reuse/sidebaricon";
import Router from "next/router";
export default function Index() {
  const [show, setShow] = useState(false);
  const sideNav = [
    {
      name: "Dashboard",
      link: "/maindash",
    },
    {
      name: "Books",
      link: "/booksdash",
    },
    {
      name: "Video",
      link: "/videodash",
    },
    {
      name: "Nasheed",
      link: "/nasheed",
    },
    {
      name: "Audio",
      link: "/audiodash",
    },
    {
      name: "Poster",
      link: "/posterdash",
    },
    {
      name: "Links",
      link: "/linkdash",
    },
  ];
  return (
    <>
      {/* side bar body starts here */}
      <div
        id="Main"
        className={`${
          show ? "-translate-x-full" : "translate-x-0"
        } bg-white transform  xl:translate-x-0 ease-in-out transition duration-500 flex justify-start items-start w-full border-r border-gray-300 w-64  flex-col h-screen`}
      >
        <div className="m-auto mt-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-affiliate"
            width="50"
            height="50"
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
          <h1 className="font-bold ml-2">Logo</h1>
        </div>
        <div className="xl: mt-10 flex flex-col justify-start items-start px-4 w-full space-y-3 pb-5 h-full ">
          {sideNav.map((el, i) => {
            return (
              <>
                <button
                  onClick={() => Router.push(el?.link)}
                  className="focus:outline-none flex jusitfy-start hover:text-white focus:bg-indigo-700 focus:text-white hover:bg-indigo-700 text-gray-600 rounded py-3 pl-4 items-center space-x-6 w-full focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 "
                >
                  <Icon iconparam={el?.name}></Icon>
                  <p className="text-base leading-4">{el?.name}</p>
                </button>
              </>
            );
          })}

          {/* <button
            onClick={() => Router.push("/booksdash")}
            className="focus:outline-none flex jusitfy-start hover:text-white focus:bg-indigo-700 focus:text-white hover:bg-indigo-700 text-gray-600 rounded py-3 pl-4  items-center w-full  space-x-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-book"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="CurrentColor"
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
            <p className="text-base leading-4  ">Books</p>
          </button>

          <button
            onClick={() => Router.push("/audiodash")}
            variant="btn btn-success"
            className="focus:outline-none flex justify-start items-center space-x-6 hover:text-white focus:bg-indigo-700 focus:text-white hover:bg-indigo-700 text-gray-600 rounded  py-3 pl-4  w-full "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-headphones"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="CurrentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="13" rx="2" width="5" height="7" />
              <rect x="15" y="13" rx="2" width="5" height="7" />
              <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
            </svg>
            <p className="text-base leading-4 ">Audio</p>
          </button>

          <button
            onClick={() => Router.push("/nasheed")}
            className="flex justify-start items-center space-x-6 hover:text-white focus:outline-none focus:bg-indigo-700 focus:text-white hover:bg-indigo-700 text-gray-600 rounded py-3 pl-4  w-full "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-player-play"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="CurrentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 4v16l13 -8z" />
            </svg>
            <p className="text-base leading-4">Nasheeds</p>
          </button>
          <button
            onClick={() => Router.push("/videodash")}
            className="flex justify-start items-center space-x-6 hover:text-white focus:outline-none focus:bg-indigo-700 focus:text-white hover:bg-indigo-700 text-gray-600 rounded py-3 pl-4  w-full "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-movie"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="CurrentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <line x1="8" y1="4" x2="8" y2="20" />
              <line x1="16" y1="4" x2="16" y2="20" />
              <line x1="4" y1="8" x2="8" y2="8" />
              <line x1="4" y1="16" x2="8" y2="16" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="16" y1="8" x2="20" y2="8" />
              <line x1="16" y1="16" x2="20" y2="16" />
            </svg>
            <p className="text-base leading-4">Video</p>
          </button>
          <button
            onClick={() => Router.push("/videodash")}
            className="flex justify-start items-center space-x-6 hover:text-white focus:outline-none focus:bg-indigo-700 focus:text-white hover:bg-indigo-700 text-gray-600 rounded py-3 pl-4  w-full "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-photo"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="CurrentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="15" y1="8" x2="15.01" y2="8" />
              <rect x="4" y="4" width="16" height="16" rx="3" />
              <path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5" />
              <path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2" />
            </svg>
            <p className="text-base leading-4">Posters</p>
          </button>
          <button
            onClick={() => Router.push("/videodash")}
            className="flex justify-start items-center space-x-6 hover:text-white focus:outline-none focus:bg-indigo-700 focus:text-white hover:bg-indigo-700 text-gray-600 rounded py-3 pl-4  w-full "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-link"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="CurrentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
              <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
            </svg>
            <p className="text-base leading-4">Links</p>
          </button> */}
        </div>
      </div>
    </>
  );
}
