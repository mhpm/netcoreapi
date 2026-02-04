import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <header className="relative min-h-[95vh] flex flex-col justify-center px-6 pt-32 lg:pt-40 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Large Decorative Circle */}
        <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-brand-orange/5 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 -left-24 w-[400px] h-[400px] bg-brand-orange/5 blur-[100px] rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="lg:col-span-6 space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel !bg-brand-orange/10 !border-brand-orange/30 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shadow-[0_0_8px_rgba(245,158,11,1)] animate-pulse"></span>
              <span className="text-[10px] font-bold text-brand-orange uppercase tracking-[0.2em]">
                {t("hero.badge")}
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-serif font-black text-white leading-[0.9] tracking-tighter drop-shadow-2xl">
              {t("hero.title_part1")} <br />
              <span className="text-brand-orange italic drop-shadow-[0_0_25px_rgba(245,158,11,0.6)]">
                {t("hero.title_italic")}
              </span>{" "}
              <br />
              {t("hero.title_part2")}
            </h1>

            <p className="text-coffee-200 text-lg md:text-xl max-w-lg leading-relaxed font-light">
              {t("hero.subtitle")}
            </p>
          </div>

          <div className="flex flex-wrap gap-6 pt-4">
            <Link
              to="/order"
              className="group relative px-10 py-5 bg-brand-orange text-white rounded-full font-bold shadow-[0_20px_50px_rgba(245,158,11,0.3)] hover:shadow-[0_20px_50px_rgba(245,158,11,0.5)] transition-all overflow-hidden border border-white/20"
            >
              <span className="relative z-10 flex items-center gap-3">
                {t("hero.order_now")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-shimmer"></div>
              <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>

            <Link
              to="/#menu"
              className="glass-button px-10 py-5 rounded-full text-white font-bold hover:!bg-white/10 hover:!border-brand-orange/50 transition-all shadow-xl flex items-center justify-center"
            >
              {t("hero.explore_menu")}
            </Link>
          </div>

          <div className="pt-8 flex items-center gap-8 border-t border-white/5 max-w-md">
            <div>
              <div className="text-2xl font-serif font-bold text-white">
                4.9/5
              </div>
              <div className="text-xs text-coffee-400 uppercase tracking-widest font-bold">
                {t("hero.rating")}
              </div>
            </div>
            <div className="w-px h-8 bg-white/10"></div>
            <div>
              <div className="text-2xl font-serif font-bold text-white">
                12k+
              </div>
              <div className="text-xs text-coffee-400 uppercase tracking-widest font-bold">
                {t("hero.coffee_lovers")}
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Content - Flat Lay Style */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end animate-in fade-in zoom-in duration-1000 delay-300">
          <div className="relative w-full max-w-[500px] aspect-square group">
            {/* Decorative Stars/Crumbs (as seen in inspiration) */}
            <div className="absolute -top-4 left-10 w-2 h-2 bg-brand-orange/40 rounded-full animate-pulse"></div>
            <div className="absolute top-20 -left-10 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse delay-300"></div>
            <div className="absolute bottom-20 -right-4 w-2 h-2 bg-brand-orange/30 rounded-full animate-pulse delay-700"></div>

            {/* Main Image with Frame */}
            <div className="absolute inset-0 rounded-[3.5rem] overflow-hidden border border-white/10 shadow-[0_0_120px_rgba(0,0,0,0.6)] rotate-3 group-hover:rotate-0 transition-all duration-1000 ease-out">
              <img
                src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&w=1200&q=80"
                alt="Traditional Coffee Grinding"
                className="w-full h-full object-cover scale-125 group-hover:scale-110 transition-all duration-[2s] ease-out"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src =
                    "https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c?auto=format&fit=crop&w=1200&q=80";
                }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-coffee-900/90 via-transparent to-transparent"></div>
            </div>

            {/* Floating Elements (Crumbs/Stars/Beans feel) */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-orange/20 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-orange/10 blur-3xl rounded-full"></div>

            {/* Small Detail Badge */}
            <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl rotate-[-6deg] group-hover:rotate-0 transition-all duration-500 z-20">
              <div className="text-brand-orange text-sm font-black uppercase tracking-[0.2em] mb-1">
                {t("hero.authentic")}
              </div>
              <div className="text-white text-xl font-serif font-bold italic">
                {t("hero.handcrafted")}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Bar - Refined */}
      <div className="max-w-7xl mx-auto w-full pt-12">
        <div className="flex gap-8 overflow-x-auto no-scrollbar py-4 border-t border-white/5">
          {[
            t("hero.categories.all"),
            t("hero.categories.pastries"),
            t("hero.categories.specials"),
            t("hero.categories.merchandise"),
            t("hero.categories.gifts"),
          ].map((item, i) => (
            <button
              key={i}
              className="text-sm font-bold text-coffee-400 hover:text-white transition-colors uppercase tracking-[0.2em] whitespace-nowrap"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};
