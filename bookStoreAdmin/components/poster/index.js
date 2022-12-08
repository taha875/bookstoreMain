import React from "react";
import Table from "../Reuseabletable/Table/Table";
import PageHeader from "../Reuseabletable/pageHeader/PageHeader";
import Data from "../../Arrays/posterData.json";
import Router from "next/router";

function index() {
  const NaviagateTo = (path) => {
    Router.push("/posters/" + path);
  };

  return (
    <div className="p-4 md:p-8 xl:p-10 ">
      <PageHeader headingText={"Poster"} />
      <Table title={"Poster"} data={Data} NaviagateTo={NaviagateTo} />
    </div>
  );
}

export default index;
