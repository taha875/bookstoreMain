import React from "react";
import Layout from "../components/layout";
import Dashboard from "../components/dasboard/index";
import Adminlogin from "../components/AdminLogin/login";
import Bookinner from "./bookinner";

const index = () => {
  return (
    <Layout>
      <Bookinner />
    </Layout>
  );
};

export default index;
