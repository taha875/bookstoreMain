import React, { useEffect } from "react";
import data from "../../Arrays/linkData.json";
import router from "next/router";
import InnerPage from "../../components/sectionInnerPage/Inner";
import Layout from "../../components/layout";

function Link() {
  const [links, setlink] = React.useState(data);
  const [id, setId] = React.useState();
  useEffect(() => {
    const id = router.query.id;
    setId(id);
    const link = data.find((link) => link.id == id);
    setlink(link);
  });
  console.log(links);
  if (!links) {
    console.log("Link not found");
  }

  return (
    <>
      <Layout>
        <InnerPage page={"Link"} data={links} />
      </Layout>
    </>
  );
}

export default Link;
