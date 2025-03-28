import HeroSection from "@/components/home/hero-section";
import BgGradient from "@/components/common/bg-gradient";
import DemoSection from "@/components/home/demo-section";
import HowItWorksSection from "@/components/common/how-it-work";
import PricingSection from "@/components/home/pricing-section";
import CTASection from "@/components/home/cta-section";

export default function Home() {
  return (
    <div className="relatice w-full ">
      <BgGradient children={undefined} />
      <div className="flex flex-col">
        <HeroSection />
        <DemoSection />
        <HowItWorksSection />
      </div>
      <PricingSection/>
      <CTASection/>
    </div>
  );
}
