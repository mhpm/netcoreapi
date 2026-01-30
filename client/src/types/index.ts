export type Category = 'caliente' | 'frio' | 'frappe' | 'te';

export interface Product {
  id: number;
  name: string;
  price: number;
  category?: Category;
  description?: string;
  image?: string;
}

export interface CartItem extends Product {
  milk?: string;
  extras?: string[];
  totalPrice: number;
}
