import { Mail, Phone, Linkedin, Github, BrainCircuit, Wrench, Database, Sparkles } from 'lucide-react';
import AnimatedBackground from './components/AnimatedBackground';
import SiteNav from './components/SiteNav';

const CapabilityGroup = ({ title, icon: Icon, summary, items }: { title: string, icon: any, summary: string, items: string[] }) => (
  <div className="glass-card p-8 flex flex-col gap-5">
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-lg bg-accent/10 text-accent">
        <Icon size={20} />
      </div>
      <h3 className="text-lg font-bold tracking-tight text-on-dark">{title}</h3>
    </div>
    <p className="text-sm text-body leading-relaxed">{summary}</p>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="px-2.5 py-0.5 text-[11px] font-medium rounded-full border border-hairline bg-surface-deep text-muted">{item}</span>
      ))}
    </div>
  </div>
);



const ContactCard = ({ icon: Icon, label, value, href }: { icon: any, label: string, value: string, href: string }) => {
  const isExternal = href.startsWith('http');
  return (
    <a
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="glass-card p-6 flex items-center gap-4 hover:border-accent/50 group h-full hover:scale-[1.02]"
    >
      <div className="p-3 rounded-xl bg-surface-soft text-muted group-hover:text-accent group-hover:bg-accent/10 transition-all flex-shrink-0">
        <Icon size={24} />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-bold text-muted uppercase tracking-widest mb-1">{label}</p>
        <p className="text-sm font-medium text-body group-hover:text-on-dark transition-colors break-all">{value}</p>
      </div>
    </a>
  );
};

const ChurnOpsFlow = () => (
  <svg viewBox="0 0 480 36" className="w-full max-w-md h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="6" width="64" height="24" rx="6" stroke="rgba(127,224,169,0.3)" strokeWidth="1.5" />
    <text x="36" y="22" textAnchor="middle" fill="rgba(127,224,169,0.5)" fontSize="11" fontFamily="monospace">User</text>
    <path d="M72 18h10" stroke="rgba(127,224,169,0.25)" strokeWidth="1.5" />
    <polygon points="84,18 78,14 78,22" fill="rgba(127,224,169,0.25)" />
    <rect x="88" y="6" width="80" height="24" rx="6" stroke="rgba(127,224,169,0.3)" strokeWidth="1.5" />
    <text x="128" y="22" textAnchor="middle" fill="rgba(127,224,169,0.5)" fontSize="11" fontFamily="monospace">FastAPI</text>
    <path d="M172 18h10" stroke="rgba(127,224,169,0.25)" strokeWidth="1.5" />
    <polygon points="184,18 178,14 178,22" fill="rgba(127,224,169,0.25)" />
    <rect x="188" y="6" width="80" height="24" rx="6" stroke="rgba(127,224,169,0.3)" strokeWidth="1.5" />
    <text x="228" y="22" textAnchor="middle" fill="rgba(127,224,169,0.5)" fontSize="11" fontFamily="monospace">Model</text>
    <path d="M272 18h10" stroke="rgba(127,224,169,0.25)" strokeWidth="1.5" />
    <polygon points="284,18 278,14 278,22" fill="rgba(127,224,169,0.25)" />
    <rect x="288" y="6" width="72" height="24" rx="6" stroke="rgba(127,224,169,0.3)" strokeWidth="1.5" />
    <text x="324" y="22" textAnchor="middle" fill="rgba(127,224,169,0.5)" fontSize="11" fontFamily="monospace">SQLite</text>
    <path d="M364 18h10" stroke="rgba(127,224,169,0.25)" strokeWidth="1.5" />
    <polygon points="376,18 370,14 370,22" fill="rgba(127,224,169,0.25)" />
    <rect x="380" y="6" width="88" height="24" rx="6" stroke="rgba(127,224,169,0.3)" strokeWidth="1.5" />
    <text x="424" y="22" textAnchor="middle" fill="rgba(127,224,169,0.5)" fontSize="11" fontFamily="monospace">Monitor</text>
  </svg>
);

