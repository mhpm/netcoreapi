import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../cart/cartSlice";
import type { CartItem } from "../../../types";
import { getCoffeeImage } from "../../products/utils/coffeeUtils";
import { useTranslation } from "react-i18next";

interface CartListProps {
  items: CartItem[];
}

export const CartList = ({ items }: CartListProps) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleRemove = (index: number) => {
    dispatch(removeFromCart(index));
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-12 glass-panel rounded-[2rem]">
        <p className="text-coffee-400 font-medium">{t("cart.empty")}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const name = t(`products.names.${item.name}`, {
          defaultValue: item.name,
        });

        return (
          <div
            key={`${item.id}-${index}`}
            className="flex items-center gap-4 glass-panel p-4 rounded-[1.5rem] hover:bg-white/10 transition-colors"
          >
            <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 shadow-lg">
              <img
                src={item.image || getCoffeeImage(item.name)}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-base font-bold text-white leading-tight">
                {name}
              </h4>
              {(item.milk || (item.extras && item.extras.length > 0)) && (
                <p className="text-[10px] text-coffee-400 mt-1 line-clamp-1">
                  {item.milk &&
                    t(`order.milk.${item.milk}`, { defaultValue: item.milk })}
                  {item.extras && item.extras.length > 0
                    ? `${item.milk ? ", " : ""}${item.extras
                        .map((extraId) =>
                          t(`order.extras.${extraId}`, {
                            defaultValue: extraId,
                          }),
                        )
                        .join(", ")}`
                    : ""}
                </p>
              )}
              <p className="text-brand-orange font-bold text-sm mt-1">
                ${item.price.toFixed(2)}
              </p>
            </div>
            <button
              onClick={() => handleRemove(index)}
              title={t("cart.remove")}
              className="p-2.5 text-red-500 hover:bg-red-500/10 rounded-full transition-colors"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
