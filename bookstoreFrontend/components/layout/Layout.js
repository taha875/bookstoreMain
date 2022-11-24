import React from "react";
import Navbar from "./navbar";
export default function layout({ Childern }) {
  return (
    <div className="relative z-30 flex flex-col">
      <Navbar />
      {Childern}
    </div>
  );
}
