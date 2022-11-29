import React from "react";
import Table from "../Reuseabletable/Table/Table";
import PageHeader from "../Reuseabletable/pageHeader/PageHeader";
const audiotable = () => {
  return (
    <div>
      <PageHeader headingText={"Links"} />
      <Table title={"Links"} data={""} />
    </div>
  );
};

export default audiotable;
