'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCallback } from 'react';

// Animation variants
const animationVariants = {
  fadeIn: (direction: 'up' | 'down' | 'left' | 'right', delay: number) => ({
    hidden: {
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      scale: 0.8,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 1.8,
        delay: delay,
        bounce: 0.4,
      },
    },
  }),
  navAnimation: {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { 
      type: "spring",
      duration: 1.2,
      bounce: 0.3
    }
  },
  socialIconsContainer: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 1.5,
      },
    },
  },
  socialIcon: {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4
      }
    },
  }
};

// Consolidated data arrays
const navigationItems = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];
const socialLinks = [
  { name: 'facebook', url: 'https://facebook.com/yourprofile' },
  { name: 'twitter', url: 'https://twitter.com/yourprofile' },
  { name: 'instagram', url: 'https://instagram.com/yourprofile' },
  { name: 'linkedin', url: 'https://linkedin.com/in/yourprofile' }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1A1A1A] via-[#151515] to-[#0F0F0F] text-white overflow-hidden">
      {/* Navigation - Uncomment and update */}
      <motion.nav 
        initial="initial"
        animate="animate"
        variants={animationVariants.navAnimation}
        className="container mx-auto py-6 px-4"
      >
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-bold"
          >
            Portfolio<span className="text-[#00f2fe]">.</span>
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.1 + 0.5,
                  type: "spring",
                  bounce: 0.4
                }}
                whileHover={{ scale: 1.1 }}
              >
                <Link 
                  href={`/${item.toLowerCase()}`}
                  className={`${item === 'Home' ? 'text-[#00f2fe]' : 'hover:text-[#00f2fe] transition-colors duration-300'}`}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <motion.div
          variants={fadeInVariant
            ('right', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-10"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.6,
              type: "spring",
              bounce: 0.4
            }}
            className="text-lg mb-2 text-[#00f2fe] font-medium"
          >
            Hello, It's Me
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              delay: 0.8,
              type: "spring",
              bounce: 0.4
            }}
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200"
          >
            John Kendric
          </motion.h1>
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-xl mb-6"
          >
            And I'm a <span className="text-[#00f2fe] font-semibold">Frontend Developer</span>
          </motion.h3>
          
          {/* Social Icons with enhanced animations */}
          <motion.div 
            initial="hidden"
            animate="show"
            variants={animationVariants.socialIconsContainer}
            className="flex space-x-6 mb-10"
          >
            {socialLinks.map(({ name, url }) => (
              <motion.a
                key={name}
                href={url}
                variants={animationVariants.socialIcon}
                whileHover={{ 
                  scale: 1.2,
                  backgroundColor: '#00f2fe',
                  borderColor: '#00f2fe'
                }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full border-2 border-[#00f2fe] flex items-center justify-center
                         hover:bg-[#00f2fe] transition-all duration-300 shadow-lg shadow-[#00f2fe]/20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{name}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 20px rgba(0, 242, 254, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#00f2fe] text-gray-900 px-8 py-4 rounded-full 
                     hover:bg-[#00d8e0] transition-all duration-300 font-semibold
                     shadow-lg shadow-[#00f2fe]/30"
          >
            Download CV
          </motion.button>
        </motion.div>

        {/* Right Content - Profile Image with enhanced effects */}
        <motion.div
          variants={fadeInVariant('left', 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-[#00f2fe] blur-[100px]"
            />
            
            <div className="relative w-full h-full rounded-hexagon-wrapper">
              <motion.div 
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 1,
                  delay: 0.5,
                  type: "spring",
                  bounce: 0.4
                }}
                className="absolute inset-[3px] overflow-hidden rounded-hexagon-container"
              >
                <Image
                  src="/your-profile-image.jpg"
                  alt="Profile"
                  fill
                  className="object-cover scale-110"
                  priority
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute inset-0 rounded-hexagon-border"
              >
                <motion.div 
                  animate={{ 
                    boxShadow: [
                      '0 0 20px rgba(0, 242, 254, 0.3)',
                      '0 0 40px rgba(0, 242, 254, 0.5)',
                      '0 0 20px rgba(0, 242, 254, 0.3)'
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="absolute inset-0 rounded-hexagon-glow"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
} 