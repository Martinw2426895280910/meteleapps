import React, { useState } from 'react';
import { Sparkles, Check, MessageCircle, RefreshCw, Smartphone, ChevronRight } from 'lucide-react';
import { CATALOG_ITEMS, BUSINESS_LIST, createWhatsAppUrl, DISPLAY_PHONE, DISPLAY_PHONE_INTL } from '../data/catalogData';
import { audioEngine } from '../utils/audioEngine';

interface AppBuilderCalculatorProps {
  selectedFeatures: string[];
  onToggleFeature: (title: string) => void;
  onClearFeatures: () => void;
  selectedBusinessId: string;
  onChangeBusiness: (id: string) => void;
}

export const AppBuilderCalculator: React.FC<AppBuilderCalculatorProps> = ({
  selectedFeatures,
  onToggleFeature,
  onClearFeatures,
  selectedBusinessId,
  onChangeBusiness,
}) => {
  const currentBusiness = BUSINESS_LIST.find(b => b.id === selectedBusinessId) || BUSINESS_LIST[0];

  const handleApplyRecommended = () => {
    // Select recommended features for current business
    currentBusiness.recommendedFeatures.forEach(feat => {
      if (!selectedFeatures.includes(feat)) {
        onToggleFeature(feat);
      }
    });
  };

  const formattedWhatsAppMessage = `¡Hola METELE APPS! 🔥
Estuve armando mi Mini App en su web para mi negocio:
📌 Rubro: ${currentBusiness.name}
✨ Funciones seleccionadas (${selectedFeatures.length}):
${selectedFeatures.map(f => `• ${f}`).join('\n')}

¿Me podrían pasar cotización y tiempo de entrega? ¡Gracias!`;

  return (
    <section id="armar-app" className="px-4 py-8 bg-[#050806] border-t border-lime-500/20">
      <div className="max-w-md mx-auto">

        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 bg-lime-500/10 border border-lime-400/30 px-3 py-1 rounded-full text-lime-400 text-xs font-bold font-heading mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CONFIGURADOR INTERACTIVO</span>
          </div>

          <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-wide uppercase leading-tight">
            ARMÁ TU <span className="text-[#10E836]">MINI APP</span>
          </h2>
          
          <p className="text-xs sm:text-sm text-gray-300 mt-2">
            Elegí tu rubro y seleccioná las funciones que querés. Generamos tu solicitud lista para enviar a WhatsApp.
          </p>
        </div>

        {/* Step 1: Select Business */}
        <div className="bg-neutral-950 p-3.5 rounded-2xl border border-neutral-800 mb-4">
          <label className="block text-xs font-extrabold uppercase font-heading text-lime-400 mb-2">
            1. ¿Cuál es tu negocio o rubro?
          </label>
          <div className="relative">
            <select
              value={selectedBusinessId}
              onChange={(e) => onChangeBusiness(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-700 text-white text-xs font-semibold rounded-xl p-2.5 outline-none focus:border-lime-400 appearance-none pr-8"
            >
              {BUSINESS_LIST.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.emoji} {b.name}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              ▼
            </div>
          </div>

          <button
            onClick={() => {
              audioEngine.playSuccess();
              handleApplyRecommended();
            }}
            className="mt-2 text-[11px] text-lime-400 hover:underline flex items-center gap-1 font-bold"
          >
            <span>+ Cargar las funciones recomendadas para {currentBusiness.name.split('/')[0]}</span>
          </button>
        </div>

        {/* Step 2: Pick Features */}
        <div className="bg-neutral-950 p-3.5 rounded-2xl border border-neutral-800 mb-4">
          <div className="flex items-center justify-between mb-2">
            <label className="block text-xs font-extrabold uppercase font-heading text-lime-400">
              2. Elegí las funciones ({selectedFeatures.length} seleccionadas)
            </label>
            {selectedFeatures.length > 0 && (
              <button
                onClick={() => {
                  audioEngine.playTap();
                  onClearFeatures();
                }}
                className="text-[10px] text-gray-400 hover:text-red-400 flex items-center gap-1"
              >
                <RefreshCw className="w-2.5 h-2.5" />
                <span>Reiniciar</span>
              </button>
            )}
          </div>

          <div className="max-h-60 overflow-y-auto space-y-1.5 pr-1 no-scrollbar">
            {CATALOG_ITEMS.map((item) => {
              const isChecked = selectedFeatures.includes(item.title);
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    audioEngine.playToggle();
                    onToggleFeature(item.title);
                  }}
                  className={`w-full text-left p-2 rounded-xl border text-xs flex items-center justify-between transition-all ${
                    isChecked
                      ? 'bg-lime-500/15 border-lime-400/80 text-white font-bold'
                      : 'bg-neutral-900/60 border-neutral-800/80 text-gray-400 hover:text-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate pr-2">
                    <span>{item.emoji}</span>
                    <span className="truncate">{item.title}</span>
                  </div>
                  <div className={`w-4 h-4 rounded flex items-center justify-center border shrink-0 ${
                    isChecked ? 'bg-lime-400 border-lime-400 text-black' : 'border-neutral-700 bg-neutral-950'
                  }`}>
                    {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 3: Instant Summary & WhatsApp Generator */}
        <div className="bg-gradient-to-b from-neutral-950 to-black p-4 rounded-2xl border-2 border-lime-400 shadow-[0_0_20px_rgba(16,232,54,0.3)]">
          <div className="flex items-center justify-between mb-3 border-b border-neutral-800 pb-2">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase">Resumen de tu Mini App</p>
              <h3 className="font-heading font-black text-lg text-white">
                {currentBusiness.emoji} {currentBusiness.name.split('/')[0]}
              </h3>
            </div>
            <span className="bg-lime-400 text-black font-heading font-black text-xs px-2.5 py-1 rounded-full">
              {selectedFeatures.length} {selectedFeatures.length === 1 ? 'función' : 'funciones'}
            </span>
          </div>

          {selectedFeatures.length === 0 ? (
            <p className="text-xs text-gray-400 text-center py-3">
              Seleccioná al menos 1 función arriba o tocá "Cargar recomendadas".
            </p>
          ) : (
            <div className="space-y-2 mb-4">
              <div className="flex flex-wrap gap-1.5">
                {selectedFeatures.map((feat) => (
                  <span
                    key={feat}
                    className="bg-neutral-900 border border-lime-400/40 text-lime-300 text-[11px] font-bold px-2 py-0.5 rounded-lg flex items-center gap-1"
                  >
                    <span>{feat}</span>
                    <button
                      onClick={() => onToggleFeature(feat)}
                      className="text-gray-400 hover:text-white ml-0.5"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>

              <div className="bg-black/60 p-2.5 rounded-xl border border-neutral-800 text-[11px] text-gray-300 space-y-1 mt-2">
                <p>⚡ <strong className="text-white">Puesta en marcha:</strong> 3 a 5 días hábiles</p>
                <p>📲 <strong className="text-white">Dispositivos:</strong> 100% Celular (Android / iOS)</p>
                <p>💬 <strong className="text-white">Conexión:</strong> Directo a tu WhatsApp personal o comercial</p>
              </div>
            </div>
          )}

          {/* Primary WhatsApp Action - Pulsating & Flashing */}
          <a
            href={createWhatsAppUrl(selectedFeatures.length > 0 ? formattedWhatsAppMessage : `¡Hola METELE APPS! 🔥 Quiero asesoramiento para crear una Mini App para mi negocio de ${currentBusiness.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full relative overflow-hidden bg-gradient-to-r from-[#25D366] via-[#10E836] to-[#25D366] text-black font-heading font-black text-sm sm:text-base py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(37,211,102,0.8)] btn-pulsing-intense active:scale-95 transition-all uppercase tracking-wide group"
          >
            <div className="absolute inset-0 w-1/3 h-full bg-white/40 skew-x-[-25deg] animate-shimmer pointer-events-none" />
            <MessageCircle className="w-6 h-6 fill-black text-black group-hover:rotate-12 transition-transform shrink-0" />
            <div className="flex flex-col items-start leading-none text-left">
              <span className="text-[10px] tracking-wider text-black/80 font-bold">Enviar Cotización a WhatsApp</span>
              <span className="text-xs sm:text-sm font-black text-black">{DISPLAY_PHONE_INTL}</span>
            </div>
          </a>

          <p className="text-[10px] text-center text-gray-400 mt-2 font-medium">
            ¡Te responderemos al instante por WhatsApp con el presupuesto exacto!
          </p>
        </div>

      </div>
    </section>
  );
};
