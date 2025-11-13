import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import About from "@/components/sections/About";
import MyVehicle from "@/components/sections/MyVehicle";
import ServiceStandards from "@/components/sections/ServiceStandards";
import ServicesOffered from "@/components/sections/ServicesOffered";
import WhyChoose from "@/components/sections/WhyChoose";
import ServiceAreas from "@/components/sections/ServiceAreas";
import BookingRates from "@/components/sections/BookingRates";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import ProfessionalCommitment from "@/components/sections/ProfessionalCommitment";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <About />
      <MyVehicle />
      <ServicesOffered />
      <ServiceStandards />
      <ServiceAreas />
      <WhyChoose />
      <BookingRates />
      {/* <Testimonials /> */}
      <Contact />
      <ProfessionalCommitment />
    </main>
  );
}
