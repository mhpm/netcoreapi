import { useProducts } from '../api/useProducts';
import { ProductCard } from './ProductCard';
import { Info } from 'lucide-react';

export const ProductList = () => {
  const { data: products, isLoading, isError, error } = useProducts();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-32 space-y-6">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 border-4 border-coffee-100 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-coffee-600 rounded-full border-t-transparent animate-spin"></div>
        </div>
        <p className="text-coffee-600 font-medium animate-pulse text-lg italic">Preparando la molienda perfecta...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-20 text-red-600">
        <p>Error al cargar los productos: {error.message}</p>
      </div>
    );
  }

  return (
    <section id="menu" className="max-w-7xl mx-auto py-24 px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-center md:text-left">
        <div className="space-y-2">
          <h2 className="text-sm font-bold text-coffee-600 uppercase tracking-widest">Nuestras Especialidades</h2>
          <h3 className="text-4xl md:text-5xl font-black text-coffee-900">El Menú de Hoy</h3>
        </div>
        <div className="flex items-center gap-2 text-coffee-500 bg-coffee-100/50 px-4 py-2 rounded-full self-center">
          <Info className="w-4 h-4" />
          <span className="text-xs font-medium uppercase tracking-wider">Precios en USD • IVA Incluido</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
