import { useEffect } from 'react';
import { Theme } from '@astryxdesign/core/theme';
import { AppShell } from '@astryxdesign/core/AppShell';
import { Layout } from '@astryxdesign/core/Layout';
import { Section } from '@astryxdesign/core/Section';
import { Grid } from '@astryxdesign/core/Grid';
import { VStack } from '@astryxdesign/core/VStack';
import { useMediaQuery } from '@astryxdesign/core';
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
  useEffect(() => {
    const header = document.querySelector('header, [role="banner"]');
    if (!header) return;
    const sync = () =>
      document.documentElement.style.setProperty(
        '--app-header-height',
        `${header.getBoundingClientRect().height}px`,
      );
    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  const isMobile = useMediaQuery('(max-width: 767px)', true);
  const isTablet = useMediaQuery('(min-width: 640px) and (max-width: 1023px)', false);
  const isLaptop = useMediaQuery('(min-width: 1024px)', false);
  const layoutPadding = isMobile ? 5 : 6;
  return (
    <Theme theme={portfolioMatchaTheme} mode="dark">
      <AppShell height="auto" variant="surface" contentPadding={0} topNav={<SiteNav />} mobileNav={{ breakpoint: 'sm' }}>
        <Layout height="auto" contentWidth={1320} padding={layoutPadding} footer={<Footer />}>
          <Hero />

          <Section
            id="projects"
            aria-labelledby="projects-heading"
            paddingBlock={8}
            paddingInline={4}
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

          <Section
            id="skills"
            aria-labelledby="skills-heading"
            paddingBlock={8}
            paddingInline={4}
            dividers={['top']}
          >
            <VStack gap={8}>
              <SectionHeader id="skills-heading" title="Technical Skills" />
              <Grid columns={isLaptop || isTablet ? 2 : 1} gap={8} align="start">
                {skillGroups.map((group) => (
                  <SkillGroup key={group.title} {...group} />
                ))}
              </Grid>
            </VStack>
          </Section>

          <Experience />
          <Education />
          <Certifications />
          <Contact />
        </Layout>
      </AppShell>
    </Theme>
  );
}
