import { useState, useEffect } from "react";
import axios from "axios";
import {
  Coffee,
  ShoppingCart,
  Info,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Use the local proxy for development, or the environment variable for production
  const API_URL = import.meta.env.VITE_API_URL || "/api/products";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(API_URL);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const getCoffeeImage = (name: string) => {
    const images: Record<string, string> = {
      "Espresso Intenso":
        "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "Cappuccino Cremoso":
        "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "Latte Macchiato":
        "https://images.unsplash.com/photo-1599398054066-846f28917f38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "Café Americano":
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "Mocha Especial":
        "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    };
    return (
      images[name] ||
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    );
  };

  const getCoffeeDescription = (name: string) => {
    const descriptions: Record<string, string> = {
      "Espresso Intenso":
        "Pequeño en tamaño, grande en energía. Un shot puro de adrenalina con crema dorada.",
      "Cappuccino Cremoso":
        "El equilibrio perfecto entre espresso, leche vaporizada y una espuma irresistible.",
      "Latte Macchiato":
        "Suavidad en capas. Leche aterciopelada manchada con nuestro mejor espresso.",
      "Café Americano":
        "Clásico y reconfortante. Nuestro espresso diluido para disfrutar sorbo a sorbo.",
      "Mocha Especial":
        "Para los amantes del dulce. Una mezcla perfecta de espresso, chocolate y leche.",
    };
    return (
      descriptions[name] ||
      "Una mezcla equilibrada con notas de chocolate y frutos secos."
    );
  };

  return (
    <div className="min-h-screen bg-coffee-50 text-coffee-900 font-sans">
      {/* Header */}
      <nav className="bg-coffee-900/95 backdrop-blur-md text-white p-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <div className="flex items-center gap-2">
            <div className="bg-coffee-600 p-1.5 rounded-lg">
              <Coffee className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight">
              ShotCrude Coffee
            </span>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6 text-sm font-medium text-coffee-100">
              <a href="#" className="hover:text-white transition-colors">
                Inicio
              </a>
              <a href="#menu" className="hover:text-white transition-colors">
                Menú
              </a>
              <a
                href="#nosotros"
                className="hover:text-white transition-colors"
              >
                Nosotros
              </a>
            </div>
            <div className="relative group cursor-pointer">
              <div className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <ShoppingCart className="w-6 h-6" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-coffee-500 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-bold border-2 border-coffee-900">
                    {cart.length}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
            El Mejor Café, <br />
            <span className="text-coffee-400">Directo a tu Puerta</span>
          </h1>
          <p className="text-lg md:text-xl text-coffee-100/90 max-w-2xl mx-auto font-light leading-relaxed">
            Granos seleccionados de las mejores fincas del mundo, tostados en
            pequeños lotes para garantizar una experiencia sensorial
            inigualable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="#menu"
              className="bg-coffee-600 hover:bg-coffee-700 text-white px-10 py-4 rounded-2xl text-lg font-bold transition-all transform hover:scale-105 shadow-2xl flex items-center gap-2 group"
            >
              Explorar Menú
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-2xl text-lg font-bold transition-all">
              Suscripciones
            </button>
          </div>
        </div>
      </header>

      {/* Features - Floating */}
      <section className="relative z-20 -mt-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Calidad Premium",
              desc: "Granos de origen único seleccionados a mano.",
              icon: CheckCircle,
            },
            {
              title: "Tostado Fresco",
              desc: "Tostamos bajo demanda para máxima fragancia.",
              icon: Coffee,
            },
            {
              title: "Envío Rápido",
              desc: "Entrega en 24h con empaque biodegradable.",
              icon: ShoppingCart,
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl shadow-xl border border-coffee-100 flex items-start gap-4 hover:translate-y-[-5px] transition-transform"
            >
              <div className="bg-coffee-100 p-3 rounded-2xl">
                <feature.icon className="w-6 h-6 text-coffee-700" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-coffee-900 mb-1">
                  {feature.title}
                </h4>
                <p className="text-coffee-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <main id="menu" className="max-w-7xl mx-auto py-24 px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-center md:text-left">
          <div className="space-y-2">
            <h2 className="text-sm font-bold text-coffee-600 uppercase tracking-widest">
              Nuestras Especialidades
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-coffee-900">
              El Menú de Hoy
            </h3>
          </div>
          <div className="flex items-center gap-2 text-coffee-500 bg-coffee-100/50 px-4 py-2 rounded-full self-center">
            <Info className="w-4 h-4" />
            <span className="text-xs font-medium uppercase tracking-wider">
              Precios en USD • IVA Incluido
            </span>
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 space-y-6">
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 border-4 border-coffee-100 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-coffee-600 rounded-full border-t-transparent animate-spin"></div>
            </div>
            <p className="text-coffee-600 font-medium animate-pulse text-lg italic">
              Preparando la molienda perfecta...
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-coffee-100 group"
              >
                <div className="h-72 relative overflow-hidden">
                  <img
                    src={getCoffeeImage(product.name)}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl text-coffee-900 font-black shadow-lg text-lg">
                    ${product.price.toFixed(2)}
                  </div>
                </div>
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-black text-coffee-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-coffee-600 text-sm leading-relaxed">
                      {getCoffeeDescription(product.name)}
                    </p>
                  </div>
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-coffee-900 text-white py-4 rounded-2xl font-bold hover:bg-coffee-800 transition-all flex items-center justify-center gap-3 active:scale-95"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Añadir al Carrito
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* About Section */}
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
              En ShotCrude, creemos que el café es un arte. Trabajamos
              directamente con caficultores locales, respetando los tiempos de
              la naturaleza y honrando el esfuerzo de cada mano que toca el
              grano.
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

      {/* Footer */}
      <footer className="bg-white border-t border-coffee-100 py-16 text-coffee-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-3">
              <div className="bg-coffee-900 p-2 rounded-xl">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black text-coffee-900 tracking-tighter">
                ShotCrude
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
              © 2026 ShotCrude Coffee. Artesanalmente hecho para ti.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
