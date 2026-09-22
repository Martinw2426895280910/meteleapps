import React from 'react';
import { Home, Layers, Sparkles, MessageCircle, Briefcase, Smartphone } from 'lucide-react';
import { DISPLAY_PHONE_INTL, createWhatsAppUrl } from '../data/catalogData';
import { audioEngine } from '../utils/audioEngine';

interface FloatingBottomBarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  selectedFeaturesCount: number;
}

export const FloatingBottomBar: React.FC<FloatingBottomBarProps> = ({
  activeSection,
  onNavigate,
  selectedFeaturesCount,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-2.5 pointer-events-none">
      <div className="max-w-md mx-auto pointer-events-auto">
        
        {/* Floating WhatsApp Quick Pill - Bigger, Pulsating & Flashing */}
        <div className="mb-2 flex justify-center sm:justify-end">
          <a
            href={createWhatsAppUrl("¡Hola! 🔥 Tengo un comercio en Estados Unidos y quiero consultar por una App / Tienda Móvil (+54 3772 63-6749)")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto relative overflow-hidden inline-flex items-center justify-center gap-2.5 bg-[#25D366] text-black font-black text-xs sm:text-sm px-4 py-3 rounded-full shadow-[0_0_30px_rgba(37,211,102,0.85)] btn-pulsing-intense border-2 border-black active:scale-95 transition-all group"
          >
            {/* Shimmer light sweep */}
            <div className="absolute inset-0 w-1/3 h-full bg-white/40 skew-x-[-25deg] animate-shimmer pointer-events-none" />

            <div className="relative flex items-center justify-center">
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center shadow-md">
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366] group-hover:scale-110 transition-transform" />
              </div>
              <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500 animate-ping"></span>
              <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500"></span>
            </div>

            <div className="flex flex-col items-start leading-none text-left">
              <span className="font-heading font-black text-[10px] tracking-wider text-black/80 uppercase">
                WhatsApp Oficial
              </span>
              <span className="font-heading font-black text-xs sm:text-sm tracking-wide text-black">
                {DISPLAY_PHONE_INTL}
              </span>
            </div>

            <span className="bg-black text-[#25D366] text-[9px] font-black px-1.5 py-0.5 rounded-full uppercase ml-1 animate-pulse">
              EN LÍNEA
            </span>
          </a>
        </div>

        {/* Bottom Tab Bar */}
        <nav className="bg-neutral-950/95 backdrop-blur-lg border border-lime-400/40 rounded-2xl p-1.5 shadow-[0_10px_25px_rgba(0,0,0,0.8)] flex items-center justify-around">
          
          <button
            onClick={() => {
              audioEngine.playTap();
              onNavigate('inicio');
            }}
            className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all ${
              activeSection === 'inicio' ? 'text-lime-400 font-bold' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <Home className="w-4 h-4 mb-0.5" />
            <span className="text-[10px] font-heading">Inicio</span>
          </button>

          <button
            onClick={() => {
              audioEngine.playTap();
              onNavigate('ejemplos');
            }}
            className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all ${
              activeSection === 'ejemplos' ? 'text-lime-400 font-bold' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <Smartphone className="w-4 h-4 mb-0.5" />
            <span className="text-[10px] font-heading">Ejemplos</span>
          </button>

          <button
            onClick={() => {
              audioEngine.playTap();
              onNavigate('catalogo');
            }}
            className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all ${
              activeSection === 'catalogo' ? 'text-lime-400 font-bold' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <Layers className="w-4 h-4 mb-0.5" />
            <span className="text-[10px] font-heading">Catálogo</span>
          </button>

          <button
            onClick={() => {
              audioEngine.playTap();
              onNavigate('negocios');
            }}
            className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all ${
              activeSection === 'negocios' ? 'text-lime-400 font-bold' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <Briefcase className="w-4 h-4 mb-0.5" />
            <span className="text-[10px] font-heading">Negocios</span>
          </button>

          <button
            onClick={() => {
              audioEngine.playTap();
              onNavigate('armar-app');
            }}
            className={`relative flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all ${
              activeSection === 'armar-app' ? 'text-lime-400 font-bold' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <div className="relative">
              <Sparkles className="w-4 h-4 mb-0.5 text-lime-400" />
              {selectedFeaturesCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-lime-400 text-black font-black text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                  {selectedFeaturesCount}
                </span>
              )}
            </div>
            <span className="text-[10px] font-heading">Armar App</span>
          </button>

        </nav>

      </div>
    </div>
  );
};

