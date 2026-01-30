import { useSelector } from "react-redux";
import type { RootState } from "../store";
import { CartList } from "../features/cart/components/CartList";
import { StripeCheckout } from "../features/payment/components/StripeCheckout";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-coffee-900 pt-32 pb-12 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-coffee-300 hover:text-white transition-colors font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver al Menú
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Tu Carrito
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-coffee-200">
              Resumen del Pedido
            </h2>
            <CartList items={cartItems} />
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-bold text-coffee-200">
              Finalizar Compra
            </h2>
            {cartItems.length > 0 ? (
              <StripeCheckout total={total} />
            ) : (
              <div className="bg-coffee-800 p-8 rounded-[2rem] border border-white/5 text-center text-coffee-400">
                Agrega productos para proceder al pago
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
