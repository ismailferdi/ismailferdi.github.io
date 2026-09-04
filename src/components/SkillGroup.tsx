import type { SkillGroupData } from '../data/portfolio';

export default function SkillGroup({ title, icon: Icon, summary, items }: SkillGroupData) {
  return (
    <div className="glass-card p-8 flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-accent-teal/10 text-accent-teal">
          <Icon size={20} />
        </div>
        <h3 className="card-title">
          {title}
        </h3>
      </div>
      <p className="text-sm text-body leading-relaxed">{summary}</p>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="meta-chip"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
