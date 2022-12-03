import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
function layout({ children }) {
  return (
    <div className="flex items-start ">
      <div className="w-64">
        <Sidebar />
      </div>
      <div className="w-full ">
        <Header />
        <div className="p-6 mx-auto container">
          <div className="rounded-md bg-white overflow-y-scroll hFixed tables">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default layout;
