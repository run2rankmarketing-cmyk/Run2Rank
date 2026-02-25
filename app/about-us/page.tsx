import AboutSection from "@/components/AboutSection";
import CoreServices from "@/components/CoreServices";
import CoreValues from "@/components/CoreValues";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroSection from "@/components/HeroSection";
import MissionVision from "@/components/MissionVision";
import OurProcess from "@/components/OurProcess";
import OurStorySection from "@/components/OurStorySection";
import StatsSection from "@/components/StatsSection";
import TeamSection from "@/components/TeamSection";
import Testimonials from "@/components/Testimonials";
import WhoWeAre from "@/components/WhoWeAre";
import WhyRun2Rank from "@/components/WhyRun2Rank";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
<AboutSection />
<OurStorySection />
<MissionVision />
      <CoreValues />
     <TeamSection />
      <Footer />
    </>
  );
}