import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/sections/contact-section";
import { Heading, Subheading } from "@/components/ui/typography";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kapcsolat és ajánlatkérés - Webdoktor",
  description:
    "Vedd fel velem a kapcsolatot, ha modern, gyors és üzletileg is átgondolt weboldalt vagy webappot szeretnél.",
};

export default function ContactPage() {
  return (
    <Container className="py-16 md:py-24">
      <section className="space-y-10">
        <div className="space-y-6">
          <Heading level={1}>Kapcsolat &amp; ajánlatkérés</Heading>
          <Subheading>
            Írd le röviden, mire van szükséged, milyen üzleti célt szolgálna az
            oldal vagy alkalmazás, és milyen időtávban gondolkodsz. 24 órán
            belül válaszolok.
          </Subheading>
        </div>
        <ContactForm />
      </section>
    </Container>
  );
}


