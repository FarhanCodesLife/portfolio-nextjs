'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCallback } from 'react';
import profileImage from '../asset/home.gif';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

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
  { name: 'facebook', url: 'https://facebook.com/yourprofile', icon: FaFacebook },
  { name: 'twitter', url: 'https://twitter.com/yourprofile', icon: FaTwitter },
  { name: 'instagram', url: 'https://instagram.com/yourprofile', icon: FaInstagram },
  { name: 'linkedin', url: 'https://linkedin.com/in/yourprofile', icon: FaLinkedin }
];

export default function Home() {
  const fadeInVariant = useCallback((direction: 'up' | 'down' | 'left' | 'right', delay: number) => {
    return animationVariants.fadeIn(direction, delay);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#000000] via-[#1f1f1f] to-[#303030] text-white overflow-hidden">
      {/* Navigation - Uncomment and update */}
     
      {/* Hero Section */}
      <section className="container m-20 mx-auto px-4 py-20 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <motion.div
          variants={animationVariants.fadeIn('right', 0.3)}
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
            className="text-lg mb-2 text-[#fe9800] font-medium"
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
            Muhammad Farhan
          </motion.h1>

          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-xl mb-6"
          >
            And I'm a{" "}
            <motion.span
              className="text-[#fe9800] font-semibold inline-block"
              animate={{
                x: [0, 3, 0], // Move right then back
                y: [0, 1, 0], // Move up then back  
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                times: [0, 0.5, 1],
                delay: 1.5
              }}
            >
              Frontend Developer
            </motion.span>
          </motion.h3>
          
          {/* Social Icons with enhanced animations */}
          <motion.div 
            initial="hidden"
            animate="show"
            variants={animationVariants.socialIconsContainer}
            className="flex space-x-6 mb-10"
          >
            {socialLinks.map(({ name, url, icon: Icon }) => (
              <motion.a
                key={name}
                href={url}
                variants={animationVariants.socialIcon}
                whileHover={{ 
                  scale: 1.2,
                  backgroundColor: '#fe9800',
                  borderColor: '#fe9800'
                }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full border-2 border-[#fe9800] flex items-center justify-center
                         hover:bg-[#fe9800] transition-all duration-300 shadow-lg shadow-[#fe9800]/20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="w-5 h-5" />
                <span className="sr-only">{name}</span>
              </motion.a>
            ))}
          </motion.div>
          
          <motion.button
          
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              delay: 1.6,
              type: "spring",
              stiffness: 100,
              damping: 10
            }}
            whileHover={{ 
              scale: 1.05,
              x: 10,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
              }
            }}
            whileTap={{ 
              scale: 0.95,
              x: -5
            }}
            className="relative bg-[#fe9800] text-gray-900 px-8 py-4 rounded-full 
                     hover:bg-[#fe9800] transition-all duration-300 font-semibold
                     shadow-lg shadow-[#fe9800]/30 overflow-hidden
                     before:absolute before:top-0 before:left-0 before:w-full before:h-full
                     before:bg-white before:opacity-20 before:transform before:translate-x-[-100%]
                     hover:before:translate-x-[100%] before:transition-transform before:duration-500"
          >
           <a href="https://drive.google.com/file/d/1XDJNu2s1YS0fia1olcid5dnoLKjKwJfq/view">
            
              Download CV
            </a> 
          </motion.button>
        </motion.div>

        {/* Right Content - Profile Image with enhanced effects */}
        <motion.div
          variants={animationVariants.fadeIn('left', 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mt-10"
        >
          <div className="relative w-[300px]   h-[300px] md:w-[500px] md:h-[400px] mx-auto ">
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
              className="absolute inset-0 bg-[#fe9800] blur-[100px]"
            />
            
            <div className="relative w-full h-full rounded-hexaon-wrapper">
              <motion.div 
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 1,
                  delay: 0.5,
                  type: "spring",
                  bounce: 0.4
                }}
                className="absolute rounded-2xl inset-[3px] overflow-hidden rounded-hexgon-contain"
              >
                <Image
                  src={profileImage}
                  alt="Profile"
                  fill
                  className="object-fill bg-transparent rounded-2xl scale-"
                  priority
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bg-transparent  inset-0 rounded-exagon-border"
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
                  className="absolute rounded-2xl  inset-0 rounded-heagon-glow"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
} 