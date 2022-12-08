import React from "react";
import Table from "../Reuseabletable/Table/Table";
import PageHeader from "../Reuseabletable/pageHeader/PageHeader";
import Router from "next/router";
import Data from "../../Arrays/linkData.json";
const index = () => {
  const NaviagateTo = (path) => {
    Router.push("/links/" + path);
  };
  return (
    <div className="p-4 md:p-8 xl:p-10 ">
      <PageHeader headingText={"Links"} />
      <Table title={"Links"} data={Data} NaviagateTo={NaviagateTo} />
    </div>
  );
};

export default index;
