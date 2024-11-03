'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCode, FaServer, FaMobile, FaDatabase } from 'react-icons/fa';
import aboutimage from '../asset/Untitled_design__4_-removebg.png'
const About = () => {
    const skills = [
        { name: 'Frontend Development', icon: <FaCode />, level: 90 },
        { name: 'Backend Development', icon: <FaServer />, level: 85 },
        { name: 'Mobile Development', icon: <FaMobile />, level: 80 },
        { name: 'Database Management', icon: <FaDatabase />, level: 85 },
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
                        About <span className="text-[#00f2fe]">Me</span>
                    </h2>
                    <h3 className="text-xl text-gray-400 mb-8">
                        Frontend Developer!
                    </h3>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative w-full max-w-[400px] h-[400px] mx-auto">
                            <div className="absolute inset-0 hexagon-shape neon-border">
                                <Image

                                    src={aboutimage}
                                    alt="About Me"
                                    fill
                                    className="object-cover"
                                />
                            </div>
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium 
                            dolores explicabo nulla voluptate vero, eveniet vel voluptatibus 
                            exercitationem ducimus rerum quos ratione minima veniam quo corporis 
                            laboriosam nam quasi necessitatibus.
                        </p>

                        {/* Skills */}
                        <div className="space-y-4">
                            {skills.map((skill, index) => (
                                <div key={skill.name} className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-gray-300">
                                            <span className="text-[#00f2fe]">{skill.icon}</span>
                                            {skill.name}
                                        </div>
                                        <span className="text-[#00f2fe]">{skill.level}%</span>
                                    </div>
                                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: index * 0.1 }}
                                            className="h-full bg-[#00f2fe] rounded-full"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-transparent border-2 border-[#00f2fe] text-[#00f2fe] 
                                px-8 py-3 rounded-full hover:bg-[#00f2fe] hover:text-white 
                                transition-all duration-300 shadow-[0_0_15px_rgba(0,242,254,0.5)]"
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