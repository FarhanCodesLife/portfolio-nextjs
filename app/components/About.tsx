'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCode, FaServer, FaMobile, FaDatabase } from 'react-icons/fa';
import aboutimage from '../asset/IMG_20240907_181510_938~3.jpg'
const About = () => {
    const skills = [
        { name: 'Frontend Development', icon: <FaCode />, level: 95 },
        { name: 'Backend Development', icon: <FaServer />, level: 60 },
        { name: 'Mobile Development', icon: <FaMobile />, level: 85 },
        { name: 'Database Management', icon: <FaDatabase />, level: 70 },
    ];

    return (
        <section id="about" className="py-20 bg-darker">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        About <span className="text-[#fe9800]">Me</span>
                    </h2>
                    <h3 className="text-2xl text-gray-400 mb-8">
                        Frontend Developer
                    </h3>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative "
                    >
                        <div className="relative d rounded-2xl shadow-[0_0_15px_rgba(254,152,0,0.5)] overflow-hidden w-full max-w-[350px] h-[400px] mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#fe9800]/20 to-transparent animate-gradient"></div>
                            <div className="absolute inset-0   rounded-2xl animate-pulse"></div>
                            <div className="absolute inset-[3px] rounded-2xl overflow-hidden">
                                <div className="absolute p-10 sj inset-0 bg-gradient-to-r from-[#fe9800]/10 via-transparent to-[#fe9800]/30 animate-shine"></div>
                                <Image
                                    src={aboutimage}
                                    alt="About Me"
                                    fill
                                    className="object-cover p-2 rounded-2xl relative z-10"
                                />
                            </div>
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#fe9800] to-[#fe9800]/50 blur-xl opacity-30 animate-pulse"></div>
                        </div>

                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <p className="text-gray-300 leading-relaxed">
                            Im Muhammad Farhan, a creative Frontend Developer with a passion for building responsive, user-focused web applications. Currently exploring the exciting worlds of Metaverse and AI, I combine modern web technologies like React and Next.js with innovative solutions to craft seamless digital experiences. Lets shape the future together!
                        </p>

                        {/* Skills */}
                        <div className="space-y-4">
                            {skills.map((skill, index) => (
                                <div key={skill.name} className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-gray-300">
                                            <span className="text-[#fe9800]">{skill.icon}</span>
                                            {skill.name}
                                        </div>
                                        <span className="text-[#fe9800]">{skill.level}%</span>
                                    </div>
                                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: index * 0.1 }}
                                            className="h-full bg-[#fe9800] rounded-full"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Skills Section for Frontend Development
                        <div className="space-y-4">
                            <h4 className="text-xl font-bold text-gray-300">Frontend Development Skills</h4>
                            <ul className="list-disc list-inside text-gray-300">
                                <li>HTML & CSS</li>
                                <li>JavaScript (ES6+)</li>
                                <li>React.js</li>
                                <li>Next.js</li>
                                <li>Responsive Design</li>
                                <li>Version Control (Git)</li>
                            </ul>
                        </div> */}

                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                backgroundImage: "linear-gradient(to right, #fe9800 50%, transparent 50%)",
                                backgroundSize: "200% 100%",
                                backgroundPosition: "right bottom"
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{
                                duration: 0.3,
                                backgroundPosition: {
                                    duration: 0.3,
                                    ease: "easeOut"
                                }
                            }}
                            className="relative bg-transparent border-2 border-[#fe9800] text-[#fe9800]
                                px-8 py-3 rounded-full hover:text-white overflow-hidden
                                transition-colors duration-300 shadow-[0_0_15px_rgba(254,152,0,0.5)]
                                before:content-[''] before:absolute before:top-0 before:left-0 
                                before:w-0 before:h-full before:bg-[#fe9800] before:transition-all
                                before:duration-300 hover:before:w-full before:-z-10"
                        >
                            Read More
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About; 