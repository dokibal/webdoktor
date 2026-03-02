import { Container } from "@/components/layout/container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eyebrow, Heading, Subheading } from "@/components/ui/typography";

type ReferenceProject = {
  title: string;
  logo?: {
    src?: string;
    alt: string;
  };
  clientType: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  url?: string;
  testimonial?: {
    quote: string;
    name: string;
    role?: string;
  };
};

const projects: ReferenceProject[] = [
  {
    title: "Holló-Vill villanyszerelő weboldal",
    logo: {
      src:"hollo-vill.webp",
      alt: "Holló-Vill logó",
    },
    clientType: "Tatabányai és környékbeli villanyszerelő vállalkozás, aki professzionális, bizalmat keltő online jelenlétet szeretett volna.",
    challenge:
      "A korábbi kommunikáció főleg ajánlásokon és telefonos megkereséseken alapult; szükség volt egy átlátható, mobilbarát oldalra, ami bemutatja a szolgáltatásokat és segít bizalmat építeni.",
    solution:
      "Letisztult, könnyen áttekinthető bemutatkozó oldal, ahol a látogató gyorsan megtalálja, miben segít a cég, milyen területeken dolgozik, és hogyan veheti fel a kapcsolatot.",
    outcomes: [
      "Professzionális, egységes megjelenés a teljes oldalon",
      "Átlátható szolgáltatáslista lakossági és céges ügyfeleknek",
      "Mobilon is könnyen használható, gyorsan betöltő oldal",
    ],
    url: "https://hollo-vill.hu/",
    testimonial: {
      quote:
        "Az új oldal profin mutatja be, miben tudunk segíteni, és az ügyfelek is könnyebben találnak meg minket online.",
      name: "Holló-Vill",
      role: "Villanyszerelés Tatabányán és környékén",
    },
  },
];

export function ReferenceSection() {
  return (
    <section
      id="references"
      className="border-b border-border/60 bg-background min-h-screen py-16 md:py-20 flex items-center"
    >
      <Container className="space-y-10">
        <div className="space-y-4">
          <Eyebrow>Referenciák</Eyebrow>
          <Heading>Projektek, ahol már segítettem</Heading>
          <Subheading>
            Néhány példa arra, hogyan néz ki a gyakorlatban, amikor egy meglévő
            ötletet közös gondolkodással átlátható, modern webes megoldássá
            formálunk.
          </Subheading>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="h-full w-full max-w-2xl"
            >
              <CardHeader>
                <div className="flex items-start gap-3">
                  {project.logo?.src ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.logo.src}
                      alt={project.logo.alt}
                      className="mt-0.5 h-9 w-9 rounded-md border border-border/50 object-contain bg-background"
                      loading="lazy"
                    />
                  ):null}
                  <div className="min-w-0 flex-1">
                    <CardTitle>{project.title}</CardTitle>
                  </div>
                </div>
                <CardDescription>{project.clientType}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-xs text-muted">
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">Kiinduló helyzet</p>
                  <p>{project.challenge}</p>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">Megoldás</p>
                  <p>{project.solution}</p>
                  {project.outcomes.length > 0 && (
                    <ul className="list-disc space-y-1 pl-4">
                      {project.outcomes.map((outcome) => (
                        <li key={outcome}>{outcome}</li>
                      ))}
                    </ul>
                  )}
                </div>
                {project.url && (
                  <div className="mt-2 flex justify-center">
                    <Button variant="outline" size="sm">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs"
                      >
                        Megnézem a weboldalt
                      </a>
                    </Button>
                  </div>
                )}
                {project.testimonial && (
                  <figure className="space-y-1 rounded-md border border-border/40 bg-background/60 p-3">
                    <blockquote className="text-[11px] leading-relaxed">
                      „{project.testimonial.quote}”
                    </blockquote>
                    <figcaption className="text-[11px] font-medium text-foreground/80">
                      {project.testimonial.name}
                      {project.testimonial.role && `, ${project.testimonial.role}`}
                    </figcaption>
                  </figure>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

