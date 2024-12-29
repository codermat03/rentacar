import React from "react";
import ContactUsForm from "../Components/ContactUs/ContactUsForm";
import ContactUsCover from "../Components/ContactUs/ContactUsCover";
import MapSection from "../Components/ContactUs/Maps";

const ContactUs = () => {
  return (
    <div className="bg-white">
      <ContactUsCover />
      <ContactUsForm></ContactUsForm>
      <MapSection></MapSection>
    </div>
  );
};

export default ContactUs;
