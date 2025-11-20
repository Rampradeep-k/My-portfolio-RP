"use client";
import { notFound } from 'next/navigation';

// This would typically come from a database or CMS
const projectData = {
  'ecommerce-api': {
    title: 'E-commerce REST API',
    description: 'A scalable backend system for modern e-commerce platforms',
    fullDescription: `Built a complete e-commerce API supporting product catalog, user authentication, 
    payment processing, and order management. The system handles high traffic loads with efficient 
    database queries and caching strategies.`,
    problem: 'Existing e-commerce APIs were slow and couldn\'t scale during peak traffic.',
    solution: 'Implemented microservices architecture with Redis caching and optimized PostgreSQL queries.',
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'JWT', 'Stripe API'],
    results: [
      '40% faster query performance',
      'Handles 10,000+ concurrent users',
      '99.9% uptime',
      'Reduced server costs by 30%'
    ],
    images: ['/api-screenshot-1.jpg', '/api-screenshot-2.jpg'],
    liveUrl: 'https://api-demo.example.com',
    githubUrl: 'https://github.com/yourusername/ecommerce-api'
  },
  // Add other projects...
};

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projectData[params.id as keyof typeof projectData];
  
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <a href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
            ← Back to Portfolio
          </a>
          
          {/* Project Header */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
            <p className="text-xl text-gray-600 mb-6">{project.description}</p>
            
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" 
                   className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                   className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition duration-300">
                  View Code
                </a>
              )}
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Problem & Solution */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
                <p className="text-gray-700 mb-6">{project.problem}</p>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">My Solution</h2>
                <p className="text-gray-700">{project.solution}</p>
              </div>

              {/* Full Description */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Details</h2>
                <p className="text-gray-700 whitespace-pre-line">{project.fullDescription}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Tech Stack */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Results</h3>
                <ul className="space-y-2">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}