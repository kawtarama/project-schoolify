import React from "react";
import HeroSection from "../sections/HeroSection";
import FeaturesSection from "../sections/FeaturesSection";
import PricingSection from '../sections/PricingSection';

import ContactSection from "../sections/ContactSection";
import ImageSlider from "../sections/ImageSlider";
import BackToSchoolSection from "../sections/BackToSchoolSection";
import TeamSection from "../sections/TeamSection";
import MobileAppSection from "../sections/MobileAppSection";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <MobileAppSection/>
      <PricingSection />
      <ImageSlider />
      {/* <ContactSection /> */}
      <BackToSchoolSection /> 
     < TeamSection/>
    </div>
  );
};

export default Home;
