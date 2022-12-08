import React from "react";
import Table from "../Reuseabletable/Table/Table";
import PageHeader from "../Reuseabletable/pageHeader/PageHeader";
import Data from "../../Arrays/nasheedData.json";
import Router from "next/router";

function index() {
  const NaviagateTo = (path) => {
    Router.push("/nasheed/" + path);
  };

  return (
    <div className="p-4 md:p-8 xl:p-10 ">
      <PageHeader headingText={"Nasheed"} />
      <Table title={"Nasheed"} data={Data} NaviagateTo={NaviagateTo} />
    </div>
  );
}

export default index;
