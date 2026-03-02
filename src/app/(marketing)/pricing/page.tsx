import { Container } from "@/components/layout/container";
import { PricingSection } from "@/components/sections/pricing-section";
import { Heading, Subheading } from "@/components/ui/typography";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Árak és csomagok - Webdoktor",
  description:
    "Átlátható webfejlesztési csomagok landing page-ekhez, céges oldalakhoz és egyedi igényekhez.",
};

export default function PricingPage() {
  return (
    <Container className="py-16 md:py-24 space-y-10">
      <section className="space-y-6">
        <Heading level={1}>Árak és csomagok</Heading>
        <Subheading>
          Átlátható, csomagolt megoldásokat kínálok, de minden projektet egyedi
          igények alapján pontosítunk. A végleges árat mindig közösen
          finomítjuk.
        </Subheading>
      </section>
      <PricingSection />
    </Container>
  );
}


