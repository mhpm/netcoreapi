export const About = () => {
  return (
    <section
      id="nosotros"
      className="bg-coffee-900 text-white py-24 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-coffee-600/20 rounded-[3rem] blur-2xl group-hover:bg-coffee-600/30 transition-colors"></div>
          <img
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            className="relative rounded-[2.5rem] shadow-2xl z-10 w-full"
            alt="Our process"
          />
        </div>
        <div className="space-y-8 relative z-10">
          <h2 className="text-sm font-bold text-coffee-400 uppercase tracking-widest">
            Nuestra Pasión
          </h2>
          <h3 className="text-4xl md:text-6xl font-black leading-tight">
            Más que una taza, una experiencia.
          </h3>
          <p className="text-lg text-coffee-200 font-light leading-relaxed">
            En Caffeine Crafter, creemos que el café es un arte. Trabajamos
            directamente con caficultores locales, respetando los tiempos de la
            naturaleza y honrando el esfuerzo de cada mano que toca el grano.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-4">
            <div>
              <div className="text-4xl font-black text-coffee-400 mb-1">
                100%
              </div>
              <div className="text-sm text-coffee-300 uppercase tracking-wider font-bold">
                Orgánico
              </div>
            </div>
            <div>
              <div className="text-4xl font-black text-coffee-400 mb-1">
                +50
              </div>
              <div className="text-sm text-coffee-300 uppercase tracking-wider font-bold">
                Variedades
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
