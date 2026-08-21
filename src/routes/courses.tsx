import { createFileRoute } from "@tanstack/react-router";
import { CONTACT, TRADES } from "@/data/academy";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Services & Courses — Elite Trades Academy" },
      {
        name: "description",
        content:
          "Full module breakdown for Electrical (360h), Plumbing (360h) and HVAC/AC (420h) technician programmes, plus corporate training services.",
      },
      { property: "og:title", content: "Services & Courses — Elite Trades Academy" },
      {
        property: "og:description",
        content:
          "Module-by-module curricula, tool sets and practical hours for our Electrical, Plumbing and HVAC technician bootcamps.",
      },
    ],
  }),
  component: CoursesPage,
});

const SERVICES = [
  {
    t: "Certified Trade Bootcamps",
    d: "12 to 14 week intensive programmes ending in NVC certification and a supervised live-job internship.",
  },
  {
    t: "Corporate Workforce Contracts",
    d: "Cohort training for developers, facility managers and platform operators who need standardised, vetted technicians.",
  },
  {
    t: "Technician Placement Pipeline",
    d: "Graduates are onboarded as certified pro partners for dispatch platforms and real estate maintenance teams.",
  },
  {
    t: "Contractor Upskilling",
    d: "Short-course certification for practising artisans: solar PV, VRF/VRV systems, thermal leak detection.",
  },
];

export default function CoursesPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <p className="label-mono text-primary">02 — Services &amp; Courses</p>
          <h1 className="display-xl mt-6 max-w-3xl text-[clamp(2.5rem,7vw,5rem)]">
            Curricula written to employer spec.
          </h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            Every manual follows the Blended Mastery Model — 20% digital theory, 80% practical application
            — with three formative assessments per module and a summative practical exam.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="display-xl text-4xl">Services</h2>
          <div className="mt-10 grid gap-px bg-border sm:grid-cols-2">
            {SERVICES.map((s) => (
              <div key={s.t} className="bg-surface p-8">
                <h3 className="font-display text-xl tracking-tight uppercase">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {TRADES.map((t) => (
        <section key={t.slug} id={t.slug} className="border-b border-border">
          <div className="mx-auto max-w-6xl px-4 py-20">
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              <div className="relative">
                <img
                  src={t.image}
                  alt={t.imageAlt}
                  loading="lazy"
                  className="aspect-4/3 w-full border border-border object-cover"
                />
                <span className="absolute top-0 left-0 bg-primary px-3 py-1 font-mono text-[10px] font-bold text-primary-foreground">
                  {t.index}
                </span>
              </div>
              <div>
                <p className="label-mono text-primary">
                  {t.code} / {t.duration} / {t.hours}
                </p>
                <h2 className="display-xl mt-4 text-4xl md:text-5xl">{t.name}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{t.tagline}</p>

                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  <div>
                    <h3 className="label-mono border-b border-border pb-2">Theory</h3>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      {t.theory.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="label-mono border-b border-border pb-2">Practical</h3>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      {t.practical.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="label-mono border-b border-border pb-2">Tool Set</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {t.tools.map((tool) => (
                      <span key={tool} className="border border-border px-3 py-1 font-mono text-xs">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 overflow-x-auto">
              <table className="w-full min-w-2xl border-collapse text-sm">
                <caption className="label-mono mb-4 text-left text-primary">
                  Module schedule — {t.name}
                </caption>
                <thead>
                  <tr className="border-b-2 border-primary text-left">
                    <th className="label-mono py-3 pr-4">Module</th>
                    <th className="label-mono py-3 pr-4">Theory (h)</th>
                    <th className="label-mono py-3 pr-4">Practical (h)</th>
                    <th className="label-mono py-3">Key Skills</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {t.modules.map((m) => (
                    <tr key={m.module}>
                      <td className="py-4 pr-4 font-bold uppercase">{m.module}</td>
                      <td className="py-4 pr-4 font-mono text-xs">{m.theory}</td>
                      <td className="py-4 pr-4 font-mono text-xs text-primary">{m.practical}</td>
                      <td className="py-4 text-muted-foreground">{m.skills}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ))}

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="border-2 border-primary p-8 md:p-12">
          <h2 className="display-xl text-3xl md:text-4xl">Course Materials</h2>
          <ul className="mt-8 grid gap-6 text-sm text-muted-foreground sm:grid-cols-2">
            {[
              "Illustrated learner guide in English and simplified Pidgin",
              "Trainer guide with lesson plans, rubrics and safety briefings",
              "Assessment book: 3 formative tests per module + summative practical",
              "Offline-first mobile companion with video demonstrations and quizzes",
            ].map((x) => (
              <li key={x} className="border-l-2 border-primary pl-4">
                {x}
              </li>
            ))}
          </ul>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-10 inline-block bg-primary px-6 py-4 text-sm font-bold text-primary-foreground uppercase transition-colors hover:bg-primary-dark"
          >
            Request the Cohort Calendar
          </a>
        </div>
      </section>
    </>
  );
}
