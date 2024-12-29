import React from "react";
import ServicesCover from "../Components/OurServices/ServicesPage/ServicesCover";
import AllServices from "../Components/OurServices/ServicesPage/AllServices";
import TestimonialSlider from "../Components/Testimonial/Testimonial";
import OurBrands from "../Components/OurServices/ServicesPage/OurBrands";

const AllServicesPage = () => {
  return (
    <main className="">
      <div className="bg-white">
        <ServicesCover />
        <AllServices />
        <OurBrands />
        <div className="py-10 md:py-0">
          <TestimonialSlider></TestimonialSlider>
        </div>
      </div>
    </main>
  );
};

export default AllServicesPage;
