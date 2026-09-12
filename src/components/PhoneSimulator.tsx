import React, { useState } from 'react';
import { Smartphone, ShoppingBag, Calendar, Check, MessageCircle, Plus, Minus, ArrowRight, Star, Sparkles } from 'lucide-react';
import { DISPLAY_PHONE, DISPLAY_PHONE_INTL, createWhatsAppUrl } from '../data/catalogData';
import { audioEngine } from '../utils/audioEngine';

type DemoTab = 'rotiseria' | 'barberia' | 'tienda' | 'taller';

export const PhoneSimulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<DemoTab>('rotiseria');

  // Rotisería state
  const [cartItems, setCartItems] = useState<{ [key: string]: number }>({ 'empanadas': 1 });

  // Barbería state
  const [selectedService, setSelectedService] = useState('Corte Degradé + Barba ($8.500)');
  const [selectedSlot, setSelectedSlot] = useState('17:00 hs');

  // Tienda state
  const [activeCategory, setActiveCategory] = useState('Todos');

  const addQty = (id: string) => {
    audioEngine.playToggle();
    setCartItems(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeQty = (id: string) => {
    audioEngine.playTap();
    setCartItems(prev => {
      const next = { ...prev };
      if (next[id] > 1) {
        next[id]--;
      } else {
        delete next[id];
      }
      return next;
    });
  };

  const totalCart = 
    (cartItems['empanadas'] || 0) * 12000 + 
    (cartItems['pizza'] || 0) * 10500 + 
    (cartItems['milanesa'] || 0) * 14000;

  return (
    <section className="px-4 py-6 bg-gradient-to-b from-[#060907] via-[#09110a] to-[#060907] border-y border-lime-500/20">
      <div className="max-w-md mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-1.5 text-lime-400 text-xs font-bold uppercase tracking-wider font-heading mb-1">
            <Smartphone className="w-3.5 h-3.5" />
            <span>INTERACTIVO</span>
          </div>
          <h2 className="font-heading font-black text-2xl text-white tracking-wide uppercase leading-tight">
            ASÍ FUNCIONA UNA <span className="text-[#10E836]">MINI APP</span>
          </h2>
          <p className="text-xs text-gray-300 mt-1">
            Tocá los botones y probá la experiencia fluida que tendrán tus clientes desde su celular.
          </p>
        </div>

        {/* Demo Switcher Buttons */}
        <div className="flex gap-1.5 overflow-x-auto pb-2 mb-3 no-scrollbar">
          <button
            onClick={() => {
              audioEngine.playSelect();
              setActiveTab('rotiseria');
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'rotiseria'
                ? 'bg-lime-400 text-black shadow-[0_0_12px_rgba(37,211,102,0.4)]'
                : 'bg-neutral-900 text-gray-300 border border-neutral-800'
            }`}
          >
            <span>🍕 Menú & Pedidos</span>
          </button>
          <button
            onClick={() => {
              audioEngine.playSelect();
              setActiveTab('barberia');
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'barberia'
                ? 'bg-lime-400 text-black shadow-[0_0_12px_rgba(37,211,102,0.4)]'
                : 'bg-neutral-900 text-gray-300 border border-neutral-800'
            }`}
          >
            <span>💈 Turnos 24/7</span>
          </button>
          <button
            onClick={() => {
              audioEngine.playSelect();
              setActiveTab('tienda');
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'tienda'
                ? 'bg-lime-400 text-black shadow-[0_0_12px_rgba(37,211,102,0.4)]'
                : 'bg-neutral-900 text-gray-300 border border-neutral-800'
            }`}
          >
            <span>🏪 Catálogo Store</span>
          </button>
        </div>

        {/* Simulated Phone Device Frame */}
        <div className="relative rounded-[28px] border-3 border-neutral-700 bg-neutral-950 p-2 shadow-2xl overflow-hidden">
          {/* Top Notch / Speaker */}
          <div className="flex items-center justify-between px-3 py-1 mb-1 text-[10px] text-gray-400">
            <span className="font-semibold text-white">9:41</span>
            <div className="w-16 h-3.5 bg-neutral-800 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-neutral-900"></div>
            </div>
            <div className="flex items-center gap-1">
              <span>5G</span>
              <div className="w-3.5 h-2 border border-gray-400 rounded-xs bg-lime-400"></div>
            </div>
          </div>

          {/* Screen Content Container */}
          <div className="rounded-[20px] bg-neutral-900/90 border border-neutral-800 p-3 min-h-[380px] flex flex-col justify-between">
            
            {/* VIEW 1: ROTISERÍA & GASTRONOMÍA */}
            {activeTab === 'rotiseria' && (
              <div className="space-y-2.5">
                {/* Header in Demo */}
                <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🍕</span>
                    <div>
                      <h4 className="text-xs font-bold text-white leading-tight">Rotisería La Criolla</h4>
                      <p className="text-[10px] text-lime-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-ping"></span>
                        Abierto ahora • Envío 30-40 min
                      </p>
                    </div>
                  </div>
                  <span className="bg-neutral-800 text-[10px] px-2 py-0.5 rounded-md text-gray-300 font-mono">
                    Mesa / Delivery
                  </span>
                </div>

                {/* Items List */}
                <div className="space-y-2">
                  <div className="bg-neutral-950/80 p-2 rounded-xl border border-neutral-800 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white">Docena Empanadas Caseras</p>
                      <p className="text-[10px] text-gray-400">Carne cortada a cuchillo / Jamón y queso</p>
                      <p className="text-xs font-bold text-lime-400 mt-0.5">$12.000</p>
                    </div>
                    {cartItems['empanadas'] ? (
                      <div className="flex items-center gap-2 bg-neutral-900 border border-lime-400/40 px-2 py-1 rounded-lg">
                        <button onClick={() => removeQty('empanadas')} className="text-gray-400 hover:text-white p-0.5"><Minus className="w-3 h-3" /></button>
                        <span className="text-xs font-bold text-white">{cartItems['empanadas']}</span>
                        <button onClick={() => addQty('empanadas')} className="text-lime-400 hover:text-lime-300 p-0.5"><Plus className="w-3 h-3" /></button>
                      </div>
                    ) : (
                      <button onClick={() => addQty('empanadas')} className="bg-lime-500 hover:bg-lime-400 text-black text-xs font-bold px-2.5 py-1 rounded-lg">
                        Agregar
                      </button>
                    )}
                  </div>

                  <div className="bg-neutral-950/80 p-2 rounded-xl border border-neutral-800 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white">Pizza Fugazzeta Rellena</p>
                      <p className="text-[10px] text-gray-400">8 porciones • Muzzarella premium</p>
                      <p className="text-xs font-bold text-lime-400 mt-0.5">$10.500</p>
                    </div>
                    {cartItems['pizza'] ? (
                      <div className="flex items-center gap-2 bg-neutral-900 border border-lime-400/40 px-2 py-1 rounded-lg">
                        <button onClick={() => removeQty('pizza')} className="text-gray-400 hover:text-white p-0.5"><Minus className="w-3 h-3" /></button>
                        <span className="text-xs font-bold text-white">{cartItems['pizza']}</span>
                        <button onClick={() => addQty('pizza')} className="text-lime-400 hover:text-lime-300 p-0.5"><Plus className="w-3 h-3" /></button>
                      </div>
                    ) : (
                      <button onClick={() => addQty('pizza')} className="bg-lime-500 hover:bg-lime-400 text-black text-xs font-bold px-2.5 py-1 rounded-lg">
                        Agregar
                      </button>
                    )}
                  </div>

                  <div className="bg-neutral-950/80 p-2 rounded-xl border border-neutral-800 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white">Milanesa Napolitana con Fritas</p>
                      <p className="text-[10px] text-gray-400">Para 2 personas super abundante</p>
                      <p className="text-xs font-bold text-lime-400 mt-0.5">$14.000</p>
                    </div>
                    {cartItems['milanesa'] ? (
                      <div className="flex items-center gap-2 bg-neutral-900 border border-lime-400/40 px-2 py-1 rounded-lg">
                        <button onClick={() => removeQty('milanesa')} className="text-gray-400 hover:text-white p-0.5"><Minus className="w-3 h-3" /></button>
                        <span className="text-xs font-bold text-white">{cartItems['milanesa']}</span>
                        <button onClick={() => addQty('milanesa')} className="text-lime-400 hover:text-lime-300 p-0.5"><Plus className="w-3 h-3" /></button>
                      </div>
                    ) : (
                      <button onClick={() => addQty('milanesa')} className="bg-lime-500 hover:bg-lime-400 text-black text-xs font-bold px-2.5 py-1 rounded-lg">
                        Agregar
                      </button>
                    )}
                  </div>
                </div>

                {/* Cart Action Button */}
                <div className="pt-2 border-t border-neutral-800">
                  <a
                    href={createWhatsAppUrl(`¡Hola Rotisería La Criolla! Quiero hacer este pedido online:\n${cartItems['empanadas'] ? `• ${cartItems['empanadas']}x Docena Empanadas\n` : ''}${cartItems['pizza'] ? `• ${cartItems['pizza']}x Pizza Fugazzeta\n` : ''}${cartItems['milanesa'] ? `• ${cartItems['milanesa']}x Milanesa Napolitana\n` : ''}Total estimado: $${totalCart.toLocaleString()}\nDirección de envío: `)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full relative overflow-hidden bg-[#25D366] text-black font-extrabold text-xs py-2.5 px-3 rounded-xl flex items-center justify-between shadow-[0_0_15px_rgba(37,211,102,0.6)] btn-pulsing-glow active:scale-95 transition-transform group"
                  >
                    <div className="absolute inset-0 w-1/3 h-full bg-white/40 skew-x-[-25deg] animate-shimmer pointer-events-none" />
                    <div className="flex items-center gap-1.5">
                      <MessageCircle className="w-4 h-4 fill-black text-black" />
                      <span>Pedir por WhatsApp</span>
                    </div>
                    <span className="bg-black/20 text-black font-mono font-black px-2 py-0.5 rounded text-[11px]">
                      ${totalCart.toLocaleString()}
                    </span>
                  </a>
                  <p className="text-[9px] text-center text-gray-400 mt-1">
                    Llega ordenado a tu celular sin comisión de apps de delivery
                  </p>
                </div>
              </div>
            )}

            {/* VIEW 2: BARBERÍA / PELUQUERÍA */}
            {activeTab === 'barberia' && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">💈</span>
                    <div>
                      <h4 className="text-xs font-bold text-white leading-tight">Barbería & Spa VIP</h4>
                      <p className="text-[10px] text-lime-400">Elegí tu turno en 2 pasos</p>
                    </div>
                  </div>
                  <span className="bg-lime-500/20 text-lime-400 text-[10px] px-2 py-0.5 rounded-full font-bold">
                    Turnos 24/7
                  </span>
                </div>

                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">1. Elegí Servicio</p>
                  <div className="grid grid-cols-1 gap-1.5">
                    {[
                      { name: 'Corte Degradé + Barba ($8.500)', time: '45 min' },
                      { name: 'Corte Clásico Masculino ($6.000)', time: '30 min' },
                      { name: 'Perfilado Barba + Toalla ($5.000)', time: '20 min' },
                    ].map(srv => (
                      <button
                        key={srv.name}
                        onClick={() => {
                          audioEngine.playTap();
                          setSelectedService(srv.name);
                        }}
                        className={`text-left p-2 rounded-xl border text-xs transition-all flex items-center justify-between ${
                          selectedService === srv.name
                            ? 'bg-lime-500/15 border-lime-400 text-white font-bold'
                            : 'bg-neutral-950 border-neutral-800 text-gray-300'
                        }`}
                      >
                        <span>{srv.name}</span>
                        <span className="text-[10px] text-gray-400">{srv.time}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">2. Horarios disponibles hoy</p>
                  <div className="grid grid-cols-3 gap-1.5">
                    {['15:30 hs', '17:00 hs', '18:15 hs', '19:00 hs', '20:00 hs'].map(slot => (
                      <button
                        key={slot}
                        onClick={() => {
                          audioEngine.playSelect();
                          setSelectedSlot(slot);
                        }}
                        className={`py-1.5 px-2 rounded-lg text-center text-xs font-semibold transition-all ${
                          selectedSlot === slot
                            ? 'bg-lime-400 text-black font-bold shadow-md'
                            : 'bg-neutral-950 text-gray-300 border border-neutral-800'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-neutral-800">
                  <a
                    href={createWhatsAppUrl(`¡Hola! Quiero reservar el turno:\n• Servicio: ${selectedService}\n• Horario: Hoy ${selectedSlot}\n• Nombre:`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full relative overflow-hidden bg-lime-400 text-black font-extrabold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,232,54,0.6)] btn-pulsing-glow active:scale-95 transition-transform"
                  >
                    <div className="absolute inset-0 w-1/3 h-full bg-white/40 skew-x-[-25deg] animate-shimmer pointer-events-none" />
                    <Check className="w-4 h-4 text-black" />
                    <span>Confirmar Turno ({selectedSlot})</span>
                  </a>
                  <p className="text-[9px] text-center text-gray-400 mt-1">
                    Cero audios interminables. Tu agenda organizada.
                  </p>
                </div>
              </div>
            )}

            {/* VIEW 3: TIENDA & COMERCIO */}
            {activeTab === 'tienda' && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🏪</span>
                    <div>
                      <h4 className="text-xs font-bold text-white leading-tight">Urbana Store Oficial</h4>
                      <p className="text-[10px] text-lime-400">Catálogo interactivo</p>
                    </div>
                  </div>
                  <span className="bg-neutral-800 text-[10px] px-2 py-0.5 rounded text-gray-300">
                    Stock en vivo
                  </span>
                </div>

                {/* Categorías */}
                <div className="flex gap-1 overflow-x-auto pb-1 no-scrollbar">
                  {['Todos', 'Remeras', 'Pantalones', 'Accesorios'].map(cat => (
                    <button
                      key={cat}
                      onClick={() => {
                        audioEngine.playTap();
                        setActiveCategory(cat);
                      }}
                      className={`text-[10px] px-2.5 py-1 rounded-full font-bold whitespace-nowrap transition-all ${
                        activeCategory === cat ? 'bg-lime-400 text-black' : 'bg-neutral-950 text-gray-400'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-neutral-950 p-2 rounded-xl border border-neutral-800">
                    <div className="h-16 bg-neutral-900 rounded-lg flex items-center justify-center text-2xl mb-1.5">
                      👕
                    </div>
                    <p className="text-[11px] font-bold text-white truncate">Remera Oversize Heavy</p>
                    <p className="text-[10px] text-lime-400 font-bold">$16.500</p>
                  </div>

                  <div className="bg-neutral-950 p-2 rounded-xl border border-neutral-800">
                    <div className="h-16 bg-neutral-900 rounded-lg flex items-center justify-center text-2xl mb-1.5">
                      👖
                    </div>
                    <p className="text-[11px] font-bold text-white truncate">Cargo Pant Unisex</p>
                    <p className="text-[10px] text-lime-400 font-bold">$32.000</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-neutral-800">
                  <a
                    href={createWhatsAppUrl(`¡Hola Urbana Store! Vi su catálogo digital y quiero consultar por disponibilidad de talles.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full relative overflow-hidden bg-[#25D366] text-black font-extrabold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(37,211,102,0.6)] btn-pulsing-glow active:scale-95 transition-transform"
                  >
                    <div className="absolute inset-0 w-1/3 h-full bg-white/40 skew-x-[-25deg] animate-shimmer pointer-events-none" />
                    <ShoppingBag className="w-4 h-4 fill-black" />
                    <span>Consultar Stock Directo</span>
                  </a>
                  <p className="text-[9px] text-center text-gray-400 mt-1">
                    Tus clientes ven fotos, talles y precios sin preguntarte uno por uno.
                  </p>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
