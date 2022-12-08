import React from "react";
import PageHeader from "../Reuseabletable/pageHeader/PageHeader";
import Table from "../Reuseabletable/Table/Table";
import Router from "next/router";
import Data from "../../Arrays/videoData.json";
function index() {
  const NaviagateTo = (path) => {
    Router.push("/videos/" + path);
  };
  return (
    <div className="p-4 md:p-8 xl:p-10 ">
      <PageHeader headingText={"Video"} />
      <Table title={"Video"} data={Data} NaviagateTo={NaviagateTo} />
    </div>
  );
}

export default index;
