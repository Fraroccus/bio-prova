/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Microscope, 
  BookOpen, 
  Link as LinkIcon, 
  ArrowLeft, 
  Mail, 
  Github, 
  Linkedin,
  ExternalLink,
  FileText,
  Dna
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// ==========================================
// DATA-DRIVEN ARCHITECTURE
// ==========================================
// Edit this array to add or modify your research projects.
const researchData = [
  {
    id: 'coral-resilience',
    title: 'Coral Reef Resilience in Acidifying Oceans',
    briefDescription: 'Investigating the molecular mechanisms of thermal tolerance in Great Barrier Reef coral species.',
    fullContent: `
      <p>This research focuses on the symbiotic relationship between coral polyps and zooxanthellae under increased thermal stress and lower pH levels. Our findings suggest that certain genotypes of <em>Acropora millepora</em> exhibit significantly higher expression of heat-shock proteins.</p>
      <p>Key findings include:</p>
      <ul>
        <li>Identification of three novel stress-response genes.</li>
        <li>Mapping of metabolic pathways involved in calcification under stress.</li>
        <li>Development of a predictive model for reef bleaching events.</li>
      </ul>
    `,
    infographicUrl: 'https://picsum.photos/seed/coral/800/600',
    slideshowEmbed: 'https://docs.google.com/presentation/d/e/2PACX-1vT-X8_YvG-qX1_YvG-qX1_YvG-qX1_YvG/embed?start=false&loop=false&delayms=3000', // Placeholder
    externalResources: [
      { name: 'Nature Climate Change Publication', url: 'https://nature.com' },
      { name: 'Open Dataset (Dryad)', url: 'https://datadryad.org' }
    ]
  },
  {
    id: 'mycorrhizal-networks',
    title: 'Mycorrhizal Networks and Forest Carbon Sequestration',
    briefDescription: 'Mapping the underground fungal networks that facilitate nutrient exchange between old-growth Douglas firs.',
    fullContent: `
      <p>Using isotopic labeling, we tracked the movement of carbon-14 through common mycorrhizal networks (CMNs) in temperate rainforests. The study reveals that "Mother Trees" actively shunt nutrients to saplings in shaded understories.</p>
      <p>Methodology:</p>
      <ul>
        <li>DNA barcoding of fungal sporocarps.</li>
        <li>In-situ carbon isotope labeling.</li>
        <li>Network analysis of root-fungi connectivity.</li>
      </ul>
    `,
    infographicUrl: 'https://picsum.photos/seed/forest/800/600',
    slideshowEmbed: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder for embed
    externalResources: [
      { name: 'Science Magazine Article', url: 'https://science.org' },
      { name: 'Interactive Network Map', url: '#' }
    ]
  },
  {
    id: 'crispr-adaptation',
    title: 'CRISPR-Cas9 Adaptation in Extremophiles',
    briefDescription: 'Exploring the genomic stability of thermophilic bacteria in hydrothermal vent environments.',
    fullContent: `
      <p>This project examines how CRISPR systems evolve in high-temperature environments. We isolated several strains of <em>Thermus thermophilus</em> and analyzed their spacer acquisition rates under viral pressure.</p>
      <p>Highlights:</p>
      <ul>
        <li>Discovery of heat-stable Cas proteins.</li>
        <li>Evidence of rapid horizontal gene transfer in vent communities.</li>
        <li>Potential applications in industrial biotechnology.</li>
      </ul>
    `,
    infographicUrl: 'https://picsum.photos/seed/bacteria/800/600',
    slideshowEmbed: 'https://docs.google.com/presentation/d/e/2PACX-1vT-X8_YvG-qX1_YvG-qX1_YvG-qX1_YvG/embed', // Placeholder
    externalResources: [
      { name: 'Genetics Journal', url: 'https://genetics.org' }
    ]
  }
];

// ==========================================
// COMPONENTS
// ==========================================

const DNAWatermark = () => (
  <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0 overflow-hidden flex justify-center items-center">
    <Dna size={800} className="rotate-45 text-forest" />
  </div>
);

