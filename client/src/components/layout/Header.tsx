import { Coffee, ShoppingCart, User } from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "./LanguageSelector";

export const Header = () => {
  const { t } = useTranslation();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const itemCount = cartItems.length;

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-3rem)] max-w-3xl">
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

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/#menu"
              className="text-[10px] font-black text-coffee-300 hover:text-white transition-colors uppercase tracking-[0.2em]"
            >
              {t("nav.menu")}
            </Link>
            <Link
              to="/order"
              className="text-[10px] font-black text-coffee-300 hover:text-white transition-colors uppercase tracking-[0.2em]"
            >
              {t("nav.craft")}
            </Link>
            <Link
              to="/#about"
              className="text-[10px] font-black text-coffee-300 hover:text-white transition-colors uppercase tracking-[0.2em]"
            >
              {t("nav.story")}
            </Link>
          </div>

          <div className="h-6 w-px bg-white/10 hidden sm:block"></div>

          <div className="flex items-center gap-4">
            <LanguageSelector />
            <Link to="/cart" className="p-2 group">
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-white group-hover:text-brand-orange transition-all duration-300" />
                {itemCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#EF4444] text-[9px] font-bold text-white rounded-full flex items-center justify-center shadow-sm pointer-events-none">
                    {itemCount}
                  </span>
                )}
              </div>
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
