import React from 'react';
import { MessageCircle, Rocket, ArrowDown, CheckCircle2, Zap, Smartphone, Globe, Bot, Megaphone, TrendingUp, Sparkles } from 'lucide-react';
import { DISPLAY_PHONE, DISPLAY_PHONE_INTL, createWhatsAppUrl, PILL_PILLARS } from '../data/catalogData';
import { audioEngine } from '../utils/audioEngine';

interface HeroProps {
  onExploreCatalog: () => void;
  onExploreBusinesses: () => void;
  onOpenBuilder: () => void;
  onExploreExamples?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCatalog, onExploreBusinesses, onOpenBuilder, onExploreExamples }) => {
  return (
    <section id="inicio" className="relative px-4 pt-4 pb-8 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-lime-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-48 left-10 w-40 h-40 bg-emerald-600/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-md mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Top Attention Eyebrow */}
        <div className="inline-flex items-center gap-1.5 bg-neutral-900/90 border border-lime-400/40 px-3 py-1 rounded-full shadow-[0_0_12px_rgba(37,211,102,0.2)] mb-3">
          <span className="text-base">🔥</span>
          <span className="text-xs font-heading font-black tracking-wider text-lime-400">
            ¿TENÉS UN NEGOCIO?
          </span>
          <span className="text-xs font-heading font-black text-white bg-lime-500/20 px-1.5 py-0.5 rounded text-[11px]">
            METELE APPS.
          </span>
        </div>

        {/* Mascot Centerpiece Badge */}
        <div className="relative my-2 group">
          {/* Animated Glow Rings */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-lime-500 via-emerald-400 to-green-500 rounded-full blur-sm opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse" />
          
          <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full bg-black border-3 border-lime-400 p-1 shadow-[0_0_25px_rgba(16,232,54,0.4)] overflow-hidden flex items-center justify-center">
            <img 
              src="/assets/metele_apps_mascot.jpg" 
              alt="Mascota METELE APPS" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Floating Feature Badges */}
          <div className="absolute -top-1 -right-2 bg-neutral-950 border border-lime-400/80 px-2 py-0.5 rounded-full shadow-lg flex items-center gap-1">
            <Rocket className="w-3 h-3 text-lime-400 animate-bounce" />
            <span className="text-[10px] font-black text-white font-heading">100% MÓVIL</span>
          </div>

          <div className="absolute -bottom-1 -left-2 bg-neutral-950 border border-emerald-400 px-2 py-0.5 rounded-full shadow-lg flex items-center gap-1">
            <Zap className="w-3 h-3 text-yellow-400" />
            <span className="text-[10px] font-black text-lime-300 font-heading">SIN COMISIONES</span>
          </div>
        </div>

        {/* Main Logo Typography */}
        <div className="mt-2 mb-1">
          <h1 className="font-heading font-black text-3xl sm:text-4xl tracking-wider text-white leading-tight uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            METELE <span className="text-[#10E836] drop-shadow-[0_0_12px_rgba(16,232,54,0.7)]">APP$</span>
          </h1>
          <div className="flex items-center justify-center gap-2 my-0.5">
            <div className="h-[1.5px] w-8 bg-lime-400/60" />
            <span className="text-[11px] font-extrabold tracking-[0.25em] text-white uppercase font-heading">
              AGENCIA DIGITAL
            </span>
            <div className="h-[1.5px] w-8 bg-lime-400/60" />
          </div>
        </div>

        {/* Yellow-Green Script Ribbon */}
        <div className="bg-[#bbf722] text-black font-script text-sm sm:text-base px-3.5 py-0.5 rounded-md transform -rotate-1 shadow-md mb-3 border border-black/10 font-bold">
          Tu negocio en modo digital
        </div>

        {/* Core Description Copy */}
        <p className="text-gray-200 text-sm sm:text-base font-medium px-2 leading-relaxed mb-4">
          📲 <span className="text-white font-semibold">Convertimos tu negocio</span> en una herramienta digital <span className="text-lime-400 font-bold">simple, rápida y pensada para usar desde el celular.</span>
        </p>

        {/* 5 Service Pillars (Matching the image badges) */}
        <div className="w-full grid grid-cols-2 xs:grid-cols-3 gap-1.5 my-3 text-left">
          <div className="bg-neutral-900/80 border border-lime-400/30 p-2 rounded-xl flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-lime-500/20 text-lime-400 flex items-center justify-center shrink-0">
              <Smartphone className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] font-black text-white font-heading leading-tight">APPS A MEDIDA</p>
              <p className="text-[9px] text-gray-400 leading-none">Para tu celular</p>
            </div>
          </div>

          <div className="bg-neutral-900/80 border border-lime-400/30 p-2 rounded-xl flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-lime-500/20 text-lime-400 flex items-center justify-center shrink-0">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] font-black text-white font-heading leading-tight">PÁGINAS WEB</p>
              <p className="text-[9px] text-gray-400 leading-none">Y landing pages</p>
            </div>
          </div>

          <div className="bg-neutral-900/80 border border-lime-400/30 p-2 rounded-xl flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-lime-500/20 text-lime-400 flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] font-black text-white font-heading leading-tight">CHATBOTS</p>
              <p className="text-[9px] text-gray-400 leading-none">Automatizaciones</p>
            </div>
          </div>

          <div className="bg-neutral-900/80 border border-lime-400/30 p-2 rounded-xl flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-lime-500/20 text-lime-400 flex items-center justify-center shrink-0">
              <Megaphone className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] font-black text-white font-heading leading-tight">PUBLICIDAD</p>
              <p className="text-[9px] text-gray-400 leading-none">Redes sociales</p>
            </div>
          </div>

          <div className="col-span-2 xs:col-span-1 bg-neutral-900/80 border border-lime-400/30 p-2 rounded-xl flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-lime-500/20 text-lime-400 flex items-center justify-center shrink-0">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] font-black text-white font-heading leading-tight">MARKETING</p>
              <p className="text-[9px] text-gray-400 leading-none">Diseño & Ventas</p>
            </div>
          </div>
        </div>

        {/* Primary Giant Pulsating & Shimmering WhatsApp Pill */}
        <div className="w-full my-4 relative">
          {/* Subtle pulse wave ring behind button */}
          <div className="absolute inset-0 rounded-full bg-lime-500/20 blur-xl animate-pulse pointer-events-none" />

          <a
            href={createWhatsAppUrl("¡Hola METELE APPS! 🔥 Quiero una mini app para mi negocio. ¿Me cuentan cómo empezar?")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block relative overflow-hidden bg-black border-2 border-[#10E836] rounded-full p-2.5 sm:p-3 btn-pulsing-intense transition-all transform active:scale-95 group shadow-[0_0_25px_rgba(16,232,54,0.6)]"
          >
            {/* Shimmer light effect sweeping across the button */}
            <div className="absolute inset-0 w-1/3 h-full bg-white/20 skew-x-[-25deg] animate-shimmer pointer-events-none" />

            <div className="flex items-center justify-between gap-2 sm:gap-3 px-1">
              <div className="relative flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(37,211,102,0.8)] group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-7 h-7 text-black fill-black" />
                </div>
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-red-500 border-2 border-black animate-ping" />
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-red-500 border-2 border-black" />
              </div>

              <div className="flex-1 flex flex-col items-start leading-tight min-w-0">
                <div className="flex flex-wrap items-center gap-1.5 w-full">
                  <span className="font-heading font-black text-xs sm:text-sm tracking-wider text-white">
                    ¡ESCRIBINOS!
                  </span>
                  <span className="font-heading font-black text-sm sm:text-base text-[#FFA500] tracking-wide neon-glow-yellow">
                    {DISPLAY_PHONE_INTL}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[10px] sm:text-[11px] text-lime-400 font-bold uppercase tracking-widest font-heading">
                    AGENCIA DIGITAL • RESPUESTA INMEDIATA
                  </span>
                </div>
              </div>

              <div className="hidden xs:flex items-center justify-center bg-lime-400/20 border border-lime-400/40 rounded-full w-8 h-8 shrink-0 text-lime-400 group-hover:translate-x-0.5 transition-transform">
                <Sparkles className="w-4 h-4 text-lime-400 animate-spin" />
              </div>
            </div>
          </a>
        </div>

        {/* Action Fast Tabs */}
        <div className="w-full grid grid-cols-3 gap-1.5 mt-2">
          {onExploreExamples && (
            <button
              onClick={() => {
                audioEngine.playSelect();
                onExploreExamples();
              }}
              className="bg-neutral-900 hover:bg-neutral-800 border border-lime-400/40 text-lime-400 font-extrabold text-[11px] py-2 px-1.5 rounded-xl flex items-center justify-center gap-1 active:scale-95 transition-all truncate"
            >
              <span>📱 Ver Diseños</span>
            </button>
          )}

          <button
            onClick={() => {
              audioEngine.playTap();
              onExploreCatalog();
            }}
            className="bg-gradient-to-r from-lime-500 to-emerald-500 text-black font-extrabold text-[11px] py-2 px-1.5 rounded-xl shadow-[0_0_15px_rgba(37,211,102,0.3)] flex items-center justify-center gap-1 active:scale-95 transition-all truncate"
          >
            <span>28 Funciones</span>
            <ArrowDown className="w-3 h-3 shrink-0" />
          </button>

          <button
            onClick={() => {
              audioEngine.playTap();
              onExploreBusinesses();
            }}
            className="bg-neutral-900 hover:bg-neutral-800 border border-lime-400/40 text-lime-400 font-extrabold text-[11px] py-2 px-1.5 rounded-xl flex items-center justify-center gap-1 active:scale-95 transition-all truncate"
          >
            <span>Negocios</span>
            <ArrowDown className="w-3 h-3 shrink-0" />
          </button>
        </div>

      </div>
    </section>
  );
};
