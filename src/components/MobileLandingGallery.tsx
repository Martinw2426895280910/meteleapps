import React, { useState } from 'react';
import { Smartphone, ExternalLink, Sparkles, ChevronRight, Eye, Layers, CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, DollarSign } from 'lucide-react';
import { createWhatsAppUrl, DISPLAY_PHONE_INTL } from '../data/catalogData';
import { audioEngine } from '../utils/audioEngine';

interface MockupExample {
  id: string;
  title: string;
  category: string;
  badge: string;
  image: string;
  flag: string;
  tagline: string;
  visualChips: { label: string; icon: string }[];
  whatsappPrompt: string;
}

const MOCKUP_EXAMPLES: MockupExample[] = [
  {
    id: 'supermercado',
    title: 'Supermercado & Bodega Sudamericana',
    category: 'Yerba, Carnes, Dulces, Quesos & Abarrotes',
    badge: 'MERCADO LATINO USA',
    image: '/assets/latino_market_usa_1790051250825.jpg',
    flag: '🇺🇸🇦🇷🇨🇴🇻🇪',
    tagline: 'Venta online de productos sudamericanos en EE.UU.',
    visualChips: [
      { label: 'Cobros con Zelle & Tarjetas', icon: '💵' },
      { label: 'Envíos locales y todo USA', icon: '📦' },
      { label: 'Precios actualizados en USD', icon: '💲' },
      { label: 'Sin comisiones abusivas', icon: '⚡' }
    ],
    whatsappPrompt: '¡Hola METELE APPS! 🔥 Tengo un supermercado/bodega sudamericana en EE.UU. y quiero mi tienda online móvil.'
  },
  {
    id: 'restaurante',
    title: 'Restaurante, Parrilla & Delivery',
    category: 'Empanadas, Asados, Ceviche & Comida Casera',
    badge: 'GASTRONOMÍA LATINA',
    image: '/assets/south_american_food_usa_1790051262235.jpg',
    flag: '🇺🇸🥩🥟',
    tagline: 'Pedidos directos sin pagar 30% a DoorDash ni UberEats',
    visualChips: [
      { label: '$0 Comisiones por plato', icon: '🚫' },
      { label: 'Take-out y Delivery con mapa', icon: '🛵' },
      { label: 'Pagos Apple Pay & Zelle', icon: '💳' },
      { label: 'Pedido directo a WhatsApp y cocina', icon: '💬' }
    ],
    whatsappPrompt: '¡Hola METELE APPS! 🔥 Tengo un restaurante/delivery sudamericano en USA y quiero vender directo sin pagar el 30% a apps.'
  },
  {
    id: 'moda',
    title: 'Boutique de Ropa & Moda Latina',
    category: 'Streetwear, Camisetas, Calzado & Accesorios',
    badge: 'TIENDA DE MODA USA',
    image: '/assets/latino_apparel_usa_1790051272608.jpg',
    flag: '🇺🇸👕👟',
    tagline: 'Catálogo de alta velocidad para vender por Instagram & TikTok',
    visualChips: [
      { label: 'Filtro por talle y color', icon: '🎨' },
      { label: 'Envíos por USPS / UPS en USA', icon: '🚚' },
      { label: 'Checkout rápido a WhatsApp', icon: '🛍️' },
      { label: 'Galería HD para celular', icon: '📸' }
    ],
    whatsappPrompt: '¡Hola METELE APPS! 🔥 Quiero una tienda móvil para vender indumentaria/calzado latino en Estados Unidos.'
  },
  {
    id: 'panaderia',
    title: 'Panadería, Facturas & Tortas',
    category: 'Medialunas, Pan Dulce & Tortas para Cumpleaños',
    badge: 'BAKERY LATINA',
    image: '/assets/latino_bakery_usa_1790051284304.jpg',
    flag: '🇺🇸🥐🍰',
    tagline: 'Pedidos con fecha de entrega anticipada para la comunidad latina',
    visualChips: [
      { label: 'Calendario de entrega / pickup', icon: '📅' },
      { label: 'Seña inmediata por Zelle', icon: '💰' },
      { label: 'Tortas y catering personalizado', icon: '🎉' },
      { label: 'Catálogo tentador en celular', icon: '🍰' }
    ],
    whatsappPrompt: '¡Hola METELE APPS! 🔥 Tengo una panadería/pastelería latina en USA y quiero recibir pedidos organizados por celular.'
  },
  {
    id: 'barberia',
    title: 'Barber Shop & Salón Latino',
    category: 'Cortes, Barba, Alisados, Estética & Uñas',
    badge: 'AGENDA 24/7 USA',
    image: '/assets/mobile_barber.jpg',
    flag: '🇺🇸💈✂️',
    tagline: 'Turnos automatizados en español para clientes hispanos',
    visualChips: [
      { label: 'El cliente elige día y hora solo', icon: '⏰' },
      { label: 'Recordatorios para evitar faltas', icon: '🔔' },
      { label: 'Fotos de cortes y servicios', icon: '💇' },
      { label: 'Agenda multi-profesionales', icon: '👥' }
    ],
    whatsappPrompt: '¡Hola METELE APPS! 🔥 Quiero una mini app con Reserva de Turnos 24/7 para mi barbería/salón en EE.UU.'
  },
  {
    id: 'paqueteria',
    title: 'Envíos & Encomiendas a Sudamérica',
    category: 'Cargas Aéreas, Marítimas & Paquetería Puerta a Puerta',
    badge: 'LOGÍSTICA USA-LATAM',
    image: '/assets/mobile_store.jpg',
    flag: '🇺🇸📦✈️',
    tagline: 'Cotizador instantáneo de envíos hacia Argentina, Colombia, etc.',
    visualChips: [
      { label: 'Calculadora de libras y cajas', icon: '⚖️' },
      { label: 'Tracking por WhatsApp directo', icon: '📍' },
      { label: 'Formulario de retiro a domicilio', icon: '📋' },
      { label: 'Atención 100% en español', icon: '💬' }
    ],
    whatsappPrompt: '¡Hola METELE APPS! 🔥 Tengo una empresa de envíos/paquetería a Sudamérica desde USA y quiero un cotizador móvil.'
  }
];

