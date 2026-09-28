import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { CONTACT, PHASES, TRADES } from "@/data/academy";

export const Route = createFileRoute("/courses_/$slug")({
  loader: ({ params }) => {
    const trade = TRADES.find((t) => t.slug === params.slug);
    if (!trade) throw notFound();
    return { trade };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Course unavailable — Elite Trades Academy" }, { name: "robots", content: "noindex" }],
      };
    }
    const { trade } = loaderData;
    const title = `${trade.name} Course — ${trade.duration} — Elite Trades Academy`;
    const description = `${trade.name} programme: ${trade.hours} of training across ${trade.modules.length} modules, 80% practical, ending in NVC certification and a supervised internship.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  notFoundComponent: CourseNotFound,
  component: CoursePage,
});

function CourseNotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-32 text-center">
      <h1 className="display-xl text-4xl">Course not found</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        That programme code doesn't exist. View the three trade programmes we currently run.
      </p>
      <Link
        to="/courses"
        className="mt-8 inline-block bg-primary px-6 py-4 text-sm font-bold text-primary-foreground uppercase"
      >
        All Courses
      </Link>
    </section>
  );
}

function CoursePage() {
  const { trade } = Route.useLoaderData();
  const others = TRADES.filter((t) => t.slug !== trade.slug);
  const theoryHours = trade.modules.reduce((s, m) => s + m.theory, 0);
  const practicalHours = trade.modules.reduce((s, m) => s + m.practical, 0);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <img src={trade.image} alt={trade.imageAlt} className="absolute inset-0 size-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/60" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <Link to="/courses" className="label-mono flex items-center gap-2 text-primary">
            <ArrowLeft size={12} /> All Courses
          </Link>
          <p className="label-mono mt-8 text-muted-foreground">
            {trade.code} / {trade.index}
          </p>
          <h1 className="display-xl mt-4 max-w-3xl text-[clamp(2.5rem,7vw,5rem)]">{trade.name}</h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">{trade.tagline}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 bg-primary px-6 py-4 text-sm font-bold text-primary-foreground uppercase transition-colors hover:bg-primary-dark"
            >
              Enrol in this Programme <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
          {[
            { l: "Duration", v: trade.duration },
            { l: "Total Hours", v: trade.hours },
            { l: "Theory / Practical", v: `${theoryHours}h / ${practicalHours}h` },
            { l: "Modules", v: String(trade.modules.length) },
          ].map((s) => (
            <div key={s.l} className="border-r border-b border-border px-5 py-8 last:border-r-0">
              <p className="label-mono text-muted-foreground">{s.l}</p>
              <p className="mt-2 font-display text-xl tracking-tight uppercase">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="display-xl border-b-2 border-primary pb-4 text-4xl">Learning Outcomes</h2>
        <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
          On graduation, every trainee is assessed against these competencies in an employer-invigilated
          practical exam before the National Vocational Certificate is issued.
        </p>
        <ul className="mt-10 grid gap-px bg-border sm:grid-cols-2">
          {trade.outcomes.map((o) => (
            <li key={o} className="flex items-start gap-3 bg-background p-6 text-sm">
              <Check size={16} className="mt-0.5 shrink-0 text-primary" />
              <span>{o}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-border bg-surface-deep">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="display-xl text-4xl">Full Curriculum</h2>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
            Competency-based modules with three formative assessments each, closing with a summative
            practical project.
          </p>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-2xl border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-primary text-left">
                  <th className="label-mono py-3 pr-4">#</th>
                  <th className="label-mono py-3 pr-4">Module</th>
                  <th className="label-mono py-3 pr-4">Theory (h)</th>
                  <th className="label-mono py-3 pr-4">Practical (h)</th>
                  <th className="label-mono py-3">Key Skills</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {trade.modules.map((m, i) => (
                  <tr key={m.module}>
                    <td className="py-4 pr-4 font-mono text-xs text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </td>
                    <td className="py-4 pr-4 font-bold uppercase">{m.module}</td>
                    <td className="py-4 pr-4 font-mono text-xs">{m.theory}</td>
                    <td className="py-4 pr-4 font-mono text-xs text-primary">{m.practical}</td>
                    <td className="py-4 text-muted-foreground">{m.skills}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-primary">
                  <td className="py-4 pr-4" />
                  <td className="label-mono py-4 pr-4">Total</td>
                  <td className="py-4 pr-4 font-mono text-xs">{theoryHours}</td>
                  <td className="py-4 pr-4 font-mono text-xs text-primary">{practicalHours}</td>
                  <td className="py-4 font-mono text-xs text-muted-foreground">{trade.hours}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="display-xl text-3xl">Theory Syllabus</h2>
            <ul className="mt-6 space-y-2 border-t border-border pt-6 text-sm text-muted-foreground">
              {trade.theory.map((x) => (
                <li key={x} className="border-l-2 border-primary pl-4">
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="display-xl text-3xl">Practical Stations</h2>
            <ul className="mt-6 space-y-2 border-t border-border pt-6 text-sm text-muted-foreground">
              {trade.practical.map((x) => (
                <li key={x} className="border-l-2 border-primary pl-4">
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="label-mono border-b border-border pb-2">Tool Set Issued</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {trade.tools.map((tool) => (
              <span key={tool} className="border border-border px-3 py-1 font-mono text-xs">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="display-xl text-4xl">Programme Timeline</h2>
          <ol className="mt-10 divide-y divide-border border-y border-border">
            {PHASES.map((p, i) => (
              <li key={p.phase} className="grid gap-2 py-6 md:grid-cols-12 md:items-baseline">
                <span className="label-mono text-primary md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg tracking-tight uppercase md:col-span-3">{p.phase}</h3>
                <p className="text-sm text-muted-foreground md:col-span-6">{p.activity}</p>
                <span className="font-mono text-xs md:col-span-2 md:text-right">{p.duration}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="display-xl border-b-2 border-primary pb-4 text-4xl">Career Outcomes</h2>
        <div className="mt-10 grid gap-px bg-border sm:grid-cols-2">
          {trade.careers.map((c) => (
            <div key={c} className="bg-background p-6 text-sm font-bold uppercase">
              {c}
            </div>
          ))}
        </div>
        <p className="mt-8 border-l-2 border-primary pl-4 text-sm text-muted-foreground">
          Typical earning range: {trade.earning}. Graduates complete a two-week supervised internship on
          live job tickets, then onboard to our partner dispatch platform as certified pro partners.
        </p>
      </section>

      <section className="border-t border-border bg-surface-deep">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="display-xl text-3xl">Other Programmes</h2>
          <div className="mt-10 grid gap-px bg-border sm:grid-cols-2">
            {others.map((t) => (
              <Link
                key={t.slug}
                to="/courses/$slug"
                params={{ slug: t.slug }}
                className="group bg-surface-deep p-8 transition-colors hover:bg-surface"
              >
                <p className="label-mono text-primary">
                  {t.code} / {t.duration}
                </p>
                <h3 className="mt-3 font-display text-2xl tracking-tight uppercase">{t.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.tagline}</p>
                <span className="label-mono mt-4 inline-flex items-center gap-2 text-foreground">
                  View course <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
