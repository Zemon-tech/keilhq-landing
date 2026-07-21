import type { Metadata } from "next";
import { PricingClient } from "./pricing-client";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing for teams of all sizes. Start free with a 30-day Pro trial. No credit card required.",
};

export default function PricingPage() {
  return <PricingClient />;
}
