import CallToActionSection from "./components/Call-to-Action Section/CallToActionSection";
import FeaturedProjectsSection from "./components/featured-projects-section/FeaturedProjectsSection";
import HeroSection from "./components/hero-section/HeroSection";
import IndustriesSection from "./components/industries-section/IndustriesSection";
import LeadershipSection from "./components/leadership/LeadershipSection";
import OurServices from "./components/our-services/OurServices";
import OurProcessSection from "./components/process-steps/OurProcessSection";
import ClientTestimonialsSection from "./components/testimonials/ClientTestimonialsSection";
import WhyChooseUsSection from "./components/why-chose-us/WhyChooseUsSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <OurServices/>
      <WhyChooseUsSection/>
      <FeaturedProjectsSection/>
      <IndustriesSection/>
      <LeadershipSection/>
      <ClientTestimonialsSection/>
      <OurProcessSection/>
      
      <CallToActionSection/>
    </div>
  );
}