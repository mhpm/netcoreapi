import { Coffee, ShoppingCart, User } from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { Link } from "react-router-dom";

export const Header = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const itemCount = cartItems.length;

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-3rem)] max-w-2xl">
      <div className="bg-coffee-900/40 backdrop-blur-2xl border border-white/5 rounded-full px-8 py-4 flex items-center justify-between shadow-[0_0_50px_rgba(0,0,0,0.3)]">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-brand-orange/20 rounded-full flex items-center justify-center border border-brand-orange/30 group-hover:rotate-12 transition-all duration-500">
            <Coffee className="w-5 h-5 text-brand-orange" />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="font-serif font-black text-white tracking-tighter text-lg uppercase">
              Caffeine
            </span>
            <span className="text-[10px] font-black text-brand-orange uppercase tracking-[0.3em]">
              Crafter
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-10">
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-[10px] font-black text-coffee-300 hover:text-white transition-colors uppercase tracking-[0.2em]"
            >
              Menu
            </Link>
            <Link
              to="/order"
              className="text-[10px] font-black text-coffee-300 hover:text-white transition-colors uppercase tracking-[0.2em]"
            >
              Craft
            </Link>
            <Link
              to="#nosotros"
              className="text-[10px] font-black text-coffee-300 hover:text-white transition-colors uppercase tracking-[0.2em]"
            >
              Story
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/cart" className="relative group p-2">
              <ShoppingCart className="w-5 h-5 text-coffee-100 group-hover:text-brand-orange transition-all duration-300" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-orange text-white text-[10px] font-black rounded-full flex items-center justify-center ring-4 ring-coffee-900 shadow-xl scale-110">
                  {itemCount}
                </span>
              )}
            </Link>
            <button className="w-10 h-10 rounded-full border border-white/10 bg-white/5 text-coffee-200 flex items-center justify-center hover:bg-white/10 transition-colors">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
