import AboutUs from "@/components/AboutUs";
import BannerSlider from "@/components/BannerSlider";
import CleanRoom from "@/components/CleanRoom";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import FreshIdeas from "@/components/FreshIdeas";
import OrthoSolutions from "@/components/OrthoSolutions";
import Partners from "@/components/Partners";

export default function Home() {
  return (
    <>
      <BannerSlider />
      <AboutUs />
      <FreshIdeas />
      <OrthoSolutions />
      <CleanRoom />
      <FeatureSection />
      <Partners />
      <Footer />
    </>
  );
}
