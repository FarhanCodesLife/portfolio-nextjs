'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import { useSession } from "next-auth/react";

// Define project type
interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
}

// Sample projects data
const projectsData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    category: "Web Development",
    image: "/projects/ecommerce.jpg", // Add your image path
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/yourusername/project"
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "React Native mobile banking application",
    category: "Mobile Development",
    image: "/projects/banking.jpg",
    technologies: ["React Native", "Redux", "Firebase"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/yourusername/project"
  },
  // Add more projects as needed
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { data: session } = useSession();
  
  // Get unique categories
  const categories = ['All', ...Array.from(new Set(projectsData.map(project => project.category)))];
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#fe9800] text-white'
                  : ' bg-darker hover:border-primary border border-[#fe9800]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-10px] hover:rotate-2 transform-gpu"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-900 border border-[#fe9800] rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative px-4 py-2 border-2 border-[#fe9800] text-black font-medium rounded-full hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-[#fe9800]/30 transform hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-95 hover:bg-blue hover:border-[#00f2fe] animate-pulse hover:animate-none flex items-center gap-2"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                        Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative px-4 py-2 border-2 border-[#fe9800] text-black font-medium rounded-full hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-[#fe9800]/30 transform hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-95 hover:bg-blue hover:border-[#00f2fe] animate-pulse hover:animate-none flex items-center gap-2"
                      >
                        <FaGithub className="text-sm" />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
      <div className="flex gap-4 justify-center mt-12">
        {session ? (
          <Link 
            href="/add-project"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Add New Project
          </Link>
        ) : (
          <Link 
            href="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Login to Add Project
          </Link>
        )}
      </div>
    </section>
  );
};

export default Projects; 