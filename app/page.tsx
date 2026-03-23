import AboutUs from "@/app/_components/AboutUs";
import BannerSlider from "@/app/_components/BannerSlider";
import CleanRoom from "@/app/_components/CleanRoom";
import FeatureSection from "@/app/_components/FeatureSection";
import Footer from "@/app/_components/Footer";
import FreshIdeas from "@/app/_components/FreshIdeas";
import OrthoSolutions from "@/app/_components/OrthoSolutions";
import Partners from "@/app/_components/Partners";

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
