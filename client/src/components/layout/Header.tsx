import { Coffee, ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

export const Header = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <nav className="bg-coffee-900/95 backdrop-blur-md text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-2">
          <div className="bg-coffee-600 p-1.5 rounded-lg">
            <Coffee className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-tight">
            Caffeine Crafter
          </span>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6 text-sm font-medium text-coffee-100">
            <a href="#" className="hover:text-white transition-colors">
              Inicio
            </a>
            <a href="#menu" className="hover:text-white transition-colors">
              Menú
            </a>
            <a href="#nosotros" className="hover:text-white transition-colors">
              Nosotros
            </a>
          </div>
          <div className="relative group cursor-pointer">
            <div className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-coffee-500 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-bold border-2 border-coffee-900">
                  {cartItems.length}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
