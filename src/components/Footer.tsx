import React from 'react';
import { MessageCircle, Phone, Instagram, MapPin, Heart, Flame, Sparkles } from 'lucide-react';
import { DISPLAY_PHONE, DISPLAY_PHONE_INTL, createWhatsAppUrl } from '../data/catalogData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-lime-500/30 px-4 pt-8 pb-28 text-center">
      <div className="max-w-md mx-auto space-y-4">
        
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-lime-400 p-0.5 shadow-[0_0_20px_rgba(16,232,54,0.5)] mb-2 animate-pulse">
            <img 
              src="/assets/metele_apps_mascot.jpg" 
              alt="METELE APPS" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-wider uppercase">
            METELE <span className="text-[#10E836]">APP$</span>
          </h3>

          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest font-heading mt-0.5">
            AGENCIA DIGITAL • TU NEGOCIO EN MODO DIGITAL
          </p>

          <p className="text-xs text-lime-400 font-script mt-1">
            Mini apps para negocios reales.
          </p>
        </div>

        {/* Contact Badge with Pulsating WhatsApp Button */}
        <div className="bg-neutral-950 border-2 border-lime-400/50 rounded-3xl p-4 my-3 shadow-[0_0_25px_rgba(16,232,54,0.2)]">
          <p className="text-xs text-gray-300 uppercase font-black font-heading tracking-wide mb-1">
            Atención Directa & Cotizaciones Inmediatas:
          </p>
          
          <a
            href={createWhatsAppUrl("¡Hola METELE APPS! 🔥 Quiero información para digitalizar mi negocio con una Mini App.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full relative overflow-hidden inline-flex items-center justify-center gap-2.5 bg-[#25D366] text-black font-heading font-black text-sm sm:text-base py-3 px-4 rounded-2xl shadow-[0_0_25px_rgba(37,211,102,0.8)] btn-pulsing-intense my-2 group transition-all"
          >
            <div className="absolute inset-0 w-1/3 h-full bg-white/40 skew-x-[-25deg] animate-shimmer pointer-events-none" />
            <MessageCircle className="w-6 h-6 fill-black text-black group-hover:scale-110 transition-transform" />
            <span className="tracking-wider">{DISPLAY_PHONE_INTL}</span>
          </a>

          <p className="text-[11px] text-gray-400 mt-1">
            📍 Agencia Digital • ¡Escribinos hoy y empezá a recibir pedidos y turnos en tu celular!
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-neutral-900 text-[10px] text-gray-400 flex flex-col items-center gap-1">
          <p>© {new Date().getFullYear()} METELE APPS. Todos los derechos reservados.</p>
          <p className="text-gray-400">Desarrollo y diseño de Mini Apps para teléfonos móviles 📱</p>
        </div>

      </div>
    </footer>
  );
};

