import CarCompanies from "./Components/CarCompanies/CarCompanies";
import Cars from "./Components/Cars/Cars";
import FAQ from "./Components/FAQ/FAQ";
import Gallery from "./Components/Gallary/Gallary";
import OurProcess from "./Components/OurProcess/OurProcess";
import OurQuality from "./Components/OurQuality/OurQuality";
import OurServices from "./Components/OurServices/OurServices";
import ReadyToHit from "./Components/ReadyToHit/ReadyToHit";
import HeroSection from "./Components/Shared/Navbar/HeroSection/HeroSection";
import StayInformed from "./Components/StayInFormed/StayInFormed";
import TestimonialSlider from "./Components/Testimonial/Testimonial";
import TrustedPartnerSection from "./Components/YourTrustedPartner/YourTrustedPartner";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <HeroSection></HeroSection>
        <TrustedPartnerSection></TrustedPartnerSection>
        <OurServices></OurServices>
        <Cars></Cars>
        <Gallery></Gallery>
        <OurProcess></OurProcess>
        <CarCompanies></CarCompanies>
        <OurQuality></OurQuality>
        <FAQ></FAQ>
        <TestimonialSlider></TestimonialSlider>
        <div className="bg-black">
          <ReadyToHit></ReadyToHit>
        </div>
        <StayInformed></StayInformed>
      </div>
    </>
  );
}
