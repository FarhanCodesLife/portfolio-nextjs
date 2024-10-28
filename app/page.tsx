'use client'

import Image from 'next/image'
import React from 'react'
import HeroSectionImage from './asset/download.png'
import heroSectionImage from './asset/Untitled_design__4_-removebg.png'
import { FaAddressBook, FaLinkedin, FaTwitter, FaFacebook, FaGithub } from 'react-icons/fa';
import { GrResume } from 'react-icons/gr';
import { MdContactPhone, MdOutlineEmail } from "react-icons/md";

import { motion } from 'framer-motion';

const Page = () => {
{/* <li>
                            <Link href="projects" className="block text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ba69c5] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">

                                Projects

                            </Link>
                        </li> */}

  function ClickHere() {
    window.open("https://api.whatsapp.com/send/?phone=923182127256&text=Hello%21+I%27m+Hello&type=phone_number&app_absent=0", "_blank");
  }
  function sendEmail() {
    window.location.href = "mailto:farhansmit0318@gmail.com?subject=Hello&body=I%20would%20like%20to%20talk%20about...";
  }

  return (
    <React.Fragment>
      {/* Hero Section with improved background and gradient overlay */}
      <div 
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
        className='min-h-screen'
      >
        <div id='home' className="h-[100vh] flex flex-col md:flex-row items-center justify-center px-8 lg:px-16">
          {/* Text Section with improved typography and animations */}
          <motion.div
            className="flex flex-col items-center md:items-start text-center md:text-left mb-6 md:mb-0 md:mr-8 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="text-sm md:text-base text-[#ba69c5] font-medium tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              WELCOME TO MY PORTFOLIO
            </motion.span>
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Hi, I'm <span className="text-[#ba69c5]">Muhammad Farhan</span>
            </motion.h1>
            <motion.h2
              className="text-xl md:text-3xl font-medium text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Frontend Developer & UI/UX Enthusiast
            </motion.h2>
            <motion.p
              className="text-gray-400 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Specializing in building exceptional digital experiences with modern web technologies.
            </motion.p>
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <button onClick={sendEmail} className="px-6 py-3 bg-[#ba69c5] text-white rounded-full hover:bg-[#a758b4] transition-all">
                Contact Me
              </button>
              <a href="#projects" className="px-6 py-3 border border-[#ba69c5] text-[#ba69c5] rounded-full hover:bg-[#ba69c5] hover:text-white transition-all">
                View Work
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image with improved styling */}
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#ba69c5] to-[#9c27b0] rounded-full animate-pulse" style={{ filter: 'blur(15px)', opacity: 0.3 }} />
            <Image
              src={HeroSectionImage}
              alt="Muhammad Farhan"
              width={300}
              height={300}
              className="rounded-full object-cover border-4 border-[#ba69c5] p-1"
            />
          </motion.div>
        </div>
      </div>

      {/* About Section with improved layout */}
      <div className="py-20 bg-gray-900">
        <div className="container mx-auto px-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About <span className="text-[#ba69c5]">Me</span>
          </motion.h2>
          
          {/* ... Rest of the about section with similar improvements ... */}
        </div>
      </div>

      {/* Skills section with modern cards */}
      <div className="py-20 bg-gray-800">
        <div className="container mx-auto px-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My <span className="text-[#ba69c5]">Skills</span>
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Skill cards with hover effects and animations */}
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-[#ba69c5] text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-white font-bold mb-2">{skill.name}</h3>
                <p className="text-gray-400 text-sm">{skill.level}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact section with improved layout and animations */}
      {/* ... Similar improvements for contact section ... */}

    </React.Fragment>
  )
}

// Add skills data
const skills = [
  { name: 'HTML5', icon: '🌐', level: 'Advanced' },
  { name: 'CSS3', icon: '🎨', level: 'Advanced' },
  { name: 'JavaScript', icon: '⚡', level: 'Advanced' },
  { name: 'TypeScript', icon: '📘', level: 'Intermediate' },
  { name: 'React.js', icon: '⚛️', level: 'Advanced' },
  { name: 'Next.js', icon: '🔲', level: 'Intermediate' },
  { name: 'Firebase', icon: '🔥', level: 'Intermediate' },
  { name: 'Tailwind CSS', icon: '🎯', level: 'Advanced' },
]

export default Page
