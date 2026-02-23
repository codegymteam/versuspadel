import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import DashboardSection from "@/components/landing/DashboardSection";
import POSSection from "@/components/landing/POSSection";
import PricingSection from "@/components/landing/PricingSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";
import FloatingCTA from "@/components/landing/FloatingCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow w-full overflow-x-hidden">
        <HeroSection />
        <FeaturesSection />
        <DashboardSection />
        <POSSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
