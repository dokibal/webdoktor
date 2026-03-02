import { Container } from "@/components/layout/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eyebrow, Heading, Subheading } from "@/components/ui/typography";

type ProcessStep = {
  title: string;
  items: string[];
};

const steps: ProcessStep[] = [
  {
    title: "1. Rövid beszélgetés",
    items: [
      "Megismerem az üzleti célodat és a jelenlegi helyzetet.",
      "Átbeszéljük, hogy mire lenne valóban szükség (nem csak mit „kellene lefejleszteni”).",
    ],
  },
  {
    title: "2. Vázlat & ajánlat",
    items: [
      "Felrajzolom az oldal/szekciók logikus felépítését.",
      "Kapsz egy érthető, átlátható ajánlatot határidővel.",
    ],
  },
  {
    title: "3. Megvalósítás & finomhangolás",
    items: [
      "Iteratívan haladunk, több ponton kérhetesz módosítást.",
      "Élesítés előtt együtt ellenőrizzük: működés, sebesség, mobil nézet.",
    ],
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="border-b border-border/60 bg-background min-h-screen py-16 md:py-20 flex items-center"
    >
      <Container className="space-y-10">
        <div className="space-y-4">
          <Eyebrow>Hogyan dolgozom</Eyebrow>
          <Heading>Átlátható, közös munka - technikai zsargon nélkül</Heading>
          <Subheading>
            Nem kell technikai részletekkel foglalkoznod - az a dolgom, hogy a
            céljaidat érthető lépésekre bontsam, és végigvigyem a folyamatot az
            első ötlettől az éles, működő oldalig.
          </Subheading>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <Card key={step.title}>
              <CardHeader>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-muted">
                  {step.items.map((item) => (
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

