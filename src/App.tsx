import { Mail, Phone, Linkedin, Github, Code2, BrainCircuit, Wrench, Database, Eye, Sparkles, MessageSquare } from 'lucide-react';
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

const PipelineFlow = () => (
  <svg viewBox="0 0 480 36" className="w-full max-w-md h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="6" width="88" height="24" rx="6" stroke="rgba(0,245,255,0.3)" strokeWidth="1.5" />
    <text x="48" y="22" textAnchor="middle" fill="rgba(0,245,255,0.5)" fontSize="11" fontFamily="monospace">Data</text>
    <path d="M96 18h10" stroke="rgba(0,245,255,0.25)" strokeWidth="1.5" />
    <polygon points="108,18 102,14 102,22" fill="rgba(0,245,255,0.25)" />
    <rect x="112" y="6" width="88" height="24" rx="6" stroke="rgba(0,245,255,0.3)" strokeWidth="1.5" />
    <text x="156" y="22" textAnchor="middle" fill="rgba(0,245,255,0.5)" fontSize="11" fontFamily="monospace">Model</text>
    <path d="M204 18h10" stroke="rgba(0,245,255,0.25)" strokeWidth="1.5" />
    <polygon points="216,18 210,14 210,22" fill="rgba(0,245,255,0.25)" />
    <rect x="220" y="6" width="88" height="24" rx="6" stroke="rgba(0,245,255,0.3)" strokeWidth="1.5" />
    <text x="264" y="22" textAnchor="middle" fill="rgba(0,245,255,0.5)" fontSize="11" fontFamily="monospace">API</text>
    <path d="M312 18h10" stroke="rgba(0,245,255,0.25)" strokeWidth="1.5" />
    <polygon points="324,18 318,14 318,22" fill="rgba(0,245,255,0.25)" />
    <rect x="328" y="6" width="88" height="24" rx="6" stroke="rgba(0,245,255,0.3)" strokeWidth="1.5" />
    <text x="372" y="22" textAnchor="middle" fill="rgba(0,245,255,0.5)" fontSize="11" fontFamily="monospace">Docker</text>
  </svg>
);

const RAGFlow = () => (
  <svg viewBox="0 0 480 36" className="w-full max-w-md h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="6" width="64" height="24" rx="6" stroke="rgba(0,245,255,0.3)" strokeWidth="1.5" />
    <text x="36" y="22" textAnchor="middle" fill="rgba(0,245,255,0.5)" fontSize="11" fontFamily="monospace">PDF</text>
    <path d="M72 18h10" stroke="rgba(0,245,255,0.25)" strokeWidth="1.5" />
    <polygon points="84,18 78,14 78,22" fill="rgba(0,245,255,0.25)" />
    <rect x="88" y="6" width="80" height="24" rx="6" stroke="rgba(0,245,255,0.3)" strokeWidth="1.5" />
    <text x="128" y="22" textAnchor="middle" fill="rgba(0,245,255,0.5)" fontSize="11" fontFamily="monospace">Chunks</text>
    <path d="M172 18h10" stroke="rgba(0,245,255,0.25)" strokeWidth="1.5" />
    <polygon points="184,18 178,14 178,22" fill="rgba(0,245,255,0.25)" />
    <rect x="188" y="6" width="96" height="24" rx="6" stroke="rgba(0,245,255,0.3)" strokeWidth="1.5" />
    <text x="236" y="22" textAnchor="middle" fill="rgba(0,245,255,0.5)" fontSize="11" fontFamily="monospace">Vector DB</text>
    <path d="M288 18h10" stroke="rgba(0,245,255,0.25)" strokeWidth="1.5" />
    <polygon points="300,18 294,14 294,22" fill="rgba(0,245,255,0.25)" />
    <rect x="304" y="6" width="60" height="24" rx="6" stroke="rgba(0,245,255,0.3)" strokeWidth="1.5" />
    <text x="334" y="22" textAnchor="middle" fill="rgba(0,245,255,0.5)" fontSize="11" fontFamily="monospace">LLM</text>
    <path d="M368 18h10" stroke="rgba(0,245,255,0.25)" strokeWidth="1.5" />
    <polygon points="380,18 374,14 374,22" fill="rgba(0,245,255,0.25)" />
    <rect x="384" y="6" width="80" height="24" rx="6" stroke="rgba(0,245,255,0.3)" strokeWidth="1.5" />
    <text x="424" y="22" textAnchor="middle" fill="rgba(0,245,255,0.5)" fontSize="11" fontFamily="monospace">Answer</text>
  </svg>
);

