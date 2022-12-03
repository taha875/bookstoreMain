import React from "react";
import Table from "../Reuseabletable/Table/Table";
import PageHeader from "../Reuseabletable/pageHeader/PageHeader";
const audiotable = () => {
  return (
    <div>
      <PageHeader headingText={"Audio"} />
      <Table title={"Audio"} data={""} />
    </div>
  );
};

export default audiotable;
