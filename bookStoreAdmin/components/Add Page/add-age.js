import React, { useEffect, useState } from "react";
import Input from "../Reuseabletable/Input/Input";
import Router from "next/router";
import data from "../../Arrays/bookData.json";
function addbook() {
  const [addedData, setAddedData] = useState([]);
  const [newArray, setNewArray] = useState([]);

  const addDataToArray = (e) => {
    e.preventDefault();
    setNewArray((prev) => [...prev, addedData]);
    console.log(addedData, newArray);
  };

  return (
    <form
      onSubmit={(e) => {
        addDataToArray(e);
      }}
    >
      <div className="py-12 px-4">
        <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto">
          <div className="lg:max-w-[1124px] md:max-w-[696px] max-w-[343px] mx-auto bg-white px-6 py-4 rounded shadow">
            <div className="pt-6">
              <div className="lg:flex md:block block justify-between gap-4">
                <div className="w-full">
                  {/* <p className="text-base leading-none text-gray-800">
                    Admin Name{" "}
                  </p>
                  <input
                    type="text"
                    name
                    id
                    placeholder="Admin"
                    className="focus:outline-none border border-gray-300 py-3 pl-3 rounded w-full mt-4"
                  /> */}
                  <Input
                    disabled={false}
                    label={"ID"}
                    name={"id"}
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
                    placeholder={"Book Name"}
                    on
                    onChange={(e) => {
                      setAddedData({
                        ...addedData,
                        name: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="w-full">
                  <Input
                    disabled={false}
                    label={"Price"}
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
      <div className="flex gap-5 pt-4 m-auto justify-center ">
        <button className="text-indigo-700 border border-indigo-700 px-3 rounded font-medium hover:bg-indigo-50">
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
