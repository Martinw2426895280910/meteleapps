import React from 'react';
import { X, Check, MessageCircle, Sparkles } from 'lucide-react';
import { CatalogItem } from '../types';
import { createWhatsAppUrl, DISPLAY_PHONE_INTL } from '../data/catalogData';
import { audioEngine } from '../utils/audioEngine';

interface ModalDetailProps {
  item: CatalogItem | null;
  onClose: () => void;
  isSelected: boolean;
  onToggleSelect: (title: string) => void;
}

export const ModalDetail: React.FC<ModalDetailProps> = ({
  item,
  onClose,
  isSelected,
  onToggleSelect,
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-sm bg-neutral-950 border-2 border-lime-400 rounded-3xl p-5 shadow-[0_0_30px_rgba(16,232,54,0.35)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={() => {
            audioEngine.playTap();
            onClose();
          }}
          className="absolute top-4 right-4 text-gray-400 hover:text-white p-1.5 rounded-full bg-neutral-900 border border-neutral-800"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Top Header */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl p-2 bg-neutral-900 rounded-2xl border border-neutral-800">
            {item.emoji}
          </span>
          <div>
            <span className="text-[10px] font-bold text-lime-400 uppercase font-heading">
              {item.tag}
            </span>
            <h3 className="font-heading font-black text-xl text-white leading-tight">
              {item.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-gray-200 leading-relaxed mb-3">
          {item.description}
        </p>

        {/* Core Benefit */}
        <div className="bg-lime-950/30 border border-lime-400/30 rounded-2xl p-3 mb-3">
          <p className="text-[11px] text-lime-300 font-semibold mb-1">
            💡 ¿Por qué lo necesita tu negocio?
          </p>
          <p className="text-xs text-gray-300 leading-snug">
            {item.benefit}
          </p>
        </div>

        {/* Key Features List */}
        <div className="space-y-1.5 mb-4">
          <p className="text-[11px] font-bold uppercase text-gray-400 font-heading">
            Lo que incluye:
          </p>
          {item.features.map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-gray-200">
              <Check className="w-3.5 h-3.5 text-lime-400 shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* Suitable For */}
        <div className="text-[11px] text-gray-400 border-t border-neutral-800 pt-2 mb-4">
          <span className="text-gray-300 font-bold">Ideal para: </span>
          {item.popularFor}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2.5">
          <button
            onClick={() => {
              audioEngine.playToggle();
              onToggleSelect(item.title);
              onClose();
            }}
            className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              isSelected 
                ? 'bg-neutral-800 text-gray-300 border border-neutral-700' 
                : 'bg-lime-400 hover:bg-lime-300 text-black font-black shadow-[0_0_15px_rgba(37,211,102,0.4)]'
            }`}
          >
            {isSelected ? (
              <span>✓ Quitar de mi lista de funciones</span>
            ) : (
              <span>+ Agregar a mi cotización</span>
            )}
          </button>

          <a
            href={createWhatsAppUrl(`¡Hola METELE APPS! 🔥 Quiero sumar "${item.title}" a la Mini App de mi negocio.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full relative overflow-hidden bg-[#25D366] text-black font-heading font-black text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.6)] btn-pulsing-glow active:scale-95 transition-all uppercase tracking-wide group"
          >
            <div className="absolute inset-0 w-1/3 h-full bg-white/40 skew-x-[-25deg] animate-shimmer pointer-events-none" />
            <MessageCircle className="w-4 h-4 fill-black text-black group-hover:scale-110 transition-transform shrink-0" />
            <span>Consultar por WhatsApp ({DISPLAY_PHONE_INTL})</span>
          </a>
        </div>

      </div>
    </div>
  );
};
