import { Container } from "./container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-background/80">
      <Container className="flex flex-col items-center justify-center gap-3 py-6 text-xs text-muted sm:flex-row sm:items-center">
        <p>
          &copy; {year} Webdoktor. Minden jog fenntartva.
        </p>
      </Container>
    </footer>
  );
}

