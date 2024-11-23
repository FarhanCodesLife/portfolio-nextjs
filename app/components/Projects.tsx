'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import { useSession } from "next-auth/react";

import image1 from "@/app/asset/meme.png"
import image2 from "@/app/asset/shoes.png"
import image3 from "@/app/asset/whether.png"
import image4 from "@/app/asset/resume.png"
import image5 from "@/app/asset/coffee.png"
import image6 from "@/app/asset/blog.jpeg"
import image7 from "@/app/asset/todo.png"
import image8 from "@/app/asset/quiz.png"
import image9 from "@/app/asset/buy and sell.png"
import image10 from "@/app/asset/expance.png"
import image11 from "@/app/asset/snp.png"


// import image2 from "@/app/asset/images.jpeg"

// Define project type
interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: any;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
}

// Sample projects data
const projectsData: Project[] = [
  {
    id: 1,
    title: "Meme Create App",
    description: "A fun meme creation app with an API integration for meme templates.",
    category: "Web Application",
    image: image1, // Replace with the actual image pth
    technologies: ["React", "API Integration", "CSS"],
    liveLink: "https://meme-create-app-pp7l.vercel.app/", // Add live link if available
    githubLink: "https://github.com/FarhanCodesLife/Meme-Create-App",
  },
  {
    id: 2,
    title: "Boss Shoes E-Commerce Platform",
    description: "An e-commerce platform for shoe shopping built with Next.js.",
    category: "E-Commerce",
    image: image2, // Replace with the actual image pth
    technologies: ["Next.js", "Tailwind CSS", "Firebase"],
    liveLink: "https://boss-shoes-nextjs-62ri.vercel.app/", // Add live link if available
    githubLink: "https://github.com/FarhanCodesLife/Boss-Shoes-nextjs",
  },
  {
    id: 3,
    title: "Weather App",
    description: "A React-based weather forecasting app using a weather API.",
    category: "Web Application",
    image: image3, // Replace with the actual image pth
    technologies: ["React", "API Integration", "Bootstrap"],
    liveLink: "https://wheather-app-react-topaz.vercel.app/", // Add live link if available
    githubLink: "https://github.com/FarhanCodesLife/wheather-app-react",
  },
  {
    id: 4,
    title: "Resume Builder App",
    description: "An interactive resume builder with Firebase backend.",
    category: "Web Application",
    image: image4, // Replace with the actual image pth
    technologies: ["Next.js", "Firebase", "Material UI"],
    liveLink: "https://resumes-build.vercel.app/", // Add live link if available
    githubLink: "https://github.com/FarhanCodesLife/Resume-build",
  },
  {
    id: 5,
    title: "Coffee Shop Website",
    description: "A responsive website for a coffee shop with elegant design.",
    category: "Web Development",
    image: image5, // Replace with the actual image pth
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://coffee-shop-delta-five.vercel.app/", // Add live link if available
    githubLink: "https://github.com/FarhanCodesLife/coffee-shop",
  },
  {
    id: 6,
    title: "Blogging App",
    description: "A blogging platform with post creation and commenting features.",
    category: "Web Application",
    image: image6, // Replace with the actual image pth
    technologies: ["React", "Node.js", "MongoDB"],
    liveLink: "https://bloging-app-by-farhan.web.app/", // Add live link if available
    githubLink: "https://github.com/FarhanCodesLife/Bloging-App-",
  },
  {
    id: 7,
    title: "To-Do App",
    description: "A simple to-do list application built with React.",
    category: "Web Application",
    image: image7, // Replace with the actual image pth
    technologies: ["React", "CSS"],
    liveLink: "https://todo-app-by-farhan.web.app/", // Add live link if available
    githubLink: "https://github.com/FarhanCodesLife/todo-app-by-farhan",
  },
  {
    id: 8,
    title: "Quiz App",
    description: "An interactive quiz application for testing knowledge.",
    category: "Web Application",
    image: image8, // Replace with the actual image pth
    technologies: ["React", "Bootstrap"],
    liveLink: "https://farhancodeslife.github.io/quiz-app/", // Add live link if available
    githubLink: "https://github.com/FarhanCodesLife/quiz-app",
  },
  {
    id: 9,
    title: "Buy and Sell Corner",
    description: "A marketplace platform for buying and selling items.",
    category: "Web Application",
    image: image9, // Replace with the actual image pth
    technologies: ["React", "Node.js", "Firebase"],
    liveLink: "https://buy-and-sells-corner.web.app/", // Add live link if available
    githubLink: "https://github.com/FarhanCodesLife/buy-and-sell-cornner",
  },
  {
    id: 10,
    title: "Expenses Management Sheet",
    description: "A real-time expense management tool with Firebase.",
    category: "Web Application",
    image: image10, // Replace with the actual image pth
    technologies: ["React", "Firebase", "Chart.js"],
    liveLink: "https://expenses-management-sheet.web.app/",
    githubLink: "https://expenses-management-sheet.web.app/", // Add GitHub link if available
  },
  {
    id: 11,
    title: "SNP Responsive Website",
    description: "A fully responsive website built using modern web standards.",
    category: "Web Development",
    image: image11, // Replace with the actual image pth
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://farhancodeslife.github.io/snp-responsive/", // Add live link if available
    githubLink: "https://github.com/FarhanCodesLife/snp-responsive",
  },
  
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
                <div className="p-6 rounded bg-gradient-to-t from-yellow-800 to-yellow-400">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-100 mb-4">{project.description}</p>
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