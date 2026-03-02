"use client";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Eyebrow, Heading, Subheading } from "@/components/ui/typography";
import type { FormEvent } from "react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-secondary/95 min-h-screen py-16 md:py-20 text-secondary-foreground flex items-center"
    >
      <Container className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-start">
        <div className="space-y-4">
          <Eyebrow>Kapcsolat</Eyebrow>
          <Heading>Mesélj az ötletedről vagy a problémádról</Heading>
          <Subheading>
            Nincs rossz kérdés - akkor is nyugodtan írj, ha még csak körvonalazódik benned, mire lenne szükség.
            Segítek kereteket adni a projektnek.
          </Subheading>
        </div>
        <div className="space-y-4">
          <div className="rounded-xl border border-border/40 bg-background p-6 shadow-lg backdrop-blur-sm">
            <ContactForm />
          </div>
          <div className="text-xs text-muted leading-relaxed">
            <p className="font-medium text-secondary-foreground">
              Vagy keress közvetlenül:
            </p>
            <p>
              Telefon:{" "}
              <a href="tel:+36204224372" className="underline underline-offset-2">
                +36 20 422 43 72
              </a>
            </p>
            <p>
              E-mail:{" "}
              <a
                href="mailto:doktor.balazs1@gmail.com"
                className="underline underline-offset-2"
              >
                doktor.balazs1@gmail.com
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Itt később könnyen beköthető egy backend / form service.
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-1.5">
        <label htmlFor="name" className="text-xs font-medium text-muted">
          Név
        </label>
        <Input id="name" name="name" placeholder="Teljes név" required />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="email" className="text-xs font-medium text-muted">
          E-mail
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="te@ceged.hu"
          required
        />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="project" className="text-xs font-medium text-muted">
          Projekt rövid leírása
        </label>
        <Textarea
          id="project"
          name="project"
          placeholder="Milyen típusú oldalt szeretnél, milyen céllal, milyen időtávon?"
          required
        />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="budget" className="text-xs font-medium text-muted">
          Várható költségkeret (nem kötelező)
        </label>
        <Input
          id="budget"
          name="budget"
          placeholder="Pl. 200-400 ezer Ft"
        />
      </div>
      <Button type="submit" className="w-full">
        Üzenet elküldése
      </Button>
      <p className="text-[11px] leading-relaxed text-muted">
        A gomb megnyomása jelenleg csak teszt célokat szolgál - az űrlapot
        később könnyen össze tudjuk kötni egy e-mail vagy CRM rendszerrel.
      </p>
    </form>
  );
}

