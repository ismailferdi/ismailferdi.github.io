import SectionHeader from './SectionHeader';

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="scroll-mt-20">
      <SectionHeader id="education-heading" title="Education" />
      <div className="glass-card p-8 space-y-3">
        <div className="flex items-baseline justify-between gap-4 flex-wrap">
          <h3 className="card-title">
            Bachelor's in Computer Science — AI Specialization
          </h3>
          <p className="text-sm text-on-dark-soft">Sep 2022 – Jul 2027</p>
        </div>
        <p className="text-sm text-body">Université Djillali Liabès, Algeria</p>
        <p className="text-sm text-on-dark-soft leading-relaxed">
          <span className="font-semibold text-body">Relevant coursework:</span> Machine Learning,
          Deep Learning, Natural Language Processing, Computer Vision, Big Data Analytics, Linear
          Algebra, Probability &amp; Statistics, Algorithms &amp; Data Structures
        </p>
      </div>
    </section>
  );
}
