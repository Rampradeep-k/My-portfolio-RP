"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'all' | 'backend' | 'frontend' | 'database' | 'tools'>('all');
  const menuRef = useRef<HTMLDivElement>(null);

  // Tech icons data with categories (text only - no icons)
  const techIcons = [
    { name: "Node.js", category: "backend" },
    { name: "Express.js", category: "backend" },
    { name: "Python", category: "backend" },
    { name: "PostgreSQL", category: "database" },
    { name: "MySQL", category: "database" },
    { name: "MongoDB", category: "database" },
    { name: "Redis", category: "database" },
    { name: "React", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "Bootstrap", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "HTML", category: "frontend" },
    { name: "AWS", category: "tools" },
    { name: "Docker", category: "tools" },
    { name: "Kubernetes", category: "tools" },
    { name: "GraphQL", category: "tools" },
    { name: "REST API", category: "tools" },
    { name: "Postman", category: "tools" },
    { name: "GitLab", category: "tools" },
    { name: "Windows", category: "tools" },
  ];

  // Filter tech icons based on active filter
  const filteredTechIcons = techIcons.filter(tech => 
    activeFilter === 'all' || tech.category === activeFilter
  );

  // Featured projects - brief overview
  const featuredProjects = [
    {
      id: 'ecommerce-api',
      title: 'E-commerce API',
      description: 'Scalable REST API for e-commerce platform',
      tech: ['Node.js', 'PostgreSQL', 'Redis'],
      results: '40% faster query performance'
    },
    {
      id: 'task-management',
      title: 'Task Management System',
      description: 'Real-time collaboration platform',
      tech: ['React', 'WebSocket', 'MongoDB'],
      results: 'Improved team productivity by 30%'
    },
    {
      id: 'analytics-dashboard',
      title: 'Analytics Dashboard',
      description: 'Real-time data processing & visualization',
      tech: ['Python', 'FastAPI', 'Chart.js'],
      results: 'Reduced data latency by 60%'
    }
  ];

  const handleDownloadResume = () => {
    setIsDownloading(true);
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Rampradeep_K_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setIsDownloading(false), 2000);
  };

  const handleFilterChange = (filter: 'all' | 'backend' | 'frontend' | 'database' | 'tools') => {
    setActiveFilter(filter);
    setIsMenuOpen(false);
    
    // Scroll to skills section
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Menu Toggle */}
      <section id="hero" className="bg-gradient-to-r from-gray-900 to-black text-white py-20 relative">
        {/* Menu Toggle Button - Top Right */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="fixed top-6 right-6 z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-3 hover:bg-white/20 transition-all duration-300"
        >
          {isMenuOpen ? (
            <span className="text-xl">✕</span>
          ) : (
            <span className="text-xl">☰</span>
          )}
        </button>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div ref={menuRef} className="fixed top-20 right-6 z-50 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 p-6 min-w-72">
            <div className="space-y-4">
              {/* Skills Filter Categories */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Skills Filter</h3>
                <div className="space-y-1">
                  <button 
                    onClick={() => handleFilterChange('backend')}
                    className="block w-full text-left text-gray-800 hover:text-blue-600 transition duration-300 py-1"
                  >
                    Backend Technologies
                  </button>
                  <button 
                    onClick={() => handleFilterChange('frontend')}
                    className="block w-full text-left text-gray-800 hover:text-blue-600 transition duration-300 py-1"
                  >
                    Frontend Technologies
                  </button>
                  <button 
                    onClick={() => handleFilterChange('database')}
                    className="block w-full text-left text-gray-800 hover:text-blue-600 transition duration-300 py-1"
                  >
                    Databases
                  </button>
                  <button 
                    onClick={() => handleFilterChange('tools')}
                    className="block w-full text-left text-gray-800 hover:text-blue-600 transition duration-300 py-1"
                  >
                    Tools & Others
                  </button>
                  <button 
                    onClick={() => handleFilterChange('all')}
                    className="block w-full text-left text-gray-800 hover:text-blue-600 transition duration-300 py-1"
                  >
                    All Technologies
                  </button>
                </div>
              </div>

              {/* Quick Skills Overview */}
           

              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Work</h3>
                <div className="space-y-1">
                  <a href="#projects" onClick={() => setIsMenuOpen(false)} className="block text-gray-800 hover:text-blue-600 transition duration-300 py-1">
                    Projects
                  </a>
                  <a href="#experience" onClick={() => setIsMenuOpen(false)} className="block text-gray-800 hover:text-blue-600 transition duration-300 py-1">
                    Experience
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Connect</h3>
                <div className="space-y-1">
                  <a 
                    href="https://github.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 text-gray-800 hover:text-gray-900 transition duration-300 py-1"
                  >
                    <span>📂</span>
                    GitHub
                  </a>
                  <a 
                    href="https://linkedin.com/in/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 text-gray-800 hover:text-blue-700 transition duration-300 py-1"
                  >
                    <span>💼</span>
                    LinkedIn
                  </a>
                  <a 
                    href="mailto:benjian1@gmail.com"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 text-gray-800 hover:text-red-600 transition duration-300 py-1"
                  >
                    <span>📧</span>
                    Gmail
                  </a>
                </div>
              </div>

              {/* Resume Download */}
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={() => {
                    handleDownloadResume();
                    setIsMenuOpen(false);
                  }}
                  disabled={isDownloading}
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isDownloading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Downloading...
                    </>
                  ) : (
                    <>
                      <span>📄</span>
                      Download Resume
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Hero Content */}
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <h1 className="text-4xl sm:text-5xl font-bold">Hey There, I'm Rampradeep K</h1>
              </div>
              <p className="text-xl text-gray-300 mb-4">Backend Developer & API Specialist</p>
              <p className="text-lg text-gray-400 mb-6 max-w-2xl">
                I build scalable backend systems, RESTful APIs, and efficient database architectures
                that power modern web applications.
              </p>
              <div className="flex gap-4">
                <a href="#projects" className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300">
                  View My Work
                </a>
                <a href="#contact" className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition duration-300">
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects - Brief Overview */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Here are some of my recent backend development projects. Click on any project to see the full case study.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 cursor-pointer"
                onClick={() => window.location.href = `/projects/${project.id}`}
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="text-sm text-green-600 font-semibold">
                    🎯 {project.results}
                  </div>

                  <div className="mt-4 text-blue-600 font-semibold flex items-center gap-2">
                    View Case Study →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section with Filter */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Technical Skills</h2>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-5 py-2 rounded-full font-semibold transition duration-300 ${
                activeFilter === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All Technologies
            </button>
            <button
              onClick={() => setActiveFilter('backend')}
              className={`px-5 py-2 rounded-full font-semibold transition duration-300 ${
                activeFilter === 'backend' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Backend
            </button>
            <button
              onClick={() => setActiveFilter('frontend')}
              className={`px-5 py-2 rounded-full font-semibold transition duration-300 ${
                activeFilter === 'frontend' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setActiveFilter('database')}
              className={`px-5 py-2 rounded-full font-semibold transition duration-300 ${
                activeFilter === 'database' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Databases
            </button>
            <button
              onClick={() => setActiveFilter('tools')}
              className={`px-5 py-2 rounded-full font-semibold transition duration-300 ${
                activeFilter === 'tools' 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Tools & Others
            </button>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {filteredTechIcons.map((tech, index) => (
              <div
                key={index}
                className="group flex flex-col items-center p-6 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50 transition-all duration-300 transform hover:-translate-y-2 shadow-sm hover:shadow-xl border border-gray-100 hover:border-gray-200"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tech.name.charAt(0)}
                </div>
                <span className="text-sm font-semibold text-gray-800 text-center group-hover:text-gray-900 transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredTechIcons.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No skills found for this filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Work Experience - Brief */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Work Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Backend Developer</h3>
                  <p className="text-lg text-blue-600">Tech Solutions Inc.</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mt-2 sm:mt-0">2023 - Present</span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Developed scalable microservices architecture and RESTful APIs serving 10,000+ daily users. 
                Implemented database optimization strategies that improved query performance by 40% and 
                reduced server response time by 60%.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Full Stack Developer</h3>
                  <p className="text-lg text-green-600">Startup Ventures</p>
                </div>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mt-2 sm:mt-0">2022 - 2023</span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Built end-to-end web applications using React and Node.js. Designed and implemented 
                database schemas, optimized backend performance, and deployed applications on AWS cloud infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your project and how I can help bring your ideas to life with robust backend solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:benjian1@gmail.com"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition duration-300 inline-block"
            >
              Send me an Email
            </a>
            <button
              onClick={handleDownloadResume}
              disabled={isDownloading}
              className="border border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition duration-300 inline-block disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isDownloading ? 'Downloading...' : 'Download Resume'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}