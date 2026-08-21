import { useState } from "react";
import { MessageCircle, Phone, Mail, X } from "lucide-react";
import { CONTACT } from "@/data/academy";

export function CareBubble() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-4 bottom-4 z-60 flex flex-col items-end gap-3">
      {open ? (
        <div className="w-[min(20rem,calc(100vw-2rem))] border border-border bg-surface shadow-2xl">
          <div className="flex items-center justify-between border-b border-border bg-surface-deep px-4 py-3">
            <div>
              <p className="label-mono text-primary">Customer Care</p>
              <p className="text-sm font-bold uppercase">Elite Trades Academy</p>
            </div>
            <button type="button" aria-label="Close customer care" onClick={() => setOpen(false)}>
              <X size={16} className="text-muted-foreground" />
            </button>
          </div>
          <div className="space-y-4 px-4 py-4">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Questions on admissions, tuition or cohort dates? Our care desk replies on WhatsApp within
              working hours, 8am–6pm WAT.
            </p>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center justify-center gap-2 bg-whatsapp px-4 py-3 text-sm font-bold text-primary-foreground uppercase"
            >
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
            <a
              href={`tel:${CONTACT.phone}`}
              className="flex items-center gap-2 border border-border px-4 py-3 font-mono text-xs"
            >
              <Phone size={14} className="text-primary" /> {CONTACT.phoneDisplay}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-2 border border-border px-4 py-3 font-mono text-xs"
            >
              <Mail size={14} className="text-primary" /> {CONTACT.email}
            </a>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open customer care chat"
        className="flex items-center gap-2 bg-primary px-4 py-3 text-primary-foreground shadow-2xl transition-colors hover:bg-primary-dark"
      >
        <MessageCircle size={18} />
        <span className="label-mono">Care</span>
      </button>
    </div>
  );
}
