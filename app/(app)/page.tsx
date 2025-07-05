"use client";

import Header from "@/components/header";
import Hero from "@/components/hero";
import Providers from "@/components/providers";
import HowItWorks from "@/components/how-it-works";
import Features from "@/components/features";
import Testimonials from "@/components/testimonails";
import Pricing from "@/components/pricing";
import FAQ from "@/components/faq";
import CallToAction from "@/components/call-to-action";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Providers />
      <HowItWorks />
      <Features />
      <Testimonials />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
}
