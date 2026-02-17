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
      gifSrc: '/gifs/mdrrmo-app.gif',
    },
    {
      id: 2,
      title: 'Arkie Gas Management',
      description: 'Web Application for efficient Tracking of Sales and Inventory management',
      url: 'https://arkie-gas.vercel.app',
      gifSrc: '/gifs/arkie-gas.gif',
    },
    {
      id: 3,
      title: 'JoloRide Delivery System',
      description: 'Hybrid Mobile and Web Application for Online Shopping with real-time Geolocation Tracking of Orders and Riders',
      url: 'https://joloride.vercel.app',
      gifSrc: '/gifs/joloride.gif',
    },
    {
      id: 4,
      title: 'WeCare Appointment System',
      description: 'Web Application for sending Appointments with SMS and Email Notification Updates',
      url: 'https://wecarewebapp.vercel.app/auth/login',
      gifSrc: null,
    }
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
    <section id="works" className="min-h-screen flex items-center justify-center bg-zinc-900 py-20">
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
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
            My Works
          </h2>
          <motion.div 
            className="w-24 h-1 bg-zinc-400 mx-auto mb-4"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Explore my portfolio of completed projects and applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleWorks.map((work) => (
            <motion.div
              key={work.id}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-zinc-950 rounded-xl border border-zinc-800 shadow-lg shadow-black/40 overflow-hidden group cursor-pointer"
            >
              <motion.div 
                className="h-64 bg-zinc-900 relative overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                {work.gifSrc ? (
                  <motion.img
                    src={work.gifSrc}
                    alt={`${work.title} GIF preview`}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.07 }}
                    transition={{ duration: 0.3 }}
                  />
                ) : (
                  <div className="h-full w-full bg-linear-to-br from-zinc-700 to-zinc-900 flex flex-col items-center justify-center gap-3">
                    <motion.svg
                      className="w-20 h-20 text-zinc-300 group-hover:scale-110 transition-transform duration-300"
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
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-300">Preview coming soon</p>
                  </div>
                )}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                <span className="absolute bottom-3 left-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-100">
                  {work.gifSrc ? 'GIF Preview' : 'No GIF Yet'}
                </span>
              </motion.div>
              
              <div className="p-6">
                <motion.h3 
                  className="text-xl font-bold text-zinc-100 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {work.title}
                </motion.h3>
                <motion.p 
                  className="text-zinc-400 mb-4"
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
                  className="inline-flex items-center text-zinc-200 hover:text-white font-medium group/link"
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
