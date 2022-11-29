import React from "react";
import Table from "../Reuseabletable/Table/Table";
import PageHeader from "../Reuseabletable/pageHeader/PageHeader";
const index = () => {
  return (
    <div>
      <PageHeader headingText={"Nasheeds"} />
      <Table title={"Nasheeds"} data={""} />
    </div>
  );
};

export default index;
