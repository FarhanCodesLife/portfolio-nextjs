'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'web', 'mobile', 'backend'];

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "web",
      image: "/projects/project1.jpg",
      description: "A full-stack e-commerce solution with payment integration",
      technologies: ["Next.js", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Mobile Banking App",
      category: "mobile",
      image: "/projects/project2.jpg",
      description: "Secure mobile banking application with real-time transactions",
      technologies: ["React Native", "Firebase"],
      link: "#"
    },
    // Add more projects as needed
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' ? true : project.category === activeFilter
  );

  return (
    <section id="projects" className="py-20 bg-secondary/5">
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

        <div className="flex justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full capitalize ${
                activeFilter === filter 
                  ? 'bg-primary text-white' 
                  : 'bg-secondary/10 hover:bg-secondary/20'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary/10 rounded-xl overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
              <div className="flex gap-2">
                {project.technologies.map(technology => (
                  <span key={technology} className="text-gray-400">{technology}</span>
                ))}
              </div>
              <a href={project.link} className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/80 transition-colors">View Project</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 