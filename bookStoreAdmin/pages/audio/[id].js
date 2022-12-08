import React, { useEffect } from "react";
import data from "../../Arrays/audioData.json";
import router from "next/router";
import InnerPage from "../../components/sectionInnerPage/Inner";
import Layout from "../../components/layout";

function Audio() {
  const [audio, setAudio] = React.useState(data);
  const [id, setId] = React.useState();
  useEffect(() => {
    const id = router.query.id;
    setId(id);
    const audio = data.find((audio) => audio.id == id);
    setAudio(audio);
  });
  console.log(audio);
  if (!audio) {
    console.log("Audio not found");
  }

  return (
    <>
      <Layout>
        <InnerPage page={"Audio"} data={audio} />
      </Layout>
    </>
  );
}

export default Audio;
