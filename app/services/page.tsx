
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SeoServicesSection from "@/components/SeoServicesSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
<ServicesSection />
<SeoServicesSection />
<WhyChooseUs />

 <CTASection />
      <Footer />
    </>
  );
}