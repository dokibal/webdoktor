import Link from "next/link";
import { Container } from "./container";
import { Button } from "@/components/ui/button";

const navItems: Array<{ href: string; label: string }> = [
  { href: "/#services", label: "Szolgáltatások" },
  { href: "/#pricing", label: "Árak" },
  { href: "/#process", label: "Hogyan dolgozom" },
  { href: "/#contact", label: "Kapcsolat" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
            WD
          </span>
          <span className="text-sm font-semibold tracking-tight">
            Webdoktor
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-xs sm:flex sm:text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="hidden sm:inline-flex">
            <Link href="/contact">Ajánlatkérés</Link>
          </Button>
        </div>
      </Container>
    </header>
  );
}

