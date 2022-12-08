import React, { useEffect } from "react";
import data from "../../Arrays/posterData.json";
import router from "next/router";
import InnerPage from "../../components/sectionInnerPage/Inner";
import Layout from "../../components/layout";

function Poster() {
  const [poster, setPoster] = React.useState(data);
  const [id, setId] = React.useState();
  useEffect(() => {
    const id = router.query.id;
    setId(id);
    const poster = data.find((poster) => poster.id == id);
    setPoster(poster);
  });
  console.log(poster);
  if (!poster) {
    console.log("Poster not found");
  }

  return (
    <>
      <Layout>
        <InnerPage page={"Poster"} data={poster} />
      </Layout>
    </>
  );
}

export default Poster;
