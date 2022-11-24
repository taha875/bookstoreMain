import React from "react";
import Audio from "./svg/audio";
import Book from "./svg/book";
import Links from "./svg/links";
import Video from "./svg/videos";
import Nasheeds from "./svg/nasheeds";
import Posters from "./svg/posters";
function icons({ iconElement }) {
  switch (iconElement) {
    case "video":
      iconElement = <Video />;
      break;
    case "book":
      iconElement = <Book />;
      break;
    case "link":
      iconElement = <Links />;
      break;
    case "nasheeds":
      iconElement = <Nasheeds />;
      break;
    case "audio":
      iconElement = <Audio />;
      break;
    case "icons":
      iconElement = <Links />;
      break;
      case"posters":
      iconElement=<Posters/>;
      break;
      case "links":
        iconElement=<Links/>;
        break;
        default:

  }

  return (
    <>
      <div>{iconElement}</div>
    </>
  );
}

export default icons;
