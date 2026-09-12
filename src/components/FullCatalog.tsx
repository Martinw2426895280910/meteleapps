import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Check, ArrowRight, MessageCircle, Info } from 'lucide-react';
import { CATALOG_ITEMS, createWhatsAppUrl } from '../data/catalogData';
import { CatalogItem, CategoryFilter } from '../types';
import { audioEngine } from '../utils/audioEngine';

interface FullCatalogProps {
  onSelectItem: (item: CatalogItem) => void;
  selectedFeatures: string[];
  onToggleFeature: (title: string) => void;
}

export const FullCatalog: React.FC<FullCatalogProps> = ({ 
  onSelectItem, 
  selectedFeatures, 
  onToggleFeature 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('todos');

  const categories: { id: CategoryFilter; label: string; count: number }[] = [
    { id: 'todos', label: '🔥 Todas (28)', count: CATALOG_ITEMS.length },
    { id: 'ventas', label: '🛍️ Ventas & Catálogo', count: CATALOG_ITEMS.filter(i => i.category === 'ventas').length },
    { id: 'turnos', label: '📅 Turnos & Agenda', count: CATALOG_ITEMS.filter(i => i.category === 'turnos').length },
    { id: 'fidelizacion', label: '⭐ Fidelización', count: CATALOG_ITEMS.filter(i => i.category === 'fidelizacion').length },
    { id: 'gestion', label: '📊 Gestión & Control', count: CATALOG_ITEMS.filter(i => i.category === 'gestion').length },
    { id: 'comunicacion', label: '💬 Comunicación', count: CATALOG_ITEMS.filter(i => i.category === 'comunicacion').length },
  ];

  const filteredItems = useMemo(() => {
    return CATALOG_ITEMS.filter(item => {
      const matchesCategory = activeCategory === 'todos' || item.category === activeCategory;
      const matchesSearch = 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.popularFor.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <section id="catalogo" className="px-4 py-8 max-w-md mx-auto">
      
      {/* Header Banner */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1.5 bg-lime-500/10 border border-lime-400/30 px-3 py-1 rounded-full text-lime-400 text-xs font-bold font-heading mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>CATÁLOGO COMPLETO</span>
        </div>
        
        <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-wide uppercase leading-tight">
          ¿QUÉ PODEMOS <span className="text-[#10E836]">CREAR PARA VOS?</span>
        </h2>
        
        <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
          Elegí las funciones que tu negocio necesita. Podés armar tu mini app combinando cualquiera de estas <span className="text-lime-400 font-bold">28 herramientas digitales</span>.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative mb-3">
        <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar función (ej: turnos, qr, precios, cupones)..."
          className="w-full bg-neutral-900/90 border border-neutral-700 focus:border-lime-400 text-white placeholder-gray-500 text-xs rounded-xl pl-10 pr-4 py-2.5 outline-none transition-colors shadow-inner"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-xs"
          >
            ✕
          </button>
        )}
      </div>

      {/* Category Pills */}
      <div className="flex gap-1.5 overflow-x-auto pb-3 mb-4 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              audioEngine.playTap();
              setActiveCategory(cat.id);
            }}
            className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1 shrink-0 ${
              activeCategory === cat.id
                ? 'bg-lime-400 text-black shadow-[0_0_12px_rgba(37,211,102,0.4)]'
                : 'bg-neutral-900/90 text-gray-300 border border-neutral-800 hover:border-neutral-700'
            }`}
          >
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Catalog Grid */}
      <div className="space-y-3">
        {filteredItems.length === 0 ? (
          <div className="text-center py-8 bg-neutral-900/50 rounded-2xl border border-neutral-800 p-4">
            <p className="text-sm text-gray-300">No encontramos funciones con "{searchTerm}".</p>
            <button
              onClick={() => { setSearchTerm(''); setActiveCategory('todos'); }}
              className="mt-2 text-xs font-bold text-lime-400 underline"
            >
              Ver todas las 28 funciones
            </button>
          </div>
        ) : (
          filteredItems.map((item, index) => {
            const isSelected = selectedFeatures.includes(item.title);
            return (
              <div
                key={item.id}
                className={`relative rounded-2xl p-3.5 transition-all duration-200 border ${
                  isSelected 
                    ? 'bg-lime-950/30 border-lime-400 shadow-[0_0_15px_rgba(37,211,102,0.25)]' 
                    : 'bg-neutral-900/80 hover:bg-neutral-900 border-neutral-800/90 hover:border-lime-500/40'
                }`}
              >
                {/* Top Row: Emoji, Title, and Badge */}
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl sm:text-3xl p-1 bg-black/50 rounded-xl border border-neutral-800">
                      {item.emoji}
                    </span>
                    <div>
                      <h3 className="font-heading font-bold text-base sm:text-lg text-white leading-tight">
                        {item.title}
                      </h3>
                      <span className="inline-block text-[10px] font-bold text-lime-400 tracking-wide font-heading">
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  {/* Add to Custom App checkbox */}
                  <button
                    onClick={() => {
                      audioEngine.playToggle();
                      onToggleFeature(item.title);
                    }}
                    className={`flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-lg border transition-all active:scale-95 ${
                      isSelected
                        ? 'bg-lime-400 text-black border-lime-400 font-black shadow-sm'
                        : 'bg-neutral-950 text-gray-300 border-neutral-700 hover:border-lime-400/50'
                    }`}
                    title="Agregar a mi Mini App"
                  >
                    {isSelected ? (
                      <>
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                        <span>Agregada</span>
                      </>
                    ) : (
                      <>
                        <span className="text-lime-400">+</span>
                        <span>Elegir</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-300 leading-relaxed my-1.5">
                  {item.description}
                </p>

                {/* Benefit Highlight */}
                <div className="bg-black/40 rounded-xl p-2 border border-neutral-800/80 my-2">
                  <p className="text-[11px] text-gray-300 leading-tight">
                    <span className="text-lime-400 font-semibold">💡 Beneficio: </span>
                    {item.benefit}
                  </p>
                </div>

                {/* Bottom Row Actions */}
                <div className="flex items-center justify-between pt-1 border-t border-neutral-800/60 text-[11px]">
                  <span className="text-[10px] text-gray-400 truncate max-w-[190px]">
                    🎯 {item.popularFor}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        audioEngine.playImageExpand();
                        onSelectItem(item);
                      }}
                      className="text-lime-400 hover:text-lime-300 font-bold flex items-center gap-0.5"
                    >
                      <span>Ver más</span>
                      <Info className="w-3 h-3" />
                    </button>

                    <a
                      href={createWhatsAppUrl(`¡Hola METELE APPS! 🔥 Me interesa la función de "${item.title}" para mi negocio. ¿Cómo funciona?`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366]/20 hover:bg-[#25D366]/30 text-lime-300 border border-lime-400/30 p-1.5 rounded-lg active:scale-95 transition-transform"
                      title="Consultar por WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-lime-300" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })
        )}
      </div>

    </section>
  );
};
