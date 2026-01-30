import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../cart/cartSlice";
import type { CartItem } from "../../../types";
import { getCoffeeImage } from "../../products/utils/coffeeUtils";

interface CartListProps {
  items: CartItem[];
}

export const CartList = ({ items }: CartListProps) => {
  const dispatch = useDispatch();

  const handleRemove = (index: number) => {
    dispatch(removeFromCart(index));
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-12 bg-coffee-800 rounded-[2rem] border border-white/5">
        <p className="text-coffee-400 font-medium">
          Tu carrito está vacío. ¡Es hora de llenarlo de energía!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={`${item.id}-${index}`}
          className="flex items-center gap-4 bg-coffee-800 p-4 rounded-[1.5rem] border border-white/5"
        >
          <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
            <img
              src={item.image || getCoffeeImage(item.name)}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h4 className="text-base font-bold text-white leading-tight">
              {item.name}
            </h4>
            {(item.milk || (item.extras && item.extras.length > 0)) && (
              <p className="text-[10px] text-coffee-400 mt-1 line-clamp-1">
                {item.milk}
                {item.extras && item.extras.length > 0
                  ? `, ${item.extras.join(", ")}`
                  : ""}
              </p>
            )}
            <p className="text-brand-orange font-bold text-sm mt-1">
              ${item.price.toFixed(2)}
            </p>
          </div>
          <button
            onClick={() => handleRemove(index)}
            className="p-2.5 text-red-500 hover:bg-red-500/10 rounded-full transition-colors"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      ))}
    </div>
  );
};
