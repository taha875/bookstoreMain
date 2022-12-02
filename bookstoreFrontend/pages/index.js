import React from "react";
import Home from "../components/LandingPage/home/home";
import Layout from "../components/layout/Layout";
import WhatWeOffer from "../components/LandingPage/whatWeOffer/WhatWeOffer";
import Cards from "../components/cards/cards";
import Newsletter from "../components/layout/newsletter";
import Footer from "../components/layout/footer";
export default function home() {
  return (
    <>
      {/* <Layout /> */}
      <Home />
      <WhatWeOffer />
      <Cards />
      <Newsletter/>
      <Footer/>
    </>
  );
}
