import { useState, useEffect } from 'react';
import { Menu, X, Github, Mail, Code2, Database, Palette, Rocket, Zap, Globe, Facebook, Layers } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const skills = [
    { icon: Code2, name: 'Frontend Development', description: 'React, TypeScript, Tailwind' },
    { icon: Database, name: 'Backend Development', description: 'Node.js, APIs, Databases' },
    { icon: Palette, name: 'UI/UX Design', description: 'Figma, Responsive Design' },
    { icon: Rocket, name: 'Performance', description: 'Optimization, Best Practices' },
    { icon: Zap, name: 'Modern Tools', description: 'Vite, Git, CI/CD' },
    { icon: Globe, name: 'Web Technologies', description: 'HTML5, CSS3, JavaScript' },
  ];

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white font-['Inter',sans-serif]">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#1A1A1A]/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="w-[90px] md:w-[120px] h-12 md:h-16 flex items-center">
              <span className="text-lg md:text-xl font-semibold tracking-wide">Vin Ferrer</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm hover:text-[#7B1E3A] transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-sm hover:text-[#7B1E3A] transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-sm hover:text-[#7B1E3A] transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2 bg-[#7B1E3A] rounded-full hover:bg-[#8B2E4A] transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#1A1A1A]/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left py-2 hover:text-[#7B1E3A] transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="block w-full text-left py-2 hover:text-[#7B1E3A] transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left py-2 hover:text-[#7B1E3A] transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left py-2 px-6 bg-[#7B1E3A] rounded-full hover:bg-[#8B2E4A] transition-colors text-center"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#7B1E3A] rounded-full blur-[150px] md:blur-[200px] opacity-20"></div>
        </div>

        <div className="relative max-w-[1440px] mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Full-Stack Developer
            <br />
            <span className="text-[#7B1E3A]">Crafting Digital Excellence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl text-gray-400 mb-8 max-w-2xl mx-auto px-4"
          >
            Building modern, responsive, and user-focused web applications with cutting-edge
            technologies and innovative solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="w-full md:w-auto px-8 py-4 bg-[#7B1E3A] rounded-[20px] hover:bg-[#8B2E4A] transition-all hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full md:w-auto px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-[20px] hover:bg-white/10 transition-all hover:scale-105"
            >
              Get In Touch
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-[#1A1A1A]">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
              About Me
            </h2>

            <div className="max-w-3xl mx-auto">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[20px] p-6 md:p-8">
                <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
                  I'm a passionate full-stack developer with expertise in creating seamless digital
                  experiences. My focus is on writing clean, efficient code and building applications
                  that make a real impact.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-[#222222] rounded-[20px] hover:bg-[#2A2A2A] transition-colors group">
                    <div className="w-12 h-12 flex items-center justify-center bg-[#7B1E3A]/20 rounded-full group-hover:bg-[#7B1E3A]/30 transition-colors">
                      <Github className="text-[#7B1E3A]" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">GitHub</p>
                      <a
                        href="https://github.com/xconmik?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#7B1E3A] transition-colors"
                      >
                        github.com/xconmik
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-[#222222] rounded-[20px] hover:bg-[#2A2A2A] transition-colors group">
                    <div className="w-12 h-12 flex items-center justify-center bg-[#7B1E3A]/20 rounded-full group-hover:bg-[#7B1E3A]/30 transition-colors">
                      <Layers className="text-[#7B1E3A]" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Behance</p>
                      <a
                        href="https://www.behance.net/vinferrer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#7B1E3A] transition-colors"
                      >
                        behance.net/vinferrer
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-[#0D0D0D]">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
              Skills & Expertise
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-[20px] p-6 hover:border-[#7B1E3A]/50 transition-all"
                >
                  <div className="absolute inset-0 bg-[#7B1E3A]/0 group-hover:bg-[#7B1E3A]/10 rounded-[20px] transition-all blur-xl"></div>

                  <div className="relative">
                    <div className="w-16 h-16 flex items-center justify-center bg-[#7B1E3A]/20 rounded-[20px] mb-4 group-hover:bg-[#7B1E3A]/30 transition-colors">
                      <skill.icon className="text-[#7B1E3A]" size={28} />
                    </div>

                    <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                    <p className="text-sm text-gray-400">{skill.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Project */}
      <section id="projects" className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-[#1A1A1A]">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
              Featured Project
            </h2>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[20px] overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Project Info */}
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Modern Dashboard Platform
                  </h3>
                  <p className="text-gray-400 mb-8">
                    A comprehensive analytics dashboard with real-time data visualization, user
                    management, and advanced reporting features.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 flex items-center justify-center bg-[#7B1E3A] rounded-full mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Real-time Analytics</h4>
                        <p className="text-sm text-gray-400">
                          Live data updates with interactive charts and graphs
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 flex items-center justify-center bg-[#7B1E3A] rounded-full mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Responsive Design</h4>
                        <p className="text-sm text-gray-400">
                          Fully optimized for desktop, tablet, and mobile devices
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 flex items-center justify-center bg-[#7B1E3A] rounded-full mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Advanced Security</h4>
                        <p className="text-sm text-gray-400">
                          Role-based access control and encrypted data storage
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-[#222222] rounded-full text-sm">React</span>
                    <span className="px-4 py-2 bg-[#222222] rounded-full text-sm">TypeScript</span>
                    <span className="px-4 py-2 bg-[#222222] rounded-full text-sm">Tailwind</span>
                    <span className="px-4 py-2 bg-[#222222] rounded-full text-sm">Node.js</span>
                  </div>
                </div>

                {/* Project Preview */}
                <div className="bg-[#222222] p-8 md:p-12 flex items-center justify-center">
                  <div className="w-full bg-[#0D0D0D] rounded-[20px] p-6 border border-white/10">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-6">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>

                      <div className="h-24 bg-gradient-to-r from-[#7B1E3A]/30 to-[#7B1E3A]/10 rounded-[20px] border border-[#7B1E3A]/30 p-4">
                        <div className="h-2 w-1/3 bg-[#7B1E3A] rounded mb-2"></div>
                        <div className="h-2 w-1/2 bg-white/20 rounded"></div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-20 bg-white/5 rounded-[20px] border border-white/10"></div>
                        <div className="h-20 bg-white/5 rounded-[20px] border border-white/10"></div>
                      </div>

                      <div className="h-32 bg-white/5 rounded-[20px] border border-white/10"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-[#0D0D0D]">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
              Let's Work Together
            </h2>
            <p className="text-base md:text-lg text-gray-400 mb-12 max-w-2xl mx-auto text-center">
              Have a project in mind? Let's collaborate and create something amazing together.
            </p>

            <div className="max-w-3xl mx-auto mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-[20px] hover:bg-white/10 transition-colors group">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#7B1E3A]/20 rounded-full group-hover:bg-[#7B1E3A]/30 transition-colors">
                    <Mail className="text-[#7B1E3A]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a
                      href="mailto:a6mist@gmail.com"
                      className="text-white hover:text-[#7B1E3A] transition-colors"
                    >
                      a6mist@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-[20px] hover:bg-white/10 transition-colors group">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#7B1E3A]/20 rounded-full group-hover:bg-[#7B1E3A]/30 transition-colors">
                    <Facebook className="text-[#7B1E3A]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Facebook</p>
                    <a
                      href="https://facebook.com/vin0818"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#7B1E3A] transition-colors"
                    >
                      facebook.com/vin0818
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="mailto:a6mist@gmail.com"
                className="inline-block w-full md:w-auto px-12 py-4 bg-[#7B1E3A] rounded-[20px] hover:bg-[#8B2E4A] transition-all hover:scale-105 text-lg font-semibold"
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 lg:px-16 bg-[#1A1A1A] border-t border-white/10">
        <div className="max-w-[1440px] mx-auto text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Developer Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}