import React from "react";
import PageHeader from "../Reuseabletable/pageHeader/PageHeader";
import Table from "../Reuseabletable/Table/Table";
import Data from "../../Arrays/bookData.json";
import router from "next/router";
function index() {
  const NaviagateTo = (path) => {
    router.push("/books/" + path);
  };

  return (
    <div className="p-4 md:p-8 xl:p-10 ">
      <PageHeader headingText={"Book"} />
      <Table title={"Book"} data={Data} NaviagateTo={NaviagateTo} />
    </div>
  );
}

export default index;
