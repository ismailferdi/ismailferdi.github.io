import { Github } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative scroll-mt-20 py-24 px-6 overflow-hidden"
    >
      <div className="layout-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 md:items-start">
          <div className="space-y-8">
            <p className="text-xs font-bold text-accent-teal uppercase tracking-[1.5px] animate-fade-in">
              AI / ML Engineering
            </p>
            <h1
              id="hero-heading"
              className="font-display font-normal text-4xl md:text-[64px] leading-[1.15] tracking-[-0.5px] md:leading-[1.05] md:tracking-[-1.5px] text-on-dark animate-fade-in animate-delay-1"
            >
              AI/ML Engineer building production-oriented machine learning systems.
            </h1>

            <div className="space-y-6 text-lg text-body leading-relaxed max-w-3xl animate-fade-in animate-delay-2">
              <p>
                I'm Ismail Ferdi, a 4th-year AI Engineering student at{' '}
                <span className="text-accent-teal font-semibold">
                  Université Djillali Liabès, Algeria
                </span>
                . I build production-oriented machine learning systems — MLOps pipelines with
                FastAPI, scikit-learn, and MLflow, containerized backends with Docker and CI/CD,
                RAG document systems with ChromaDB, and tested ETL data pipelines in Python.
              </p>

              <div className="space-y-3">
                <p className="text-body-strong font-bold">What I bring:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>End-to-end MLOps: FastAPI, scikit-learn, MLflow, Docker, GitHub Actions</li>
                  <li>Data drift monitoring using statistical methods (PSI, Jensen-Shannon divergence)</li>
                  <li>
                    Structured logging, automated Slack alerts, and prediction logging for production
                    observability
                  </li>
                  <li>Clean, tested Python code with CI verification</li>
                </ul>
              </div>

              <p>
                <span className="text-body-strong font-bold">Looking for:</span> AI/ML Engineering
                internships and junior roles where I can contribute to production ML systems.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2 animate-fade-in animate-delay-3">
              <a href="#projects" className="btn-primary">
                View Selected Work
              </a>
              <a
                href="https://github.com/ismailferdi"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Github size={16} aria-hidden="true" />
                <span>GitHub</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 pt-4">
              <a
                href="mailto:ismailferdi10042004@gmail.com"
                className="flex items-center gap-2 text-accent-teal hover:text-primary transition-colors text-sm font-medium py-4"
              >
                <span aria-hidden="true">📧</span>
                <span>ismailferdi10042004@gmail.com</span>
              </a>
              <a
                href="tel:+213775853351"
                className="flex items-center gap-2 text-accent-teal hover:text-primary transition-colors text-sm font-medium py-4"
              >
                <span aria-hidden="true">📱</span>
                <span>+213 775 85 33 51</span>
              </a>
              <a
                href="https://linkedin.com/in/ismail-ferdi-1b3a70290"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent-teal hover:text-primary transition-colors text-sm font-medium py-4"
              >
                <span aria-hidden="true">💼</span>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/ismailferdi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent-teal hover:text-primary transition-colors text-sm font-medium py-4"
              >
                <span aria-hidden="true">🐙</span>
                <span>GitHub</span>
              </a>
            </div>
          </div>

          <div className="justify-self-center mb-8 md:mb-0 md:mt-2">
            <div className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full border-2 border-primary/60 overflow-hidden bg-canvas aspect-square">
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
  );
}
