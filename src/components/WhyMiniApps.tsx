import React from 'react';
import { Rocket, Check, TrendingUp, Users, CalendarCheck, DollarSign, Smartphone, MessageCircle } from 'lucide-react';
import { DISPLAY_PHONE, DISPLAY_PHONE_INTL, createWhatsAppUrl } from '../data/catalogData';

export const WhyMiniApps: React.FC = () => {
  return (
    <section className="px-4 py-8 bg-gradient-to-b from-[#060a07] via-[#09140c] to-[#060907] border-t border-lime-500/20 text-center">
      <div className="max-w-md mx-auto">

        {/* Header Eyebrow */}
        <div className="inline-flex items-center gap-1.5 bg-lime-500/10 border border-lime-400/30 px-3 py-1 rounded-full text-lime-400 text-xs font-bold font-heading mb-3">
          <Rocket className="w-3.5 h-3.5 text-lime-400" />
          <span>LA VENTAJA COMPETITIVA</span>
        </div>

        {/* Title */}
        <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-wide uppercase leading-tight mb-3">
          🚀 TU NEGOCIO + <span className="text-[#10E836]">UNA MINI APP</span>
        </h2>

        {/* The 4 Core Pillars from the Prompt */}
        <div className="grid grid-cols-2 gap-2.5 my-5 text-left">
          <div className="bg-neutral-900/90 border border-lime-400/30 p-3 rounded-2xl">
            <div className="w-8 h-8 rounded-xl bg-lime-500/20 text-lime-400 flex items-center justify-center mb-1.5 font-bold">
              ℹ️
            </div>
            <h4 className="font-heading font-extrabold text-sm text-white leading-tight">
              Más información.
            </h4>
            <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">
              Tus fotos, listas de precios y catálogo disponibles 24/7 sin enviar PDFs pesados.
            </p>
          </div>

          <div className="bg-neutral-900/90 border border-lime-400/30 p-3 rounded-2xl">
            <div className="w-8 h-8 rounded-xl bg-lime-500/20 text-lime-400 flex items-center justify-center mb-1.5 font-bold">
              🗓️
            </div>
            <h4 className="font-heading font-extrabold text-sm text-white leading-tight">
              Más organización.
            </h4>
            <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">
              Turnos y pedidos automáticos. Tu día ordenado sin perder horas respondiendo mensajes.
            </p>
          </div>

          <div className="bg-neutral-900/90 border border-lime-400/30 p-3 rounded-2xl">
            <div className="w-8 h-8 rounded-xl bg-lime-500/20 text-lime-400 flex items-center justify-center mb-1.5 font-bold">
              💬
            </div>
            <h4 className="font-heading font-extrabold text-sm text-white leading-tight">
              Más contacto.
            </h4>
            <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">
              Canal directo a WhatsApp con consultas claras y clientes registrados en tu base propia.
            </p>
          </div>

          <div className="bg-neutral-900/90 border border-lime-400/30 p-3 rounded-2xl">
            <div className="w-8 h-8 rounded-xl bg-lime-500/20 text-lime-400 flex items-center justify-center mb-1.5 font-bold">
              💰
            </div>
            <h4 className="font-heading font-extrabold text-sm text-white leading-tight">
              Más ventas.
            </h4>
            <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">
              Facilidad total para comprar, reservar o pedir presupuestos en 2 toques desde el celular.
            </p>
          </div>
        </div>

        {/* The Golden Manifesto Banner */}
        <div className="bg-neutral-950 border-2 border-lime-400 rounded-2xl p-4 my-6 shadow-[0_0_20px_rgba(16,232,54,0.25)] relative overflow-hidden">
          <div className="absolute top-0 right-0 translate-x-4 -translate-y-4 w-20 h-20 bg-lime-500/10 rounded-full blur-xl pointer-events-none" />

          <p className="text-sm sm:text-base font-semibold text-gray-300 mb-1">
            No necesitás una app gigante.
          </p>
          <p className="font-heading font-black text-lg sm:text-xl text-white uppercase tracking-wide leading-tight">
            Necesitás una app que haga lo que <span className="text-[#10E836]">tu negocio necesita.</span>
          </p>

          <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-center gap-2">
            <span className="text-xl">🔥</span>
            <span className="font-heading font-black text-base tracking-wider text-white">
              METELE <span className="text-[#10E836]">APP$</span>
            </span>
            <span className="text-gray-400 text-xs">— Mini apps para negocios reales.</span>
          </div>
        </div>

        {/* Direct Call to Action */}
        <div className="mt-2">
          <a
            href={createWhatsAppUrl("¡Hola METELE APPS! 🔥 Quiero transformar mi negocio con una Mini App. ¿Podemos hablar de mi proyecto?")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full relative overflow-hidden inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#25D366] via-[#10E836] to-[#25D366] text-black font-heading font-black text-sm sm:text-base py-3.5 px-6 rounded-2xl shadow-[0_0_25px_rgba(37,211,102,0.8)] btn-pulsing-intense active:scale-95 transition-all uppercase tracking-wide group"
          >
            <div className="absolute inset-0 w-1/3 h-full bg-white/40 skew-x-[-25deg] animate-shimmer pointer-events-none" />
            <MessageCircle className="w-5 h-5 fill-black text-black group-hover:rotate-12 transition-transform shrink-0" />
            <span>Hablar con la Agencia Digital ({DISPLAY_PHONE_INTL})</span>
          </a>
          <p className="text-[11px] text-gray-400 mt-2">
            Atención rápida y personalizada vía WhatsApp: <strong className="text-lime-400 font-mono">{DISPLAY_PHONE_INTL}</strong>
          </p>
        </div>

      </div>
    </section>
  );
};
