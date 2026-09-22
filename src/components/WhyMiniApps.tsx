import React from 'react';
import { Rocket, Check, TrendingUp, Users, CalendarCheck, DollarSign, Smartphone, MessageCircle, Sparkles } from 'lucide-react';
import { createWhatsAppUrl } from '../data/catalogData';

export const WhyMiniApps: React.FC = () => {
  return (
    <section className="px-4 py-8 bg-gradient-to-b from-[#060a07] via-[#09140c] to-[#060907] border-t border-lime-500/20 text-center">
      <div className="max-w-md mx-auto">

        {/* Header Eyebrow */}
        <div className="inline-flex items-center gap-1.5 bg-lime-500/10 border border-lime-400/30 px-3 py-1 rounded-full text-lime-400 text-xs font-bold font-heading mb-2">
          <Rocket className="w-3.5 h-3.5 text-lime-400" />
          <span>VENTAJAS CLAVE</span>
        </div>

        {/* Title */}
        <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-wide uppercase leading-tight mb-2">
          TU NEGOCIO + <span className="text-[#10E836]">UNA MINI APP</span>
        </h2>

        {/* The 4 Core Pillars - Ultra Compact Chips */}
        <div className="grid grid-cols-2 gap-2 my-4 text-left">
          <div className="bg-neutral-900/90 border border-lime-400/30 p-2.5 rounded-xl">
            <span className="text-xl">📸</span>
            <h4 className="font-heading font-extrabold text-xs sm:text-sm text-white mt-1">
              Catálogo 24/7
            </h4>
            <p className="text-[10px] text-gray-400 leading-snug">
              Precios y fotos al instante en el celular.
            </p>
          </div>

          <div className="bg-neutral-900/90 border border-lime-400/30 p-2.5 rounded-xl">
            <span className="text-xl">🗓️</span>
            <h4 className="font-heading font-extrabold text-xs sm:text-sm text-white mt-1">
              Turnos & Pedidos
            </h4>
            <p className="text-[10px] text-gray-400 leading-snug">
              Cero tiempo perdido respondiendo audios.
            </p>
          </div>

          <div className="bg-neutral-900/90 border border-lime-400/30 p-2.5 rounded-xl">
            <span className="text-xl">💵</span>
            <h4 className="font-heading font-extrabold text-xs sm:text-sm text-white mt-1">
              Zelle & Apple Pay
            </h4>
            <p className="text-[10px] text-gray-400 leading-snug">
              Cobros directos en USD sin comisiones.
            </p>
          </div>

          <div className="bg-neutral-900/90 border border-lime-400/30 p-2.5 rounded-xl">
            <span className="text-xl">🚀</span>
            <h4 className="font-heading font-extrabold text-xs sm:text-sm text-white mt-1">
              Ventas en 2 Clicks
            </h4>
            <p className="text-[10px] text-gray-400 leading-snug">
              Fácil y directo al WhatsApp de tu negocio.
            </p>
          </div>
        </div>

        {/* The Golden Manifesto Banner */}
        <div className="bg-neutral-950 border-2 border-lime-400 rounded-2xl p-4 my-4 shadow-[0_0_20px_rgba(16,232,54,0.25)] relative overflow-hidden">
          <p className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-wide leading-tight">
            Necesitás una app que haga lo que <span className="text-[#10E836]">tu negocio necesita.</span>
          </p>

          <div className="mt-3 pt-2.5 border-t border-neutral-800 flex items-center justify-center gap-2">
            <span className="text-lg">🔥</span>
            <span className="font-heading font-black text-sm tracking-wider text-white">
              METELE <span className="text-[#10E836]">APP$</span>
            </span>
            <span className="text-gray-400 text-xs">• Promoción especial activa</span>
          </div>
        </div>

        {/* Direct Call to Action */}
        <div className="mt-2">
          <a
            href={createWhatsAppUrl("¡Hola METELE APPS! 🔥 Quiero transformar mi negocio con una Mini App con la Promoción activa.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full relative overflow-hidden inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#25D366] via-[#10E836] to-[#25D366] text-black font-heading font-black text-xs sm:text-sm py-3.5 px-4 rounded-2xl shadow-[0_0_25px_rgba(37,211,102,0.8)] btn-pulsing-intense active:scale-95 transition-all uppercase tracking-wide group"
          >
            <div className="absolute inset-0 w-1/3 h-full bg-white/40 skew-x-[-25deg] animate-shimmer pointer-events-none" />
            <MessageCircle className="w-5 h-5 fill-black text-black group-hover:rotate-12 transition-transform shrink-0" />
            <span>HACE CLICKS AHORA !! Promoción 🔥</span>
          </a>
          <p className="text-[10px] text-gray-400 mt-2 font-medium">
            Atención rápida y personalizada vía WhatsApp
          </p>
        </div>

      </div>
    </section>
  );
};

