'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useSearchParams } from 'next/navigation';

const CONTACT_EMAIL = 'johnlloydgracilla2.0@gmail.com';
const MOBILE_NUMBER_DISPLAY = '+63 XXX XXX XXXX';
const MOBILE_NUMBER_LINK = 'tel:+63XXXXXXXXXX';

const SOCIAL_LINKS = [
  { name: 'Facebook', href: 'https://facebook.com/joloLG' },
  { name: 'Instagram', href: 'https://instagram.com/joloLG' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@joloLG' },
];

function buildPrefillMessage(plan: string, price: string) {
  const packageLabel = price ? `${plan} (${price})` : plan;

  return [
    `Hi John Lloyd,`,
    '',
    `I am interested in the ${packageLabel} package.`,
    '',
    'Project details:',
    '- ',
    '',
    'Thank you.',
  ].join('\n');
}

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const searchParams = useSearchParams();

  const [selectedPlan, setSelectedPlan] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const plan = searchParams.get('plan');
    const price = searchParams.get('price') ?? '';

    if (!plan) {
      return;
    }

    setSelectedPlan(plan);
    setSelectedPrice(price);

    setFormData((prev) => {
      if (prev.message.trim().length > 0) {
        return prev;
      }

      return {
        ...prev,
        message: buildPrefillMessage(plan, price),
      };
    });
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = selectedPlan
      ? `Portfolio Inquiry - ${selectedPlan}`
      : 'Portfolio Inquiry';

    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      selectedPlan
        ? `Selected Package: ${selectedPlan}${selectedPrice ? ` (${selectedPrice})` : ''}`
        : '',
      '',
      'Message:',
      formData.message,
    ]
      .filter(Boolean)
      .join('\n');

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;

    alert('Your email app is opening. Review the message and click send to complete.');

    setFormData({
      name: '',
      email: '',
      message: selectedPlan ? buildPrefillMessage(selectedPlan, selectedPrice) : '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-zinc-950 py-20">
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
            Contact Me
          </h2>
          <motion.div 
            className="w-24 h-1 bg-zinc-400 mx-auto mb-4"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s work together to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div 
              className="flex items-start space-x-4"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="shrink-0 w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, backgroundColor: 'rgb(63 63 70)' }}
              >
                <svg className="w-6 h-6 text-zinc-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-100 mb-1">Email</h3>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-zinc-300 hover:text-white transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start space-x-4"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="shrink-0 w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, backgroundColor: 'rgb(63 63 70)' }}
              >
                <svg className="w-6 h-6 text-zinc-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </motion.div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-100 mb-1">Phone</h3>
                <a href={MOBILE_NUMBER_LINK} className="text-zinc-300 hover:text-white transition-colors">
                  {MOBILE_NUMBER_DISPLAY}
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start space-x-4"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="shrink-0 w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, backgroundColor: 'rgb(63 63 70)' }}
              >
                <svg className="w-6 h-6 text-zinc-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </motion.div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-100 mb-1">Location</h3>
                <p className="text-zinc-300">Philippines</p>
              </div>
            </motion.div>

            <motion.div
              className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-6"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-zinc-100 mb-4">Social Media</h3>
              <div className="flex flex-wrap gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-zinc-700 px-4 py-2 text-sm text-zinc-300 hover:text-white hover:border-zinc-500 hover:bg-zinc-800 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6 rounded-xl border border-zinc-800 bg-zinc-900/70 p-6 md:p-8">
              {selectedPlan && (
                <div className="rounded-lg border border-zinc-700 bg-zinc-800/60 px-4 py-3">
                  <p className="text-xs uppercase tracking-wide text-zinc-400">Selected Pricing Package</p>
                  <p className="mt-1 text-sm font-semibold text-zinc-100">{selectedPlan}</p>
                  {selectedPrice && <p className="text-xs text-zinc-400">{selectedPrice}</p>}
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-zinc-700 rounded-lg bg-zinc-950 text-zinc-100 placeholder:text-zinc-500 focus:ring-2 focus:ring-zinc-500 focus:border-transparent outline-none transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-zinc-700 rounded-lg bg-zinc-950 text-zinc-100 placeholder:text-zinc-500 focus:ring-2 focus:ring-zinc-500 focus:border-transparent outline-none transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-zinc-700 rounded-lg bg-zinc-950 text-zinc-100 placeholder:text-zinc-500 focus:ring-2 focus:ring-zinc-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-3 bg-zinc-100 text-zinc-900 rounded-lg font-medium hover:bg-zinc-200 transition-colors shadow-lg shadow-black/40"
              >
                Send Message to Email
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
