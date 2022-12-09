import React, { useEffect, useState } from "react";
import Input from "../Reuseabletable/Input/Input";
import Router from "next/router";
import Data from "../../Arrays/bookData.json";

function addbook() {
  const [addedData, setAddedData] = useState([]);
  const [newArray, setNewArray] = useState([]);

  const addDataToArray = (e) => {
    e.preventDefault();
    if (!addedData.id) {
      console.log("Error");
    } else if (!addedData.bookimage) {
      console.log("Error");
    } else if (!addedData.id) {
      console.log("Error");
    } else if (!addedData.bookname) {
      console.log("Error");
    } else if (!addedData.price) {
      console.log("Error");
    } else if (!addedData.author) {
      console.log("Error");
    } else if (!addedData.translator) {
      console.log("Error");
    } else if (!addedData.authenticatedBy) {
      console.log("Error");
    } else if (!addedData.description) {
      console.log("Error");
    } else {
      setNewArray((prev) => [...prev, addedData]);
      console.log(addedData, newArray);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        addDataToArray(e);
      }}
    >
      <div className="py-12 px-4">
        <div className="flex items-center m-auto justify-center">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800 ">
            Add Book
          </p>
          <svg
            className="ml-3"
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-book"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#000000"
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

        <hr className="mt-4"></hr>
        <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto">
          <div className="lg:max-w-[1124px] md:max-w-[696px] max-w-[343px] mx-auto bg-white px-6 py-4 rounded shadow">
            <div className="pt-6">
              <div className="lg:flex md:block block justify-between gap-4">
                <div className="w-full">
                  <Input
                    disabled={false}
                    label={"ID"}
                    name={"id"}
                    value={addedData.id}
                    onChange={(e) => {
                      setAddedData({
                        ...addedData,
                        id: e.target.value,
                      });
                    }}
                    placeholder={"Enter Book Id"}
                  />
                </div>
                <div className="w-full">
                  <Input
                    disabled={false}
                    label={"Book Name"}
                    name={"bookname"}
                    value={addedData.bookname}
                    placeholder={"Book Name"}
                    on
                    onChange={(e) => {
                      setAddedData({
                        ...addedData,
                        bookname: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="w-full">
                  <Input
                    disabled={false}
                    label={"Price"}
                    name={"price"}
                    value={addedData.price}
                    placeholder={"Enter book Price"}
                    onChange={(e) => {
                      setAddedData({
                        ...addedData,
                        price: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="lg:flex md:block block justify-center gap-4 pt-6">
              <div className="w-full">
                <Input
                  disabled={false}
                  label={"Author"}
                  name={"author"}
                  value={addedData.author}
                  placeholder={"Enter book Author"}
                  onChange={(e) => {
                    setAddedData({
                      ...addedData,
                      author: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div className="lg:flex md:block block justify-center gap-4 pt-6">
              <div className="w-full">
                <Input
                  disabled={false}
                  label={"Translator"}
                  name={"translator"}
                  value={addedData.translator}
                  placeholder={"Enter book Translator"}
                  onChange={(e) => {
                    setAddedData({
                      ...addedData,
                      translator: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="w-full">
                <Input
                  disabled={false}
                  label={"Authencity"}
                  name={"authencity"}
                  value={addedData.authencity}
                  placeholder={"Enter book Authencity"}
                  onChange={(e) => {
                    setAddedData({
                      ...addedData,
                      authenticatedBy: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div className="lg:flex md:block block justify-center gap-4 pt-6">
              <div className="w-full">
                <Input
                  disabled={false}
                  label={"Description"}
                  name={"description"}
                  value={addedData.description}
                  placeholder={"Enter book Description"}
                  onChange={(e) => {
                    setAddedData({
                      ...addedData,
                      description: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="w-full"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center m-auto  justify-center w-3/6 mb-8 border border-dashed border-indigo-700 rounded-lg py-8">
        <div className="cursor-pointer mb-5 text-indigo-700 dark:text-indigo-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-cloud-upload"
            width={60}
            height={60}
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M7 18a4.6 4.4 0 0 1 0 -9h0a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
            <polyline points="9 15 12 12 15 15" />
            <line x1={12} y1={12} x2={12} y2={21} />
          </svg>
        </div>
        <p className="text-base font-normal tracking-normal text-gray-800 dark:text-gray-100 text-center">
          Drag and drop here
        </p>
        <p className="text-base font-normal tracking-normal text-gray-800 dark:text-gray-100 text-center my-1">
          or
        </p>
        <label
          htmlFor="fileUp"
          className="cursor-pointer text-base font-normal tracking-normal text-indigo-700 dark:text-indigo-600 text-center"
        >
          {" "}
          Browse
        </label>
        <input
          value={addedData.bookimage}
          placeholder={"Enter book image"}
          onChange={(e) => {
            setAddedData({
              ...addedData,
              bookimage: e.target.value,
            });
          }}
          type="file"
          className="hidden"
          name="fileUpload"
          id="fileUp"
        />
      </div>
      <div className="flex gap-5 pt-4 m-auto justify-center ">
        <button
          className="text-indigo-700 border border-indigo-700 px-3 rounded font-medium hover:bg-indigo-50"
          onClick={() => Router.push("/books")}
        >
          Cancel Changes
        </button>
        <button
          type="submit"
          className="text-white border border-indigo-700 bg-indigo-700 px-6 py-3 rounded font-medium hover:bg-indigo-600"
        >
          Save Changes
          <svg
            className="mt-1 float-right flex justify-center items-center"
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.87213 3.34088C5.54262 3.67038 5.54262 4.20462 5.87213 4.53412L10.338 9L5.87213 13.4659C5.54262 13.7954 5.54262 14.3296 5.87213 14.6591C6.20163 14.9886 6.73587 14.9886 7.06537 14.6591L12.1279 9.59662C12.4574 9.26712 12.4574 8.73288 12.1279 8.40338L7.06537 3.34088C6.73587 3.01137 6.20163 3.01137 5.87213 3.34088Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}

export default addbook;
