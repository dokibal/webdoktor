import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eyebrow, Heading, Subheading } from "@/components/ui/typography";
import Link from "next/link";

type PricingTier = {
  name: string;
  highlight: string;
  price: string;
  featured?: boolean;
  features: string[];
};

const tiers: PricingTier[] = [
  {
    name: "Starter",
    highlight: "Induló vállalkozásoknak",
    price: "Ft 180 000-tól",
    features: ["1 oldalas landing vagy bemutatkozó oldal", "Alap SEO beállítások", "1 kör módosítás"],
  },
  {
    name: "Pro",
    highlight: "Növekedésre hangolva",
    price: "Ft 280 000-tól",
    featured: true,
    features: [
      "2-4 szekciós, egyedi landing vagy céges oldal",
      "Strukturált tartalom, CTA-k, ajánlatkérés",
      "2 kör módosítás, technikai konzultáció",
    ],
  },
  {
    name: "Custom",
    highlight: "Komplexebb igényekre",
    price: "Egyedi árazás",
    features: ["Webapp MVP, portfólió oldal, blog", "Egyedi funkcionalitás", "Közös tervezés, ütemezés"],
  },
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="border-b border-border/60 bg-primary/10 min-h-screen py-16 md:py-20 flex items-center"
    >
      <Container className="space-y-10">
        <div className="space-y-4">
          <Eyebrow>Árak</Eyebrow>
          <Heading>Átlátható csomagok, egyedi finomhangolással</Heading>
          <Subheading>
            Az itt szereplő árak irányadóak - minden projektet rövid beszélgetés alapján pontosítunk, hogy reális
            legyen a költség és az időzítés is.
          </Subheading>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={tier.featured ? "border-primary/40 shadow-lg" : "border-border/80"}
            >
              <CardHeader>
                <div className="mb-2 flex items-center justify-between">
                  <CardTitle>{tier.name}</CardTitle>
                  {tier.featured && <Badge>Legnépszerűbb</Badge>}
                </div>
                <CardDescription>{tier.highlight}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm font-semibold text-foreground">{tier.price}</p>
                <ul className="space-y-1 text-xs text-muted">
                  {tier.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
                <Button
                  variant={tier.featured ? "primary" : "outline"}
                  size="sm"
                  className="mt-2 w-full"
                >
                  <Link href="/contact">Érdekel ez a csomag</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

