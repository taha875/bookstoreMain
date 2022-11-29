import React from "react";
import PageHeader from "../Reuseabletable/pageHeader/PageHeader";
import Table from "../Reuseabletable/Table/Table";

const index = () => {
  return (
    <div>
      <PageHeader headingText={"Posters"} />
      <Table title={"Posters"} data={""} />
    </div>
  );
};

export default index;
