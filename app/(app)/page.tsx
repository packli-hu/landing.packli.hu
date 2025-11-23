"use client";

import Header from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Testimonials from "@/components/testimonails";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import SignUp from "@/components/signup";
import FAQ from "@/components/faq";
import Contact from "@/components/contact";
import Offer from "@/components/offer";
import Providers from "@/components/providers";
import HowItWorks from "@/components/how-it-works";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Offer />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
