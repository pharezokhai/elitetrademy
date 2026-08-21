import { createFileRoute } from "@tanstack/react-router";
import { CONTACT, FAQS } from "@/data/academy";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQs — Elite Trades Academy Admissions" },
      {
        name: "description",
        content:
          "Answers on accreditation, programme length, tuition, stipends, tools, placement and center locations for Elite Trades Academy.",
      },
      { property: "og:title", content: "FAQs — Elite Trades Academy Admissions" },
      {
        property: "og:description",
        content:
          "Everything applicants ask about entry requirements, tuition, certification and job placement at Elite Trades Academy.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

export default function FaqPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <p className="label-mono text-primary">03 — Frequently Asked Questions</p>
          <h1 className="display-xl mt-6 max-w-3xl text-[clamp(2.5rem,7vw,5rem)]">
            Admissions, plainly answered.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="divide-y divide-border border-y border-border">
          {FAQS.map((f, i) => (
            <details key={f.q} className="group py-6">
              <summary className="flex cursor-pointer items-start gap-4 list-none">
                <span className="label-mono mt-1 text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="flex-1 font-display text-xl tracking-tight uppercase">{f.q}</h2>
                <span className="mt-1 font-mono text-primary transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 pl-10 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-16 border-2 border-primary p-8">
          <h2 className="display-xl text-2xl">Still need help?</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Our customer care desk answers on WhatsApp, phone and email, 8am–6pm WAT.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              className="bg-whatsapp px-5 py-3 text-sm font-bold text-primary-foreground uppercase"
            >
              WhatsApp Care
            </a>
            <a
              href={`tel:${CONTACT.phone}`}
              className="border border-border px-5 py-3 font-mono text-xs hover:border-primary hover:text-primary"
            >
              {CONTACT.phoneDisplay}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="border border-border px-5 py-3 font-mono text-xs hover:border-primary hover:text-primary"
            >
              {CONTACT.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
