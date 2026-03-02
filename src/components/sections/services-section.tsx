import { Container } from "@/components/layout/container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eyebrow, Heading, Subheading } from "@/components/ui/typography";

type Service = {
  title: string;
  description: string;
  details: string[];
};

const services: Service[] = [
  {
    title: "Bemutatkozó céges oldal",
    description:
      "Professzionális, mégis könnyen frissíthető weboldal, ami érthetően elmagyarázza, mivel foglalkozol és miért érdemes téged választani.",
    details: ["1-3 egyedi szekció", "Reszponzív design", "Alap SEO beállítások"],
  },
  {
    title: "Landing page kampányokhoz",
    description:
      "Egy fókuszált oldal, ami a konverzióról szól: feliratkozás, ajánlatkérés vagy vásárlás - átgondolt tartalomstruktúrával.",
    details: ["Célzott tartalmi struktúra", "Gyors betöltés", "Mérésre előkészítve"],
  },
  {
    title: "Webapp MVP / prototípus",
    description:
      "Interaktív, böngészőben futó prototípus, amivel validálhatod az ötletedet, mielőtt nagyobb fejlesztésbe vágnál.",
    details: ["Komponens-alapú felépítés", "Tiszta kód", "Skálázható architektúra"],
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="border-b border-border/60 bg-primary/5 min-h-screen py-16 md:py-20 flex items-center"
    >
      <Container className="space-y-10">
        <div className="space-y-4">
          <Eyebrow>Szolgáltatások</Eyebrow>
          <Heading>Amiben leginkább tudok segíteni</Heading>
          <Subheading>
            Nem „egy újabb sablonos weboldalt” készítek, hanem olyan megoldást, ami illeszkedik az üzleti céljaidhoz
            és technikailag is hosszú távon vállalható.
          </Subheading>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="h-full">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-xs text-muted">
                  {service.details.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

