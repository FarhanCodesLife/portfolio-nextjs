'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from 'react-icons/fa';
import download from '../asset/Untitled_design__4_-removebg.png'
const Home = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: '#' },
    { icon: <FaLinkedin />, url: '#' },
    { icon: <FaTwitter />, url: '#' },
    { icon: <FaDribbble />, url: '#' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-darker">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-lg mb-4 text-white">Hello, It's Me</h2>
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
            John Kendric
          </h1>
          <h2 className="text-2xl text-white  md:text-3xl mb-6">
            And I'm a <span className="text-[#00f2fe]">Frontend Developer</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, ab dolorem 
            repellat necessitatibus ipsum perspiciatis.
          </p>
          
          <div className="flex gap-6 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                className="text-2xl text-gray-400 hover:text-[#00f2fe] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-[#00f2fe] text-[#00f2fe] px-8 py-3 rounded-full
              hover:bg-[#00f2fe] hover:text-white transition-all duration-300
              shadow-[0_0_15px_rgba(0,242,254,0.5)]"
          >
            Download CV
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto">
            <div className="absolute inset-0 hexagon-shape">
              <Image
                src={download}
                alt="Profile"
                fill
                className="object-cover hexagon-glow"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home; 