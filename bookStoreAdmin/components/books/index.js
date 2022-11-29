import React from "react";
import PageHeader from "../Reuseabletable/pageHeader/PageHeader";
import Table from "../Reuseabletable/Table/Table";
import Data from "../../Arrays/bookData.json";
function index() {
  return (
    <div>
      <PageHeader headingText={"Book"} />
      <Table title={"Book"} data={Data} />
    </div>
  );
}

export default index;
