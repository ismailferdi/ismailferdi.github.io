import { Mail, Linkedin, Github, ExternalLink, GraduationCap, Award, Code2, BrainCircuit, Wrench, BookOpen, Phone, Send } from 'lucide-react';
import { motion } from 'motion/react';
import AnimatedBackground from './components/AnimatedBackground';

const SkillCard = ({ title, skills, icon: Icon }: { title: string, skills: string[], icon: any }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="glass-card p-6 flex flex-col gap-4"
  >
    <div className="flex items-center gap-3 mb-2">
      <div className="p-2 rounded-lg bg-accent/10 text-accent">
        <Icon size={20} />
      </div>
      <h3 className="text-lg font-bold tracking-tight">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span key={skill} className="pill-badge">
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const ProjectCard = ({ title, tags, description, github, demo }: { title: string, tags: string[], description: string, github?: string, demo?: string }) => (
  <motion.div 
    whileHover={{ scale: 1.01 }}
    className="glass-card p-8 group"
  >
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-widest text-white/40 font-bold">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">{title}</h3>
      <p className="text-white/60 leading-relaxed">
        {description}
      </p>
      <div className="flex gap-4 mt-2">
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors">
          <Github size={16} />
          GitHub Repo
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-bg-dark text-sm font-bold hover:bg-accent/90 transition-colors">
          <ExternalLink size={16} />
          Live Demo
        </button>
      </div>
    </div>
  </motion.div>
);

const ContactCard = ({ icon: Icon, label, value, href }: { icon: any, label: string, value: string, href: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.02 }}
    className="glass-card p-6 flex items-center gap-4 hover:border-accent/50 group"
  >
    <div className="p-3 rounded-xl bg-white/5 text-white/60 group-hover:text-accent group-hover:bg-accent/10 transition-all">
      <Icon size={24} />
    </div>
    <div>
      <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">{label}</p>
      <p className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">{value}</p>
    </div>
  </motion.a>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent/30 selection:text-accent">
      <AnimatedBackground />
      {/* Hero Section */}
      <header className="relative pt-24 pb-16 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 inline-block"
          >
            <div className="relative p-1 rounded-full bg-gradient-to-b from-accent to-transparent">
              <div className="rounded-full overflow-hidden w-32 h-32 border-4 border-bg-dark">
                <img 
                  src="/profile.jpg" 
                  alt="Ismail Ferdi" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 rounded-full shadow-[0_0_30px_rgba(0,245,255,0.3)] pointer-events-none" />
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-7xl font-black tracking-tighter mb-4"
          >
            ISMAIL FERDI
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/40 font-bold tracking-[0.3em] text-sm md:text-base mb-8"
          >
            AI ENGINEERING STUDENT
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center gap-4"
          >
            <a href="mailto:elfernago3hhhh@gmail.com" className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-accent/50 hover:text-accent transition-all">
              <Mail size={20} />
            </a>
            <a href="https://linkedin.com/in/ismail-ferdi" target="_blank" rel="noopener" className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-accent/50 hover:text-accent transition-all">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/IsmailFerdi" target="_blank" rel="noopener" className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-accent/50 hover:text-accent transition-all">
              <Github size={20} />
            </a>
            <a href="#" className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-accent/50 hover:text-accent transition-all">
              <Send size={20} />
            </a>
            <a href="#" className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-accent/50 hover:text-accent transition-all">
              <Phone size={20} />
            </a>
          </motion.div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-24 space-y-32">
        {/* About Section */}
        <section id="about" className="max-w-3xl">
          <h2 className="text-xs font-bold text-accent uppercase tracking-widest mb-6">About Me</h2>
          <div className="space-y-6 text-lg text-white/70 leading-relaxed">
            <p>
              I'm a <span className="text-accent font-semibold">4th-year AI Engineering student</span> at Université Djillali Liabès, Algeria, with a genuine passion for artificial intelligence and data science. I enjoy understanding how machines learn and finding ways to apply that knowledge to real problems.
            </p>
            <p>
              My studies cover a broad range of topics — from Machine Learning and Deep Learning to NLP, Computer Vision, and Big Data. Outside the classroom, I sharpen my skills through hands-on courses and certifications in AI engineering and data science.
            </p>
            <p className="text-white/90 font-medium">
              I'm currently <span className="text-accent">looking for internship opportunities</span> where I can apply what I've learned and gain real-world experience.
            </p>
          </div>
        </section>

        {/* Core Skills */}
        <section id="skills">
          <h2 className="text-xs font-bold text-accent uppercase tracking-widest mb-8">Core Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillCard 
              title="Programming & Data" 
              icon={Code2}
              skills={['Python', 'Mathematics', 'Statistics', 'Data Science']} 
            />
            <SkillCard 
              title="AI & ML" 
              icon={BrainCircuit}
              skills={['Machine Learning', 'Deep Learning', 'Computer Vision', 'Artificial Intelligence']} 
            />
            <SkillCard 
              title="AI Engineering Tools" 
              icon={Wrench}
              skills={['OpenAI API', 'Prompt Engineering', 'AI Agents', 'Vector Databases']} 
            />
            <SkillCard 
              title="Academic Coursework" 
              icon={BookOpen}
              skills={['NLP', 'Computer Vision', 'Generative AI', 'Big Data', 'Cybersecurity', 'Distributed Systems']} 
            />
          </div>
        </section>

        {/* Experience Banner */}
        <section id="experience">
          <div className="glass-card p-8 border-l-4 border-l-accent bg-accent/5">
            <h2 className="text-xs font-bold text-accent uppercase tracking-widest mb-4">Professional Experience</h2>
            <p className="text-xl text-white/80 font-medium">
              Currently focused on studies and certifications. Actively seeking a first internship or junior role in AI / Data Science.
            </p>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects">
          <h2 className="text-xs font-bold text-accent uppercase tracking-widest mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 gap-8">
            <ProjectCard 
              title="Project 1 - [Add Your Project Name]"
              tags={['Tech Stack', 'Python', 'AI Framework', 'Statistics', 'PyTorch']}
              description="Brief description of what the project does and what problem it solves. This project demonstrates core AI engineering principles and data processing capabilities."
            />
            <ProjectCard 
              title="Project 2 - [Add Your Project Name]"
              tags={['Tech Stack', 'Python', 'API Integration', 'Big Data', 'Datasets']}
              description="Brief description of what the project does and what problem it solves. Focused on integrating large-scale data with modern AI models."
            />
          </div>
        </section>

        {/* Education & Certifications */}
        <section id="education">
          <h2 className="text-xs font-bold text-accent uppercase tracking-widest mb-8">Education & Certifications</h2>
          <div className="space-y-12">
            <div>
              <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-4">Degree</p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="text-[10px] font-bold text-white/40 uppercase tracking-widest border-b border-white/10">
                      <th className="pb-4 font-bold">Degree</th>
                      <th className="pb-4 font-bold">Institution</th>
                      <th className="pb-4 font-bold">Period</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-white/5">
                      <td className="py-6 font-bold text-white/90">Computer Science - AI Specialization</td>
                      <td className="py-6 text-white/60">Université Djillali Liabès (2022-2027)</td>
                      <td className="py-6 text-white/40">Sep 2022 - Jul 2027</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-4">Certifications</p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="text-[10px] font-bold text-white/40 uppercase tracking-widest border-b border-white/10">
                      <th className="pb-4 font-bold">Certificate</th>
                      <th className="pb-4 font-bold">Issuer</th>
                      <th className="pb-4 font-bold">Date</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-white/5">
                      <td className="py-6 font-bold text-white/90">The AI Engineer Path</td>
                      <td className="py-6 text-white/60">Scrimba</td>
                      <td className="py-6 text-white/40">July 2025</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-6 font-bold text-white/90">The Data Science Course: Complete Bootcamp 2025</td>
                      <td className="py-6 text-white/60">Careers 365</td>
                      <td className="py-6 text-white/40">February 2025</td>
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
            <p className="text-white/60">I'm open to internships, collaborations, and interesting AI conversations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ContactCard 
              icon={Mail} 
              label="Email" 
              value="elfernago3hhhh@gmail.com" 
              href="mailto:elfernago3hhhh@gmail.com" 
            />
            <ContactCard 
              icon={Linkedin} 
              label="LinkedIn" 
              value="linkedin.com/in/ismail-ferdi" 
              href="https://linkedin.com/in/ismail-ferdi" 
            />
            <ContactCard 
              icon={Github} 
              label="GitHub" 
              value="github.com/IsmailFerdi" 
              href="https://github.com/IsmailFerdi" 
            />
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <p className="text-xs font-bold text-white/20 uppercase tracking-[0.3em]">
          &copy; {new Date().getFullYear()} ISMAIL FERDI &bull; BUILT WITH AI
        </p>
      </footer>
    </div>
  );
}
