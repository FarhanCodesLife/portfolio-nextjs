'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion'; // For smooth animations

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <nav
        style={{ backgroundImage: `url('https://media.istockphoto.com/id/1452775956/vector/tech-background-big-data-concept-with-triangles-dark-modern-wallpaper-abstract-futuristic.jpg?s=612x612&w=0&k=20&c=tF_UYAdvZvNqytkzd6kY3SSQvHgjkvRMKDkBVAKg3q0=')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            
           }}
        className="bg-gradient-to-r border-b-2 border-[#ffffff] from-[#f0754f] via-[#1c1c20] to-[#6f39b6] shadow-lg dark:bg-gray-900 transition-all duration-500">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <h1 className='font-bold text-[1.7rem] text-white'>M-Farhan</h1>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                </motion.div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-[#6a00ff] focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-transform duration-300"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <motion.svg
                        className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-90' : 'rotate-0'}`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </motion.svg>
                </button>

                <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            className="transition-colors duration-300"
                        >
                            <Link href="#home" className="block text-white rounded hover:bg-transparent md:hover:text-[#ffccff] md:p-0 dark:text-white dark:hover:text-blue-400">

                                Home

                            </Link>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            className="transition-colors duration-300"
                        >
                            <Link href="/about" className="block text-white rounded hover:bg-transparent md:hover:text-[#ffccff] md:p-0 dark:text-white dark:hover:text-blue-400">

                                About

                            </Link>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            className="transition-colors duration-300"
                        >
                            <Link href="/contact" className="block text-white rounded hover:bg-transparent md:hover:text-[#ffccff] md:p-0 dark:text-white dark:hover:text-blue-400">

                                Contact

                            </Link>
                        </motion.li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
