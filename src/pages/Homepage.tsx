import { motion } from "framer-motion";
import { pageVariants } from "../utils/motionVariants";
import Header from "../components/Header";
import HeroSection from "../components/homepage/HeroSection";
import StatsSection from "../components/homepage/StatsSection";
import FeaturedProjectsSection from "../components/homepage/FeaturedProjects";
import HorizontalProjectsSection from "../components/homepage/HorizontalProjectsSection";
import ServicesSection from "../components/homepage/ServicesSection";
import TestimonialsSection from "../components/homepage/TestimonialsSection";
import ContactSection from "../components/homepage/ContactSection";
import Footer from "../components/Footer";

interface HomepageProps {
  isVisible?: boolean;
}

export default function Homepage({ isVisible }: HomepageProps) {
  return (
    <motion.div
      className="w-full bg-charcoal-950 text-white"
      variants={pageVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <Header />
      <HeroSection />
      <StatsSection />
      <FeaturedProjectsSection />
      <HorizontalProjectsSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </motion.div>
  );
}