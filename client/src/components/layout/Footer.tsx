import { Coffee } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-coffee-100 py-16 text-coffee-600">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="bg-coffee-900 p-2 rounded-xl">
              <Coffee className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black text-coffee-900 tracking-tighter">
              Caffeine Crafter
            </span>
          </div>
          <div className="flex gap-10 text-sm font-bold uppercase tracking-widest text-coffee-400">
            <a href="#" className="hover:text-coffee-900 transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-coffee-900 transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-coffee-900 transition-colors">
              LinkedIn
            </a>
          </div>
          <p className="text-xs font-medium text-coffee-400">
            © 2026 Caffeine Crafter. Artesanalmente hecho para ti.
          </p>
        </div>
      </div>
    </footer>
  );
};