const KernelGrid = () => {
  const gaussian = [[1,2,1],[2,4,2],[1,2,1]];
  const sobel = [[-1,0,1],[-2,0,2],[-1,0,1]];
  const cellW = 32, cellH = 22, gap = 4;
  const renderGrid = (data: number[][], ox: number, oy: number) =>
    data.flatMap((row, i) =>
      row.map((val, j) => {
        const x = ox + j * (cellW + gap);
        const y = oy + i * (cellH + gap);
        let fill: string;
        if (val < 0) fill = 'rgba(255,107,107,0.85)';
        else if (val === 0) fill = 'rgba(255,255,255,0.45)';
        else fill = 'rgba(0,245,255,0.85)';
        return (
          <g key={`${ox}-${i}-${j}`}>
            <rect x={x} y={y} width={cellW} height={cellH} rx="3" stroke="rgba(255,255,255,0.12)" strokeWidth="0.75" />
            <text x={x + cellW/2} y={y + cellH/2 + 4} textAnchor="middle" fill={fill} fontSize="12" fontFamily="monospace" fontWeight="600">{val}</text>
          </g>
        );
      })
    );
  return (
    <svg viewBox="0 0 260 110" className="w-full max-w-[260px]" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="50" y="14" textAnchor="middle" fill="rgba(0,245,255,0.7)" fontSize="10" fontFamily="monospace" fontWeight="700" letterSpacing="2">GAUSSIAN</text>
      {renderGrid(gaussian, 4, 24)}
      <line x1="124" y1="8" x2="124" y2="82" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <text x="185" y="14" textAnchor="middle" fill="rgba(0,245,255,0.7)" fontSize="10" fontFamily="monospace" fontWeight="700" letterSpacing="2">SOBEL X</text>
      {renderGrid(sobel, 130, 24)}
      <text x="130" y="104" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="9" fontFamily="monospace">3&times;3 convolution kernels</text>
    </svg>
  );
};

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
                AI Engineering Student | NLP &amp; Computer Vision | PyTorch &amp; Hugging Face
              </p>

              <div className="space-y-6 text-lg text-white/70 leading-relaxed max-w-3xl animate-fade-in animate-delay-2">
                <p>
                  I'm a 4th-year AI Engineering student at <span className="text-accent font-semibold">Université Djillali Liabès, Algeria</span>, building toward a career in applied machine learning. My focus is on <span className="text-accent font-semibold">Natural Language Processing</span> and <span className="text-accent font-semibold">Computer Vision</span> — turning research into working systems.
                </p>

                <div className="space-y-3">
                  <p className="text-white font-bold">What I bring:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Strong foundation in classical ML and deep learning from coursework and hands-on certifications</li>
                    <li>Experience implementing core algorithms from scratch to understand the math behind the frameworks</li>
                    <li>Active learner currently building end-to-end projects with PyTorch, Hugging Face, and modern NLP pipelines</li>
                  </ul>
                </div>

                <p>
                  <span className="text-white font-bold">Looking for:</span> AI/ML Engineering internships and junior roles where I can ship models that solve real problems.
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
              title="Languages & Core" 
              icon={Code2}
              items={[
                { skill: 'Python', desc: 'primary language for ML/DL development' },
                { skill: 'SQL', desc: 'data querying and manipulation', tag: 'basics' },
                { skill: 'Bash/Linux', desc: 'CLI workflows, scripting, server management' },
              ]}
            />
            <DetailedSkillCard 
              title="Data Science Fundamentals" 
              icon={Database}
              items={[
                { skill: 'NumPy', desc: 'numerical computing, array operations, linear algebra' },
                { skill: 'pandas', desc: 'data manipulation, ETL pipelines' },
                { skill: 'Matplotlib / Seaborn', desc: 'data visualization and model performance plots' },
                { skill: 'Exploratory Data Analysis (EDA)', desc: 'pattern discovery, data quality assessment' },
                { skill: 'Feature Engineering', desc: 'transformation, selection, encoding' },
                { skill: 'Data Preprocessing', desc: 'cleaning, normalization, handling missing data' },
              ]}
            />
            <DetailedSkillCard 
              title="Machine Learning" 
              icon={BrainCircuit}
              items={[
                { skill: 'scikit-learn', desc: 'classical ML: SVM, Random Forest, PCA, clustering, regression' },
                { skill: 'Supervised Learning', desc: 'classification, regression, ensemble methods' },
                { skill: 'Unsupervised Learning', desc: 'clustering, dimensionality reduction' },
                { skill: 'Model Evaluation', desc: 'accuracy, precision, recall, F1, ROC-AUC, cross-validation' },
                { skill: 'Hyperparameter Tuning', desc: 'grid search, random search, Bayesian optimization' },
              ]}
            />
            <DetailedSkillCard 
              title="Deep Learning" 
              icon={BrainCircuit}
              items={[
                { skill: 'PyTorch', desc: 'primary DL framework; building and training CNNs, RNNs, Transformers' },
                { skill: 'TensorFlow / Keras', desc: 'familiar; used in coursework and tutorials' },
                { skill: 'Neural Networks', desc: 'MLPs, activation functions, backpropagation' },
                { skill: 'CNNs', desc: 'convolution, pooling, batch normalization, dropout' },
                { skill: 'RNNs / LSTMs', desc: 'sequence modeling, time series, text generation' },
                { skill: 'Transformers', desc: 'self-attention, multi-head attention, positional encoding' },
                { skill: 'Optimization', desc: 'SGD, Adam, RMSprop, learning rate scheduling' },
                { skill: 'Regularization', desc: 'L1/L2, Dropout, Early Stopping, Data Augmentation' },
              ]}
            />
            <DetailedSkillCard 
              title="Natural Language Processing" 
              icon={MessageSquare}
              items={[
                { skill: 'Hugging Face Transformers', desc: 'fine-tuning BERT, GPT-2; model hub and pipelines' },
                { skill: 'spaCy', desc: 'tokenization, NER, text preprocessing, dependency parsing' },
                { skill: 'NLTK', desc: 'text analysis, stemming, stopword removal, corpus handling' },
                { skill: 'Text Classification', desc: 'sentiment analysis, topic labeling, spam detection' },
                { skill: 'Named Entity Recognition (NER)', desc: 'extracting entities from unstructured text' },
                { skill: 'Word Embeddings', desc: 'Word2Vec, GloVe, contextual embeddings' },
                { skill: 'Prompt Engineering', desc: 'structured prompting, chain-of-thought, few-shot learning' },
                { skill: 'Large Language Models (LLMs)', desc: 'architecture understanding, fine-tuning basics' },
              ]}
            />
            <DetailedSkillCard 
              title="Computer Vision" 
              icon={Eye}
              items={[
                { skill: 'OpenCV', desc: 'image preprocessing, feature detection, contour analysis' },
                { skill: 'Pillow', desc: 'image manipulation and format handling' },
                { skill: 'Image Processing', desc: 'filtering, thresholding, edge detection, segmentation' },
                { skill: 'Classical CV Algorithms', desc: '2D convolution, Gaussian/Sobel/Laplacian filters, Otsu thresholding, morphological operations' },
              ]}
            />
            <DetailedSkillCard 
              title="MLOps & Engineering Tools" 
              icon={Wrench}
              items={[
                { skill: 'Git & GitHub', desc: 'version control, branching, collaborative workflows' },
                { skill: 'Docker', desc: 'containerizing ML apps', tag: 'basics' },
                { skill: 'FastAPI', desc: 'building REST APIs for model serving', tag: 'learning' },
                { skill: 'Streamlit', desc: 'rapid prototyping of ML dashboards and demos' },
                { skill: 'Jupyter Notebook / VS Code', desc: 'development environment' },
                { skill: 'Google Colab / Kaggle', desc: 'cloud training, GPU experimentation' },
              ]}
            />
            <DetailedSkillCard 
              title="Currently Learning" 
              icon={Sparkles}
              accent
              items={[
                { skill: 'LangChain', desc: 'building RAG systems, document Q&A chains' },
                { skill: 'ChromaDB', desc: 'vector storage and semantic search for LLM applications' },
                { skill: 'FastAPI + Docker', desc: 'production-ready model deployment' },
                { skill: 'MLflow / Weights & Biases', desc: 'experiment tracking and model versioning' },
                { skill: 'AWS / Hugging Face Spaces', desc: 'cloud model hosting' },
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

        {/* Featured Projects */}
        <section id="projects">
          <h2 className="text-xs font-bold text-accent uppercase tracking-widest mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 gap-8">

            {/* Project 1 */}
            <div className="glass-card p-8 space-y-6">
              <PipelineFlow />
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <h3 className="text-2xl font-bold tracking-tight">Arabic-French Sentiment Analysis API</h3>
                <span className="px-3 py-1 text-xs font-bold rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 uppercase tracking-wider flex-shrink-0">In Development</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {['Python', 'Hugging Face Transformers', 'PyTorch', 'FastAPI', 'Docker'].map(t => (
                  <span key={t} className="px-2.5 py-0.5 text-[11px] font-medium rounded-full border border-white/10 bg-white/5 text-white/50">{t}</span>
                ))}
              </div>

              <p className="text-white/60 leading-relaxed text-sm">
                Fine-tuning <code className="text-accent/80 text-xs px-1.5 py-0.5 rounded bg-accent/10">bert-base-multilingual-cased</code> on Arabic/French sentiment data. Building an end-to-end pipeline from data preprocessing to model training to REST API deployment.
              </p>

              <div>
                <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-3">Planned Deliverables</p>
                <ul className="space-y-2 text-sm text-white/60">
                  {[
                    'Fine-tuned model published on Hugging Face Hub',
                    'Live REST API endpoint for real-time sentiment prediction',
                    'Docker container for reproducible deployment',
                    'Benchmark results vs. baseline models',
                  ].map(item => (
                    <li key={item} className="flex gap-3">
                      <span className="text-accent mt-1 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-sm text-white/50 italic border-l-2 border-accent/30 pl-4 leading-relaxed">
                <strong className="text-white/60 not-italic">Why this project:</strong> Arabic/French multilingual NLP is underserved. This demonstrates end-to-end ML engineering — not just model training, but deployment and serving.
              </p>
              <div className="pt-4 border-t border-white/5">
                <a href="https://github.com/ismailferdi/arabic-french-sentiment-api" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-accent/80 transition-colors py-3" title="Repository will be published when project is complete">
                  <Github size={12} />
                  <span>GitHub Repo <span className="italic">(coming soon)</span></span>
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="glass-card p-8 space-y-6">
              <RAGFlow />
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <h3 className="text-2xl font-bold tracking-tight">RAG-Powered Document Q&A</h3>
                <span className="px-3 py-1 text-xs font-bold rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 uppercase tracking-wider flex-shrink-0">Planned</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {['Python', 'LangChain', 'ChromaDB', 'OpenAI API / Llama 3', 'Streamlit'].map(t => (
                  <span key={t} className="px-2.5 py-0.5 text-[11px] font-medium rounded-full border border-white/10 bg-white/5 text-white/50">{t}</span>
                ))}
              </div>

              <p className="text-white/60 leading-relaxed text-sm">
                Building a Retrieval-Augmented Generation system for querying PDF documents with source attribution and conversational memory.
              </p>

              <div>
                <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-3">Planned Features</p>
                <ul className="space-y-2 text-sm text-white/60">
                  {[
                    'PDF ingestion with semantic text chunking',
                    'Embedding-based retrieval with ChromaDB',
                    'Conversational Q&A with cited source passages',
                    'Deployed Streamlit demo for live testing',
                  ].map(item => (
                    <li key={item} className="flex gap-3">
                      <span className="text-accent mt-1 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-sm text-white/50 italic border-l-2 border-accent/30 pl-4 leading-relaxed">
                <strong className="text-white/60 not-italic">Why this project:</strong> RAG is the dominant applied LLM pattern in 2026. This proves understanding of embeddings, retrieval, and generation — not just API calls.
              </p>
              <div className="pt-4 border-t border-white/5">
                <a href="https://github.com/ismailferdi/rag-document-qa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-accent/80 transition-colors py-3" title="Repository will be published when project is complete">
                  <Github size={12} />
                  <span>GitHub Repo <span className="italic">(coming soon)</span></span>
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="glass-card p-8 space-y-6">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <h3 className="text-2xl font-bold tracking-tight">Classical Computer Vision Algorithms</h3>
                <span className="px-3 py-1 text-xs font-bold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 uppercase tracking-wider flex-shrink-0">Academic Foundation</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'NumPy'].map(t => (
                  <span key={t} className="px-2.5 py-0.5 text-[11px] font-medium rounded-full border border-white/10 bg-white/5 text-white/50">{t}</span>
                ))}
              </div>

              <p className="text-white/60 leading-relaxed text-sm">
                Implemented classical computer vision algorithms from scratch to understand the fundamentals before using deep learning frameworks.
              </p>

              <div>
                <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-3">Implemented</p>
                <ul className="space-y-2 text-sm text-white/60">
                  {[
                    '2D convolution with custom kernel support (mean, Gaussian, Sobel, Prewitt, Laplacian)',
                    'Point operations: brightness/contrast, histogram computation & equalization',
                    "Otsu's automatic thresholding for image binarization",
                    'Morphological operations: dilation, erosion, opening, closing',
                    'Zhang-Suen skeletonization for thinning binary images',
                  ].map(item => (
                    <li key={item} className="flex gap-3">
                      <span className="text-accent mt-1 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-sm text-white/50 italic border-l-2 border-accent/30 pl-4 leading-relaxed">
                <strong className="text-white/60 not-italic">What I learned:</strong> How low-level image operations work under the hood — essential foundation before applying PyTorch CNNs to real problems.
              </p>
              <div className="pt-4 border-t border-white/5">
                <a href="https://github.com/ismailferdi/classical-cv-algorithms" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-accent/80 transition-colors py-3" title="Repository will be published when project is complete">
                  <Github size={12} />
                  <span>GitHub Repo <span className="italic">(coming soon)</span></span>
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
