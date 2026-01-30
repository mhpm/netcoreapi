import type { Category } from "../../../types";

export interface DrinkOption {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: Category;
}

export const DRINK_MENU: DrinkOption[] = [
  // Calientes
  {
    id: "h1",
    name: "Espresso Intenso",
    price: 3.5,
    category: "caliente",
    description: "Shot puro de energía concentrada.",
    image:
      "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&q=80",
  },
  {
    id: "h2",
    name: "Cappuccino Artesanal",
    price: 4.5,
    category: "caliente",
    description: "Espresso con leche vaporizada y espuma sedosa.",
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80",
  },
  {
    id: "h3",
    name: "Latte Vainilla",
    price: 4.75,
    category: "caliente",
    description: "Suave espresso con leche y un toque de vainilla natural.",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "h4",
    name: "Flat White",
    price: 4.25,
    category: "caliente",
    description: "Doble espresso con una fina capa de leche cremada.",
    image:
      "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=800&q=80",
  },
  {
    id: "h5",
    name: "Mocha Blanco",
    price: 5.25,
    category: "caliente",
    description: "Espresso con chocolate blanco y leche vaporizada.",
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
  },

  // Fríos
  {
    id: "c1",
    name: "Cold Brew Citrus",
    price: 5.0,
    category: "frio",
    description: "Maceración en frío por 12h con notas cítricas.",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "c2",
    name: "Latte Frío",
    price: 4.5,
    category: "frio",
    description: "Espresso agitado con leche fría y hielo.",
    image:
      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "c3",
    name: "Espresso Tonic",
    price: 5.0,
    category: "frio",
    description: "Doble shot de espresso sobre agua tónica y hielo.",
    image:
      "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "c4",
    name: "Iced Americano",
    price: 4.0,
    category: "frio",
    description: "Espresso sobre hielo y agua fría, clásico y refrescante.",
    image:
      "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&w=800&q=80",
  },

  // Frappes
  {
    id: "f1",
    name: "Mocha Frappe",
    price: 6.0,
    category: "frappe",
    description: "Batido helado de café con chocolate suizo.",
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80",
  },
  {
    id: "f2",
    name: "Cookies & Cream Frappe",
    price: 6.5,
    category: "frappe",
    description: "Deliciosa mezcla de galletas, café y crema.",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80",
  },
  {
    id: "f3",
    name: "Caramel Crunch Frappe",
    price: 6.75,
    category: "frappe",
    description: "Frappé de caramelo con trozos de toffee crujiente.",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
  },

  // Tes
  {
    id: "t1",
    name: "Matcha Ceremonial",
    price: 6.0,
    category: "te",
    description: "Té verde japonés grado ceremonial, batido artesanalmente.",
    image:
      "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "t2",
    name: "Chai Latte",
    price: 5.5,
    category: "te",
    description: "Mezcla especiada de té negro con leche cremosa.",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80",
  },
  {
    id: "t3",
    name: "Golden Milk",
    price: 5.5,
    category: "te",
    description: "Bebida ancestral de cúrcuma, jengibre y especias.",
    image:
      "https://images.unsplash.com/photo-1610632380989-680fe40816c6?w=800&q=80",
  },
  {
    id: "t5",
    name: "Iced Hibiscus Tea",
    price: 4.0,
    category: "te",
    description:
      "Infusión refrescante de flor de jamaica con un toque de limón.",
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80",
  },
];

export const MILK_OPTIONS = [
  { id: "entera", name: "Leche Entera", price: 0 },
  { id: "deslactosada", name: "Deslactosada", price: 0.5 },
  { id: "almendra", name: "Almendra", price: 0.75 },
  { id: "avena", name: "Avena", price: 0.75 },
];

export const EXTRA_OPTIONS = [
  { id: "shot", name: "Extra Shot Espresso", price: 1.0 },
  { id: "crema", name: "Crema Batida", price: 0.5 },
  { id: "vainilla", name: "Jarabe Vainilla", price: 0.5 },
  { id: "caramelo", name: "Salsa Caramelo", price: 0.5 },
];
