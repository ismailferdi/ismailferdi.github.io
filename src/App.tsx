import { Mail, Phone, Linkedin, Github, Code2, BrainCircuit, Wrench, Database, Eye, Sparkles, Package } from 'lucide-react';
import AnimatedBackground from './components/AnimatedBackground';

const DetailedSkillCard = ({ title, icon: Icon, items, accent }: { title: string, icon: any, items: { skill: string, desc: string, tag?: 'basics' | 'learning' }[], accent?: boolean }) => (
  <div 
    className={`glass-card p-6 flex flex-col gap-5 hover:scale-[1.02] ${accent ? 'border-accent/40 bg-accent/[0.04]' : ''}`}
  >
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-lg bg-accent/10 text-accent">
        <Icon size={20} />
      </div>
      <h3 className="text-lg font-bold tracking-tight">{title}</h3>
    </div>
    <div className="space-y-2.5">
      {items.map(({ skill, desc, tag }) => (
        <div key={skill} className="text-sm leading-relaxed">
          <span className="font-bold text-white/90">{skill}</span>
          <span className="text-white/50"> — {desc}</span>
          {tag === 'basics' && <span className="text-[10px] text-white/50 italic ml-1">(basics)</span>}
          {tag === 'learning' && <span className="text-[10px] text-accent/80 italic ml-1">(learning)</span>}
        </div>
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
      <div className="p-3 rounded-xl bg-white/5 text-white/60 group-hover:text-accent group-hover:bg-accent/10 transition-all flex-shrink-0">
        <Icon size={24} />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-1">{label}</p>
        <p className="text-sm font-medium text-white/80 group-hover:text-white transition-colors break-all">{value}</p>
      </div>
    </a>
  );
};

const ChurnOpsFlow = () => (
  <svg viewBox="0 0 480 36" className="w-full max-w-md h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="6" width="64" height="24" rx="6" stroke="rgba(0,245,255,0.3)" strokeWidth="1.5" />
    <text x="36" y="22" textAnchor="middle" fill="rgba(0,245,255,0.5)" fontSize="11" fontFamily="monospace">User</text>
    <path d="M72 18h10" stroke="rgba(0,245,255,0.25)" strokeWidth="1.5" />
    <polygon points="84,18 78,14 78,22" fill="rgba(0,245,255,0.25)" />
    <rect x="88" y="6" width="80" height="24" rx="6" stroke="rgba(0,245,255,0.3)" strokeWidth="1.5" />
    <text x="128" y="22" textAnchor="middle" fill="rgba(0,245,255,0.5)" fontSize="11" fontFamily="monospace">FastAPI</text>
    <path d="M172 18h10" stroke="rgba(0,245,255,0.25)" strokeWidth="1.5" />
    <polygon points="184,18 178,14 178,22" fill="rgba(0,245,255,0.25)" />
    <rect x="188" y="6" width="80" height="24" rx="6" stroke="rgba(0,245,255,0.3)" strokeWidth="1.5" />
    <text x="228" y="22" textAnchor="middle" fill="rgba(0,245,255,0.5)" fontSize="11" fontFamily="monospace">Model</text>
    <path d="M272 18h10" stroke="rgba(0,245,255,0.25)" strokeWidth="1.5" />
    <polygon points="284,18 278,14 278,22" fill="rgba(0,245,255,0.25)" />
    <rect x="288" y="6" width="72" height="24" rx="6" stroke="rgba(0,245,255,0.3)" strokeWidth="1.5" />
    <text x="324" y="22" textAnchor="middle" fill="rgba(0,245,255,0.5)" fontSize="11" fontFamily="monospace">SQLite</text>
    <path d="M364 18h10" stroke="rgba(0,245,255,0.25)" strokeWidth="1.5" />
    <polygon points="376,18 370,14 370,22" fill="rgba(0,245,255,0.25)" />
    <rect x="380" y="6" width="88" height="24" rx="6" stroke="rgba(0,245,255,0.3)" strokeWidth="1.5" />
    <text x="424" y="22" textAnchor="middle" fill="rgba(0,245,255,0.5)" fontSize="11" fontFamily="monospace">Monitor</text>
  </svg>
);

const RAGFlow = () => (
  <svg viewBox="0 0 480 36" className="w-full max-w-md h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="6" width="64" height="24" rx="6" stroke="rgba(0,245,255,0.3)" strokeWidth="1.5" />
    <text x="36" y="22" textAnchor="middle" fill="rgba(0,245,255,0.5)" fontSize="11" fontFamily="monospace">Docs</text>
    <path d="M72 18h10" stroke="rgba(0,245,255,0.25)" strokeWidth="1.5" />
    <polygon points="84,18 78,14 78,22" fill="rgba(0,245,255,0.25)" />
    <rect x="88" y="6" width="80" height="24" rx="6" stroke="rgba(0,245,255,0.3)" strokeWidth="1.5" />
    <text x="128" y="22" textAnchor="middle" fill="rgba(0,245,255,0.5)" fontSize="11" fontFamily="monospace">Chunk</text>
    <path d="M172 18h10" stroke="rgba(0,245,255,0.25)" strokeWidth="1.5" />
    <polygon points="184,18 178,14 178,22" fill="rgba(0,245,255,0.25)" />
    <rect x="188" y="6" width="80" height="24" rx="6" stroke="rgba(0,245,255,0.3)" strokeWidth="1.5" />
    <text x="228" y="22" textAnchor="middle" fill="rgba(0,245,255,0.5)" fontSize="11" fontFamily="monospace">Embed</text>
    <path d="M272 18h10" stroke="rgba(0,245,255,0.25)" strokeWidth="1.5" />
    <polygon points="284,18 278,14 278,22" fill="rgba(0,245,255,0.25)" />
    <rect x="288" y="6" width="88" height="24" rx="6" stroke="rgba(0,245,255,0.3)" strokeWidth="1.5" />
    <text x="332" y="22" textAnchor="middle" fill="rgba(0,245,255,0.5)" fontSize="11" fontFamily="monospace">ChromaDB</text>
    <path d="M380 18h10" stroke="rgba(0,245,255,0.25)" strokeWidth="1.5" />
    <polygon points="392,18 386,14 386,22" fill="rgba(0,245,255,0.25)" />
    <rect x="396" y="6" width="72" height="24" rx="6" stroke="rgba(0,245,255,0.3)" strokeWidth="1.5" />
    <text x="432" y="22" textAnchor="middle" fill="rgba(0,245,255,0.5)" fontSize="11" fontFamily="monospace">LLM</text>
  </svg>
);

const ETLFlow = () => (
  <svg viewBox="0 0 480 36" className="w-full max-w-md h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="6" width="100" height="24" rx="6" stroke="rgba(0,245,255,0.3)" strokeWidth="1.5" />
    <text x="54" y="22" textAnchor="middle" fill="rgba(0,245,255,0.5)" fontSize="11" fontFamily="monospace">Extract</text>
    <path d="M108 18h10" stroke="rgba(0,245,255,0.25)" strokeWidth="1.5" />
    <polygon points="122,18 116,14 116,22" fill="rgba(0,245,255,0.25)" />
    <rect x="126" y="6" width="124" height="24" rx="6" stroke="rgba(0,245,255,0.3)" strokeWidth="1.5" />
    <text x="188" y="22" textAnchor="middle" fill="rgba(0,245,255,0.5)" fontSize="11" fontFamily="monospace">Transform</text>
    <path d="M254 18h10" stroke="rgba(0,245,255,0.25)" strokeWidth="1.5" />
    <polygon points="268,18 262,14 262,22" fill="rgba(0,245,255,0.25)" />
    <rect x="272" y="6" width="80" height="24" rx="6" stroke="rgba(0,245,255,0.3)" strokeWidth="1.5" />
    <text x="312" y="22" textAnchor="middle" fill="rgba(0,245,255,0.5)" fontSize="11" fontFamily="monospace">Load</text>
    <path d="M356 18h10" stroke="rgba(0,245,255,0.25)" strokeWidth="1.5" />
    <polygon points="374,18 368,14 368,22" fill="rgba(0,245,255,0.25)" />
    <rect x="378" y="6" width="98" height="24" rx="6" stroke="rgba(0,245,255,0.3)" strokeWidth="1.5" />
    <text x="427" y="22" textAnchor="middle" fill="rgba(0,245,255,0.5)" fontSize="11" fontFamily="monospace">Query</text>
  </svg>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent/30 selection:text-accent">
      <AnimatedBackground />
      {/* Hero Section */}
      <header>
      <section id="hero" className="relative pt-24 pb-16 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex flex-col-reverse md:flex-row md:items-start md:gap-8 lg:gap-16">
            <div className="flex-1 space-y-8">
              <h1 className="text-6xl md:text-7xl font-black tracking-tighter animate-fade-in">
                ISMAIL FERDI
              </h1>
              
              <p className="text-lg md:text-xl font-bold text-accent animate-fade-in animate-delay-1">
                AI Engineering Student | MLOps &amp; Backend | Python &amp; FastAPI
              </p>

              <div className="space-y-6 text-lg text-white/70 leading-relaxed max-w-3xl animate-fade-in animate-delay-2">
                <p>
                  I'm a 4th-year AI Engineering student at <span className="text-accent font-semibold">Université Djillali Liabès, Algeria</span>. I build production-oriented machine learning systems — from training pipelines and experiment tracking to containerized REST APIs with automated monitoring and CI/CD.
                </p>

                <div className="space-y-3">
                  <p className="text-white font-bold">What I bring:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>End-to-end MLOps: FastAPI, scikit-learn, MLflow, Docker, GitHub Actions</li>
                    <li>Data drift monitoring using statistical methods (PSI, Jensen-Shannon divergence)</li>
                    <li>Structured logging, automated Slack alerts, and prediction logging for production observability</li>
                    <li>Clean, tested Python code with CI verification</li>
                  </ul>
                </div>

                <p>
                  <span className="text-white font-bold">Looking for:</span> AI/ML Engineering internships and junior roles where I can contribute to production ML systems.
                </p>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-3 pt-4">
                <a href="mailto:ismailferdi10042004@gmail.com" className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors text-sm font-medium py-5">
                  <span>📧</span>
                  <span>ismailferdi10042004@gmail.com</span>
                </a>
                <a href="tel:+213775853351" className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors text-sm font-medium py-5">
                  <span>📱</span>
                  <span>+213 775 85 33 51</span>
                </a>
                <a href="https://linkedin.com/in/ismail-ferdi-1b3a70290" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors text-sm font-medium py-5">
                  <span>💼</span>
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/ismailferdi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors text-sm font-medium py-5">
                  <span>🐙</span>
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            <div className="flex-shrink-0 self-center md:self-start mb-8 md:mb-0 md:mt-2">
              <div className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full border-2 border-accent/60 shadow-lg shadow-accent/15 overflow-hidden bg-bg-dark hover:scale-105 transition-transform duration-300 aspect-square">
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

      <main className="max-w-5xl mx-auto px-6 pb-24 space-y-32">

        {/* Technical Skills */}
        <section id="skills">
          <h2 className="text-xs font-bold text-accent uppercase tracking-widest mb-8">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DetailedSkillCard 
              title="Languages" 
              icon={Code2}
              items={[
                { skill: 'Python', desc: 'primary language for all ML and backend code' },
              ]}
            />
            <DetailedSkillCard 
              title="Backend & API" 
              icon={Wrench}
              items={[
                { skill: 'FastAPI', desc: 'REST API with /predict, /predict_batch, /health, /metrics endpoints' },
                { skill: 'Pydantic', desc: 'request validation with CustomerFeatures and Settings models' },
                { skill: 'Uvicorn', desc: 'ASGI server for the FastAPI application' },
              ]}
            />
            <DetailedSkillCard 
              title="Machine Learning" 
              icon={BrainCircuit}
              items={[
                { skill: 'scikit-learn', desc: 'RandomForestClassifier, LogisticRegression, ColumnTransformer, StandardScaler, OneHotEncoder' },
                { skill: 'MLflow', desc: 'experiment tracking for parameters, metrics, and model artifacts' },
                { skill: 'RAG (Retrieval-Augmented Generation)', desc: 'document Q&A systems with retrieval-augmented generation pipelines' },
                { skill: 'LLM Integration', desc: 'OpenAI API, embeddings, and grounded answer generation with citation' },
              ]}
            />
            <DetailedSkillCard 
              title="Data & Storage" 
              icon={Database}
              items={[
                { skill: 'pandas', desc: 'CSV loading, DataFrame manipulation, feature engineering' },
                { skill: 'NumPy', desc: 'numerical operations, histogram computation for drift detection' },
                { skill: 'joblib', desc: 'model and preprocessor serialization' },
                { skill: 'SQLite', desc: 'append-only prediction log with all input features' },
                { skill: 'Hugging Face Hub', desc: 'model artifact storage and automatic download on startup' },
                { skill: 'Vector Databases', desc: 'ChromaDB for semantic document search and retrieval in RAG pipelines' },
              ]}
            />
            <DetailedSkillCard 
              title="Monitoring & Observability" 
              icon={Eye}
              items={[
                { skill: 'PSI Drift Detection', desc: 'Population Stability Index for numeric feature drift' },
                { skill: 'Jensen-Shannon Divergence', desc: 'drift detection for categorical features' },
                { skill: 'Structured JSON Logging', desc: 'python-json-logger with typed event fields' },
                { skill: 'Slack Alerts', desc: 'webhook notifications when drift reaches ALERT level' },
              ]}
            />
            <DetailedSkillCard 
              title="DevOps & Frontend" 
              icon={Sparkles}
              items={[
                { skill: 'Docker', desc: 'containerized deployment with Docker Compose (API + MLflow)' },
                { skill: 'GitHub Actions', desc: 'CI pipeline: lint, test, Docker build on push' },
                { skill: 'Streamlit', desc: 'interactive dashboard with customer form and drift report' },
                { skill: 'Plotly', desc: 'gauge chart for churn probability visualization' },
              ]}
            />
            <DetailedSkillCard 
              title="Data Engineering & Testing" 
              icon={Package}
              items={[
                { skill: 'ETL Pipeline Design', desc: 'extract → transform → load → query stages with cached exchange rates' },
                { skill: 'BeautifulSoup', desc: 'tabular web scraping with the lxml parser' },
                { skill: 'Requests', desc: 'live REST integration with graceful fallback to a cached CSV' },
                { skill: 'pytest', desc: 'hermetic 24-test suite with fixtures and mocked HTTP (responses, pytest-mock)' },
                { skill: 'argparse + pyproject', desc: 'installable CLI entry points with run and query subcommands' },
              ]}
            />
          </div>
        </section>

        {/* Experience */}
        <section id="experience">
          <h2 className="text-xs font-bold text-accent uppercase tracking-widest mb-8">Experience</h2>
          <div className="glass-card p-8 space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tight">Intern — Industrial Systems</h3>
              <p className="text-sm text-white/70">
                <strong className="text-white/90">ENIE (Entreprise Nationale des Industries Électroniques)</strong>
                <span className="text-white/50 mx-2">|</span>
                Sidi Bel Abbes, Algeria
              </p>
              <p className="text-sm text-white/50 italic">March 2026 – April 2026</p>
            </div>
            <ul className="space-y-3 text-sm text-white/60 leading-relaxed">
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
            <div className="p-4 rounded-xl bg-accent/[0.03] border border-accent/15 text-sm text-white/50 italic leading-relaxed flex items-start gap-3">
              <span className="text-accent not-italic text-base mt-0.5 flex-shrink-0">💡</span>
              <span>
                <strong className="text-white/70 not-italic font-semibold">Transferable to ML:</strong>
                {' '}QA mindset → model validation & testing; troubleshooting → debugging training pipelines; workflow documentation → experiment tracking & reproducibility
              </span>
            </div>
          </div>
        </section>

        {/* Featured Project */}
        <section id="projects">
          <h2 className="text-xs font-bold text-accent uppercase tracking-widest mb-8">Featured Project</h2>
          <div className="grid grid-cols-1 gap-8">

            <div className="glass-card p-8 space-y-6">
              <ChurnOpsFlow />
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <h3 className="text-2xl font-bold tracking-tight">ChurnOps — Customer Churn Prediction Pipeline</h3>
                <span className="px-3 py-1 text-xs font-bold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 uppercase tracking-wider flex-shrink-0">Shipped</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {['Python', 'FastAPI', 'scikit-learn', 'MLflow', 'Docker', 'Streamlit', 'GitHub Actions'].map(t => (
                  <span key={t} className="px-2.5 py-0.5 text-[11px] font-medium rounded-full border border-white/10 bg-white/5 text-white/50">{t}</span>
                ))}
              </div>

              <p className="text-white/60 leading-relaxed text-sm">
                End-to-end MLOps system for customer churn prediction. Trains Random Forest and Logistic Regression models with MLflow experiment tracking, serves predictions via a FastAPI REST API, and monitors data drift in production.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-3">API Endpoints</p>
                  <ul className="space-y-2 text-sm text-white/60">
                    {[
                      'POST /predict — single prediction with Pydantic validation',
                      'POST /predict_batch — batch inference',
                      'GET /health — model and preprocessor status',
                      'GET /metrics — drift report over recent predictions',
                    ].map(item => (
                      <li key={item} className="flex gap-3">
                        <span className="text-accent mt-1 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-3">Key Features</p>
                  <ul className="space-y-2 text-sm text-white/60">
                    {[
                      'FastAPI REST API with Pydantic request validation',
                      'Streamlit dashboard with Plotly gauge chart',
                      'MLflow model registry with versioned artifacts',
                      'Docker Compose deployment (API + MLflow server)',
                      'PSI and Jensen-Shannon drift detection',
                      'Structured JSON logging to stdout',
                      'Slack webhook alerts on drift ALERT status',
                      'Hugging Face Hub artifact sync on startup',
                      'SQLite append-only prediction log',
                    ].map(item => (
                      <li key={item} className="flex gap-3">
                        <span className="text-accent mt-1 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-sm text-white/50 italic border-l-2 border-accent/30 pl-4 leading-relaxed">
                This project demonstrates production-oriented ML engineering: a trainable model, a containerized API, automated CI, and observability beyond accuracy metrics. Built from scratch with no boilerplate generators.
              </p>
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-6">
                <a href="https://github.com/ismailferdi/ChurnOps" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-accent/80 transition-colors py-3">
                  <Github size={12} />
                  <span>GitHub Repository</span>
                </a>
                <a href="https://ismailferdi-churnops.streamlit.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-accent/80 transition-colors py-3">
                  <Sparkles size={12} />
                  <span>Streamlit Dashboard</span>
                </a>
              </div>
            </div>

            <div className="glass-card p-8 space-y-6">
              <RAGFlow />
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <h3 className="text-2xl font-bold tracking-tight">RAGNar — RAG-Powered Document Q&A System</h3>
                <span className="px-3 py-1 text-xs font-bold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 uppercase tracking-wider flex-shrink-0">Shipped</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {['Python', 'FastAPI', 'ChromaDB', 'OpenAI', 'Streamlit', 'Docker', 'GitHub Actions'].map(t => (
                  <span key={t} className="px-2.5 py-0.5 text-[11px] font-medium rounded-full border border-white/10 bg-white/5 text-white/50">{t}</span>
                ))}
              </div>

              <p className="text-white/60 leading-relaxed text-sm">
                Full-stack retrieval-augmented generation system for document Q&A. Upload PDFs or text files and ask questions, get grounded, cited answers powered by a FastAPI + ChromaDB backend and OpenAI embeddings. Includes an automated evaluation suite (retrieval recall@5: 97%, grounding accuracy: 100%), Docker deployment, and CI/CD via GitHub Actions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-3">Pipeline Stages</p>
                  <ul className="space-y-2 text-sm text-white/60">
                    {[
                      'PDF/text ingestion with automatic chunking',
                      'OpenAI embedding generation for semantic search',
                      'ChromaDB vector storage and similarity retrieval',
                      'LLM grounded answer generation with citations',
                      'Automated evaluation suite for RAG quality',
                    ].map(item => (
                      <li key={item} className="flex gap-3">
                        <span className="text-accent mt-1 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-3">Key Features</p>
                  <ul className="space-y-2 text-sm text-white/60">
                    {[
                      'Streamlit UI for document upload and Q&A',
                      'FastAPI backend with ChromaDB vector store',
                      'OpenAI embeddings and LLM integration',
                      'Docker Compose with multi-service deployment',
                      'CI/CD via GitHub Actions',
                    ].map(item => (
                      <li key={item} className="flex gap-3">
                        <span className="text-accent mt-1 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-sm text-white/50 italic border-l-2 border-accent/30 pl-4 leading-relaxed">
                Full-stack RAG system that demonstrates production-ready retrieval-augmented generation — from document ingestion to grounded, cited answers. Built with automated evaluation, Docker deployment, and CI/CD.
              </p>
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-6">
                <a href="https://github.com/ismailferdi/RAGNar" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-accent/80 transition-colors py-3">
                  <Github size={12} />
                  <span>GitHub Repository</span>
                </a>
                <a href="https://ismailferdi-ragnar.streamlit.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-accent/80 transition-colors py-3">
                  <Sparkles size={12} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>

            <div className="glass-card p-8 space-y-6">
              <ETLFlow />
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <h3 className="text-2xl font-bold tracking-tight">Banks ETL — Largest-Banks Data Pipeline</h3>
                <span className="px-3 py-1 text-xs font-bold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 uppercase tracking-wider flex-shrink-0">Shipped</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {['Python', 'pandas', 'BeautifulSoup', 'Requests', 'SQLite', 'pytest', 'Docker', 'GitHub Actions'].map(t => (
                  <span key={t} className="px-2.5 py-0.5 text-[11px] font-medium rounded-full border border-white/10 bg-white/5 text-white/50">{t}</span>
                ))}
              </div>

              <p className="text-white/60 leading-relaxed text-sm">
                Portfolio-grade rebuild of IBM's "largest banks" ETL assignment as a real installable Python package — archived-Wikipedia extraction, USD→GBP/EUR/INR conversion, CSV and SQLite loads, and currency queries, with logging, tests, CI, and Docker.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-3">Pipeline Stages</p>
                  <ul className="space-y-2 text-sm text-white/60">
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
                  <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-3">Key Features</p>
                  <ul className="space-y-2 text-sm text-white/60">
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
              </div>

              <p className="text-sm text-white/50 italic border-l-2 border-accent/30 pl-4 leading-relaxed">
                This project demonstrates classic data-engineering fundamentals — reliable extraction, reproducible transforms, and tested loads — packaged the way production Python ships: CLI, CI, containers, and docs.
              </p>
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-6">
                <a href="https://github.com/ismailferdi/banks-etl" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-accent/80 transition-colors py-3">
                  <Github size={12} />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Education & Certifications */}
        <section id="education">
          <h2 className="text-xs font-bold text-accent uppercase tracking-widest mb-8">Education & Certifications</h2>
          <div className="space-y-12">

            <div>
              <h3 className="text-[10px] font-black text-white/50 uppercase tracking-[0.2em] mb-4">Education</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="text-[10px] font-bold text-white/50 uppercase tracking-widest border-b border-white/10">
                      <th className="pb-4 font-bold">Degree</th>
                      <th className="pb-4 font-bold">Institution</th>
                      <th className="pb-4 font-bold">Period</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-white/5 even:bg-white/[0.02]">
                      <td className="py-6 font-bold text-white/90">Bachelor's in Computer Science — AI Specialization</td>
                      <td className="py-6 text-white/60">Université Djillali Liabès, Algeria</td>
                      <td className="py-6 text-white/50">Sep 2022 – Jul 2027</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-white/50 leading-relaxed">
                <span className="font-semibold text-white/70">Relevant coursework:</span>
                {' '}Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, Big Data Analytics, Linear Algebra, Probability &amp; Statistics, Algorithms &amp; Data Structures
              </p>
            </div>

            <div>
              <h3 className="text-[10px] font-black text-white/50 uppercase tracking-[0.2em] mb-4">Certifications</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="text-[10px] font-bold text-white/50 uppercase tracking-widest border-b border-white/10">
                      <th className="pb-4 font-bold">Certificate</th>
                      <th className="pb-4 font-bold">Issuer</th>
                      <th className="pb-4 font-bold">Date</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-white/5 even:bg-white/[0.02]">
                      <td className="py-6 font-bold text-white/90">The AI Engineer Path</td>
                      <td className="py-6 text-white/60">Scrimba</td>
                      <td className="py-6 text-white/50">July 2025</td>
                    </tr>
                    <tr className="border-b border-white/5 even:bg-white/[0.02]">
                      <td className="py-6 font-bold text-white/90">The Data Science Course: Complete Bootcamp 2025</td>
                      <td className="py-6 text-white/60">Careers 365</td>
                      <td className="py-6 text-white/50">February 2025</td>
                    </tr>
                    <tr className="border-b border-white/5 even:bg-white/[0.02]">
                      <td className="py-6 font-bold text-white/90">Machine Learning Specialization</td>
                      <td className="py-6 text-white/60">DeepLearning.AI</td>
                      <td className="py-6 text-white/50">2025</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>

        {/* Let's Connect */}
        <section id="contact">
          <div className="mb-12">
            <h2 className="text-4xl font-black mb-4">Let's Connect</h2>
            <p className="text-white/60">
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
          <p className="text-white/60 mt-8">
            <strong>Open to:</strong> Internships, junior roles, freelance ML projects, open-source collaborations, research assistant positions.
          </p>
        </section>
      </main>

      <footer className="mt-20 py-12 px-6 border-t border-white/10 bg-white/[0.02] text-center">
        <p className="text-xs font-bold text-white/50 uppercase tracking-[0.3em]">
          &copy; {new Date().getFullYear()} ISMAIL FERDI
        </p>
      </footer>
    </div>
  );
}
