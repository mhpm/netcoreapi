import { Plus } from "lucide-react";
import type { Product } from "../../../types";
import { useDispatch } from "react-redux";
import { addToCart } from "../../cart/cartSlice";
import { getCoffeeImage, getCoffeeDescription } from "../utils/coffeeUtils";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...product,
        totalPrice: product.price,
      }),
    );
  };

  const image = getCoffeeImage(product.name);
  const description = getCoffeeDescription(product.name);

  return (
    <div className="bg-coffee-800/40 backdrop-blur-sm rounded-[3rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group border border-white/5 flex flex-col items-center text-center">
      {/* Circular Image with decorative ring */}
      <div className="relative w-48 h-48 mb-8">
        <div className="absolute inset-0 bg-brand-orange/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="absolute -inset-2 border border-white/5 rounded-full group-hover:border-brand-orange/20 transition-colors duration-500"></div>

        <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-coffee-700 group-hover:border-brand-orange/30 transition-all duration-500 transform group-hover:scale-105 bg-coffee-900">
          <img
            src={image}
            alt={product.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src =
                "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80";
            }}
          />
        </div>

        {/* Price Tag Floating */}
        <div className="absolute -top-2 -right-2 bg-brand-orange text-white text-xs font-black px-4 py-2 rounded-full shadow-xl transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
          ${product.price.toFixed(2)}
        </div>
      </div>

      <div className="space-y-4 flex-1 flex flex-col items-center">
        <div>
          <h3 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-brand-orange transition-colors">
            {product.name}
          </h3>
          <p className="text-coffee-300 text-sm leading-relaxed max-w-[200px]">
            {description}
          </p>
        </div>

        <button
          onClick={handleAddToCart}
          className="mt-auto group/btn relative px-8 py-3 bg-brand-orange text-white rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_10px_30px_rgba(245,158,11,0.2)] hover:shadow-[0_10px_30px_rgba(245,158,11,0.4)] overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            <Plus className="w-4 h-4 group-hover/btn:rotate-90 transition-transform duration-300" />
            Add to Order
          </span>
          <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover/btn:animate-shimmer"></div>
          <div className="absolute inset-0 bg-black/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
        </button>
      </div>
    </div>
  );
};
