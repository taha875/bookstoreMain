import React from "react";
import Data from "../../../Carddata/data.json";
function button({ btnfunct }) {
  switch (btnfunct) {
    case "Books":
      btnfunct = window.open("books.com");
      break;
    default:
  }
}
export default button_switch;