const RAGFlow = () => (
  <svg viewBox="0 0 480 36" className="w-full max-w-md h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="6" width="64" height="24" rx="6" stroke="rgba(127,224,169,0.3)" strokeWidth="1.5" />
    <text x="36" y="22" textAnchor="middle" fill="rgba(127,224,169,0.5)" fontSize="11" fontFamily="monospace">Docs</text>
    <path d="M72 18h10" stroke="rgba(127,224,169,0.25)" strokeWidth="1.5" />
    <polygon points="84,18 78,14 78,22" fill="rgba(127,224,169,0.25)" />
    <rect x="88" y="6" width="80" height="24" rx="6" stroke="rgba(127,224,169,0.3)" strokeWidth="1.5" />
    <text x="128" y="22" textAnchor="middle" fill="rgba(127,224,169,0.5)" fontSize="11" fontFamily="monospace">Chunk</text>
    <path d="M172 18h10" stroke="rgba(127,224,169,0.25)" strokeWidth="1.5" />
    <polygon points="184,18 178,14 178,22" fill="rgba(127,224,169,0.25)" />
    <rect x="188" y="6" width="80" height="24" rx="6" stroke="rgba(127,224,169,0.3)" strokeWidth="1.5" />
    <text x="228" y="22" textAnchor="middle" fill="rgba(127,224,169,0.5)" fontSize="11" fontFamily="monospace">Embed</text>
    <path d="M272 18h10" stroke="rgba(127,224,169,0.25)" strokeWidth="1.5" />
    <polygon points="284,18 278,14 278,22" fill="rgba(127,224,169,0.25)" />
    <rect x="288" y="6" width="88" height="24" rx="6" stroke="rgba(127,224,169,0.3)" strokeWidth="1.5" />
    <text x="332" y="22" textAnchor="middle" fill="rgba(127,224,169,0.5)" fontSize="11" fontFamily="monospace">ChromaDB</text>
    <path d="M380 18h10" stroke="rgba(127,224,169,0.25)" strokeWidth="1.5" />
    <polygon points="392,18 386,14 386,22" fill="rgba(127,224,169,0.25)" />
    <rect x="396" y="6" width="72" height="24" rx="6" stroke="rgba(127,224,169,0.3)" strokeWidth="1.5" />
    <text x="432" y="22" textAnchor="middle" fill="rgba(127,224,169,0.5)" fontSize="11" fontFamily="monospace">LLM</text>
  </svg>
);

