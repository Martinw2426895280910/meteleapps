import React, { useState } from 'react';
import { ChevronRight, MessageCircle, Sparkles, CheckCircle, Smartphone } from 'lucide-react';
import { BUSINESS_LIST, createWhatsAppUrl } from '../data/catalogData';
import { BusinessItem } from '../types';
import { audioEngine } from '../utils/audioEngine';

interface BusinessSolutionsProps {
  onSelectBusinessForBuilder: (biz: BusinessItem) => void;
}

export const BusinessSolutions: React.FC<BusinessSolutionsProps> = ({ onSelectBusinessForBuilder }) => {
  const [selectedBizId, setSelectedBizId] = useState<string>('peluqueria');

  const selectedBiz = BUSINESS_LIST.find(b => b.id === selectedBizId) || BUSINESS_LIST[0];

  return (
    <section id="negocios" className="px-4 py-8 bg-[#060a07] border-t border-lime-500/20">
      <div className="max-w-md mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 bg-lime-500/10 border border-lime-400/30 px-3 py-1 rounded-full text-lime-400 text-xs font-bold font-heading mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOLUCIONES POR RUBRO</span>
          </div>

          <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-wide uppercase leading-tight">
            ¿A QUÉ <span className="text-[#10E836]">NEGOCIOS?</span>
          </h2>
          
          <p className="text-xs sm:text-sm text-gray-300 mt-2">
            No importa qué rubro tengas: adaptamos la mini app exactamente a lo que tu día a día necesita.
          </p>
        </div>

        {/* Horizontal Fast Scroll Selector */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-4 no-scrollbar">
          {BUSINESS_LIST.map((biz) => {
            const isCurrent = biz.id === selectedBizId;
            return (
              <button
                key={biz.id}
                onClick={() => {
                  audioEngine.playTap();
                  setSelectedBizId(biz.id);
                }}
                className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                  isCurrent
                    ? 'bg-lime-400 text-black shadow-[0_0_15px_rgba(37,211,102,0.4)] scale-102'
                    : 'bg-neutral-900 text-gray-300 border border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <span className="text-base">{biz.emoji}</span>
                <span className="font-heading uppercase">{biz.name.split('/')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Business Showcase Card */}
        <div className="bg-neutral-950 rounded-2xl border-2 border-lime-400/80 p-4 shadow-[0_0_20px_rgba(16,232,54,0.2)]">
          
          {/* Header Badge */}
          <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-3">
            <div className="flex items-center gap-2.5">
              <span className="text-3xl p-2 rounded-xl bg-lime-500/10 border border-lime-400/30">
                {selectedBiz.emoji}
              </span>
              <div>
                <h3 className="font-heading font-black text-lg text-white uppercase leading-tight">
                  {selectedBiz.question} <span className="text-lime-400">METELE APPS.</span>
                </h3>
                <span className="text-[11px] text-gray-400 font-semibold">
                  {selectedBiz.badge}
                </span>
              </div>
            </div>
          </div>

          {/* Solution Description */}
          <div className="mb-4">
            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-medium">
              {selectedBiz.solution}
            </p>
          </div>

          {/* Recommended Pack List */}
          <div className="bg-neutral-900/90 rounded-xl p-3 border border-neutral-800 mb-4">
            <p className="text-[11px] font-bold text-lime-400 uppercase font-heading mb-2 flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Funciones recomendadas para este rubro:</span>
            </p>
            <div className="grid grid-cols-1 gap-1.5">
              {selectedBiz.recommendedFeatures.map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-lime-400"></div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Simulated App Sample View */}
          <div className="bg-black/60 rounded-xl p-3 border border-neutral-800/80 mb-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[10px] text-gray-400 font-bold uppercase">
                📱 Ejemplo real de lo que ven tus clientes:
              </p>
              <span className="text-[10px] text-lime-400 font-mono">Demo Interactiva</span>
            </div>

            <div className="bg-neutral-900/70 rounded-lg p-2.5 border border-neutral-800 space-y-2">
              <div className="border-b border-neutral-800 pb-1">
                <p className="text-xs font-bold text-white leading-tight">{selectedBiz.sampleAppPreview.title}</p>
                <p className="text-[10px] text-gray-400">{selectedBiz.sampleAppPreview.subtitle}</p>
              </div>

              <div className="space-y-1.5">
                {selectedBiz.sampleAppPreview.items.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs bg-neutral-950 p-1.5 rounded-md">
                    <div>
                      <p className="font-semibold text-white text-[11px]">{item.name}</p>
                      <p className="text-[9px] text-gray-400">{item.detail}</p>
                    </div>
                    {item.price && (
                      <span className="font-bold text-lime-400 text-[11px] shrink-0 ml-2">
                        {item.price}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col gap-2.5">
            <a
              href={createWhatsAppUrl(`¡Hola METELE APPS! 🔥 Tengo un negocio de ${selectedBiz.name}. Quiero cotizar una Mini App con las funciones recomendadas:\n${selectedBiz.recommendedFeatures.map(f => `• ${f}`).join('\n')}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full relative overflow-hidden bg-gradient-to-r from-[#25D366] via-[#10E836] to-[#25D366] text-black font-heading font-black text-xs sm:text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.6)] btn-pulsing-glow active:scale-95 transition-all uppercase tracking-wide group"
            >
              <div className="absolute inset-0 w-1/3 h-full bg-white/40 skew-x-[-25deg] animate-shimmer pointer-events-none" />
              <MessageCircle className="w-5 h-5 fill-black text-black group-hover:scale-110 transition-transform shrink-0" />
              <span className="truncate">HACE CLICKS AHORA !! Promoción 🔥</span>
            </a>

            <button
              onClick={() => {
                audioEngine.playSelect();
                onSelectBusinessForBuilder(selectedBiz);
              }}
              className="w-full bg-neutral-900 hover:bg-neutral-800 text-lime-400 border border-lime-400/40 font-bold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 active:scale-95 transition-all"
            >
              <span>Personalizar estas funciones en el cotizador</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Rapid Visual Grid of All 15 businesses */}
        <div className="mt-6">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 text-center">
            Tocá cualquier rubro para ver su solución:
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
            {BUSINESS_LIST.map((biz) => (
              <button
                key={biz.id}
                onClick={() => {
                  audioEngine.playTap();
                  setSelectedBizId(biz.id);
                }}
                className={`p-2 rounded-xl text-center border transition-all flex flex-col items-center justify-center gap-1 ${
                  selectedBizId === biz.id
                    ? 'bg-lime-400/20 border-lime-400 text-white font-bold'
                    : 'bg-neutral-900/60 border-neutral-800/80 text-gray-300 hover:border-neutral-700'
                }`}
              >
                <span className="text-xl">{biz.emoji}</span>
                <span className="text-[10px] leading-tight line-clamp-1">{biz.name.split('/')[0]}</span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
