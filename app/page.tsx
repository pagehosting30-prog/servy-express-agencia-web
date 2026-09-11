import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroBand from "@/components/IntroBand";
import Packages from "@/components/Packages";
import Transport from "@/components/Transport";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <>
        <Hero />
        <IntroBand />
        <Packages />
        <Transport />
        <WhyUs />
        <Contact />
      </>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
