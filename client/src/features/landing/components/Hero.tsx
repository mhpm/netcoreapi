import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <header className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          className="w-full h-full object-cover"
          alt="Hero background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-coffee-50/100"></div>
      </div>
      
      <div className="relative z-10 text-center text-white space-y-8 px-6 max-w-4xl mx-auto">
        <div className="inline-block animate-fade-in">
          <span className="bg-coffee-600/30 backdrop-blur-sm border border-coffee-400/30 text-coffee-100 px-4 py-1.5 rounded-full text-sm font-medium mb-6 inline-block">
            ✨ Tostado artesanalmente cada mañana
          </span>
        </div>
        <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-tight">
          El Mejor Café, <br/>
          <span className="text-coffee-400">Directo a tu Puerta</span>
        </h1>
        <p className="text-lg md:text-xl text-coffee-100/90 max-w-2xl mx-auto font-light leading-relaxed">
          Granos seleccionados de las mejores fincas del mundo, tostados en pequeños lotes para garantizar una experiencia sensorial inigualable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <a href="#menu" className="bg-coffee-600 hover:bg-coffee-700 text-white px-10 py-4 rounded-2xl text-lg font-bold transition-all transform hover:scale-105 shadow-2xl flex items-center gap-2 group">
            Explorar Menú
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-2xl text-lg font-bold transition-all">
            Suscripciones
          </button>
        </div>
      </div>
    </header>
  );
};
