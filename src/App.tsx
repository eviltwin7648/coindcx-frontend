import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Header } from "./components/Header";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Features } from "./components/Features";
import { CryptoPrices } from "./components/CryptoPrices";
import { Security } from "./components/Security";
import { BlueGlobe } from "./components/BlueGlobe";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

export default function HomePage() {
  return (
    <main className="font-sans text-gray-900">
      <Header />
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <CryptoPrices />
      <Security />
      <BlueGlobe />
      <FAQ />
      <Footer />
    </main>
  );
}
