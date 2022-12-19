import React from "react";
import WhatWeOffer from "./WhatWeOffer/WhatWeOffer";
import Header from "./Header/Header";
import AboutUs from "./AboutUs/AboutUs";
import OurMission from "./OurMission/OurMission";
import Donation from "./Donation/Donation";
import Newsletter from "./newsletter/Newsletter";
import Footer from "./Footer/Footer";
function LandingPage() {
  return (
    <div className="">
      <Header />
      <WhatWeOffer />
      <AboutUs />
      <OurMission />
      <Donation />
      <Newsletter/> 
      <Footer />
    </div>
  );
}

export default LandingPage;
