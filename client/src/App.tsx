import { useState, useEffect } from "react";
import axios from "axios";
import { Coffee, ShoppingCart, Info, CheckCircle } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Use // Use the local proxy for development, or the environment variable for production
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

  return (
    <div className="min-h-screen bg-coffee-50 text-coffee-900 w-full">
      {/* Header */}
      <nav className="bg-coffee-900 text-white p-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Coffee className="w-8 h-8 text-coffee-400" />
            <span className="text-2xl font-bold tracking-tight">
              ShotCrude Coffee
            </span>
          </div>
          <div className="relative">
            <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-coffee-300 transition-colors" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {cart.length}
              </span>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative text-center text-white space-y-6 px-4">
          <h1 className="text-5xl md:text-7xl font-bold">
            El Mejor Café, <br /> Directo a tu Puerta
          </h1>
          <p className="text-xl text-coffee-100 max-w-2xl mx-auto">
            Granos seleccionados de las mejores fincas, tostados artesanalmente
            para una experiencia única.
          </p>
          <button className="bg-coffee-600 hover:bg-coffee-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-xl">
            Explorar Menú
          </button>
        </div>
      </header>

      {/* Products Section */}
      <main className="container mx-auto py-16 px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-coffee-900">Nuestro Menú</h2>
          <div className="flex items-center gap-2 text-coffee-600">
            <Info className="w-5 h-5" />
            <span className="text-sm">Precios en USD</span>
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-coffee-900"></div>
            <p className="text-coffee-600">Cargando delicias...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-coffee-100 group"
              >
                <div className="h-64 bg-coffee-200 relative overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&sig=${product.id}`}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-coffee-900 font-bold shadow-sm">
                    ${product.price.toFixed(2)}
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold">{product.name}</h3>
                  <p className="text-coffee-600 text-sm">
                    Una mezcla equilibrada con notas de chocolate y frutos
                    secos.
                  </p>
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-coffee-900 text-white py-3 rounded-2xl font-semibold hover:bg-coffee-800 transition-colors flex items-center justify-center gap-2 group-hover:translate-y-[-2px]"
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

      {/* Features */}
      <section className="bg-coffee-900 text-white py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4">
            <div className="bg-coffee-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-coffee-400" />
            </div>
            <h4 className="text-xl font-bold">Calidad Premium</h4>
            <p className="text-coffee-300">
              Seleccionamos solo los mejores granos de origen único.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-coffee-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-coffee-400" />
            </div>
            <h4 className="text-xl font-bold">Tostado Fresco</h4>
            <p className="text-coffee-300">
              Tostamos diariamente en pequeños lotes para mayor frescura.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-coffee-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-coffee-400" />
            </div>
            <h4 className="text-xl font-bold">Envío Rápido</h4>
            <p className="text-coffee-300">
              Recibe tu café en menos de 24 horas en tu domicilio.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-coffee-50 border-t border-coffee-200 py-12 text-center text-coffee-600">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4 text-coffee-900">
            <Coffee className="w-6 h-6" />
            <span className="text-xl font-bold">ShotCrude</span>
          </div>
          <p>© 2026 ShotCrude Coffee. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
