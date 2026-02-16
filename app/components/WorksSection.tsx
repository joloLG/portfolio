'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function WorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sampleWorks = [
    {
      id: 1,
      title: 'MDRRMO Emergency System',
      description: 'Hybrid Mobile and Web Application for Emergency Response built with GeoTracking and GeoMapping capabilities',
      url: 'https://mdrrmo-system.vercel.app',
    },
    {
      id: 2,
      title: 'Arkie Gas Management',
      description: 'Web Application for efficient Tracking of Sales and Inventory management',
      url: 'https://arkie-gas.vercel.app',
    },
    {
      id: 3,
      title: 'JoloRide Delivery System',
      description: 'Hybrid Mobile and Web Application for Online Shopping with real-time Geolocation Tracking of Orders and Riders',
      url: 'https://joloride.vercel.app',
    },
    {
      id: 4,
      title: 'WeCare Appointment System',
      description: 'Web Application for sending Appointments with SMS and Email Notification Updates',
      url: 'https://wecarewebapp.vercel.app/auth/login',
    },
    {
      id: 5,
      title: 'SorSU DocuReq System',
      description: 'Web Application for Document Requests with AES Algorithm encryption for secure document handling',
      url: 'https://sorsu-docureq.vercel.app',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  };

  return (
    <section id="works" className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div 
          variants={cardVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Works
          </h2>
          <motion.div 
            className="w-24 h-1 bg-blue-600 mx-auto mb-4"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore my portfolio of completed projects and applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleWorks.map((work) => (
            <motion.div
              key={work.id}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
            >
              <motion.div 
                className="h-64 bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-black/10"
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.svg
                  className="w-24 h-24 text-white/80 group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </motion.svg>
              </motion.div>
              
              <div className="p-6">
                <motion.h3 
                  className="text-xl font-bold text-gray-900 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {work.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {work.description}
                </motion.p>
                <motion.a
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group/link"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  View Project
                  <motion.svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ x: 5 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </motion.svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
