import React from "react";

function Table({ title, data, NaviagateTo }) {
  const [show, setShow] = React.useState();
  return (
    <>
      <div className="bg-white overflow-x-auto mt-8">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="h-20 w-full text-sm leading-none text-gray-600">
              <th className="font-normal text-left pl-4">#</th>
              <th className="font-normal text-left pl-11">{title} Name</th>
              <th className="font-normal text-left pl-10">Price</th>
              <th className="font-normal text-left">Created</th>
              <th className="font-normal text-left">{title} Description</th>
              <th className="font-normal text-left w-32">Actions</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {data && (
              <>
                {data?.map((el, i) => {
                  return (
                    <tr
                      onClick={() => NaviagateTo(el.id)}
                      key={i}
                      className="h-20 text-sm leading-none text-gray-700 border-b border-t border-gray-200 bg-white hover:bg-gray-50 cursor-pointer"
                    >
                      <td className="pl-4">{el.id}</td>
                      <td className="pl-11">
                        <div className="flex items-center">
                          <p>{el.bookname}</p>
                        </div>
                      </td>
                      <td>
                        <p className="mr-16 pl-10">
                          {el.bookPrice ? `${el.bookPrice}` : `Free`}{" "}
                        </p>
                      </td>
                      <td>
                        <p className="mr-16">{el.date}</p>
                      </td>
                      <td>
                        <p className="mr-16">{el.bookDescription}</p>
                      </td>
                      <td>
                        <div className="flex items-center">
                          <button className="bg-gray-100 mr-3 hover:bg-indigo-700 hover:text-white py-2.5 px-5 rounded text-sm leading-3 text-gray-500 focus:outline-none">
                            Edit
                          </button>
                          <button className="bg-gray-100 mr-3 hover:bg-red-600 hover:text-white py-2.5 px-5 rounded text-sm leading-3 text-gray-500 focus:outline-none ">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
