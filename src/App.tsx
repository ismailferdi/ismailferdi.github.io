import { Theme } from '@astryxdesign/core/theme';
import { AppShell } from '@astryxdesign/core/AppShell';
import { Layout } from '@astryxdesign/core/Layout';
import { Section } from '@astryxdesign/core/Section';
import { VStack } from '@astryxdesign/core/VStack';
import { portfolioMatchaTheme } from './themes/portfolio-matcha';
import '@astryxdesign/theme-matcha/fonts.css';
import './themes/portfolio-matcha.css';
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
    <Theme theme={portfolioMatchaTheme} mode="dark">
      <AppShell height="auto" variant="surface" contentPadding={0} topNav={<SiteNav />}>
        <Layout height="auto" contentWidth={1152} footer={<Footer />}>
          <Hero />

          <Section
            id="projects"
            aria-labelledby="projects-heading"
            className="section-anchor"
            paddingBlock={8}
            dividers={['top']}
          >
            <VStack gap={8}>
              <SectionHeader id="projects-heading" title="Selected Projects" />
              <VStack gap={10}>
                {projects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </VStack>
            </VStack>
          </Section>

          <div className="layout-container pb-24 space-y-24">
            <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-20">
              <SectionHeader id="skills-heading" title="Technical Skills" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillGroups.map((group) => (
                  <SkillGroup key={group.title} {...group} />
                ))}
              </div>
            </section>

            <Experience />
            <Education />
            <Certifications />
            <Contact />
          </div>
        </Layout>
      </AppShell>
    </Theme>
  );
}
