import { Container } from "./container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-background/80">
      <Container className="flex flex-col gap-3 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {year} Webdoktor. Minden jog fenntartva.
        </p>
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span>Építve Next.js, React és Tailwind CSS alapokon.</span>
        </p>
      </Container>
    </footer>
  );
}

