import React from "react";
import Books from "../sidebarsvg/book";
import Audio from "../sidebarsvg/audio";
import Video from "../sidebarsvg/video";
import Link from "../sidebarsvg/link";
import Poster from "../sidebarsvg/poster";
import Nasheed from "../sidebarsvg/nasheed";
import Dashboard from "../sidebarsvg/dashboard";
function sidebaricon({ iconparam }) {
  switch (iconparam) {
    case "Dashboard":
      iconparam = <Dashboard />;
      break;
    case "Books":
      iconparam = <Books />;
      break;
    case "Audio":
      iconparam = <Audio />;
      break;
    case "Links":
      iconparam = <Link />;
      break;
    case "Video":
      iconparam = <Video />;
      break;
    case "Nasheed":
      iconparam = <Nasheed />;
      break;
    case "Poster":
      iconparam = <Poster />;
      break;
    default:
  }
  return <div>{iconparam}</div>;
}
export default sidebaricon;
