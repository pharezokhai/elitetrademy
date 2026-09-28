import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CONTACT, STATS, TRADES } from "@/data/academy";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elite Trades Academy — Elite Artisan Training in Nigeria" },
      {
        name: "description",
        content:
          "Certified 12–14 week bootcamps for Electricians, Plumbers and AC technicians. 80% practical training, NVC certification, 90% placement target.",
      },
      { property: "og:title", content: "Elite Trades Academy — Elite Artisan Training in Nigeria" },
      {
        property: "og:description",
        content:
          "Certified 12–14 week bootcamps for Electricians, Plumbers and AC technicians across Lagos, Abuja and Port Harcourt.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const hero = TRADES[0]!;

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <img
          src={hero.image}
          alt={hero.imageAlt}
          className="absolute inset-0 size-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/60" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-24 md:py-32">
          <p className="label-mono animate-slide-up text-primary">
            NBTE Vocational Enterprise Institution — Lagos / Abuja / Port Harcourt
          </p>
          <h1 className="display-xl animate-slide-up max-w-4xl text-[clamp(2.75rem,9vw,6.5rem)]">
            We build the artisans Nigeria is running out of.
          </h1>
          <p className="animate-slide-up max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Elite Trades Academy trains Electricians, Plumbers and AC technicians into certified,
            job-ready professionals through a Blended Mastery Model: 20% digital theory, 80% real
            materials on real rigs.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/courses"
              className="flex items-center gap-2 bg-primary px-6 py-4 text-sm font-bold text-primary-foreground uppercase transition-colors hover:bg-primary-dark"
            >
              View Courses <ArrowRight size={16} />
            </Link>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              className="border border-border px-6 py-4 text-sm font-bold uppercase transition-colors hover:border-primary hover:text-primary"
            >
              Speak to Admissions
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="border-r border-b border-border px-5 py-8 last:border-r-0">
              <p className="label-mono text-muted-foreground">{s.label}</p>
              <p className="mt-2 font-display text-2xl tracking-tight uppercase">{s.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4 border-b-2 border-primary pb-4">
          <h2 className="display-xl text-4xl md:text-5xl">Trade Programmes</h2>
          <span className="label-mono text-muted-foreground">03 Disciplines / Cohort 01</span>
        </div>

        <div className="grid gap-px bg-border md:grid-cols-3">
          {TRADES.map((t) => (
            <article key={t.slug} className="group bg-background">
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={t.image}
                  alt={t.imageAlt}
                  loading="lazy"
                  className="size-full object-cover grayscale transition-all duration-700 ease-out-expo group-hover:scale-105 group-hover:grayscale-0"
                />
                <span className="absolute top-0 left-0 bg-primary px-3 py-1 font-mono text-[10px] font-bold text-primary-foreground">
                  {t.code}
                </span>
              </div>
              <div className="space-y-3 p-6">
                <h3 className="font-display text-2xl tracking-tight uppercase">{t.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{t.tagline}</p>
                <p className="label-mono text-primary">
                  {t.duration} / {t.hours}
                </p>
                <Link
                  to="/courses/$slug"
                  params={{ slug: t.slug }}
                  className="label-mono inline-flex items-center gap-2 text-foreground hover:text-primary"
                >
                  View course <ArrowRight size={12} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface-deep">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-2">
          <div>
            <h2 className="display-xl text-4xl md:text-5xl">Why the shortage is our mandate</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Nigeria's housing sector operates with less than 30% of its skilled manpower needs after a
              sustained exodus of artisans to Europe and the Gulf. Fewer than 20% of construction projects
              use certified technicians — the result is fire hazards, water damage and failed cooling
              systems.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We convert that crisis into a disciplined pipeline: globally benchmarked curricula, master
              trainers with industry tenure, and employer-invigilated final exams.
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-px self-start bg-border">
            {[
              ["90%", "Job placement target"],
              [">85%", "Completion rate"],
              ["₦45k", "PPP training value / trainee / month"],
              ["60", "Trainees per center, per cohort"],
            ].map(([v, l]) => (
              <div key={l} className="bg-surface-deep p-6">
                <dt className="font-display text-3xl text-primary">{v}</dt>
                <dd className="label-mono mt-2 text-muted-foreground">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="flex flex-col items-start gap-6 border-2 border-primary p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <h2 className="display-xl text-3xl md:text-4xl">Accelerator Cohort — Enrolment Open</h2>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground">
              Tuition subsidised at ₦50,000, payable in installments. Aptitude test in basic mathematics
              and English. No prior trade experience required.
            </p>
          </div>
          <a
            href={`mailto:${CONTACT.email}`}
            className="bg-primary px-6 py-4 text-sm font-bold whitespace-nowrap text-primary-foreground uppercase transition-colors hover:bg-primary-dark"
          >
            Apply by Email
          </a>
        </div>
      </section>
    </>
  );
}
