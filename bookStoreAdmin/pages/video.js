import React from "react";
import Layout from "../components/layout";
import Video from "../components/video/index";
import Router from "next/router";

const video = () => {
  const NaviagateTo = (path) => {
    Router.push("/books/" + path);
  };
  return (
    <Layout>
      <Video />
    </Layout>
  );
};

export default video;
