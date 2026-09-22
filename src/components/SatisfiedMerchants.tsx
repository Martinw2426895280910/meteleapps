import React, { useState } from 'react';
import { Star, CheckCircle2, TrendingUp, Sparkles, MessageCircle, Maximize2, X, Store, Award } from 'lucide-react';
import { createWhatsAppUrl } from '../data/catalogData';
import { audioEngine } from '../utils/audioEngine';

interface MerchantReview {
  id: string;
  name: string;
  business: string;
  location: string;
  badge: string;
  metric: string;
  image: string;
  highlight: string;
  ecommerceType: string;
}

const SATISFIED_MERCHANTS: MerchantReview[] = [
  {
    id: 'restaurante',
    name: 'Carlos & Sofía Gómez',
    business: 'Parrilla & Empanadas La Criolla',
    location: 'Miami, FL 🇺🇸',
    badge: 'Sin 30% de DoorDash',
    metric: '+62% Pedidos Directos',
    image: '/assets/merchant_restaurant_owner_1790074843510.jpg',
    highlight: 'Los clientes piden directo desde Instagram y pagan por Zelle sin comisiones.',
    ecommerceType: 'Gastronomía & Delivery'
  },
  {
    id: 'bodega',
    name: 'Mariano Silva',
    business: 'Mercado Latino & Bodega',
    location: 'Orlando, FL 🇺🇸',
    badge: 'Envíos en todo EE.UU.',
    metric: 'Ventas 24/7 en USD',
    image: '/assets/merchant_grocery_owner_1790074855731.jpg',
    highlight: 'Vendemos yerba, dulces y carnes argentinas a familias latinas de todo USA.',
    ecommerceType: 'Supermercado & Envíos'
  },
  {
    id: 'pasteleria',
    name: 'Valeria & Lucas Rojas',
    business: 'Pastelería & Repostería del Sur',
    location: 'Houston, TX 🇺🇸',
    badge: 'Seña por Zelle Instantánea',
    metric: '100% Agenda Completa',
    image: '/assets/merchant_bakery_owner_1790074869146.jpg',
    highlight: 'Pedidos de tortas para eventos con fecha y seña lista sin audios eternos.',
    ecommerceType: 'Tortas & Eventos'
  },
  {
    id: 'barberia',
    name: 'Mateo Mendoza',
    business: 'Latino Barber Studio Miami',
    location: 'Miami, FL 🇺🇸',
    badge: 'Turnos 24/7 en Español',
    metric: 'Cero Huecos Vacíos',
    image: '/assets/merchant_barber_owner_1790074882214.jpg',
    highlight: 'Los clientes eligen su horario y profesional en 2 toques desde el celular.',
    ecommerceType: 'Barber Shop & Salón'
  }
];

