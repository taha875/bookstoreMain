import React from "react";
import Data from "../../Arrays/subcriberDummyData.json";
import PageHeader from "../Reuseabletable/pageHeader/PageHeadSub";
import SubTable from "../Reuseabletable/Table/SubTable";
function index() {
  return (
    <>
      <div></div>
      <div className="p-4 md:p-8 xl:p-10 ">
        <div className="flex flex col items-center mb-2 font-semibold">
          <div className="font-semibold text-2x1 mr-2 ">
            Total Number of Subscriber
          </div>
          {Data.length}
        </div>
        <PageHeader headingText={"Subscriber"} />
        <SubTable title={"Subcriber"} data={Data} />
      </div>
    </>
  );
}

export default index;
