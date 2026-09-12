import React, { useState } from 'react';
import { Smartphone, ExternalLink, Sparkles, ChevronRight, Eye, Layers, CheckCircle2, MessageCircle } from 'lucide-react';
import { createWhatsAppUrl, DISPLAY_PHONE_INTL } from '../data/catalogData';
import { audioEngine } from '../utils/audioEngine';

interface MockupExample {
  id: string;
  title: string;
  category: string;
  badge: string;
  image: string;
  accentColor: string;
  headline: string;
  features: string[];
  clientOpinion: string;
  whatsappPrompt: string;
}

const MOCKUP_EXAMPLES: MockupExample[] = [
  {
    id: 'gastro',
    title: 'Landing & Mini App Gastronómica',
    category: 'Restaurantes, Rotiserías & Delivery',
    badge: 'MÁS PEDIDO',
    image: '/assets/mobile_restaurant.jpg',
    accentColor: '#10E836',
    headline: 'Menú digital con carrito de compras directo a WhatsApp sin intermediarios',
    features: [
      'Sin pagar 20% a 30% a apps de envíos',
      'El cliente pide con 2 clics',
      'Recibís el pedido ordenado con dirección y total exacto',
      'Actualizás precios y platos al instante desde tu teléfono'
    ],
    clientOpinion: '"Aumentamos un 45% los pedidos directos por WhatsApp el primer fin de semana."',
    whatsappPrompt: '¡Hola METELE APPS! 🔥 Me encantó la Mini App estilo Gastronómica / Delivery para mi local. ¿Me cuentan costos y cómo empezar?'
  },
  {
    id: 'turnos',
    title: 'Landing & Mini App de Turnos & Citas',
    category: 'Barberías, Peluquerías, Estética & Salud',
    badge: 'AUTOMATIZADO',
    image: '/assets/mobile_barber.jpg',
    accentColor: '#00F0FF',
    headline: 'Agenda abierta 24/7 donde el cliente reserva día y hora solo',
    features: [
      'Chau a responder audios eternos para coordinar un horario',
      'Bloqueo automático de turnos ya tomados',
      'Recordatorios automáticos para que no falten',
      'Catálogo visual de cortes, tratamientos y precios'
    ],
    clientOpinion: '"Se terminaron los huecos vacíos y los clientes que se olvidaban de su cita."',
    whatsappPrompt: '¡Hola METELE APPS! 🔥 Quiero una Mini App con Reserva de Turnos 24/7 para mi estética/barbería/peluquería.'
  },
  {
    id: 'store',
    title: 'Landing & Tienda Móvil Ecommerce',
    category: 'Moda, Indumentaria, Calzado & Accesorios',
    badge: 'VENTAS 24/7',
    image: '/assets/mobile_store.jpg',
    accentColor: '#FFA500',
    headline: 'Catálogo de alta conversión con filtros por talle, color y stock',
    features: [
      'Galería de fotos ultra veloz en celular',
      'Filtro instantáneo por categoría y talle',
      'Botonera directa de WhatsApp con el producto elegido',
      'Integración opcional de links de cobro (Mercado Pago, etc.)'
    ],
    clientOpinion: '"La gente entra a la bio de Instagram y compra directo sin dar vueltas."',
    whatsappPrompt: '¡Hola METELE APPS! 🔥 Quiero una Tienda Móvil con catálogo para vender ropa/productos desde Instagram.'
  },
  {
    id: 'fitness',
    title: 'Landing & Mini App Gimnasio & Clases',
    category: 'Gimnasios, Crossfit, Profesores & Deportes',
    badge: 'ALTA FIDELIZACIÓN',
    image: '/assets/mobile_fitness.jpg',
    accentColor: '#25D366',
    headline: 'Control de membresías, rutinas del día y reserva de cupos en clases',
    features: [
      'Los alumnos reservan su lugar en el box/clase',
      'Rutina diaria y progresos en la palma de la mano',
      'Avisos de cuota por vencer automáticos',
      'Planes mensuales y promociones exclusivas'
    ],
    clientOpinion: '"Mis alumnos están fascinados y la organización de los profes mejoró al 100%."',
    whatsappPrompt: '¡Hola METELE APPS! 🔥 Quiero una Mini App para mi gimnasio / centro de entrenamiento.'
  }
];

