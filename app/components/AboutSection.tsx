'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-white py-20">
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <motion.div 
            className="w-24 h-1 bg-blue-600 mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl"
                animate={{
                  boxShadow: [
                    "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    "0 25px 50px -12px rgba(59, 130, 246, 0.5)",
                    "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.svg 
                  className="w-32 h-32 md:w-40 md:h-40 text-white" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </motion.svg>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.p 
              className="text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Hello! I&apos;m a dedicated web developer with a passion for creating beautiful, 
              functional, and user-friendly websites and applications. With expertise in 
              modern web technologies, I bring ideas to life through clean code and 
              innovative solutions.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              I specialize in building responsive, performant web applications that deliver 
              exceptional user experiences across all devices. My goal is to help businesses 
              and individuals establish a strong online presence.
            </motion.p>
            <motion.div 
              className="grid grid-cols-2 gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <motion.div 
                className="text-center p-4 bg-blue-50 rounded-lg"
                whileHover={{ scale: 1.05, backgroundColor: 'rgb(239 246 255)' }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="text-3xl font-bold text-blue-600 mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                >
                  5+
                </motion.div>
                <div className="text-gray-600">Projects Completed</div>
              </motion.div>
              <motion.div 
                className="text-center p-4 bg-blue-50 rounded-lg"
                whileHover={{ scale: 1.05, backgroundColor: 'rgb(239 246 255)' }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="text-3xl font-bold text-blue-600 mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                >
                  100%
                </motion.div>
                <div className="text-gray-600">Client Satisfaction</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
