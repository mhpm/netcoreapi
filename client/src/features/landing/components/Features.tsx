import { CheckCircle, Coffee, ShoppingCart } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Features = () => {
  const { t } = useTranslation();

  return (
    <section className="relative z-20 mt-12 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: t("features.items.quality.title"),
            desc: t("features.items.quality.desc"),
            icon: CheckCircle,
            accent: "from-brand-orange/20 to-transparent",
          },
          {
            title: t("features.items.roast.title"),
            desc: t("features.items.roast.desc"),
            icon: Coffee,
            accent: "from-coffee-700/40 to-transparent",
          },
          {
            title: t("features.items.trade.title"),
            desc: t("features.items.trade.desc"),
            icon: ShoppingCart,
            accent: "from-brand-red/10 to-transparent",
          },
        ].map((feature, i) => (
          <div
            key={i}
            className="glass-panel group relative p-10 rounded-[3rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.1)]"
          >
            {/* Decorative Background Accent */}
            <div
              className={`absolute inset-0 bg-linear-to-br ${feature.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
            ></div>

            {/* Glass Shine */}
            <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-brand-orange/20 group-hover:rotate-12 transition-all duration-500">
                <feature.icon className="w-6 h-6 text-brand-orange" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-serif font-bold text-white group-hover:text-brand-orange transition-colors">
                  {feature.title}
                </h3>
                <p className="text-coffee-300 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>

              <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[10px] font-black text-brand-orange uppercase tracking-[0.2em]">
                  {t("features.learn_more")} ↗
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
