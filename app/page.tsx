import AboutUs from "@/components/AboutUs";
import ContactSection from "@/components/Contactsection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import HomeSolutions from "@/components/HomeSolutions";
import NewArrival from "@/components/Newarrival";
import OfficeSolutions from "@/components/OfficeSolutions";
import PreDeliveryInspection from "@/components/PreDeliveryInspection";
import ReadymadeFurniture from "@/components/Readymadefurniture";
import ServicesSection from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <ServicesSection />
      <PreDeliveryInspection />
      <HomeSolutions />
      <OfficeSolutions />
      <ReadymadeFurniture />
      <NewArrival />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}