export const MobileLandingGallery: React.FC = () => {
  const [selectedExample, setSelectedExample] = useState<MockupExample>(MOCKUP_EXAMPLES[0]);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  return (
    <section id="ejemplos" className="px-4 py-8 bg-[#040705] border-t border-lime-500/30 relative">
      <div className="max-w-md mx-auto">

        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 bg-lime-500/10 border border-lime-400/30 px-3 py-1 rounded-full text-lime-400 text-xs font-bold font-heading mb-2">
            <Smartphone className="w-3.5 h-3.5 animate-pulse" />
            <span>MOCKUPS REALES EN CELULAR</span>
          </div>

          <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-wide uppercase leading-tight">
            EJEMPLOS DE <span className="text-[#10E836]">MINI APPS & LANDINGS</span>
          </h2>
          
          <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
            Mirá cómo se ven las soluciones móviles que diseñamos para cada rubro. Diseñadas para cargar en 1 segundo y convertir visitas en clientes reales.
          </p>
        </div>

        {/* Interactive Selector Tabs */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {MOCKUP_EXAMPLES.map((ex) => {
            const isSelected = ex.id === selectedExample.id;
            return (
              <button
                key={ex.id}
                onClick={() => {
                  audioEngine.playSelect();
                  setSelectedExample(ex);
                }}
                className={`p-2.5 rounded-xl text-left border transition-all relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'bg-neutral-900 border-lime-400 shadow-[0_0_15px_rgba(16,232,54,0.3)] ring-1 ring-lime-400/50'
                    : 'bg-neutral-950/80 border-neutral-800/80 hover:border-neutral-700 text-gray-400'
                }`}
              >
                {isSelected && (
                  <span className="absolute top-0 right-0 w-8 h-8 bg-lime-400/20 rounded-bl-xl flex items-center justify-center">
                    <Sparkles className="w-3.5 h-3.5 text-lime-400" />
                  </span>
                )}
                <span className="text-[10px] font-heading font-black text-lime-400 uppercase tracking-wide">
                  {ex.badge}
                </span>
                <p className="font-heading font-bold text-xs text-white mt-1 leading-tight line-clamp-2">
                  {ex.title}
                </p>
                <span className="text-[9px] text-gray-400 mt-1 line-clamp-1">
                  {ex.category}
                </span>
              </button>
            );
          })}
        </div>

        {/* Showcase Spotlight Card */}
        <div className="bg-neutral-950 rounded-3xl border-2 border-lime-400/60 p-4 shadow-[0_0_30px_rgba(16,232,54,0.15)] relative overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-44 h-44 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Badge & Title */}
          <div className="flex items-center justify-between border-b border-neutral-800/80 pb-3 mb-3">
            <div>
              <span className="bg-lime-400/20 border border-lime-400/40 text-lime-300 text-[10px] font-heading font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                {selectedExample.category}
              </span>
              <h3 className="font-heading font-black text-base sm:text-lg text-white mt-1 leading-tight">
                {selectedExample.title}
              </h3>
            </div>
            <button
              onClick={() => {
                audioEngine.playImageExpand();
                setFullscreenImage(selectedExample.image);
              }}
              className="bg-neutral-900 border border-neutral-700 hover:border-lime-400 text-lime-400 p-2 rounded-xl flex items-center gap-1 text-[10px] font-bold transition-all shrink-0"
              title="Ver en grande"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Ampliar</span>
            </button>
          </div>

          {/* Smartphone Mockup Visual Presentation */}
          <div 
            onClick={() => {
              audioEngine.playImageExpand();
              setFullscreenImage(selectedExample.image);
            }}
            className="relative w-full rounded-2xl overflow-hidden border border-lime-500/30 bg-black aspect-[9/14] cursor-pointer group shadow-2xl mb-4"
          >
            <img
              src={selectedExample.image}
              alt={selectedExample.title}
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              loading="lazy"
            />
            {/* Shimmer Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 opacity-60 group-hover:opacity-40 transition-opacity" />
            
            {/* Click to zoom badge */}
            <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md border border-lime-400/60 px-2.5 py-1 rounded-full flex items-center gap-1.5 text-xs text-lime-300 font-bold shadow-lg">
              <Eye className="w-3.5 h-3.5 text-lime-400" />
              <span>Tocar para ver completo</span>
            </div>

            <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-white/20 px-2 py-0.5 rounded-md text-[10px] font-mono text-gray-200">
              📱 Interfaz 100% Celular
            </div>
          </div>

          {/* Description and Key Benefits */}
          <div className="space-y-3 mb-4">
            <p className="text-xs sm:text-sm text-gray-200 font-semibold leading-relaxed">
              💡 {selectedExample.headline}
            </p>

            <div className="bg-neutral-900/90 rounded-2xl p-3 border border-neutral-800/90 space-y-1.5">
              <p className="text-[11px] font-bold text-lime-400 font-heading uppercase tracking-wide flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Ventajas para el dueño del negocio:</span>
              </p>
              {selectedExample.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-lime-400 mt-1.5 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Testimonial Quote */}
            <div className="bg-lime-500/10 border-l-3 border-lime-400 p-2.5 rounded-r-xl">
              <p className="text-xs italic text-gray-200">
                {selectedExample.clientOpinion}
              </p>
            </div>
          </div>

          {/* Action WhatsApp Button - Pulsating with Shimmer */}
          <a
            href={createWhatsAppUrl(selectedExample.whatsappPrompt)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full relative overflow-hidden bg-gradient-to-r from-[#25D366] via-[#10E836] to-[#25D366] bg-[length:200%_auto] text-black font-heading font-black text-xs sm:text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.6)] btn-pulsing-glow active:scale-95 transition-all uppercase tracking-wide group"
          >
            {/* Shimmer light bar across button */}
            <div className="absolute inset-0 w-1/3 h-full bg-white/40 skew-x-[-25deg] animate-shimmer pointer-events-none" />
            <MessageCircle className="w-5 h-5 fill-black group-hover:rotate-12 transition-transform shrink-0" />
            <span className="truncate">Quiero este estilo para mi negocio ({DISPLAY_PHONE_INTL})</span>
          </a>

        </div>

        {/* Small thumbnail strip to tap quickly */}
        <div className="mt-4">
          <p className="text-[11px] font-bold text-gray-400 text-center uppercase tracking-wider mb-2 font-heading">
            Explorá más estilos de pantallas:
          </p>
          <div className="grid grid-cols-4 gap-2">
            {MOCKUP_EXAMPLES.map((ex) => (
              <button
                key={ex.id}
                onClick={() => {
                  audioEngine.playSelect();
                  setSelectedExample(ex);
                }}
                className={`relative aspect-[9/14] rounded-xl overflow-hidden border-2 transition-all group ${
                  selectedExample.id === ex.id
                    ? 'border-lime-400 ring-2 ring-lime-400/50 scale-102 shadow-[0_0_12px_rgba(37,211,102,0.5)]'
                    : 'border-neutral-800 opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={ex.image}
                  alt={ex.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-1">
                  <span className="text-[9px] font-bold text-white leading-none line-clamp-1">
                    {ex.badge}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setFullscreenImage(null)}
        >
          <div className="relative max-w-sm w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setFullscreenImage(null)}
              className="absolute -top-10 right-0 bg-neutral-800 hover:bg-neutral-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-base"
            >
              ✕
            </button>
            <img
              src={fullscreenImage}
              alt="Mockup Ampliado"
              className="w-full max-h-[82vh] object-contain rounded-2xl border-2 border-lime-400 shadow-[0_0_30px_rgba(16,232,54,0.4)]"
            />
            <p className="text-xs text-lime-400 font-bold mt-2 font-heading">
              Tocá en cualquier lugar para cerrar
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
