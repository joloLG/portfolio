'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { scrollY } = useScroll();
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(9, 9, 11, 0.75)', 'rgba(9, 9, 11, 0.95)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (pathname !== '/') {
      router.push(`/#${sectionId}`);
      setIsMenuOpen(false);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.nav 
      style={{ backgroundColor: navBackground }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-shadow duration-300 border-b border-zinc-800 ${
        scrolled ? 'shadow-lg shadow-black/40' : 'shadow-sm shadow-black/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0">
            <Link href="/" className="inline-flex items-center gap-2 text-zinc-100 hover:text-zinc-300 transition-colors">
              <Image
                src="/images/JLG-dev.png"
                alt="JLG DEV logo"
                width={34}
                height={34}
                className="rounded-sm"
              />
              <span className="text-xl font-bold tracking-wide">JLG DEV Solutions</span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-zinc-300 hover:text-zinc-100 px-3 py-2 text-sm font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-zinc-300 hover:text-zinc-100 px-3 py-2 text-sm font-medium transition-colors"
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection('works')}
              className="text-zinc-300 hover:text-zinc-100 px-3 py-2 text-sm font-medium transition-colors"
            >
              My Works
            </button>
            <Link
              href="/pricing"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                pathname === '/pricing'
                  ? 'text-zinc-100'
                  : 'text-zinc-300 hover:text-zinc-100'
              }`}
            >
              Price Range
            </Link>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-zinc-300 hover:text-zinc-100 px-3 py-2 text-sm font-medium transition-colors"
            >
              Contact Me
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-zinc-950 border-t border-zinc-800 shadow-lg shadow-black/40">
            <button
              onClick={() => scrollToSection('home')}
              className="text-zinc-300 hover:text-zinc-100 hover:bg-zinc-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-zinc-300 hover:text-zinc-100 hover:bg-zinc-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection('works')}
              className="text-zinc-300 hover:text-zinc-100 hover:bg-zinc-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              My Works
            </button>
            <Link
              href="/pricing"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === '/pricing'
                  ? 'text-zinc-100 bg-zinc-900'
                  : 'text-zinc-300 hover:text-zinc-100 hover:bg-zinc-900'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Price Range
            </Link>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-zinc-300 hover:text-zinc-100 hover:bg-zinc-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Contact Me
            </button>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
