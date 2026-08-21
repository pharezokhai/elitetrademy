import { createFileRoute } from "@tanstack/react-router";
import { PHASES } from "@/data/academy";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Elite Trades Academy" },
      {
        name: "description",
        content:
          "An NBTE-accredited vocational institution building a national network of elite training centers in Lagos, Abuja and Port Harcourt.",
      },
      { property: "og:title", content: "About Us — Elite Trades Academy" },
      {
        property: "og:description",
        content:
          "Our mission, governance, workshop specifications and the six-phase training methodology behind every certified graduate.",
      },
    ],
  }),
  component: AboutPage,
});

const CENTERS = [
  { city: "Lagos", area: "Ikeja / Ogun border", size: "1,500 sqm", role: "Central hub" },
  { city: "Abuja", area: "Kubwa / Lugbe", size: "800 sqm", role: "Northern anchor" },
  { city: "Port Harcourt", area: "Rumuokwurushi", size: "800 sqm", role: "Oil & gas corridor" },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border blueprint-grid">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <p className="label-mono text-primary">01 — The Institution</p>
          <h1 className="display-xl mt-6 max-w-3xl text-[clamp(2.5rem,7vw,5rem)]">
            An enduring institution, not a training scheme.
          </h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            Elite Trades Academy Nigeria Ltd. was built on two decades of experience in the African
            vocational landscape. We operate as a limited liability company with a separate foundation
            arm, accredited by the NBTE as a Vocational Enterprise Institution able to issue National
            Vocational Certificates.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="display-xl border-b-2 border-primary pb-4 text-4xl">Governance &amp; Standards</h2>
        <div className="mt-10 grid gap-px bg-border md:grid-cols-3">
          {[
            {
              t: "NBTE / VEI Accreditation",
              d: "Vocational Enterprise Institution status, enabling National Vocational Certificate issuance and eligibility for government funding.",
            },
            {
              t: "ITF & NITDA Registration",
              d: "Registered with the Industrial Training Fund for skills development contracts, and NITDA for digital curriculum delivery.",
            },
            {
              t: "Employer-Aligned Assessment",
              d: "End-of-course practical exams are invigilated by a partner technical lead, so certification maps to real dispatch standards.",
            },
          ].map((c) => (
            <div key={c.t} className="bg-background p-8">
              <h3 className="font-display text-xl tracking-tight uppercase">{c.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="display-xl text-4xl">Training Methodology</h2>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
            A competency-based modular approach aligned to Nigeria's National Occupational Standards and
            international benchmarks such as City &amp; Guilds and NCCER.
          </p>
          <ol className="mt-10 divide-y divide-border border-y border-border">
            {PHASES.map((p, i) => (
              <li key={p.phase} className="grid gap-2 py-6 md:grid-cols-12 md:items-baseline">
                <span className="label-mono text-primary md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl tracking-tight uppercase md:col-span-3">{p.phase}</h3>
                <p className="text-sm text-muted-foreground md:col-span-6">{p.activity}</p>
                <span className="font-mono text-xs md:col-span-2 md:text-right">{p.duration}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="display-xl border-b-2 border-primary pb-4 text-4xl">Workshop Hubs</h2>
        <div className="mt-10 grid gap-px bg-border md:grid-cols-3">
          {CENTERS.map((c) => (
            <div key={c.city} className="bg-background p-8">
              <p className="label-mono text-primary">{c.role}</p>
              <h3 className="mt-3 font-display text-3xl tracking-tight uppercase">{c.city}</h3>
              <p className="mt-2 font-mono text-xs text-muted-foreground">{c.area}</p>
              <p className="mt-4 text-sm">{c.size} of workshop and classroom space</p>
            </div>
          ))}
        </div>
        <ul className="mt-10 grid gap-4 text-sm text-muted-foreground sm:grid-cols-2">
          {[
            "Three-phase power with solar backup — mandatory for HVAC training",
            "Borehole and water treatment rigs for plumbing practicals",
            "Full PPE, fire suppression and fume extraction for brazing and soldering",
            "Digital lab with circuit design and HVAC simulation software",
          ].map((f) => (
            <li key={f} className="border-l-2 border-primary pl-4">
              {f}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-border bg-surface-deep">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="display-xl text-4xl">Trainers</h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-primary text-left">
                  <th className="label-mono py-3 pr-4">Role</th>
                  <th className="label-mono py-3 pr-4">Per Center</th>
                  <th className="label-mono py-3">Required Certification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Master Trainer (per trade)", "1", "City & Guilds Level 3 + 5 years industry"],
                  ["Assistant Trainer", "1 per trade", "NVC Level 3 + 3 years industry"],
                  ["Workshop Supervisor", "1", "Engineering degree + safety certification"],
                  ["Admin / Coordinator", "1", "Degree with basic accounting"],
                ].map((r) => (
                  <tr key={r[0]}>
                    <td className="py-4 pr-4 font-bold uppercase">{r[0]}</td>
                    <td className="py-4 pr-4 font-mono text-xs">{r[1]}</td>
                    <td className="py-4 text-muted-foreground">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
