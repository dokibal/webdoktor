import { Container } from "@/components/layout/container";
import { ServicesSection } from "@/components/sections/services-section";
import { Heading, Subheading } from "@/components/ui/typography";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Szolgáltatások - Webdoktor",
  description:
    "Landing page-ek, céges bemutatkozó oldalak és webapp MVP-k - modern, üzletileg is átgondolt webfejlesztés.",
};

export default function ServicesPage() {
  return (
    <Container className="py-16 md:py-24 space-y-10">
      <section className="space-y-6">
        <Heading level={1}>Szolgáltatások</Heading>
        <Subheading>
          Egyedi, gyors és jól átgondolt webes megoldásokat készítek - legyen
          szó landing page-ről, céges bemutatkozó oldalról vagy egy webapp
          első MVP-jéről.
        </Subheading>
      </section>
      <ServicesSection />
    </Container>
  );
}


