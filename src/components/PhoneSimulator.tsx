import React, { useState } from 'react';
import { Smartphone, ShoppingBag, Calendar, Check, MessageCircle, Plus, Minus, ArrowRight, Star, Sparkles, DollarSign } from 'lucide-react';
import { createWhatsAppUrl } from '../data/catalogData';
import { audioEngine } from '../utils/audioEngine';

type DemoTab = 'bodega' | 'restaurante' | 'barberia';

export const PhoneSimulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<DemoTab>('bodega');

  // Bodega / Supermercado state (USD)
  const [bodegaItems, setBodegaItems] = useState<{ [key: string]: number }>({ 'yerba': 2, 'dulce': 1 });

  // Gastronomía state (USD)
  const [gastroItems, setGastroItems] = useState<{ [key: string]: number }>({ 'empanadas': 1 });

  // Barbería state
  const [selectedService, setSelectedService] = useState('Corte Degradé + Barba ($35)');
  const [selectedSlot, setSelectedSlot] = useState('4:30 PM');

  const addBodegaQty = (id: string) => {
    audioEngine.playToggle();
    setBodegaItems(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeBodegaQty = (id: string) => {
    audioEngine.playTap();
    setBodegaItems(prev => {
      const next = { ...prev };
      if (next[id] > 1) {
        next[id]--;
      } else {
        delete next[id];
      }
      return next;
    });
  };

  const addGastroQty = (id: string) => {
    audioEngine.playToggle();
    setGastroItems(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeGastroQty = (id: string) => {
    audioEngine.playTap();
    setGastroItems(prev => {
      const next = { ...prev };
      if (next[id] > 1) {
        next[id]--;
      } else {
        delete next[id];
      }
      return next;
    });
  };

  const totalBodega = 
    (bodegaItems['yerba'] || 0) * 11 + 
    (bodegaItems['dulce'] || 0) * 8 + 
    (bodegaItems['harina'] || 0) * 5;

  const totalGastro = 
    (gastroItems['empanadas'] || 0) * 38 + 
    (gastroItems['asado'] || 0) * 28 + 
    (gastroItems['ceviche'] || 0) * 22;

  return (
    <section className="px-3 py-6 bg-gradient-to-b from-[#060907] via-[#09110a] to-[#060907] border-y border-lime-500/20">
      <div className="max-w-md mx-auto">
        
        {/* Section Title - Concise & Punchy */}
        <div className="text-center mb-3">
          <div className="inline-flex items-center gap-1.5 text-lime-400 text-xs font-bold uppercase tracking-wider font-heading mb-1">
            <Smartphone className="w-3.5 h-3.5" />
            <span>SIMULADOR INTERACTIVO USA</span>
          </div>
          <h2 className="font-heading font-black text-xl sm:text-2xl text-white tracking-wide uppercase leading-tight">
            PROBÁ LA EXPERIENCIA <span className="text-[#10E836]">DESDE EL CELULAR</span>
          </h2>
          <p className="text-xs text-gray-300 mt-1">
            Tocá los botones y mirá lo simple que es para tus clientes comprar y reservar en USA:
          </p>
        </div>

        {/* Demo Switcher Buttons */}
        <div className="flex gap-1.5 overflow-x-auto pb-2 mb-3 no-scrollbar">
          <button
            onClick={() => {
              audioEngine.playSelect();
              setActiveTab('bodega');
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'bodega'
                ? 'bg-lime-400 text-black font-black shadow-[0_0_12px_rgba(37,211,102,0.4)]'
                : 'bg-neutral-900 text-gray-300 border border-neutral-800'
            }`}
          >
            <span>🛒 Supermercado USA</span>
          </button>
          <button
            onClick={() => {
              audioEngine.playSelect();
              setActiveTab('restaurante');
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'restaurante'
                ? 'bg-lime-400 text-black font-black shadow-[0_0_12px_rgba(37,211,102,0.4)]'
                : 'bg-neutral-900 text-gray-300 border border-neutral-800'
            }`}
          >
            <span>🥟 Delivery & Menú</span>
          </button>
          <button
            onClick={() => {
              audioEngine.playSelect();
              setActiveTab('barberia');
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'barberia'
                ? 'bg-lime-400 text-black font-black shadow-[0_0_12px_rgba(37,211,102,0.4)]'
                : 'bg-neutral-900 text-gray-300 border border-neutral-800'
            }`}
          >
            <span>💈 Turnos 24/7</span>
          </button>
        </div>

        {/* Simulated Phone Device Frame */}
        <div className="relative rounded-[32px] border-3 border-neutral-700 bg-neutral-950 p-2 shadow-2xl overflow-hidden">
          {/* Top Notch / Speaker */}
          <div className="flex items-center justify-between px-3 py-1 mb-1 text-[10px] text-gray-400">
            <span className="font-semibold text-white">9:41 AM</span>
            <div className="w-16 h-3 bg-neutral-800 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-neutral-900"></div>
            </div>
            <div className="flex items-center gap-1">
              <span>5G</span>
              <div className="w-3.5 h-2 border border-gray-400 rounded-xs bg-lime-400"></div>
            </div>
          </div>

          {/* Screen Content Container */}
          <div className="rounded-[24px] bg-neutral-900/90 border border-neutral-800 p-3 min-h-[370px] flex flex-col justify-between">
            
            {/* VIEW 1: SUPERMERCADO & BODEGA SUDAMERICANA EN USA */}
            {activeTab === 'bodega' && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🛒</span>
                    <div>
                      <h4 className="text-xs font-bold text-white leading-tight">Mercado Sudamericano Miami</h4>
                      <p className="text-[10px] text-lime-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-ping"></span>
                        Envíos en Florida & todo USA • Zelle OK
                      </p>
                    </div>
                  </div>
                  <span className="bg-lime-500/20 text-lime-400 text-[9px] px-1.5 py-0.5 rounded font-bold">
                    USD $
                  </span>
                </div>

                {/* Items List */}
                <div className="space-y-1.5">
                  <div className="bg-neutral-950/80 p-2 rounded-xl border border-neutral-800 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white">Yerba Mate Playadito 1kg</p>
                      <p className="text-[10px] text-gray-400">Importado de Argentina</p>
                      <p className="text-xs font-bold text-lime-400 mt-0.5">$11.00 USD</p>
                    </div>
                    {bodegaItems['yerba'] ? (
                      <div className="flex items-center gap-2 bg-neutral-900 border border-lime-400/40 px-2 py-1 rounded-lg">
                        <button onClick={() => removeBodegaQty('yerba')} className="text-gray-400 hover:text-white p-0.5"><Minus className="w-3 h-3" /></button>
                        <span className="text-xs font-bold text-white">{bodegaItems['yerba']}</span>
                        <button onClick={() => addBodegaQty('yerba')} className="text-lime-400 hover:text-lime-300 p-0.5"><Plus className="w-3 h-3" /></button>
                      </div>
                    ) : (
                      <button onClick={() => addBodegaQty('yerba')} className="bg-lime-500 hover:bg-lime-400 text-black text-xs font-bold px-2.5 py-1 rounded-lg">
                        Agregar
                      </button>
                    )}
                  </div>

                  <div className="bg-neutral-950/80 p-2 rounded-xl border border-neutral-800 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white">Dulce de Leche Colonial 400g</p>
                      <p className="text-[10px] text-gray-400">Receta tradicional</p>
                      <p className="text-xs font-bold text-lime-400 mt-0.5">$8.00 USD</p>
                    </div>
                    {bodegaItems['dulce'] ? (
                      <div className="flex items-center gap-2 bg-neutral-900 border border-lime-400/40 px-2 py-1 rounded-lg">
                        <button onClick={() => removeBodegaQty('dulce')} className="text-gray-400 hover:text-white p-0.5"><Minus className="w-3 h-3" /></button>
                        <span className="text-xs font-bold text-white">{bodegaItems['dulce']}</span>
                        <button onClick={() => addBodegaQty('dulce')} className="text-lime-400 hover:text-lime-300 p-0.5"><Plus className="w-3 h-3" /></button>
                      </div>
                    ) : (
                      <button onClick={() => addBodegaQty('dulce')} className="bg-lime-500 hover:bg-lime-400 text-black text-xs font-bold px-2.5 py-1 rounded-lg">
                        Agregar
                      </button>
                    )}
                  </div>

                  <div className="bg-neutral-950/80 p-2 rounded-xl border border-neutral-800 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white">Harina PAN Maíz Blanco 1kg</p>
                      <p className="text-[10px] text-gray-400">Para arepas venezolanas/colombianas</p>
                      <p className="text-xs font-bold text-lime-400 mt-0.5">$5.00 USD</p>
                    </div>
                    {bodegaItems['harina'] ? (
                      <div className="flex items-center gap-2 bg-neutral-900 border border-lime-400/40 px-2 py-1 rounded-lg">
                        <button onClick={() => removeBodegaQty('harina')} className="text-gray-400 hover:text-white p-0.5"><Minus className="w-3 h-3" /></button>
                        <span className="text-xs font-bold text-white">{bodegaItems['harina']}</span>
                        <button onClick={() => addBodegaQty('harina')} className="text-lime-400 hover:text-lime-300 p-0.5"><Plus className="w-3 h-3" /></button>
                      </div>
                    ) : (
                      <button onClick={() => addBodegaQty('harina')} className="bg-lime-500 hover:bg-lime-400 text-black text-xs font-bold px-2.5 py-1 rounded-lg">
                        Agregar
                      </button>
                    )}
                  </div>
                </div>

                {/* Cart Action Button */}
                <div className="pt-2 border-t border-neutral-800">
                  <a
                    href={createWhatsAppUrl(`¡Hola Mercado Sudamericano! Quiero ordenar estos productos en USA:\n${bodegaItems['yerba'] ? `• ${bodegaItems['yerba']}x Yerba Mate 1kg\n` : ''}${bodegaItems['dulce'] ? `• ${bodegaItems['dulce']}x Dulce de Leche\n` : ''}${bodegaItems['harina'] ? `• ${bodegaItems['harina']}x Harina PAN\n` : ''}Total: $${totalBodega} USD\nPago: Zelle / Tarjeta\nDirección en USA: `)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full relative overflow-hidden bg-[#25D366] text-black font-extrabold text-xs py-2.5 px-3 rounded-xl flex items-center justify-between shadow-[0_0_15px_rgba(37,211,102,0.6)] btn-pulsing-glow active:scale-95 transition-transform group"
                  >
                    <div className="absolute inset-0 w-1/3 h-full bg-white/40 skew-x-[-25deg] animate-shimmer pointer-events-none" />
                    <div className="flex items-center gap-1.5">
                      <MessageCircle className="w-4 h-4 fill-black text-black" />
                      <span>Pedir por WhatsApp (Zelle)</span>
                    </div>
                    <span className="bg-black/20 text-black font-mono font-black px-2 py-0.5 rounded text-[11px]">
                      ${totalBodega} USD
                    </span>
                  </a>
                  <p className="text-[9px] text-center text-gray-400 mt-1">
                    Directo al WhatsApp del dueño • Cero comisiones a plataformas
                  </p>
                </div>
              </div>
            )}

            {/* VIEW 2: RESTAURANTE & GASTRONOMÍA SUDAMERICANA */}
            {activeTab === 'restaurante' && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🥩</span>
                    <div>
                      <h4 className="text-xs font-bold text-white leading-tight">Parrilla & Empanadas Grill</h4>
                      <p className="text-[10px] text-lime-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-ping"></span>
                        Take-out y Delivery • Sin 30% DoorDash
                      </p>
                    </div>
                  </div>
                  <span className="bg-lime-500/20 text-lime-400 text-[9px] px-1.5 py-0.5 rounded font-bold">
                    $0 Comisión
                  </span>
                </div>

                <div className="space-y-1.5">
                  <div className="bg-neutral-950/80 p-2 rounded-xl border border-neutral-800 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white">Docena de Empanadas Artesanales</p>
                      <p className="text-[10px] text-gray-400">Carne cortada, pollo o humita</p>
                      <p className="text-xs font-bold text-lime-400 mt-0.5">$38.00 USD</p>
                    </div>
                    {gastroItems['empanadas'] ? (
                      <div className="flex items-center gap-2 bg-neutral-900 border border-lime-400/40 px-2 py-1 rounded-lg">
                        <button onClick={() => removeGastroQty('empanadas')} className="text-gray-400 hover:text-white p-0.5"><Minus className="w-3 h-3" /></button>
                        <span className="text-xs font-bold text-white">{gastroItems['empanadas']}</span>
                        <button onClick={() => addGastroQty('empanadas')} className="text-lime-400 hover:text-lime-300 p-0.5"><Plus className="w-3 h-3" /></button>
                      </div>
                    ) : (
                      <button onClick={() => addGastroQty('empanadas')} className="bg-lime-500 hover:bg-lime-400 text-black text-xs font-bold px-2.5 py-1 rounded-lg">
                        Agregar
                      </button>
                    )}
                  </div>

                  <div className="bg-neutral-950/80 p-2 rounded-xl border border-neutral-800 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white">Entraña / Picaña a la Parrilla</p>
                      <p className="text-[10px] text-gray-400">Con papas rústicas y chimichurri</p>
                      <p className="text-xs font-bold text-lime-400 mt-0.5">$28.00 USD</p>
                    </div>
                    {gastroItems['asado'] ? (
                      <div className="flex items-center gap-2 bg-neutral-900 border border-lime-400/40 px-2 py-1 rounded-lg">
                        <button onClick={() => removeGastroQty('asado')} className="text-gray-400 hover:text-white p-0.5"><Minus className="w-3 h-3" /></button>
                        <span className="text-xs font-bold text-white">{gastroItems['asado']}</span>
                        <button onClick={() => addGastroQty('asado')} className="text-lime-400 hover:text-lime-300 p-0.5"><Plus className="w-3 h-3" /></button>
                      </div>
                    ) : (
                      <button onClick={() => addGastroQty('asado')} className="bg-lime-500 hover:bg-lime-400 text-black text-xs font-bold px-2.5 py-1 rounded-lg">
                        Agregar
                      </button>
                    )}
                  </div>
                </div>

                <div className="pt-2 border-t border-neutral-800">
                  <a
                    href={createWhatsAppUrl(`¡Hola Parrilla & Empanadas! Quiero encargar este pedido:\n${gastroItems['empanadas'] ? `• ${gastroItems['empanadas']}x Docena Empanadas\n` : ''}${gastroItems['asado'] ? `• ${gastroItems['asado']}x Entraña Parrilla\n` : ''}Total: $${totalGastro} USD\nForma de entrega (Pickup / Delivery): `)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full relative overflow-hidden bg-[#25D366] text-black font-extrabold text-xs py-2.5 px-3 rounded-xl flex items-center justify-between shadow-[0_0_15px_rgba(37,211,102,0.6)] btn-pulsing-glow active:scale-95 transition-transform group"
                  >
                    <div className="absolute inset-0 w-1/3 h-full bg-white/40 skew-x-[-25deg] animate-shimmer pointer-events-none" />
                    <div className="flex items-center gap-1.5">
                      <MessageCircle className="w-4 h-4 fill-black text-black" />
                      <span>Pedir directo al local</span>
                    </div>
                    <span className="bg-black/20 text-black font-mono font-black px-2 py-0.5 rounded text-[11px]">
                      ${totalGastro} USD
                    </span>
                  </a>
                  <p className="text-[9px] text-center text-gray-400 mt-1">
                    Tu restaurante se queda con el 100% del dinero
                  </p>
                </div>
              </div>
            )}

            {/* VIEW 3: BARBER SHOP & SALÓN LATINO */}
            {activeTab === 'barberia' && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">💈</span>
                    <div>
                      <h4 className="text-xs font-bold text-white leading-tight">Latino Barber Studio Miami</h4>
                      <p className="text-[10px] text-lime-400">Agenda abierta 24/7 en español</p>
                    </div>
                  </div>
                  <span className="bg-lime-500/20 text-lime-400 text-[10px] px-2 py-0.5 rounded-full font-bold">
                    Turnos VIP
                  </span>
                </div>

                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">1. Elegí Servicio</p>
                  <div className="grid grid-cols-1 gap-1.5">
                    {[
                      { name: 'Corte Degradé + Barba ($35)', time: '45 min' },
                      { name: 'Corte Clásico + Cejas ($25)', time: '30 min' },
                      { name: 'Diseño Freestyle + Barba ($45)', time: '50 min' },
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
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">2. Horario disponible</p>
                  <div className="grid grid-cols-3 gap-1.5">
                    {['3:00 PM', '4:30 PM', '5:15 PM', '6:00 PM', '7:00 PM'].map(slot => (
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
                    href={createWhatsAppUrl(`¡Hola! Quiero reservar cita en Barber Studio Miami:\n• Servicio: ${selectedService}\n• Horario: Hoy ${selectedSlot}\n• Nombre: `)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full relative overflow-hidden bg-lime-400 text-black font-extrabold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,232,54,0.6)] btn-pulsing-glow active:scale-95 transition-transform"
                  >
                    <div className="absolute inset-0 w-1/3 h-full bg-white/40 skew-x-[-25deg] animate-shimmer pointer-events-none" />
                    <Check className="w-4 h-4 text-black" />
                    <span>Confirmar Cita ({selectedSlot})</span>
                  </a>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Action Button Below Simulator */}
        <div className="mt-4">
          <a
            href={createWhatsAppUrl("¡Hola! 🔥 Estuve probando el simulador de celular y quiero esta Mini App para mi negocio con la Promoción activa.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => audioEngine.playTap()}
            className="w-full relative overflow-hidden inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#25D366] via-[#10E836] to-[#25D366] text-black font-heading font-black text-xs sm:text-sm py-3 px-4 rounded-xl shadow-[0_0_20px_rgba(37,211,102,0.7)] btn-pulsing-intense active:scale-95 transition-transform uppercase tracking-wider"
          >
            <div className="absolute inset-0 w-1/3 h-full bg-white/40 skew-x-[-25deg] animate-shimmer pointer-events-none" />
            <MessageCircle className="w-4 h-4 fill-black text-black shrink-0" />
            <span>HACE CLICKS AHORA !! Promoción 🔥</span>
          </a>
        </div>

      </div>
    </section>
  );
};
