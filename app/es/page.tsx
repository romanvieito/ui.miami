import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import Difference from "@/components/Difference";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "UI.Miami | Haciendo tu legado descubrible",
  description:
    "Autoridad digital con IA para pequeños negocios cubanos en Miami. Transformamos tus años de experiencia en oro digital.",
  keywords: [
    "negocios cubanos Miami",
    "marketing con IA",
    "pequeñas empresas digitales",
    "negocios con legado",
    "marketing en Miami",
  ],
  openGraph: {
    title: "UI.Miami | Haciendo tu legado descubrible",
    description:
      "Autoridad digital con IA para pequeños negocios cubanos en Miami.",
    type: "website",
  },
};

export default function SpanishLandingPage() {
  return (
    <main className="min-h-screen bg-dark" lang="es">
      <Navbar locale="es" />
      <Hero locale="es" />
      <Problem locale="es" />
      <Features locale="es" />
      <Testimonials locale="es" />
      <Pricing locale="es" />
      <Difference locale="es" />
      <Footer locale="es" />
    </main>
  );
}
