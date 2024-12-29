import React from "react";
import AboutUsCover from "../Components/AboutUs/AboutUsCover";
import TrustedPartnerSection from "../Components/YourTrustedPartner/YourTrustedPartner";
import OurBrands from "../Components/OurServices/ServicesPage/OurBrands";
import OurQuality from "../Components/OurQuality/OurQuality";
import TestimonialSlider from "../Components/Testimonial/Testimonial";
import Tab from "../Components/AboutUs/Tab";
import OurTeam from "../Components/AboutUs/OurTeam";

const page = () => {
  return (
    <div className="bg-white pb-8 md:pb-0">
      <AboutUsCover></AboutUsCover>
      <Tab></Tab>
      <TrustedPartnerSection></TrustedPartnerSection>
      <OurTeam></OurTeam>
      <OurBrands></OurBrands>
      <OurQuality></OurQuality>
      <TestimonialSlider></TestimonialSlider>
    </div>
  );
};

export default page;
