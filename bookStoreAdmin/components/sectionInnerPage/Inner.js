import React from "react";
import PageHeader from "../Reuseabletable/pageHeader/PageHeader";
import DisplayCard from "./displayCard/DisplayCard";

function Inner({ page, data }) {
  const [update, setUpdate] = React.useState(false);
  return (
    <div className="p-4 md:p-8 xl:p-10 ">
      <PageHeader
        update={update}
        setUpdate={setUpdate}
        innerPages={true}
        headingText={data.bookname + ""}
        onClickUpdate={() => setUpdate(!update)}
      />
      <DisplayCard update={update} data={data} page={page} />
    </div>
  );
}

export default Inner;
