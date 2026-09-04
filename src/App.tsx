import AnimatedBackground from './components/AnimatedBackground';
import SiteNav from './components/SiteNav';
import Hero from './components/Hero';
import SectionHeader from './components/SectionHeader';
import ProjectCard from './components/ProjectCard';
import SkillGroup from './components/SkillGroup';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { projects, skillGroups } from './data/portfolio';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary/30 selection:text-primary">
      <AnimatedBackground />
      <header>
        <SiteNav />
      </header>
      {/* Hero Section */}
      <Hero />

      <main id="main-content" tabIndex={-1} className="layout-container pb-24 space-y-24">
        {/* Selected Projects / Work */}
        <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-20">
          <SectionHeader id="projects-heading" title="Selected Projects" />
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        {/* Engineering Capabilities / Skills */}
        <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-20">
          <SectionHeader id="skills-heading" title="Technical Skills" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group) => (
              <SkillGroup key={group.title} {...group} />
            ))}
          </div>
        </section>

        {/* Experience */}
        <Experience />

        {/* Education */}
        <Education />

        {/* Certifications */}
        <Certifications />

        {/* Contact CTA */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
