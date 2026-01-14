"use client";

import Header from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Testimonials from "@/components/testimonails";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import Offer from "@/components/offer";
import FAQ from "@/components/faq";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Offer />
      <Features />
      <FAQ />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
