'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed w-full z-50 transition-all duration-300 ${
                scrolled ? 'py-4 bg-darker/95 backdrop-blur-sm' : 'py-6 bg-transparent'
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link 
                        href="/" 
                        className="text-2xl font-bold text-white"
                    >
                        Port<span className="text-[#fe9800]">folio.</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                className={`relative text-sm font-medium transition-colors duration-300 
                                    group ${
                                        activeLink === link.toLowerCase() 
                                            ? 'text-[#fe9800]' 
                                            : 'text-white hover:text-[#fe9800]'
                                    }`}
                                onClick={() => setActiveLink(link.toLowerCase())}
                            >
                                {link}
                                <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-[#fe9800] transform origin-left scale-x-0 
                                    transition-transform duration-300 group-hover:scale-x-100 ${
                                        activeLink === link.toLowerCase() ? 'scale-x-100' : ''
                                    }`}>
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white hover:text-[#fe9800] transition-colors"
                    >
                        <svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            {isOpen ? (
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M6 18L18 6M6 6l12 12" 
                                />
                            ) : (
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M4 6h16M4 12h16M4 18h16" 
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden mt-4 bg-darker/95 backdrop-blur-sm rounded-lg p-4"
                    >
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    className={`text-sm font-medium transition-colors duration-300 
                                        ${activeLink === link.toLowerCase() 
                                            ? 'text-[#fe9800]' 
                                            : 'text-white hover:text-[#fe9800]'
                                        }`}
                                    onClick={() => {
                                        setActiveLink(link.toLowerCase());
                                        setIsOpen(false);
                                    }}
                                >
                                    {link}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
};

export default Navbar;
