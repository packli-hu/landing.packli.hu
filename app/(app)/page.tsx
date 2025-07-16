"use client";

import Header from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Testimonials from "@/components/testimonails";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import SignUp from "@/components/signup";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      {/*<HowItWorks /> */}
      <Features />
      <Testimonials />
      <CallToAction />
      <SignUp />
      <Footer />
    </div>
  );
}
