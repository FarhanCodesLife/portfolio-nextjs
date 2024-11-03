'use client'
import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaChartLine } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCode className="text-3xl" />,
      title: "Web Development",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolores"
    },
    {
      icon: <FaPaintBrush className="text-3xl" />,
      title: "Graphic Design",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolores"
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Digital Marketing",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolores"
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
            Our <span className="text-[#00f2fe]">Services</span>
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
              <div className="text-[#00f2fe] mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 text-[#00f2fe] hover:underline"
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