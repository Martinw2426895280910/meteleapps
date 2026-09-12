import React from 'react';
import { MessageCircle, Phone, Flame, Sparkles } from 'lucide-react';
import { DISPLAY_PHONE, createWhatsAppUrl } from '../data/catalogData';

interface HeaderProps {
  onOpenBuilder: () => void;
  onOpenCatalog: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBuilder, onOpenCatalog }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#060907]/90 backdrop-blur-md border-b border-lime-500/20 px-3 py-2.5 transition-all">
      <div className="max-w-md mx-auto flex items-center justify-between">
        {/* Brand Logo & Tagline */}
        <a href="#inicio" className="flex items-center gap-2 group">
          <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-lime-400 shadow-[0_0_12px_rgba(37,211,102,0.4)] flex items-center justify-center bg-black">
            <img 
              src="/assets/metele_apps_mascot.jpg" 
              alt="Mascota METELE APPS" 
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback if image path has issue
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <span className="text-sm font-black text-lime-400 absolute">M$</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-heading font-extrabold text-base tracking-wider text-white">
                METELE <span className="text-[#10E836]">APP$</span>
              </span>
              <span className="bg-lime-500/20 text-lime-400 border border-lime-400/40 text-[9px] font-bold px-1.5 py-0.2 rounded-full uppercase tracking-widest">
                DIGITAL
              </span>
            </div>
            <span className="text-[10px] text-gray-400 tracking-tight leading-none">
              Tu negocio en modo digital
            </span>
          </div>
        </a>

        {/* Header Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenBuilder}
            className="hidden xs:flex items-center gap-1 bg-neutral-900 hover:bg-neutral-800 text-lime-400 border border-lime-400/30 text-xs font-semibold px-2.5 py-1.5 rounded-lg active:scale-95 transition-transform"
          >
            <Sparkles className="w-3.5 h-3.5 text-lime-400" />
            <span>Armar App</span>
          </button>

          <a
            href={createWhatsAppUrl("¡Hola METELE APPS! 🔥 Vi su página y quiero información para digitalizar mi negocio.")}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden flex items-center gap-1.5 bg-[#25D366] text-black font-extrabold text-xs px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(37,211,102,0.6)] btn-pulsing-glow active:scale-95 transition-all group"
            title="Escribinos a WhatsApp"
          >
            <div className="absolute inset-0 w-1/2 h-full bg-white/40 skew-x-[-25deg] animate-shimmer pointer-events-none" />
            <MessageCircle className="w-4 h-4 fill-black text-black" />
            <span className="font-heading font-black tracking-tight">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};
