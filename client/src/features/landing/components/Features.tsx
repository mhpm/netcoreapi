import { CheckCircle, Coffee, ShoppingCart } from 'lucide-react';

export const Features = () => {
  return (
    <section className="relative z-20 -mt-20 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Calidad Premium", desc: "Granos de origen único seleccionados a mano.", icon: CheckCircle },
          { title: "Tostado Fresco", desc: "Tostamos bajo demanda para máxima fragancia.", icon: Coffee },
          { title: "Envío Rápido", desc: "Entrega en 24h con empaque biodegradable.", icon: ShoppingCart }
        ].map((feature, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl shadow-xl border border-coffee-100 flex items-start gap-4 hover:translate-y-[-5px] transition-transform">
            <div className="bg-coffee-100 p-3 rounded-2xl">
              <feature.icon className="w-6 h-6 text-coffee-700" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-coffee-900 mb-1">{feature.title}</h4>
              <p className="text-coffee-600 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
