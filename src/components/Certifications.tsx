import SectionHeader from './SectionHeader';
import { additionalCertifications, featuredCertifications } from '../data/portfolio';

export default function Certifications() {
  return (
    <section id="certifications" aria-labelledby="certifications-heading" className="scroll-mt-20">
      <SectionHeader id="certifications-heading" title="Certifications" />
      <div className="glass-card p-8">
        <ul className="divide-y divide-hairline-soft">
          {featuredCertifications.map(({ name, issuer, date }) => (
            <li key={name} className="flex items-baseline justify-between gap-4 flex-wrap py-3">
              <div>
                <span className="block text-sm font-bold text-body-strong">{name}</span>
                <span className="block text-sm text-body">{issuer}</span>
              </div>
              <span className="text-sm text-on-dark-soft">{date}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-on-dark-soft leading-relaxed">
          <span className="font-semibold text-body">Also completed:</span> {additionalCertifications}
        </p>
      </div>
    </section>
  );
}
