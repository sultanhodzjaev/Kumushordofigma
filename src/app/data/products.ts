export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'earrings' | 'rings' | 'bracelets' | 'necklaces';
  description: string;
  images: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Минималистичные серьги-кольца',
    price: 3500,
    category: 'earrings',
    description: 'Элегантные серебряные серьги в минималистичном стиле. Идеально подходят для повседневной носки.',
    images: ['https://images.unsplash.com/photo-1557019494-94d421fc6653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWx2ZXIlMjBlYXJyaW5ncyUyMG1pbmltYWx8ZW58MXx8fHwxNzY5MjY5NjA2fDA&ixlib=rb-4.1.0&q=80&w=1080']
  },
  {
    id: '2',
    name: 'Классическое кольцо с камнем',
    price: 5200,
    category: 'rings',
    description: 'Изящное серебряное кольцо с натуральным камнем. Ручная работа, уникальный дизайн.',
    images: ['https://images.unsplash.com/photo-1612051525473-527d17db5616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWx2ZXIlMjByaW5nJTIwamV3ZWxyeXxlbnwxfHx8fDE3NjkxODU5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080']
  },
  {
    id: '3',
    name: 'Тонкий браслет-цепочка',
    price: 4800,
    category: 'bracelets',
    description: 'Утонченный серебряный браслет ручной работы. Легкий и изящный.',
    images: ['https://images.unsplash.com/photo-1676291055501-286c48bb186f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWx2ZXIlMjBicmFjZWxldHxlbnwxfHx8fDE3NjkyMTgzNjF8MA&ixlib=rb-4.1.0&q=80&w=1080']
  },
  {
    id: '4',
    name: 'Подвеска на тонкой цепочке',
    price: 6200,
    category: 'necklaces',
    description: 'Нежная серебряная подвеска на изящной цепочке. Универсальное украшение.',
    images: ['https://images.unsplash.com/photo-1708220084909-23d3e437dfce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWx2ZXIlMjBuZWNrbGFjZSUyMG1pbmltYWx8ZW58MXx8fHwxNzY5MjYxMDUzfDA&ixlib=rb-4.1.0&q=80&w=1080']
  },
  {
    id: '5',
    name: 'Серьги-гвоздики с цирконием',
    price: 2900,
    category: 'earrings',
    description: 'Миниатюрные серьги с кристаллами циркония. Сдержанная элегантность.',
    images: ['https://images.unsplash.com/photo-1764861127777-a4022156402c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwc2lsdmVyJTIwamV3ZWxyeXxlbnwxfHx8fDE3NjkyNjk2MDh8MA&ixlib=rb-4.1.0&q=80&w=1080']
  },
  {
    id: '6',
    name: 'Объемное кольцо',
    price: 7500,
    category: 'rings',
    description: 'Выразительное серебряное кольцо с уникальным дизайном. Для смелых образов.',
    images: ['https://images.unsplash.com/photo-1759683730016-1c3c6e526cfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBqZXdlbHJ5JTIwc3RvcmV8ZW58MXx8fHwxNzY5MTU4MzY0fDA&ixlib=rb-4.1.0&q=80&w=1080']
  },
  {
    id: '7',
    name: 'Многослойный браслет',
    price: 5800,
    category: 'bracelets',
    description: 'Стильный серебряный браслет из нескольких цепочек. Современный дизайн.',
    images: ['https://images.unsplash.com/photo-1676291055501-286c48bb186f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWx2ZXIlMjBicmFjZWxldHxlbnwxfHx8fDE3NjkyMTgzNjF8MA&ixlib=rb-4.1.0&q=80&w=1080']
  },
  {
    id: '8',
    name: 'Серьги-капли',
    price: 4200,
    category: 'earrings',
    description: 'Удлиненные серебряные серьги. Изящный силуэт, заметный акцент.',
    images: ['https://images.unsplash.com/photo-1557019494-94d421fc6653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWx2ZXIlMjBlYXJyaW5ncyUyMG1pbmltYWx8ZW58MXx8fHwxNzY5MjY5NjA2fDA&ixlib=rb-4.1.0&q=80&w=1080']
  }
];

export const categories = [
  { id: 'earrings', name: 'Серьги', icon: 'earrings' },
  { id: 'rings', name: 'Кольца', icon: 'ring' },
  { id: 'bracelets', name: 'Браслеты', icon: 'bracelet' }
];

export interface Certificate {
  id: string;
  amount: number;
}

export const certificates: Certificate[] = [
  { id: 'cert-1', amount: 2000 },
  { id: 'cert-2', amount: 4000 },
  { id: 'cert-3', amount: 6000 },
  { id: 'cert-4', amount: 7000 }
];
