import SectionHeader from './SectionHeader';
import { experienceBullets } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-20">
      <SectionHeader id="experience-heading" title="Experience" />
      <div className="glass-card p-8 space-y-6">
        <div className="space-y-2">
          <h3 className="card-title">
            Intern — Industrial Systems
          </h3>
          <p className="text-sm text-body">
            <strong className="text-body-strong">ENIE (Entreprise Nationale des Industries Électroniques)</strong>
            <span className="text-on-dark-soft mx-2">|</span>
            Sidi Bel Abbes, Algeria
          </p>
          <p className="text-sm text-on-dark-soft italic">March 2026 – April 2026</p>
        </div>
        <ul className="space-y-3 text-sm text-body leading-relaxed">
          {experienceBullets.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="bullet-dot">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-on-dark-soft leading-relaxed">
          I bring the same testing, debugging, and documentation discipline to my ML work — validated
          code, tested pipelines, and tracked experiments.
        </p>
      </div>
    </section>
  );
}
