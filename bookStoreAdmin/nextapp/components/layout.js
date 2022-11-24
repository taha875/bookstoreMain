import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
function layout({ children }) {
  return (
    <div className="flex items-start">
      <div className="w-64">
        <Sidebar />
      </div>
      <div className="w-full">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default layout;