export const SatisfiedMerchants: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  const handlePhotoClick = (img: string) => {
    audioEngine.playImageExpand();
    setActivePhoto(img);
  };

  return (
    <section id="comerciantes" className="px-4 py-8 bg-[#050806] border-t border-lime-500/20">
      <div className="max-w-md mx-auto">
        
        {/* Visual Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 bg-lime-500/10 border border-lime-400/40 px-3 py-1 rounded-full text-lime-400 text-xs font-black tracking-wider uppercase font-heading mb-2">
            <Sparkles className="w-3.5 h-3.5 text-lime-400 animate-pulse" />
            <span>RESULTADOS REALES EN USA</span>
          </div>

          <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-wide uppercase leading-tight">
            COMERCIANTES <span className="text-[#10E836]">SATISFECHOS</span>
          </h2>

          <div className="flex items-center justify-center gap-1.5 mt-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-gray-200">5.0 / 5.0 en Estados Unidos</span>
          </div>
        </div>

        {/* 4 Merchant Visual Cards */}
        <div className="space-y-5">
          {SATISFIED_MERCHANTS.map((merchant) => (
            <div
              key={merchant.id}
              className="bg-neutral-950 rounded-2xl border-2 border-lime-500/40 hover:border-lime-400 p-3.5 shadow-[0_4px_25px_rgba(0,0,0,0.8)] transition-all group"
            >
              {/* Photo Showcase with Badge */}
              <div 
                className="relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer bg-neutral-900 border border-neutral-800"
                onClick={() => handlePhotoClick(merchant.image)}
              >
                <img
                  src={merchant.image}
                  alt={`${merchant.name} - ${merchant.business}`}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Top Overlay Badges */}
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                  <span className="bg-black/85 backdrop-blur-md text-lime-400 border border-lime-400/50 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                    <Store className="w-3 h-3 text-lime-400" />
                    {merchant.badge}
                  </span>

                  <span className="bg-[#10E836] text-black font-black text-[10px] px-2 py-0.5 rounded-full shadow-md flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 stroke-[2.5]" />
                    {merchant.metric}
                  </span>
                </div>

                {/* Bottom Overlay with Zoom hint */}
                <div className="absolute bottom-2.5 right-2.5 bg-black/75 backdrop-blur-md text-white/90 p-1.5 rounded-lg border border-white/20">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Merchant Details */}
              <div className="mt-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-heading font-black text-base text-white leading-tight">
                      {merchant.name}
                    </h3>
                    <p className="text-xs font-bold text-lime-400 font-heading">
                      {merchant.business}
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-gray-300 bg-neutral-900 px-2 py-0.5 rounded-md border border-neutral-800 whitespace-nowrap">
                    {merchant.location}
                  </span>
                </div>

                {/* Highlight Quote */}
                <p className="text-xs text-gray-300 mt-2 italic bg-neutral-900/90 border-l-2 border-lime-400 p-2 rounded-r-lg">
                  "{merchant.highlight}"
                </p>

                {/* Action CTA Button strictly requested by user */}
                <div className="mt-3">
                  <a
                    href={createWhatsAppUrl(`¡Hola! 🔥 Vi el testimonio de ${merchant.name} (${merchant.business}) y quiero mi Mini App con la Promoción activa para mi comercio en USA.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => audioEngine.playSuccess()}
                    className="w-full relative overflow-hidden inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#25D366] via-[#10E836] to-[#25D366] text-black font-heading font-black text-xs sm:text-sm py-2.5 px-4 rounded-xl shadow-[0_0_20px_rgba(37,211,102,0.7)] btn-pulsing-intense active:scale-95 transition-transform uppercase tracking-wider group/btn"
                  >
                    <div className="absolute inset-0 w-1/3 h-full bg-white/40 skew-x-[-25deg] animate-shimmer pointer-events-none" />
                    <MessageCircle className="w-4 h-4 fill-black text-black shrink-0" />
                    <span className="font-black text-black drop-shadow-sm">
                      HACE CLICKS AHORA !! Promoción 🔥
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Bottom Section CTA */}
        <div className="mt-6 text-center">
          <a
            href={createWhatsAppUrl("¡Hola! 🔥 Quiero la Promoción especial para tener mi Mini App Ecommerce en Estados Unidos hoy mismo.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => audioEngine.playTap()}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#10E836] hover:bg-[#00c929] text-black font-heading font-black text-sm sm:text-base py-3.5 px-5 rounded-2xl shadow-[0_0_30px_rgba(16,232,54,0.9)] btn-pulsing-intense active:scale-95 transition-all uppercase tracking-wide"
          >
            <Sparkles className="w-4 h-4 fill-black" />
            <span>HACE CLICKS AHORA !! Promoción 🔥</span>
          </a>
        </div>

      </div>

      {/* Lightbox Modal for Photo Inspection */}
      {activePhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setActivePhoto(null)}
        >
          <div className="relative max-w-sm w-full bg-neutral-950 rounded-2xl border-2 border-lime-400 p-2 overflow-hidden shadow-[0_0_40px_rgba(16,232,54,0.4)]">
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/80 border border-white/30 text-white flex items-center justify-center hover:bg-black"
            >
              <X className="w-4 h-4" />
            </button>
            <img
              src={activePhoto}
              alt="Comerciante Satisfecho"
              className="w-full rounded-xl object-cover aspect-[4/3]"
              referrerPolicy="no-referrer"
            />
            <div className="p-3 text-center">
              <span className="text-xs font-bold text-lime-400 font-heading">
                Comercio Sudamericano Verificado en EE.UU. 🇺🇸
              </span>
              <div className="mt-2">
                <a
                  href={createWhatsAppUrl("¡Hola! 🔥 Quiero mi Mini App para mi negocio en Estados Unidos con la Promoción activa.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-black font-heading font-black text-xs py-2 rounded-xl"
                >
                  <span>HACE CLICKS AHORA !! Promoción 🔥</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
