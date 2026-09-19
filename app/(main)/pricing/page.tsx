import type { Metadata } from "next";
import { PricingClient } from "./pricing-client";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing for teams of all sizes. We are currently onboarding pilot teams from the waitlist.",
};

export default function PricingPage() {
  return <PricingClient />;
}
