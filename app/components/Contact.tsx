'use client'
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <motion.div 
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-[#fe9800]/10 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  color: "#fe9800"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <FaEnvelope className="text-primary text-2xl" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-400 group-hover:text-[#fe9800]">farhansmit0318@gmail.com</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-[#fe9800]/10 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  color: "#fe9800"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <FaPhone className="text-primary text-2xl" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-400 group-hover:text-[#fe9800]">+92 318 212 7256</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-[#fe9800]/10 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  color: "#fe9800"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <FaMapMarkerAlt className="text-primary text-2xl" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-400 group-hover:text-[#fe9800]">Karachi Pakistan</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 text-darker">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="bg-secondary/10 text-black rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#fe9800]"
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="bg-secondary/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#fe9800]"
                  onChange={handleChange}
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full bg-secondary/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#fe9800]"
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={6}
                className="w-full bg-secondary/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#fe9800]"
                onChange={handleChange}
              ></textarea>
              <button
                type="submit"
                className="bg-[#fe9800]  hover:bg-[#fe9800]/90 text-white px-8 py-3 rounded-full "
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 