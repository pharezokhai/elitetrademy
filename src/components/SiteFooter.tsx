import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Music2 } from "lucide-react";
import { CONTACT } from "@/data/academy";

const ICONS = {
  Facebook,
  LinkedIn: Linkedin,
  Instagram,
  TikTok: Music2,
} as const;

export function SiteFooter() {
  return (
    <footer className="border-t-4 border-primary bg-surface px-4 pt-16 pb-28">
      <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-2 md:grid-cols-4">
        <div className="space-y-4">
          <h2 className="font-display text-lg tracking-tight uppercase">Elite Trades Academy</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Professionalising the African vocational landscape through rigorous training and employer
            alignment.
          </p>
          <div className="flex gap-3">
            {CONTACT.socials.map((s) => {
              const Icon = ICONS[s.name];
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${s.name} — ${CONTACT.handle}`}
                  className="grid size-9 place-items-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="label-mono mb-4 text-primary">Contact Logistics</h3>
          <ul className="space-y-2 font-mono text-sm">
            <li>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-primary">
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a href={`tel:${CONTACT.phone}`} className="hover:text-primary">
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer noopener" className="hover:text-primary">
                WhatsApp Care
              </a>
            </li>
            <li className="text-muted-foreground">{CONTACT.handle}</li>
          </ul>
        </div>

        <div>
          <h3 className="label-mono mb-4 text-primary">Workshop Hubs</h3>
          <ul className="space-y-2 text-sm font-bold uppercase">
            <li>Lagos Central</li>
            <li>Abuja Satellite</li>
            <li>Port Harcourt Corridor</li>
          </ul>
        </div>

        <div>
          <h3 className="label-mono mb-4 text-primary">Institution</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/about" className="hover:text-primary">
                About the Academy
              </Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-primary">
                Services &amp; Courses
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-primary">
                Admissions FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-6xl flex-wrap items-center justify-between gap-2 border-t border-border pt-8">
        <span className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase">
          © {new Date().getFullYear()} Elite Trades Academy Ltd. — {CONTACT.domain}
        </span>
        <span className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase underline">
          Admissions Open
        </span>
      </div>
    </footer>
  );
}