const ETLFlow = () => (
  <svg viewBox="0 0 480 36" className="w-full max-w-md h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="6" width="100" height="24" rx="6" stroke="rgba(127,224,169,0.3)" strokeWidth="1.5" />
    <text x="54" y="22" textAnchor="middle" fill="rgba(127,224,169,0.5)" fontSize="11" fontFamily="monospace">Extract</text>
    <path d="M108 18h10" stroke="rgba(127,224,169,0.25)" strokeWidth="1.5" />
    <polygon points="122,18 116,14 116,22" fill="rgba(127,224,169,0.25)" />
    <rect x="126" y="6" width="124" height="24" rx="6" stroke="rgba(127,224,169,0.3)" strokeWidth="1.5" />
    <text x="188" y="22" textAnchor="middle" fill="rgba(127,224,169,0.5)" fontSize="11" fontFamily="monospace">Transform</text>
    <path d="M254 18h10" stroke="rgba(127,224,169,0.25)" strokeWidth="1.5" />
    <polygon points="268,18 262,14 262,22" fill="rgba(127,224,169,0.25)" />
    <rect x="272" y="6" width="80" height="24" rx="6" stroke="rgba(127,224,169,0.3)" strokeWidth="1.5" />
    <text x="312" y="22" textAnchor="middle" fill="rgba(127,224,169,0.5)" fontSize="11" fontFamily="monospace">Load</text>
    <path d="M356 18h10" stroke="rgba(127,224,169,0.25)" strokeWidth="1.5" />
    <polygon points="374,18 368,14 368,22" fill="rgba(127,224,169,0.25)" />
    <rect x="378" y="6" width="98" height="24" rx="6" stroke="rgba(127,224,169,0.3)" strokeWidth="1.5" />
    <text x="427" y="22" textAnchor="middle" fill="rgba(127,224,169,0.5)" fontSize="11" fontFamily="monospace">Query</text>
  </svg>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary/30 selection:text-primary">
      <AnimatedBackground />
      <SiteNav />
      {/* Hero Section */}
      <header>
      <section id="hero" aria-labelledby="hero-heading" className="relative scroll-mt-20 py-24 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex flex-col-reverse md:flex-row md:items-start md:gap-8 lg:gap-16">
            <div className="flex-1 space-y-8">
              <p className="text-xs font-bold text-accent uppercase tracking-widest animate-fade-in">
                AI / ML Engineering
              </p>
              <h1 id="hero-heading" className="font-serif font-medium text-6xl md:text-7xl tracking-tight text-on-dark animate-fade-in animate-delay-1">
                AI/ML Engineer building production-oriented machine learning systems.
              </h1>

              <div className="space-y-6 text-lg text-body leading-relaxed max-w-3xl animate-fade-in animate-delay-2">
                <p>
                  I'm Ismail Ferdi, a 4th-year AI Engineering student at <span className="text-accent font-semibold">Université Djillali Liabès, Algeria</span>. I build production-oriented machine learning systems — MLOps pipelines with FastAPI, scikit-learn, and MLflow, containerized backends with Docker and CI/CD, RAG document systems with ChromaDB, and tested ETL data pipelines in Python.
                </p>

                <div className="space-y-3">
                  <p className="text-body-strong font-bold">What I bring:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>End-to-end MLOps: FastAPI, scikit-learn, MLflow, Docker, GitHub Actions</li>
                    <li>Data drift monitoring using statistical methods (PSI, Jensen-Shannon divergence)</li>
                    <li>Structured logging, automated Slack alerts, and prediction logging for production observability</li>
                    <li>Clean, tested Python code with CI verification</li>
                  </ul>
                </div>

                <p>
                  <span className="text-body-strong font-bold">Looking for:</span> AI/ML Engineering internships and junior roles where I can contribute to production ML systems.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2 animate-fade-in animate-delay-3">
                <a href="#projects" className="btn-primary">
                  View Selected Work
                </a>
                <a href="https://github.com/ismailferdi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 h-10 px-5 py-3 text-sm font-medium rounded-md bg-bg-dark text-on-dark border border-hairline transition-colors hover:border-accent/50 hover:text-primary">
                  <Github size={16} aria-hidden="true" />
                  <span>GitHub</span>
                </a>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-3 pt-4">
                <a href="mailto:ismailferdi10042004@gmail.com" className="flex items-center gap-2 text-accent hover:text-primary transition-colors text-sm font-medium py-5">
                  <span>📧</span>
                  <span>ismailferdi10042004@gmail.com</span>
                </a>
                <a href="tel:+213775853351" className="flex items-center gap-2 text-accent hover:text-primary transition-colors text-sm font-medium py-5">
                  <span>📱</span>
                  <span>+213 775 85 33 51</span>
                </a>
                <a href="https://linkedin.com/in/ismail-ferdi-1b3a70290" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent hover:text-primary transition-colors text-sm font-medium py-5">
                  <span>💼</span>
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/ismailferdi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent hover:text-primary transition-colors text-sm font-medium py-5">
                  <span>🐙</span>
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            <div className="flex-shrink-0 self-center md:self-start mb-8 md:mb-0 md:mt-2">
              <div className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full border-2 border-primary/60 shadow-lg shadow-primary/15 overflow-hidden bg-bg-dark hover:scale-105 transition-transform duration-300 aspect-square">
                <picture>
                  <source srcSet="/profile-removebg-preview.webp" type="image/webp" />
                  <img
                    src="/profile-removebg-preview.png"
                    alt="Ismail Ferdi — AI Engineering Student"
                    width="180"
                    height="180"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>
      </header>

      <main id="main-content" className="max-w-5xl mx-auto px-6 pb-24 space-y-32">

        {/* Selected Projects / Work */}
        <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-20">
          <h2 id="projects-heading" className="text-xs font-bold text-accent uppercase tracking-widest mb-8">Selected Projects</h2>
          <div className="grid grid-cols-1 gap-8">

            <div className="glass-card p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-on-dark">ChurnOps</h3>
                <div className="mt-3 flex items-center justify-between gap-4 flex-wrap">
                  <p className="text-sm text-muted">Customer churn prediction and production-oriented MLOps.</p>
                  <span className="badge-brand flex-shrink-0">Shipped</span>
                </div>
              </div>
              <ChurnOpsFlow />

              <div>
                <h4 className="text-xs font-bold text-muted uppercase tracking-widest mb-3">Problem</h4>
                <p className="text-body leading-relaxed text-sm">
                  Churn models only create value if they survive production — training must be tracked, predictions served reliably, and data drift caught before decisions silently degrade.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-muted uppercase tracking-widest mb-3">Engineering</h4>
                <ul className="space-y-2 text-sm text-body">
                  {[
                    'Train Random Forest and Logistic Regression on Telco churn data (80/20 stratified split)',
                    'Track parameters and metrics per run in the churn-prediction MLflow experiment',
                    'Register versioned artifacts — model, preprocessor, reference distributions — synced from Hugging Face Hub on startup',
                    'Serve single and batch predictions through FastAPI: POST /predict, POST /predict_batch, GET /health, GET /metrics',
                    'Monitor PSI and Jensen-Shannon drift over a sliding window (default 500) of recent predictions from the SQLite log',
                  ].map(item => (
                    <li key={item} className="flex gap-3">
                      <span className="text-accent mt-1 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-muted uppercase tracking-widest mb-3">Evidence</h4>
                <ul className="space-y-2 text-sm text-body">
                  {[
                    '19-field Pydantic request validation with typed prediction, health, and metrics responses',
                    'Drift status thresholds (OK / WARNING / ALERT) with Slack webhook alerts on ALERT',
                    'Streamlit dashboard with Plotly gauge chart and live drift monitoring sidebar',
                    'Docker Compose deployment (API + MLflow server) with a persistent prediction-log volume',
                    'GitHub Actions CI: format check, pytest suite, and Docker build verification',
                    'Structured JSON logging to stdout',
                  ].map(item => (
                    <li key={item} className="flex gap-3">
                      <span className="text-accent mt-1 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {['Python', 'FastAPI', 'scikit-learn', 'MLflow', 'Docker', 'Streamlit', 'GitHub Actions'].map(t => (
                  <span key={t} className="px-2.5 py-0.5 text-[11px] font-medium rounded-full border border-hairline bg-surface-deep text-muted">{t}</span>
                ))}
              </div>

              <p className="text-sm text-muted italic border-l-2 border-accent/30 pl-4 leading-relaxed">
                This project demonstrates production-oriented ML engineering: a trainable model, a containerized API, automated CI, and observability beyond accuracy metrics. Built from scratch with no boilerplate generators.
              </p>
              <div className="pt-4 border-t border-hairline-soft flex flex-wrap gap-6">
                <a href="https://github.com/ismailferdi/ChurnOps" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-primary transition-colors py-3">
                  <Github size={12} />
                  <span>GitHub Repository</span>
                </a>
                <a href="https://ismailferdi-churnops.streamlit.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-primary transition-colors py-3">
                  <Sparkles size={12} />
                  <span>Streamlit Dashboard</span>
                </a>
              </div>
            </div>

            <div className="glass-card p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-on-dark">RAGNar</h3>
                <div className="mt-3 flex items-center justify-between gap-4 flex-wrap">
                  <p className="text-sm text-muted">Document-based RAG / grounded question answering system.</p>
                  <span className="badge-brand flex-shrink-0">Shipped</span>
                </div>
              </div>
              <RAGFlow />

              <div>
                <h4 className="text-xs font-bold text-muted uppercase tracking-widest mb-3">Problem</h4>
                <p className="text-body leading-relaxed text-sm">
                  Generic chatbots guess — teams need answers grounded in their own documents, so uploads must become cited, verifiable responses instead of plausible-sounding text.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-muted uppercase tracking-widest mb-3">Engineering</h4>
                <ul className="space-y-2 text-sm text-body">
                  {[
                    'Ingest PDFs and text files with automatic chunking (POST /ingest)',
                    'Embed chunks with OpenAI text-embedding-3-small into a persistent ChromaDB store',
                    'Retrieve top-k chunks above a similarity threshold for each question (POST /ask)',
                    'Generate grounded answers with citations via gpt-4o-mini at temperature 0, returning answer + sources + grounded flag',
                    'Evaluate automatically with the eval/ suite for RAG quality',
                  ].map(item => (
                    <li key={item} className="flex gap-3">
                      <span className="text-accent mt-1 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-muted uppercase tracking-widest mb-3">Evidence</h4>
                <ul className="space-y-2 text-sm text-body">
                  {[
                    'Retrieval recall@5: 97.06% and grounding accuracy: 100.00% on the automated evaluation baseline',
                    'Answer quality of 4.88 with 0 unparseable responses in the same baseline',
                    'Methodology in the eval/ suite — reproducible with make eval; see the evaluation baseline in the repository README',
                    'Streamlit UI for document upload and Q&A over a FastAPI + ChromaDB backend',
                    'Docker Compose multi-service deployment with CI/CD via GitHub Actions',
                  ].map(item => (
                    <li key={item} className="flex gap-3">
                      <span className="text-accent mt-1 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {['Python', 'FastAPI', 'ChromaDB', 'OpenAI', 'Streamlit', 'Docker', 'GitHub Actions'].map(t => (
                  <span key={t} className="px-2.5 py-0.5 text-[11px] font-medium rounded-full border border-hairline bg-surface-deep text-muted">{t}</span>
                ))}
              </div>

              <p className="text-sm text-muted italic border-l-2 border-accent/30 pl-4 leading-relaxed">
                Full-stack RAG system that demonstrates production-ready retrieval-augmented generation — from document ingestion to grounded, cited answers. Built with automated evaluation, Docker deployment, and CI/CD.
              </p>
              <div className="pt-4 border-t border-hairline-soft flex flex-wrap gap-6">
                <a href="https://github.com/ismailferdi/RAGNar" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-primary transition-colors py-3">
                  <Github size={12} />
                  <span>GitHub Repository</span>
                </a>
                <a href="https://ismailferdi-ragnar.streamlit.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-primary transition-colors py-3">
                  <Sparkles size={12} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>

            <div className="glass-card p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-on-dark">Banks ETL</h3>
                <div className="mt-3 flex items-center justify-between gap-4 flex-wrap">
                  <p className="text-sm text-muted">Installable data pipeline for bank data processing.</p>
                  <span className="badge-brand flex-shrink-0">Shipped</span>
                </div>
              </div>
              <ETLFlow />

              <div>
                <h4 className="text-xs font-bold text-muted uppercase tracking-widest mb-3">Problem</h4>
                <p className="text-body leading-relaxed text-sm">
                  A coursework ETL only convinces when it ships like production software — installable, logged, tested, and containerized instead of a one-off script.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-muted uppercase tracking-widest mb-3">Engineering</h4>
                <ul className="space-y-2 text-sm text-body">
                  {[
                    'Extract — scrape the archived Wikipedia table of largest banks by market cap',
                    'Transform — convert USD market cap to GBP/EUR/INR via a live rates API with CSV fallback',
                    'Load — write CSV and SQLite (Largest_banks table, replaced each run)',
                    'Query — three SQL queries answering London/GBP, Berlin/EUR, and New Delhi/INR rankings',
                  ].map(item => (
                    <li key={item} className="flex gap-3">
                      <span className="text-accent mt-1 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-muted uppercase tracking-widest mb-3">Evidence</h4>
                <ul className="space-y-2 text-sm text-body">
                  {[
                    'Installable CLI: banks-etl full run plus banks-etl-cli run / query --city subcommands',
                    'Live Frankfurter exchange-rate API with graceful fallback to a cached CSV',
                    'Structured logging to logs/code_log.txt and stdout',
                    'Hermetic pytest suite: 24 tests with fixtures and mocked HTTP, flake8 clean',
                    'GitHub Actions CI: lint, test, and coverage on push and pull request',
                    'Dockerized with named volumes persisting the database and logs',
                    'Modular typed package with single-source config in banks_etl/config.py',
                  ].map(item => (
                    <li key={item} className="flex gap-3">
                      <span className="text-accent mt-1 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {['Python', 'pandas', 'BeautifulSoup', 'Requests', 'SQLite', 'pytest', 'Docker', 'GitHub Actions'].map(t => (
                  <span key={t} className="px-2.5 py-0.5 text-[11px] font-medium rounded-full border border-hairline bg-surface-deep text-muted">{t}</span>
                ))}
              </div>

              <p className="text-sm text-muted italic border-l-2 border-accent/30 pl-4 leading-relaxed">
                This project demonstrates classic data-engineering fundamentals — reliable extraction, reproducible transforms, and tested loads — packaged the way production Python ships: CLI, CI, containers, and docs.
              </p>
              <div className="pt-4 border-t border-hairline-soft flex flex-wrap gap-6">
                <a href="https://github.com/ismailferdi/banks-etl" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-primary transition-colors py-3">
                  <Github size={12} />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Engineering Capabilities / Skills */}
        <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-20">
          <h2 id="skills-heading" className="text-xs font-bold text-accent uppercase tracking-widest mb-8">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CapabilityGroup
              title="Production ML"
              icon={BrainCircuit}
              summary="Training, tracking, and monitoring models in production — from experiments to drift detection and observability."
              items={['Python', 'scikit-learn', 'TensorFlow & Keras', 'Deep Learning Architectures', 'Computer Vision', 'Time Series Forecasting', 'MLflow', 'joblib', 'PSI Drift Detection', 'Jensen-Shannon Divergence', 'Structured JSON Logging', 'Slack Alerts']}
            />
            <CapabilityGroup
              title="LLM / RAG / AI Applications"
              icon={Sparkles}
              summary="Grounded language systems — retrieval, embeddings, and cited generation over your own documents."
              items={['RAG', 'LLM Integration', 'Prompt Engineering & RLHF', 'Vector Databases · ChromaDB', 'Hugging Face Hub']}
            />
            <CapabilityGroup
              title="Data Engineering"
              icon={Database}
              summary="Extraction, transformation, loading, and querying — from web scraping to SQLite."
              items={['ETL Pipeline Design', 'BeautifulSoup', 'Requests', 'pandas', 'NumPy', 'SQLite']}
            />
            <CapabilityGroup
              title="Engineering Infrastructure & Backend"
              icon={Wrench}
              summary="The backend behind the models — APIs, containers, CI, testing, and dashboards."
              items={['FastAPI', 'Pydantic', 'Uvicorn', 'Docker', 'GitHub Actions', 'pytest', 'argparse + pyproject', 'Streamlit', 'Plotly']}
            />
          </div>
        </section>

        {/* Experience */}
        <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-20">
          <h2 id="experience-heading" className="text-xs font-bold text-accent uppercase tracking-widest mb-8">Experience</h2>
          <div className="glass-card p-8 space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tight text-on-dark">Intern — Industrial Systems</h3>
              <p className="text-sm text-body">
                <strong className="text-body-strong">ENIE (Entreprise Nationale des Industries Électroniques)</strong>
                <span className="text-muted mx-2">|</span>
                Sidi Bel Abbes, Algeria
              </p>
              <p className="text-sm text-muted italic">March 2026 – April 2026</p>
            </div>
            <ul className="space-y-3 text-sm text-body leading-relaxed">
              {[
                'Collaborated with engineering teams to document industrial electronics testing workflows and identify process inefficiencies',
                'Applied systematic troubleshooting to hardware-software integration issues, developing a methodical approach to debugging complex systems',
                'Gained exposure to quality assurance protocols and cross-functional technical communication in a production environment',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-accent mt-1 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="p-4 rounded-xl bg-surface-deep border border-hairline text-sm text-muted italic leading-relaxed flex items-start gap-3">
              <span className="text-accent not-italic text-base mt-0.5 flex-shrink-0">💡</span>
              <span>
                <strong className="text-body not-italic font-semibold">Transferable to ML:</strong>
                {' '}QA mindset → model validation & testing; troubleshooting → debugging training pipelines; workflow documentation → experiment tracking & reproducibility
              </span>
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" aria-labelledby="education-heading" className="scroll-mt-20">
          <h2 id="education-heading" className="text-xs font-bold text-accent uppercase tracking-widest mb-8">Education</h2>
          <div className="glass-card p-8">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="text-[10px] font-bold text-muted uppercase tracking-widest border-b border-hairline">
                      <th className="pb-4 font-bold">Degree</th>
                      <th className="pb-4 font-bold">Institution</th>
                      <th className="pb-4 font-bold">Period</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-hairline-soft even:bg-surface-soft">
                      <td className="py-6 font-bold text-body-strong">Bachelor's in Computer Science — AI Specialization</td>
                      <td className="py-6 text-body">Université Djillali Liabès, Algeria</td>
                      <td className="py-6 text-muted">Sep 2022 – Jul 2027</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-muted leading-relaxed">
                <span className="font-semibold text-body">Relevant coursework:</span>
                {' '}Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, Big Data Analytics, Linear Algebra, Probability &amp; Statistics, Algorithms &amp; Data Structures
              </p>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" aria-labelledby="certifications-heading" className="scroll-mt-20">
          <h2 id="certifications-heading" className="text-xs font-bold text-accent uppercase tracking-widest mb-8">Certifications</h2>
          <div className="glass-card p-8">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="text-[10px] font-bold text-muted uppercase tracking-widest border-b border-hairline">
                      <th className="pb-4 font-bold">Certificate</th>
                      <th className="pb-4 font-bold">Issuer</th>
                      <th className="pb-4 font-bold">Date</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-hairline-soft even:bg-surface-soft">
                      <td className="py-6 font-bold text-body-strong">The AI Engineer Path</td>
                      <td className="py-6 text-body">Scrimba</td>
                      <td className="py-6 text-muted">July 2025</td>
                    </tr>
                    <tr className="border-b border-hairline-soft even:bg-surface-soft">
                      <td className="py-6 font-bold text-body-strong">The Data Science Course: Complete Bootcamp 2025</td>
                      <td className="py-6 text-body">Careers 365</td>
                      <td className="py-6 text-muted">February 2025</td>
                    </tr>
                    <tr className="border-b border-hairline-soft even:bg-surface-soft">
                      <td className="py-6 font-bold text-body-strong">Machine Learning Specialization</td>
                      <td className="py-6 text-body">DeepLearning.AI</td>
                      <td className="py-6 text-muted">2025</td>
                    </tr>
                    <tr className="border-b border-hairline-soft even:bg-surface-soft">
                      <td className="py-6 font-bold text-body-strong">Generative AI with Large Language Models</td>
                      <td className="py-6 text-body">DeepLearning.AI</td>
                      <td className="py-6 text-muted">August 2026</td>
                    </tr>
                    <tr className="border-b border-hairline-soft even:bg-surface-soft">
                      <td className="py-6 font-bold text-body-strong">TensorFlow Developer Professional Certificate</td>
                      <td className="py-6 text-body">DeepLearning.AI</td>
                      <td className="py-6 text-muted">August 2026</td>
                    </tr>
                    <tr className="border-b border-hairline-soft even:bg-surface-soft">
                      <td className="py-6 font-bold text-body-strong">Deep Learning Specialization</td>
                      <td className="py-6 text-body">DeepLearning.AI</td>
                      <td className="py-6 text-muted">August 2026</td>
                    </tr>
                  </tbody>
                </table>
              </div>
          </div>
        </section>

        {/* Let's Connect */}
        <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-20">
          <div className="rounded-lg bg-surface-promo text-ink p-8 md:p-16">
          <div className="mb-12">
            <h2 id="contact-heading" className="font-serif font-medium tracking-tight text-4xl text-ink mb-4">Let's Connect</h2>
            <p className="text-ink/80">
              I'm actively seeking <strong>AI/ML Engineering internships</strong> and <strong>junior AI/ML Engineer roles</strong> for 2026–2027. If you're working on NLP, Computer Vision, or applied LLM systems, I'd love to hear from you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ContactCard 
              icon={Mail} 
              label="Email" 
              value="ismailferdi10042004@gmail.com" 
              href="mailto:ismailferdi10042004@gmail.com" 
            />
            <ContactCard 
              icon={Phone} 
              label="Phone" 
              value="+213 775 85 33 51" 
              href="tel:+213775853351" 
            />
            <ContactCard 
              icon={Linkedin} 
              label="LinkedIn" 
              value="linkedin.com/in/ismail-ferdi-1b3a70290" 
              href="https://linkedin.com/in/ismail-ferdi-1b3a70290" 
            />
            <ContactCard 
              icon={Github} 
              label="GitHub" 
              value="github.com/ismailferdi" 
              href="https://github.com/ismailferdi" 
            />
          </div>
          <p className="text-ink/80 mt-8">
            <strong>Open to:</strong> Internships, junior roles, freelance ML projects, open-source collaborations, research assistant positions.
          </p>
          </div>
        </section>
      </main>

      <footer id="footer" className="mt-24 py-16 px-6 bg-surface-brand-elevated text-center">
        <p className="text-xs font-bold text-on-dark uppercase tracking-[0.3em]">
          &copy; {new Date().getFullYear()} ISMAIL FERDI
        </p>
      </footer>
    </div>
  );
}
