import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WorksSection from './components/WorksSection';
import ContactSection from './components/ContactSection';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <WorksSection />
        <Suspense fallback={null}>
          <ContactSection />
        </Suspense>
      </main>
      <footer className="bg-zinc-900 text-white py-8 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-zinc-400">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
