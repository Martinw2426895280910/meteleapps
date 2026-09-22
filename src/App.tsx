import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { AudioPlayerWidget } from './components/AudioPlayerWidget';
import { Hero } from './components/Hero';
import { MobileLandingGallery } from './components/MobileLandingGallery';
import { PhoneSimulator } from './components/PhoneSimulator';
import { FullCatalog } from './components/FullCatalog';
import { BusinessSolutions } from './components/BusinessSolutions';
import { AppBuilderCalculator } from './components/AppBuilderCalculator';
import { WhyMiniApps } from './components/WhyMiniApps';
import { SatisfiedMerchants } from './components/SatisfiedMerchants';
import { Footer } from './components/Footer';
import { FloatingBottomBar } from './components/FloatingBottomBar';
import { ModalDetail } from './components/ModalDetail';
import { CatalogItem, BusinessItem } from './types';
import { Smartphone, Monitor } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'Catálogo digital',
    'Pedidos online',
    'WhatsApp directo'
  ]);
  const [selectedBusinessId, setSelectedBusinessId] = useState<string>('peluqueria');
  const [inspectingItem, setInspectingItem] = useState<CatalogItem | null>(null);

  // Smooth scroll handler
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFeature = (title: string) => {
    setSelectedFeatures(prev => 
      prev.includes(title) 
        ? prev.filter(t => t !== title) 
        : [...prev, title]
    );
  };

  const clearFeatures = () => {
    setSelectedFeatures([]);
  };

  const handleSelectBusinessForBuilder = (biz: BusinessItem) => {
    setSelectedBusinessId(biz.id);
    setSelectedFeatures(biz.recommendedFeatures);
    scrollToSection('armar-app');
  };

  // Intersection observer or scroll listener to update active section indicator
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'ejemplos', 'catalogo', 'negocios', 'armar-app'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#030504] text-gray-100 flex justify-center font-sans antialiased selection:bg-[#25D366] selection:text-black">
      
      {/* Background Ambience on wide screens */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px]" />
      </div>

      {/* Main Mobile-Exclusive App Shell */}
      <div className="w-full max-w-md min-h-screen bg-[#060907] relative shadow-[0_0_50px_rgba(0,0,0,0.9)] border-x border-neutral-900/60 flex flex-col">
        
        {/* Sticky Mobile Header */}
        <Header 
          onOpenBuilder={() => scrollToSection('armar-app')} 
          onOpenCatalog={() => scrollToSection('catalogo')} 
        />

        {/* Interactive Electronic Music & SFX Widget */}
        <AudioPlayerWidget />

        {/* Hero Section */}
        <Hero 
          onExploreCatalog={() => scrollToSection('catalogo')}
          onExploreBusinesses={() => scrollToSection('negocios')}
          onOpenBuilder={() => scrollToSection('armar-app')}
          onExploreExamples={() => scrollToSection('ejemplos')}
        />

        {/* Real Mobile Mockups & Landing Styles Gallery */}
        <MobileLandingGallery />

        {/* Interactive Phone Simulator */}
        <PhoneSimulator />

        {/* Real Satisfied Merchants Showcase with Photos */}
        <SatisfiedMerchants />

        {/* Full 28 Items Catalog */}
        <FullCatalog 
          onSelectItem={(item) => setInspectingItem(item)}
          selectedFeatures={selectedFeatures}
          onToggleFeature={toggleFeature}
        />

        {/* Businesses Solutions Section */}
        <BusinessSolutions 
          onSelectBusinessForBuilder={handleSelectBusinessForBuilder}
        />

        {/* App Builder / Calculator */}
        <AppBuilderCalculator 
          selectedFeatures={selectedFeatures}
          onToggleFeature={toggleFeature}
          onClearFeatures={clearFeatures}
          selectedBusinessId={selectedBusinessId}
          onChangeBusiness={setSelectedBusinessId}
        />

        {/* Value Proposition / Manifest Section */}
        <WhyMiniApps />

        {/* Footer */}
        <Footer />

        {/* Floating Mobile Bottom Navigation */}
        <FloatingBottomBar 
          activeSection={activeSection}
          onNavigate={scrollToSection}
          selectedFeaturesCount={selectedFeatures.length}
        />

        {/* Detail Modal */}
        {inspectingItem && (
          <ModalDetail 
            item={inspectingItem}
            onClose={() => setInspectingItem(null)}
            isSelected={selectedFeatures.includes(inspectingItem.title)}
            onToggleSelect={toggleFeature}
          />
        )}

      </div>
    </div>
  );
}
