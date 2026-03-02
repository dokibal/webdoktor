import { Container } from "@/components/layout/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eyebrow, Heading, Subheading } from "@/components/ui/typography";

type ProcessStep = {
  title: string;
  items: string[];
};

const steps: ProcessStep[] = [
  {
    title: "Rövid beszélgetés",
    items: [
      "Megismerem az üzleti célodat és a jelenlegi helyzetet.",
      "Átbeszéljük, hogy mire lenne valóban szükség (nem csak mit „kellene lefejleszteni”).",
    ],
  },
  {
    title: "Vázlat & ajánlat",
    items: [
      "Felrajzolom az oldal/szekciók logikus felépítését.",
      "Kapsz egy érthető, átlátható ajánlatot határidővel.",
    ],
  },
  {
    title: "Megvalósítás & finomhangolás",
    items: [
      "Iteratívan haladunk, több ponton kérhetsz módosítást.",
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
        <div className="flex flex-col gap-6 md:flex-row md:items-stretch">
          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-1 flex-col md:flex-row md:items-stretch">
              <Card className="flex-1">
                <CardHeader>
                  <div className="mb-2 flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground md:h-9 md:w-9 md:text-sm">
                      {index + 1}
                    </div>
                    <CardTitle>{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-muted">
                    {step.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