export default function App() {
  const [currentProjectId, setCurrentProjectId] = useState<string | null>(null);

  // Scroll to top when changing pages
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentProjectId]);

  const currentProject = researchData.find(p => p.id === currentProjectId);

  return (
    <div className="min-h-screen bg-academic-bg text-slate-800 font-sans selection:bg-forest/10 selection:text-forest">
      <DNAWatermark />
      
      {/* Navigation / Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button 
            onClick={() => setCurrentProjectId(null)}
            className="text-xl font-bold tracking-tight text-forest flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Microscope className="w-6 h-6" />
            <span>Dr. Elena Vance</span>
          </button>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <button onClick={() => setCurrentProjectId(null)} className="hover:text-forest transition-colors">Research</button>
            <a href="#about" className="hover:text-forest transition-colors">About</a>
            <a href="#contact" className="hover:text-forest transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          {!currentProjectId ? (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Hero / About Section */}
              <section id="about" className="mb-20 grid md:grid-cols-3 gap-12 items-center">
                <div className="md:col-span-2">
                  <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                    Advancing our understanding of <span className="text-forest italic">biological complexity</span> in a changing world.
                  </h1>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl">
                    I am a Molecular Biologist specializing in environmental adaptation and genomic resilience. My work bridges the gap between laboratory genetics and field ecology to protect biodiversity.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a href="mailto:contact@example.com" className="flex items-center gap-2 px-4 py-2 bg-forest text-white rounded-lg hover:bg-forest-dark transition-colors shadow-sm">
                      <Mail size={18} />
                      <span>Contact Me</span>
                    </a>
                    <div className="flex items-center gap-3 px-2">
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-forest transition-colors"><Linkedin size={20} /></a>
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-forest transition-colors"><Github size={20} /></a>
                      <a href="#" className="p-2 text-slate-400 hover:text-forest transition-colors"><FileText size={20} /></a>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-forest/10 rounded-2xl -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
                  <img 
                    src="https://picsum.photos/seed/scientist/400/500" 
                    alt="Dr. Elena Vance" 
                    className="relative rounded-xl shadow-lg w-full aspect-[4/5] object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </section>

              {/* Research Grid */}
              <section>
                <div className="flex items-center justify-between mb-10">
                  <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                    <BookOpen className="text-forest" />
                    Current Research Projects
                  </h2>
                  <div className="h-px flex-grow bg-slate-200 ml-6 hidden sm:block"></div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {researchData.map((project) => (
                    <motion.div
                      key={project.id}
                      whileHover={{ y: -8 }}
                      className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                    >
                      <div className="h-48 overflow-hidden bg-slate-100">
                        <img 
                          src={project.infographicUrl} 
                          alt={project.title}
                          className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                          {project.title}
                        </h3>
                        <p className="text-slate-600 text-sm mb-6 flex-grow line-clamp-3">
                          {project.briefDescription}
                        </p>
                        <button 
                          onClick={() => setCurrentProjectId(project.id)}
                          className="w-full py-3 px-4 bg-slate-50 text-forest font-semibold rounded-xl border border-forest/10 hover:bg-forest/5 hover:border-forest/20 transition-all flex items-center justify-center gap-2 group"
                        >
                          Read Full Case Study
                          <ArrowLeft className="rotate-180 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            </motion.div>
          ) : (
            <motion.div
              key="project"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <button 
                onClick={() => setCurrentProjectId(null)}
                className="mb-8 flex items-center gap-2 text-slate-500 hover:text-forest transition-colors font-medium"
              >
                <ArrowLeft size={20} />
                Back to All Research
              </button>

              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                {/* Project Header */}
                <div className="p-8 md:p-12 border-b border-slate-100">
                  <span className="inline-block px-3 py-1 bg-forest/10 text-forest text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                    Research Case Study
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                    {currentProject?.title}
                  </h1>
                  <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed" 
                       dangerouslySetInnerHTML={{ __html: currentProject?.fullContent || '' }} 
                  />
                </div>

                {/* Infographic Section */}
                <div className="p-8 md:p-12 bg-slate-50">
                  <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-forest rounded-full"></div>
                    Visual Data & Infographics
                  </h2>
                  <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white p-2">
                    <img 
                      src={currentProject?.infographicUrl} 
                      alt="Research Infographic" 
                      className="w-full h-auto rounded-xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Slideshow Embed */}
                <div className="p-8 md:p-12">
                  <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-forest rounded-full"></div>
                    Presentation & Detailed Slides
                  </h2>
                  <div className="aspect-video rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-inner">
                    <iframe 
                      src={currentProject?.slideshowEmbed} 
                      className="w-full h-full"
                      allowFullScreen
                      title="Project Presentation"
                    ></iframe>
                  </div>
                </div>

                {/* External Resources */}
                <div className="p-8 md:p-12 bg-forest-dark text-white">
                  <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <LinkIcon size={24} className="text-forest-light" />
                    External Resources & Publications
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {currentProject?.externalResources.map((res, idx) => (
                      <a 
                        key={idx}
                        href={res.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-colors border border-white/10"
                      >
                        <span className="font-medium">{res.name}</span>
                        <ExternalLink size={18} className="text-forest-light" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-white border-t border-slate-200 py-12 mt-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="flex items-center gap-2 text-forest font-bold text-lg mb-2">
              <Microscope size={20} />
              <span>BioPortfolio</span>
            </div>
            <p className="text-slate-500 text-sm">© 2024 Dr. Elena Vance. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-forest transition-colors"><Linkedin size={20} /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-forest transition-colors"><Github size={20} /></a>
            <a href="mailto:contact@example.com" className="text-slate-400 hover:text-forest transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
