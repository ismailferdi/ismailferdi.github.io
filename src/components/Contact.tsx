import type { ContactEntry } from '../data/portfolio';
import { contacts } from '../data/portfolio';

function ContactCard({ icon: Icon, label, value, href }: ContactEntry) {
  const isExternal = href.startsWith('http');
  return (
    <a
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="glass-card p-6 flex items-center gap-4 hover:border-accent-teal/50 group h-full"
    >
      <div className="p-3 rounded-lg bg-surface-soft text-on-dark-soft group-hover:text-accent-teal group-hover:bg-accent-teal/10 transition-colors flex-shrink-0">
        <Icon size={24} aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-bold text-on-dark-soft uppercase tracking-widest mb-1">{label}</p>
        <p className="text-sm font-medium text-body group-hover:text-on-dark transition-colors break-all">
          {value}
        </p>
      </div>
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-20">
      <div className="rounded-lg bg-surface-cream-strong text-ink p-12 md:p-16">
        <div className="mb-12">
          <h2
            id="contact-heading"
            className="font-display font-normal text-[28px] leading-[1.2] tracking-[-0.3px] text-ink mb-4"
          >
            Let's build something useful.
          </h2>
          <p className="text-ink/80">
            I'm actively seeking <strong>AI/ML Engineering internships</strong> and{' '}
            <strong>junior AI/ML Engineer roles</strong> for 2026–2027. If you're working on NLP,
            Computer Vision, or applied LLM systems, I'd love to hear from you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contacts.map((contact) => (
            <ContactCard key={contact.label} {...contact} />
          ))}
        </div>
        <p className="text-ink/80 mt-8">
          <strong>Open to:</strong> Internships, junior roles, freelance ML projects, open-source
          collaborations, research assistant positions.
        </p>
      </div>
    </section>
  );
}
