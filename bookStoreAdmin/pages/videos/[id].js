import React, { useEffect } from "react";
import data from "../../Arrays/videoData.json";
import router from "next/router";
import InnerPage from "../../components/sectionInnerPage/Inner";
import Layout from "../../components/layout";

function Video() {
  const [video, setvideo] = React.useState(data);
  const [id, setId] = React.useState();
  useEffect(() => {
    const id = router.query.id;
    setId(id);
    const video = data.find((video) => video.id == id);
    setvideo(video);
  });
  console.log(video);
  if (!video) {
    console.log("Videos not found");
  }

  return (
    <>
      <Layout>
        <InnerPage page={"Video"} data={video} />
      </Layout>
    </>
  );
}

export default Video;
