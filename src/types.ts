export interface CatalogItem {
  id: string;
  title: string;
  emoji: string;
  category: 'ventas' | 'turnos' | 'fidelizacion' | 'gestion' | 'comunicacion';
  tag: string;
  description: string;
  benefit: string;
  popularFor: string;
  features: string[];
}

export interface BusinessItem {
  id: string;
  name: string;
  question: string;
  emoji: string;
  badge: string;
  solution: string;
  recommendedFeatures: string[];
  sampleAppPreview: {
    title: string;
    subtitle: string;
    items: { name: string; detail: string; price?: string }[];
  };
}

export type CategoryFilter = 'todos' | 'ventas' | 'turnos' | 'fidelizacion' | 'gestion' | 'comunicacion';
