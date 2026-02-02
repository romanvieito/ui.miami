import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import Difference from "@/components/Difference";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark">
      <Navbar locale="en" />
      <Hero locale="en" />
      <Problem locale="en" />
      <Features locale="en" />
      <Testimonials locale="en" />
      <Pricing locale="en" />
      <Difference locale="en" />
      <Footer locale="en" />
    </main>
  );
}
