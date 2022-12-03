import React from "react";
import Books from "../books";
import Audio from "../audio";
import Link from "../link";
import Video from "../video";
import Nasheeds from "../nasheed";
import Posters from "../poster";
import Info from "../info";

function icon({ iconparam }) {
  switch (iconparam) {
    case "Books":
      iconparam = <Books />;
      break;
    case "Audio":
      iconparam = <Audio />;
      break;
    case "Links":
      iconparam = <Link />;
      break;
    case "Videos":
      iconparam = <Video />;
      break;
    case "Nasheeds":
      iconparam = <Nasheeds />;
      break;
    case "Posters":
      iconparam = <Posters />;
      break;
    case "Info":
      iconparam = <Info />;
      break;
    default:
  }
  return <div>{iconparam}</div>;
}
export default icon;
