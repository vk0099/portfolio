import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ServicesSection } from './components/ServicesSection';
import { TechStackGrid } from './components/TechStackGrid';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { ClientProcess } from './components/ClientProcess';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-dark-950 text-slate-100 font-sans selection:bg-primary-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar onOpenContact={() => setContactModalOpen(true)} />

      {/* Main Content Layout */}
      <main className="flex-1">
        <Hero onOpenContact={() => setContactModalOpen(true)} />
        <ProjectShowcase />
        <ServicesSection onOpenContact={() => setContactModalOpen(true)} />
        <TechStackGrid />
        <InteractiveTerminal onOpenContact={() => setContactModalOpen(true)} />
        <ClientProcess />
      </main>

      {/* Global Contact & Discovery Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};
