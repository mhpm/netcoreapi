import { useProducts } from "../api/useProducts";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
  const { data: products, isLoading, isError } = useProducts();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-32 space-y-6">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-white/5 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-brand-orange rounded-full border-t-transparent animate-spin"></div>
        </div>
        <p className="text-coffee-300 font-medium animate-pulse text-sm">
          Preparing your coffee experience...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-20 text-brand-red">
        <p className="text-sm font-bold">
          Failed to load products. Please try again.
        </p>
      </div>
    );
  }

  return (
    <section id="menu" className="max-w-7xl mx-auto py-32 px-6 relative z-10">
      <div className="flex flex-col items-center text-center mb-20 space-y-4">
        <div className="inline-block px-4 py-1.5 bg-brand-orange/10 rounded-full border border-brand-orange/20">
          <span className="text-[10px] font-black text-brand-orange uppercase tracking-[0.3em]">
            Curated Collection
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-serif font-black text-white tracking-tighter">
          Our <span className="text-brand-orange italic">Signature</span> Menu
        </h2>
        <p className="text-coffee-300 text-base max-w-xl mx-auto leading-relaxed">
          Explore our hand-picked selection of premium coffees, each roasted to
          perfection and prepared with artisanal precision.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
