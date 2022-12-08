import React from "react";
import Layout from "../components/layout";
import Dashboard from "../components/dasboard/index";
import Adminlogin from "../components/AdminLogin/login";
import Bookinner from "./bookinner";
import Settings from "../components/Settings/settings";
import Addbook from "../components/Add Page/add-age";

const index = () => {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
};

export default index;
