import React, { useEffect } from "react";
import data from "../../Arrays/nasheedData.json";
import router from "next/router";
import InnerPage from "../../components/sectionInnerPage/Inner";
import Layout from "../../components/layout";

function Nasheed() {
  const [Nasheed, setNasheed] = React.useState(data);
  const [id, setId] = React.useState();
  useEffect(() => {
    const id = router.query.id;
    setId(id);
    const Nasheed = data.find((Nasheed) => Nasheed.id == id);
    setNasheed(Nasheed);
  });
  console.log(Nasheed);
  if (!Nasheed) {
    console.log("Nasheeds not found");
  }

  return (
    <>
      <Layout>
        <InnerPage page={"Nasheed"} data={Nasheed} />
      </Layout>
    </>
  );
}

export default Nasheed;
