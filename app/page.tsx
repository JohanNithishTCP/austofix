import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeatureCards from "@/components/FeatureCards";
import FreshIdeas from "@/components/FreshIdeas";
import Products from "@/components/Products";
import CleanRoom from "@/components/CleanRoom";
import WhatWeOffer from "@/components/WhatWeOffer";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeatureCards />
        <FreshIdeas />
        <Products />
        <CleanRoom />
        <WhatWeOffer />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
