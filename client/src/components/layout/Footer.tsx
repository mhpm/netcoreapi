import { Coffee } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-coffee-900 border-t border-white/5 py-16 text-coffee-400">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="bg-coffee-800 p-2 rounded-xl border border-white/5">
              <Coffee className="w-6 h-6 text-brand-orange" />
            </div>
            <span className="text-2xl font-black text-white tracking-tighter">
              Caffeine Crafter
            </span>
          </div>
          <div className="flex gap-10 text-sm font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-brand-orange transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-brand-orange transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-brand-orange transition-colors">
              LinkedIn
            </a>
          </div>
          <p className="text-xs font-medium text-coffee-600">
            © 2026 Caffeine Crafter. {t("footer.made_with_love")}
          </p>
        </div>
      </div>
    </footer>
  );
};
