'use client'
import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaChartLine } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCode className="text-3xl" />,
      title: "Responsive Web Design",
      description: "Design and develop websites that look great on all devices (mobile, tablet, desktop)"
    },
    {
      icon: <FaPaintBrush className="text-3xl" />,
      title: "Custom UI/UX Development",
      description: "Develop intuitive and visually appealing interfaces"
    },
    {
      icon: <FaCode className="text-3xl" />,
      title: "Progressive Web Apps (PWAs)",
      description: "Create apps with offline functionality and app-like experience"
    }
  ];

  return (
    <section id="services" className="py-20 bg-darker">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-[#fe9800]">Services</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary p-6 rounded-lg hover:neon-border transition-all duration-300"
            >
              <div className="text-[#fe9800] mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 text-[#fe9800] hover:underline"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 