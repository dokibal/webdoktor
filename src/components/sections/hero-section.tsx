import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heading, Subheading } from "@/components/ui/typography";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="border-b border-border/60 bg-gradient-to-b from-primary/10 via-background to-background min-h-screen py-16 md:py-24 flex items-center"
    >
      <Container className="max-w-4xl space-y-8">
        <div className="space-y-8">
          <div className="space-y-5">
            <Heading level={1}>
              Modern, gyors és{" "}
              <span className="text-primary">üzletileg is átgondolt</span>{" "}
              weboldalak.
            </Heading>
            <Subheading>
              Segítek, hogy az online jelenléted ne csak szép legyen, hanem
              mérhető eredményt is hozzon: több megkeresést, jobb ügyfélélményt,
              tisztább folyamataokat.
            </Subheading>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button size="lg">
              <Link href="#contact">Ajánlatot szeretnék kérni</Link>
            </Button>
            <Button variant="ghost" size="lg">
              <Link href="#services">Szolgáltatások megtekintése</Link>
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
            <Badge>Landing page-ek</Badge>
            <Badge variant="outline">Céges bemutatkozó oldalak</Badge>
            <Badge variant="outline">Webapp MVP-k</Badge>
          </div>
        </div>
      </Container>
    </section>
  );
}

