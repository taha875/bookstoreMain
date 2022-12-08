import React from "react";
import Table from "../Reuseabletable/Table/Table";
import PageHeader from "../Reuseabletable/pageHeader/PageHeader";
import Data from "../../Arrays/audioData.json";
import Router from "next/router";
const audiotable = () => {
  const NaviagateTo = (path) => {
    Router.push("/audio/" + path);
  };
  return (
    <div className="p-4 md:p-8 xl:p-10">
      <PageHeader headingText={"Audio"} />
      <Table title={"Audio"} data={Data} NaviagateTo={NaviagateTo} />
    </div>
  );
};

export default audiotable;
