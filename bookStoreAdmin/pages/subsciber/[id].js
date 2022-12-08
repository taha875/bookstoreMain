import React, { useEffect } from "react";
import data from "../../Arrays/subcriberDummyData.json";
import router from "next/router";
import Layout from "../../components/layout";

function Subcriber() {
  const [Subcriber, setSubcriber] = React.useState(data);
  const [id, setId] = React.useState();
  useEffect(() => {
    const id = router.query.id;
    setId(id);
    const Subcriber = data.find((Subcriber) => Subcriber.id == id);
    setSubcriber(Subcriber);
  });
  console.log(Subcriber);
  if (!Subcriber) {
    console.log("Subcriber not found");
  }

  return (
    <>
      <Layout>
        <InnerPage page={"Subcriber"} data={Subcriber} />
      </Layout>
    </>
  );
}

export default Subcriber;
