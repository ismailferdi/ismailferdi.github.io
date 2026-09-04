import { Github, Sparkles } from 'lucide-react';
import type { Project } from '../data/portfolio';

const ChurnOpsFlow = () => (
  <svg viewBox="0 0 480 36" aria-hidden="true" className="w-full max-w-md h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="6" width="64" height="24" rx="6" className="flow-node" />
    <text x="36" y="22" textAnchor="middle" className="flow-label">User</text>
    <path d="M72 18h10" className="flow-edge" />
    <polygon points="84,18 78,14 78,22" className="flow-head" />
    <rect x="88" y="6" width="80" height="24" rx="6" className="flow-node" />
    <text x="128" y="22" textAnchor="middle" className="flow-label">FastAPI</text>
    <path d="M172 18h10" className="flow-edge" />
    <polygon points="184,18 178,14 178,22" className="flow-head" />
    <rect x="188" y="6" width="80" height="24" rx="6" className="flow-node" />
    <text x="228" y="22" textAnchor="middle" className="flow-label">Model</text>
    <path d="M272 18h10" className="flow-edge" />
    <polygon points="284,18 278,14 278,22" className="flow-head" />
    <rect x="288" y="6" width="72" height="24" rx="6" className="flow-node" />
    <text x="324" y="22" textAnchor="middle" className="flow-label">SQLite</text>
    <path d="M364 18h10" className="flow-edge" />
    <polygon points="376,18 370,14 370,22" className="flow-head" />
    <rect x="380" y="6" width="88" height="24" rx="6" className="flow-node" />
    <text x="424" y="22" textAnchor="middle" className="flow-label">Monitor</text>
  </svg>
);

const RAGFlow = () => (
  <svg viewBox="0 0 480 36" aria-hidden="true" className="w-full max-w-md h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="6" width="64" height="24" rx="6" className="flow-node" />
    <text x="36" y="22" textAnchor="middle" className="flow-label">Docs</text>
    <path d="M72 18h10" className="flow-edge" />
    <polygon points="84,18 78,14 78,22" className="flow-head" />
    <rect x="88" y="6" width="80" height="24" rx="6" className="flow-node" />
    <text x="128" y="22" textAnchor="middle" className="flow-label">Chunk</text>
    <path d="M172 18h10" className="flow-edge" />
    <polygon points="184,18 178,14 178,22" className="flow-head" />
    <rect x="188" y="6" width="80" height="24" rx="6" className="flow-node" />
    <text x="228" y="22" textAnchor="middle" className="flow-label">Embed</text>
    <path d="M272 18h10" className="flow-edge" />
    <polygon points="284,18 278,14 278,22" className="flow-head" />
    <rect x="288" y="6" width="88" height="24" rx="6" className="flow-node" />
    <text x="332" y="22" textAnchor="middle" className="flow-label">ChromaDB</text>
    <path d="M380 18h10" className="flow-edge" />
    <polygon points="392,18 386,14 386,22" className="flow-head" />
    <rect x="396" y="6" width="72" height="24" rx="6" className="flow-node" />
    <text x="432" y="22" textAnchor="middle" className="flow-label">LLM</text>
  </svg>
);

const ETLFlow = () => (
  <svg viewBox="0 0 480 36" aria-hidden="true" className="w-full max-w-md h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="6" width="100" height="24" rx="6" className="flow-node" />
    <text x="54" y="22" textAnchor="middle" className="flow-label">Extract</text>
    <path d="M108 18h10" className="flow-edge" />
    <polygon points="122,18 116,14 116,22" className="flow-head" />
    <rect x="126" y="6" width="124" height="24" rx="6" className="flow-node" />
    <text x="188" y="22" textAnchor="middle" className="flow-label">Transform</text>
    <path d="M254 18h10" className="flow-edge" />
    <polygon points="268,18 262,14 262,22" className="flow-head" />
    <rect x="272" y="6" width="80" height="24" rx="6" className="flow-node" />
    <text x="312" y="22" textAnchor="middle" className="flow-label">Load</text>
    <path d="M356 18h10" className="flow-edge" />
    <polygon points="374,18 368,14 368,22" className="flow-head" />
    <rect x="378" y="6" width="98" height="24" rx="6" className="flow-node" />
    <text x="427" y="22" textAnchor="middle" className="flow-label">Query</text>
  </svg>
);

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="glass-card p-8 space-y-6">
      <div>
        <h3 className="card-title">
          {project.title}
        </h3>
        <div className="mt-3 flex items-center justify-between gap-4 flex-wrap">
          <p className="text-sm text-on-dark-soft">{project.positioning}</p>
          <span className="badge-brand flex-shrink-0">{project.badge}</span>
        </div>
      </div>
      {project.flow === 'churnops' && <ChurnOpsFlow />}
      {project.flow === 'ragnar' && <RAGFlow />}
      {project.flow === 'banks' && <ETLFlow />}

      <div>
        <h4 className="card-label">Problem</h4>
        <p className="text-body leading-relaxed text-sm">{project.problem}</p>
      </div>

      <div>
        <h4 className="card-label">Engineering</h4>
        <ul className="space-y-2 text-sm text-body">
          {project.engineering.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="bullet-dot">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="card-label">Evidence</h4>
        <ul className="space-y-2 text-sm text-body">
          {project.evidence.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="bullet-dot">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <ul className="flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <li
            key={t}
            className="meta-chip"
          >
            {t}
          </li>
        ))}
      </ul>

      <p className="text-sm text-on-dark-soft italic border-l-2 border-accent-teal/30 pl-4 leading-relaxed">
        {project.summary}
      </p>
      <div className="pt-4 border-t border-hairline-soft flex flex-wrap gap-6">
        {project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-accent-teal hover:text-primary transition-colors py-3"
          >
            {link.icon === 'github' ? (
              <Github size={12} aria-hidden="true" />
            ) : (
              <Sparkles size={12} aria-hidden="true" />
            )}
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
