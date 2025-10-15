"use client"

import { useState } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import TargetUsersSection from "@/components/target-users-section"
import TestimonialsSection from "@/components/testimonials-section"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"
import BackToTopButton from "@/components/back-to-top-button"

export default function ITSupportLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = sectionId === "home" ? 0 : element.offsetTop - 64
      window.scrollTo({ top: offset, behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <ServicesSection />
      <TargetUsersSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
      <BackToTopButton scrollToSection={scrollToSection} />
    </div>
  )
}
