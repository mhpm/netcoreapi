export const About = () => {
  return (
    <section
      id="nosotros"
      className="bg-coffee-900 text-white py-32 overflow-hidden relative"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-orange/5 blur-[120px] rounded-full -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative group">
          <div className="absolute -inset-6 bg-brand-orange/10 rounded-[4rem] blur-3xl group-hover:bg-brand-orange/20 transition-all duration-700"></div>

          <div className="relative rounded-[3.5rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.4)] border border-white/10 group-hover:border-brand-orange/20 transition-all duration-700">
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              className="w-full h-[600px] object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s] ease-out"
              alt="Our artisanal process"
            />
            <div className="absolute inset-0 bg-linear-to-t from-coffee-900 via-transparent to-transparent opacity-60"></div>

            {/* Overlay Text on Image */}
            <div className="absolute bottom-12 left-12 right-12 p-8 bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2rem] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
              <div className="text-brand-orange text-xs font-black uppercase tracking-[0.2em] mb-2">
                Heritage
              </div>
              <div className="text-2xl font-serif font-bold italic text-white leading-tight">
                Founded on a passion for perfection since 1994.
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-10 relative z-10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-brand-orange/10 rounded-full border border-brand-orange/20">
              <span className="text-[10px] font-black text-brand-orange uppercase tracking-[0.3em]">
                Our Philosophy
              </span>
            </div>
            <h3 className="text-5xl md:text-7xl font-serif font-black leading-[0.9] tracking-tighter">
              Crafting <br />
              <span className="text-brand-orange italic">
                Masterpieces
              </span>{" "}
              <br />
              In Every Cup.
            </h3>
          </div>

          <p className="text-lg text-coffee-200 leading-relaxed font-light max-w-lg">
            At Caffeine Crafter, we believe coffee is more than a beverage—it's
            an artisanal experience. We source only the rarest beans, roasted
            with surgical precision to unlock a symphony of flavors.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-6">
            <div className="space-y-2">
              <div className="text-4xl font-serif font-bold text-white">
                100%
              </div>
              <div className="text-[10px] text-brand-orange uppercase tracking-[0.2em] font-black">
                Ethically Sourced
              </div>
              <div className="w-12 h-0.5 bg-brand-orange/30"></div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-serif font-bold text-white">
                48h
              </div>
              <div className="text-[10px] text-brand-orange uppercase tracking-[0.2em] font-black">
                Roast-to-Cup
              </div>
              <div className="w-12 h-0.5 bg-brand-orange/30"></div>
            </div>
          </div>

          <button className="group flex items-center gap-4 text-white font-bold uppercase tracking-[0.2em] text-xs hover:text-brand-orange transition-colors">
            Our Full Story
            <span className="w-12 h-px bg-white/20 group-hover:bg-brand-orange group-hover:w-20 transition-all duration-500"></span>
          </button>
        </div>
      </div>
    </section>
  );
};
