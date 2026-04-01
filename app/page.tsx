import { Metadata } from "next";
import { ModalProvider } from "@/context/ModalContext";
import ModalShell from "@/components/ModalShell";
import Nav from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { AgentSection } from "@/components/AgentSection";
import { DashboardSection } from "@/components/DashboardSection";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import HowItWorks from "@/components/HowItWorks";
import IntegrationSection from "@/components/IntegrationSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Mogentik — AI Agents for Modern Teams",
  description: "...",
};

export default function MogentikPage() {
  return (
    <ModalProvider>
      <ModalShell />
      <Nav />
      <Hero />
      <Ticker />
      <AgentSection />
      <DashboardSection />
      <HowItWorks />
      <PricingSection />
      <IntegrationSection />
      <CTASection />
      <Footer />
    </ModalProvider>
  );
}