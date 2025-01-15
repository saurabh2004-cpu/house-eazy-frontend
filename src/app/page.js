'use client';
import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import PropertyCarousel from "@/components/PropertyCarousel";
import TestimonialCarousel from "@/components/TestimonialsCarousel";
import WhyBuyFromUs from "@/components/WhyBuyFromUs";


export default function Home() {

  return (
    <div>
      <HeroSection />
      <PropertyCarousel />
      <ContactForm />
      <AboutSection />
      <ProcessSection />
      <TestimonialCarousel />
      <WhyBuyFromUs />
    </div>
  );
}