export const MobileLandingGallery: React.FC = () => {
  const [selectedExample, setSelectedExample] = useState<MockupExample>(MOCKUP_EXAMPLES[0]);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  return (
    <section id="ejemplos" className="px-3 py-6 bg-[#040705] border-t border-lime-500/30 relative">
      <div className="max-w-md mx-auto">

        {/* Section Header - Highly Visual */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-1.5 bg-lime-500/10 border border-lime-400/40 px-3 py-1 rounded-full text-lime-400 text-xs font-bold font-heading mb-1.5 shadow-sm">
            <span className="text-sm">🇺🇸</span>
            <span>ECOMMERCES REALES EN CELULAR</span>
          </div>

          <h2 className="font-heading font-black text-xl sm:text-2xl text-white tracking-wide uppercase leading-tight">
            TU COMERCIO EN <span className="text-[#10E836]">ESTADOS UNIDOS</span>
          </h2>
          
          <p className="text-xs text-gray-300 mt-1">
            Tocá cada celular para ver la tienda diseñada para tu rubro en EE.UU.:
          </p>
        </div>

        {/* 6 Quick Category Chips - Highly Visual Pill Scroller */}
        <div className="flex gap-1.5 overflow-x-auto pb-2 mb-3 no-scrollbar">
          {MOCKUP_EXAMPLES.map((ex) => {
            const isSelected = ex.id === selectedExample.id;
            return (
              <button
                key={ex.id}
                onClick={() => {
                  audioEngine.playSelect();
                  setSelectedExample(ex);
                }}
                className={`px-2.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 border ${
                  isSelected
                    ? 'bg-lime-400 text-black border-lime-400 shadow-[0_0_12px_rgba(16,232,54,0.5)] scale-102 font-black'
                    : 'bg-neutral-900 text-gray-300 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <span>{ex.flag.slice(0, 4)}</span>
                <span className="font-heading text-[11px]">{ex.badge}</span>
              </button>
            );
          })}
        </div>

        {/* Mobile Mockup Hero Presentation Card */}
        <div className="bg-neutral-950 rounded-3xl border-2 border-lime-400/60 p-3 sm:p-4 shadow-[0_0_30px_rgba(16,232,54,0.2)] relative overflow-hidden">
          
          {/* Top Title Bar of Selected Mockup */}
          <div className="flex items-center justify-between gap-2 border-b border-neutral-800/80 pb-2.5 mb-3">
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="bg-lime-400/20 border border-lime-400/40 text-lime-300 text-[10px] font-heading font-extrabold px-2 py-0.5 rounded-full uppercase">
                  {selectedExample.badge}
                </span>
                <span className="text-xs">{selectedExample.flag}</span>
              </div>
              <h3 className="font-heading font-black text-sm sm:text-base text-white mt-0.5 leading-tight truncate">
                {selectedExample.title}
              </h3>
            </div>

            <button
              onClick={() => {
                audioEngine.playImageExpand();
                setFullscreenImage(selectedExample.image);
              }}
              className="bg-neutral-900 border border-neutral-700 hover:border-lime-400 text-lime-400 px-2.5 py-1.5 rounded-xl flex items-center gap-1 text-[10px] font-bold transition-all shrink-0 active:scale-95"
              title="Ampliar pantalla de celular"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Ampliar</span>
            </button>
          </div>

          {/* Smartphone Frame with Realistic Bezel */}
          <div className="relative mx-auto max-w-[280px] sm:max-w-[300px]">
            {/* Phone Outer Chassis Frame */}
            <div className="rounded-[36px] p-2 bg-[#1a231b] border-3 border-lime-400/80 shadow-[0_0_25px_rgba(16,232,54,0.35)] relative">
              
              {/* Dynamic Island / Speaker Notch */}
              <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-black rounded-full z-20 flex items-center justify-end px-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
              </div>

              {/* Screen Container */}
              <div 
                onClick={() => {
                  audioEngine.playImageExpand();
                  setFullscreenImage(selectedExample.image);
                }}
                className="relative rounded-[28px] overflow-hidden aspect-[9/16] bg-black cursor-pointer group shadow-inner"
              >
                <img
                  src={selectedExample.image}
                  alt={selectedExample.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Floating Tap to Expand Chip */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/85 backdrop-blur-md border border-lime-400/70 px-3 py-1 rounded-full flex items-center gap-1 text-[10px] text-lime-300 font-bold shadow-lg whitespace-nowrap">
                  <Eye className="w-3 h-3 text-lime-400" />
                  <span>Tocá para ver pantalla completa</span>
                </div>
              </div>
            </div>
          </div>

          {/* Graphic Feature Chips (No long text blocks) */}
          <div className="grid grid-cols-2 gap-1.5 my-3">
            {selectedExample.visualChips.map((chip, idx) => (
              <div 
                key={idx}
                className="bg-neutral-900/90 border border-neutral-800 rounded-xl p-1.5 flex items-center gap-1.5"
              >
                <span className="text-sm shrink-0">{chip.icon}</span>
                <span className="text-[10px] font-medium text-gray-200 leading-tight truncate">
                  {chip.label}
                </span>
              </div>
            ))}
          </div>

          {/* Action WhatsApp Button - Customized for this Ecommerce */}
          <a
            href={createWhatsAppUrl(selectedExample.whatsappPrompt)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full relative overflow-hidden bg-gradient-to-r from-[#25D366] via-[#10E836] to-[#25D366] bg-[length:200%_auto] text-black font-heading font-black text-xs sm:text-sm py-3 px-3 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.6)] btn-pulsing-glow active:scale-95 transition-all uppercase tracking-wide group"
          >
            <div className="absolute inset-0 w-1/3 h-full bg-white/40 skew-x-[-25deg] animate-shimmer pointer-events-none" />
            <MessageCircle className="w-4 h-4 fill-black text-black group-hover:scale-110 transition-transform shrink-0" />
            <span className="truncate">Quiero este Ecommerce para mi Comercio ({DISPLAY_PHONE_INTL})</span>
          </a>

        </div>

        {/* Visual Mini Carousel: 6 Real Mobile Screens to tap */}
        <div className="mt-4">
          <p className="text-[10px] font-bold text-gray-400 text-center uppercase tracking-wider mb-2 font-heading">
            Elegí tu rubro para ver su pantalla en celular:
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
            {MOCKUP_EXAMPLES.map((ex) => {
              const isSelected = selectedExample.id === ex.id;
              return (
                <button
                  key={ex.id}
                  onClick={() => {
                    audioEngine.playSelect();
                    setSelectedExample(ex);
                  }}
                  className={`relative aspect-[9/14] rounded-xl overflow-hidden border-2 transition-all flex flex-col justify-end p-1 text-left ${
                    isSelected
                      ? 'border-lime-400 ring-2 ring-lime-400/60 scale-102 shadow-[0_0_15px_rgba(16,232,54,0.6)]'
                      : 'border-neutral-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={ex.image}
                    alt={ex.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="relative z-10">
                    <span className="text-xs">{ex.flag.slice(0, 2)}</span>
                    <p className="text-[9px] font-black text-white leading-tight font-heading truncate">
                      {ex.badge.split(' ')[0]}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Fullscreen Image Modal for Deep Inspection */}
      {fullscreenImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 cursor-pointer"
          onClick={() => setFullscreenImage(null)}
        >
          <div className="relative max-w-sm w-full max-h-[92vh] flex flex-col items-center">
            <button
              onClick={() => setFullscreenImage(null)}
              className="absolute -top-9 right-0 bg-neutral-800 hover:bg-neutral-700 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm"
            >
              ✕
            </button>
            <img
              src={fullscreenImage}
              alt="Mockup Ampliado"
              className="w-full max-h-[82vh] object-contain rounded-2xl border-2 border-lime-400 shadow-[0_0_30px_rgba(16,232,54,0.5)]"
            />
            <p className="text-[11px] text-lime-400 font-bold mt-2 font-heading">
              Tocá en cualquier parte para cerrar
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
