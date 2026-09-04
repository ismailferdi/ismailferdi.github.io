import {
  BrainCircuit,
  Database,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

export interface SkillGroupData {
  title: string;
  icon: LucideIcon;
  summary: string;
  items: string[];
}

export type ProjectFlowKind = 'churnops' | 'ragnar' | 'banks';

export interface ProjectLink {
  label: string;
  href: string;
  icon: 'github' | 'demo';
}

export interface Project {
  title: string;
  positioning: string;
  badge: string;
  problem: string;
  engineering: string[];
  evidence: string[];
  tags: string[];
  summary: string;
  flow: ProjectFlowKind;
  links: ProjectLink[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface ContactEntry {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
}

export interface FooterGroup {
  label: string;
  links: { label: string; href: string }[];
}

export const skillGroups: SkillGroupData[] = [
  {
    title: 'Production ML',
    icon: BrainCircuit,
    summary:
      'Training, tracking, and monitoring models in production — from experiments to drift detection and observability.',
    items: [
      'Python',
      'scikit-learn',
      'TensorFlow & Keras',
      'Deep Learning Architectures',
      'Computer Vision',
      'Time Series Forecasting',
      'MLflow',
      'joblib',
      'PSI Drift Detection',
      'Jensen-Shannon Divergence',
      'Structured JSON Logging',
      'Slack Alerts',
    ],
  },
  {
    title: 'LLM / RAG / AI Applications',
    icon: Sparkles,
    summary:
      'Grounded language systems — retrieval, embeddings, and cited generation over your own documents.',
    items: [
      'RAG',
      'LLM Integration',
      'Prompt Engineering & RLHF',
      'Vector Databases · ChromaDB',
      'Hugging Face Hub',
    ],
  },
  {
    title: 'Data Engineering',
    icon: Database,
    summary: 'Extraction, transformation, loading, and querying — from web scraping to SQLite.',
    items: ['ETL Pipeline Design', 'BeautifulSoup', 'Requests', 'pandas', 'NumPy', 'SQLite'],
  },
  {
    title: 'Engineering Infrastructure & Backend',
    icon: Wrench,
    summary: 'The backend behind the models — APIs, containers, CI, testing, and dashboards.',
    items: [
      'FastAPI',
      'Pydantic',
      'Uvicorn',
      'Docker',
      'GitHub Actions',
      'pytest',
      'argparse + pyproject',
      'Streamlit',
      'Plotly',
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'ChurnOps',
    positioning: 'Customer churn prediction and production-oriented MLOps.',
    badge: 'Shipped',
    problem:
      'Churn models only create value if they survive production — training must be tracked, predictions served reliably, and data drift caught before decisions silently degrade.',
    engineering: [
      'Train Random Forest and Logistic Regression on Telco churn data (80/20 stratified split)',
      'Track parameters and metrics per run in the churn-prediction MLflow experiment',
      'Register versioned artifacts — model, preprocessor, reference distributions — synced from Hugging Face Hub on startup',
      'Serve single and batch predictions through FastAPI: POST /predict, POST /predict_batch, GET /health, GET /metrics',
      'Monitor PSI and Jensen-Shannon drift over a sliding window (default 500) of recent predictions from the SQLite log',
    ],
    evidence: [
      '19-field Pydantic request validation with typed prediction, health, and metrics responses',
      'Drift status thresholds (OK / WARNING / ALERT) with Slack webhook alerts on ALERT',
      'Streamlit dashboard with Plotly gauge chart and live drift monitoring sidebar',
      'Docker Compose deployment (API + MLflow server) with a persistent prediction-log volume',
      'GitHub Actions CI: format check, pytest suite, and Docker build verification',
      'Structured JSON logging to stdout',
    ],
    tags: ['Python', 'FastAPI', 'scikit-learn', 'MLflow', 'Docker', 'Streamlit', 'GitHub Actions'],
    summary:
      'This project demonstrates production-oriented ML engineering: a trainable model, a containerized API, automated CI, and observability beyond accuracy metrics. Built from scratch with no boilerplate generators.',
    flow: 'churnops',
    links: [
      { label: 'GitHub Repository', href: 'https://github.com/ismailferdi/ChurnOps', icon: 'github' },
      {
        label: 'Streamlit Dashboard',
        href: 'https://ismailferdi-churnops.streamlit.app',
        icon: 'demo',
      },
    ],
  },
  {
    title: 'RAGNar',
    positioning: 'Document-based RAG / grounded question answering system.',
    badge: 'Shipped',
    problem:
      'Generic chatbots guess — teams need answers grounded in their own documents, so uploads must become cited, verifiable responses instead of plausible-sounding text.',
    engineering: [
      'Ingest PDFs and text files with automatic chunking (POST /ingest)',
      'Embed chunks with OpenAI text-embedding-3-small into a persistent ChromaDB store',
      'Retrieve top-k chunks above a similarity threshold for each question (POST /ask)',
      'Generate grounded answers with citations via gpt-4o-mini at temperature 0, returning answer + sources + grounded flag',
      'Evaluate automatically with the eval/ suite for RAG quality',
    ],
    evidence: [
      'Retrieval recall@5: 97.06% and grounding accuracy: 100.00% on the automated evaluation baseline',
      'Answer quality of 4.88 with 0 unparseable responses in the same baseline',
      'Methodology in the eval/ suite — reproducible with make eval; see the evaluation baseline in the repository README',
      'Streamlit UI for document upload and Q&A over a FastAPI + ChromaDB backend',
      'Docker Compose multi-service deployment with CI/CD via GitHub Actions',
    ],
    tags: ['Python', 'FastAPI', 'ChromaDB', 'OpenAI', 'Streamlit', 'Docker', 'GitHub Actions'],
    summary:
      'Full-stack RAG system that demonstrates production-ready retrieval-augmented generation — from document ingestion to grounded, cited answers. Built with automated evaluation, Docker deployment, and CI/CD.',
    flow: 'ragnar',
    links: [
      { label: 'GitHub Repository', href: 'https://github.com/ismailferdi/RAGNar', icon: 'github' },
      { label: 'Live Demo', href: 'https://ismailferdi-ragnar.streamlit.app', icon: 'demo' },
    ],
  },
  {
    title: 'Banks ETL',
    positioning: 'Installable data pipeline for bank data processing.',
    badge: 'Shipped',
    problem:
      'A coursework ETL only convinces when it ships like production software — installable, logged, tested, and containerized instead of a one-off script.',
    engineering: [
      'Extract — scrape the archived Wikipedia table of largest banks by market cap',
      'Transform — convert USD market cap to GBP/EUR/INR via a live rates API with CSV fallback',
      'Load — write CSV and SQLite (Largest_banks table, replaced each run)',
      'Query — three SQL queries answering London/GBP, Berlin/EUR, and New Delhi/INR rankings',
    ],
    evidence: [
      'Installable CLI: banks-etl full run plus banks-etl-cli run / query --city subcommands',
      'Live Frankfurter exchange-rate API with graceful fallback to a cached CSV',
      'Structured logging to logs/code_log.txt and stdout',
      'Hermetic pytest suite: 24 tests with fixtures and mocked HTTP, flake8 clean',
      'GitHub Actions CI: lint, test, and coverage on push and pull request',
      'Dockerized with named volumes persisting the database and logs',
      'Modular typed package with single-source config in banks_etl/config.py',
    ],
    tags: ['Python', 'pandas', 'BeautifulSoup', 'Requests', 'SQLite', 'pytest', 'Docker', 'GitHub Actions'],
    summary:
      'This project demonstrates classic data-engineering fundamentals — reliable extraction, reproducible transforms, and tested loads — packaged the way production Python ships: CLI, CI, containers, and docs.',
    flow: 'banks',
    links: [
      { label: 'GitHub Repository', href: 'https://github.com/ismailferdi/banks-etl', icon: 'github' },
    ],
  },
];

export const experienceBullets: string[] = [
  'Collaborated with engineering teams to document industrial electronics testing workflows and identify process inefficiencies',
  'Applied systematic troubleshooting to hardware-software integration issues, developing a methodical approach to debugging complex systems',
  'Gained exposure to quality assurance protocols and cross-functional technical communication in a production environment',
];

export const featuredCertifications: Certification[] = [
  { name: 'Machine Learning Specialization', issuer: 'DeepLearning.AI', date: '2025' },
  {
    name: 'Generative AI with Large Language Models',
    issuer: 'DeepLearning.AI',
    date: 'August 2026',
  },
  {
    name: 'TensorFlow Developer Professional Certificate',
    issuer: 'DeepLearning.AI',
    date: 'August 2026',
  },
  { name: 'Deep Learning Specialization', issuer: 'DeepLearning.AI', date: 'August 2026' },
];

export const additionalCertifications =
  'The AI Engineer Path — Scrimba (July 2025) · The Data Science Course: Complete Bootcamp 2025 — Careers 365 (February 2025)';

export const contacts: ContactEntry[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ismailferdi10042004@gmail.com',
    href: 'mailto:ismailferdi10042004@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ismail-ferdi-1b3a70290',
    href: 'https://linkedin.com/in/ismail-ferdi-1b3a70290',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/ismailferdi',
    href: 'https://github.com/ismailferdi',
  },
];

export const footerGroups: FooterGroup[] = [
  {
    label: 'Work',
    links: [
      { label: 'Selected Projects', href: '#projects' },
      { label: 'ChurnOps', href: 'https://github.com/ismailferdi/ChurnOps' },
      { label: 'RAGNar', href: 'https://github.com/ismailferdi/RAGNar' },
      { label: 'Banks ETL', href: 'https://github.com/ismailferdi/banks-etl' },
    ],
  },
  {
    label: 'Engineering',
    links: [
      { label: 'Skills', href: '#skills' },
      { label: 'Experience', href: '#experience' },
      { label: 'Education', href: '#education' },
      { label: 'Certifications', href: '#certifications' },
    ],
  },
  {
    label: 'Connect',
    links: [
      { label: 'Email', href: 'mailto:ismailferdi10042004@gmail.com' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/ismail-ferdi-1b3a70290' },
      { label: 'GitHub', href: 'https://github.com/ismailferdi' },
    ],
  },
  {
    label: 'Information',
    links: [
      { label: 'Contact', href: '#contact' },
      { label: 'Back to top', href: '#hero' },
    ],
  },
];
