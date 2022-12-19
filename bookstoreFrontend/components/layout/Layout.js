import React from "react";

import Header from "../landingPageV2/Header/Header"
import Footer from "./footers";
export default function layout({ Childern }) {
  return (
    <div className="relative z-30 flex flex-col">
      <Header />
      {Childern}
      <Footer />
    </div>
  );
}
