import React from "react";
import WhatWeOffer from "./WhatWeOffer/WhatWeOffer";
import Header from "./Header/Header";
import AboutUs from "./AboutUs/AboutUs";
import OurMission from "./OurMission/OurMission";
import Donation from "./Donation/Donation";

function LandingPage() {
  return (
    <div className="pb-24">
      <Header />
      <WhatWeOffer />
      <AboutUs />
      <OurMission />
      <Donation />
    </div>
  );
}

export default LandingPage;
