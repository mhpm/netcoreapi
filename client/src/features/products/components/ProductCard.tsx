import { ShoppingCart } from "lucide-react";
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
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-coffee-100 group">
      <div className="h-72 relative overflow-hidden">
        <img
          src={getCoffeeImage(product.name)}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl text-coffee-900 font-black shadow-lg text-lg">
          ${product.price.toFixed(2)}
        </div>
      </div>
      <div className="p-8 space-y-6">
        <div>
          <h3 className="text-2xl font-black text-coffee-900 mb-2">
            {product.name}
          </h3>
          <p className="text-coffee-600 text-sm leading-relaxed">
            {getCoffeeDescription(product.name)}
          </p>
        </div>
        <button
          onClick={handleAddToCart}
          className="w-full bg-coffee-900 text-white py-4 rounded-2xl font-bold hover:bg-coffee-800 transition-all flex items-center justify-center gap-3 active:scale-95"
        >
          <ShoppingCart className="w-5 h-5" />
          Añadir al Carrito
        </button>
      </div>
    </div>
  );
};
