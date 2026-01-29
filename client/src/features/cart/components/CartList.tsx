import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../cart/cartSlice";
import type { Product } from "../../../types";
import { getCoffeeImage } from "../../products/utils/coffeeUtils";

interface CartListProps {
  items: Product[];
}

export const CartList = ({ items }: CartListProps) => {
  const dispatch = useDispatch();

  const handleRemove = (index: number) => {
    dispatch(removeFromCart(index));
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-coffee-600 text-lg">
          Tu carrito está vacío. ¡Es hora de llenarlo de energía!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <div
          key={`${item.id}-${index}`}
          className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-coffee-100"
        >
          <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
            <img
              src={getCoffeeImage(item.name)}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-coffee-900">{item.name}</h4>
            <p className="text-coffee-600">${item.price.toFixed(2)}</p>
          </div>
          <button
            onClick={() => handleRemove(index)}
            className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      ))}
    </div>
  );
};
