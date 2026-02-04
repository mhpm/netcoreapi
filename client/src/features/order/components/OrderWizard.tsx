import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, Check, ShoppingBag, ArrowLeft, Plus } from "lucide-react";
import { addToCart } from "../../cart/cartSlice";
import { DRINK_MENU, MILK_OPTIONS, EXTRA_OPTIONS } from "../data/menuData";
import type { DrinkOption } from "../data/menuData";
import type { Category } from "../../../types";

export const OrderWizard = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const STEPS = [t("order.steps.1"), t("order.steps.2"), t("order.steps.3")];
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );
  const [selectedDrink, setSelectedDrink] = useState<DrinkOption | null>(null);
  const [selectedMilk, setSelectedMilk] = useState(MILK_OPTIONS[0]);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

  // Derived state
  const currentPrice = selectedDrink
    ? selectedDrink.price +
      selectedMilk.price +
      selectedExtras.reduce((acc, extraId) => {
        const extra = EXTRA_OPTIONS.find((e) => e.id === extraId);
        return acc + (extra?.price || 0);
      }, 0)
    : 0;

  const handleNext = () => {
    if (currentStep === 1 && selectedDrink) setCurrentStep(2);
    else if (currentStep === 2) setCurrentStep(3);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleAddToCart = (goToCheckout: boolean) => {
    if (!selectedDrink) return;

    const numericId = parseInt(selectedDrink.id.replace(/\D/g, "")) || 0;
    const uniqueId = numericId + Date.now();

    dispatch(
      addToCart({
        id: uniqueId,
        name: selectedDrink.name,
        price: currentPrice,
        category: selectedDrink.category,
        image: selectedDrink.image,
        milk: selectedMilk.id,
        extras: selectedExtras,
        totalPrice: currentPrice,
      }),
    );

    if (goToCheckout) {
      navigate("/cart");
    } else {
      // Reset for new order
      setCurrentStep(1);
      setSelectedCategory(null);
      setSelectedDrink(null);
      setSelectedMilk(MILK_OPTIONS[0]);
      setSelectedExtras([]);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Glass Container */}
        <div className="glass-panel rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
          {/* Decorative Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/5 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

          {/* Progress Bar */}
          <div className="mb-12 relative z-10">
            <div className="flex justify-between items-center relative z-10">
              {STEPS.map((step, index) => {
                const stepNum = index + 1;
                const isActive = stepNum <= currentStep;
                const isCurrent = stepNum === currentStep;

                return (
                  <div
                    key={step}
                    className="flex flex-col items-center gap-2 w-1/3"
                  >
                    <div
                      className={`
                      w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 relative
                      ${isActive ? "bg-brand-orange text-white shadow-[0_0_20px_rgba(245,158,11,0.4)] scale-110" : "bg-white/5 text-coffee-400 border border-white/10"}
                      ${isCurrent ? "ring-4 ring-brand-orange/20" : ""}
                    `}
                    >
                      {isActive && stepNum < currentStep ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        stepNum
                      )}
                    </div>
                    <span
                      className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${isActive ? "text-white text-glow" : "text-coffee-400"}`}
                    >
                      {step}
                    </span>
                  </div>
                );
              })}
            </div>
            {/* Progress Line */}
            <div className="absolute top-5 left-0 w-full h-0.5 bg-white/5 -z-0">
              <div
                className="h-full bg-brand-orange transition-all duration-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                style={{
                  width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%`,
                }}
              ></div>
            </div>
          </div>

          {/* Step Content */}
          <div className="animate-in fade-in zoom-in-95 duration-500">
            {currentStep === 1 && (
              <div className="space-y-12">
                <div className="text-center space-y-2">
                  <h2 className="text-3xl font-bold text-white">
                    {t("order.title")}
                  </h2>
                  <p className="text-coffee-300">{t("order.subtitle")}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {(["caliente", "frio", "te"] as Category[]).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`
                      relative h-48 rounded-[2rem] overflow-hidden group transition-all duration-500
                      ${selectedCategory === cat ? "ring-4 ring-brand-orange ring-offset-4 ring-offset-coffee-900 scale-[1.02]" : "hover:scale-[1.02] border border-white/5"}
                    `}
                    >
                      <img
                        src={
                          cat === "caliente"
                            ? "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80"
                            : cat === "frio"
                              ? "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80"
                              : "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80"
                        }
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        alt={cat}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src =
                            "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&w=800&q=80";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                      <div className="absolute bottom-6 left-6 text-left">
                        <span className="text-white text-2xl font-bold capitalize">
                          {t(`order.categories.${cat}`)}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                {selectedCategory && (
                  <div className="space-y-6 pt-8 border-t border-white/5">
                    <h3 className="text-xl font-bold text-white capitalize">
                      {t("order.drink_list_title", {
                        category: t(`order.categories.${selectedCategory}`),
                      })}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {DRINK_MENU.filter(
                        (drink) => drink.category === selectedCategory,
                      ).map((drink) => {
                        const localizedName = t(
                          `products.names.${drink.name}`,
                          {
                            defaultValue: drink.name,
                          },
                        );
                        return (
                          <button
                            key={drink.id}
                            onClick={() => setSelectedDrink(drink)}
                            className={`
                            p-4 rounded-2xl flex items-center gap-4 transition-all border
                            ${selectedDrink?.id === drink.id ? "bg-brand-orange border-brand-orange text-white shadow-lg shadow-brand-orange/20" : "bg-coffee-800 border-white/5 text-coffee-300 hover:bg-white/5"}
                          `}
                          >
                            <img
                              src={drink.image}
                              className="w-16 h-16 rounded-xl object-cover"
                              alt={localizedName}
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src =
                                  "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80";
                              }}
                            />
                            <div className="text-left flex-1">
                              <p className="font-bold">{localizedName}</p>
                              <p
                                className={`text-xs ${selectedDrink?.id === drink.id ? "text-white/80" : "text-coffee-400"}`}
                              >
                                ${drink.price.toFixed(2)}
                              </p>
                            </div>
                            {selectedDrink?.id === drink.id && (
                              <div className="bg-white/20 p-1.5 rounded-full">
                                <Check className="w-4 h-4" />
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}

            {currentStep === 2 && selectedDrink && (
              <div className="max-w-2xl mx-auto space-y-12">
                <div className="flex items-center gap-6">
                  <img
                    src={selectedDrink.image}
                    className="w-24 h-24 rounded-[2rem] object-cover shadow-2xl"
                    alt={selectedDrink.name}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div>
                    <h2 className="text-3xl font-bold text-white">
                      {t("order.customize_title", {
                        name: t(`products.names.${selectedDrink.name}`, {
                          defaultValue: selectedDrink.name,
                        }),
                      })}
                    </h2>
                    <p className="text-brand-orange font-bold text-lg">
                      ${currentPrice.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  {/* Milk Options */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <span className="w-8 h-8 rounded-xl bg-coffee-800 flex items-center justify-center text-sm border border-white/5">
                        1
                      </span>
                      {t("order.milk_selection")}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {MILK_OPTIONS.map((milk) => (
                        <button
                          key={milk.id}
                          onClick={() => setSelectedMilk(milk)}
                          className={`
                          p-4 rounded-2xl text-left transition-all border
                          ${selectedMilk.id === milk.id ? "bg-brand-orange border-brand-orange text-white shadow-lg" : "bg-coffee-800 border-white/5 text-coffee-300 hover:bg-white/5"}
                        `}
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-bold">
                              {t(`order.milk.${milk.id}`, {
                                defaultValue: milk.name,
                              })}
                            </span>
                            <span className="text-xs opacity-80">
                              +${milk.price.toFixed(2)}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Extra Options */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <span className="w-8 h-8 rounded-xl bg-coffee-800 flex items-center justify-center text-sm border border-white/5">
                        2
                      </span>
                      {t("order.extra_selection")}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {EXTRA_OPTIONS.map((extra) => (
                        <button
                          key={extra.id}
                          onClick={() => {
                            setSelectedExtras((prev) =>
                              prev.includes(extra.id)
                                ? prev.filter((id) => id !== extra.id)
                                : [...prev, extra.id],
                            );
                          }}
                          className={`
                          p-4 rounded-2xl text-left transition-all border
                          ${selectedExtras.includes(extra.id) ? "bg-brand-orange border-brand-orange text-white shadow-lg" : "bg-coffee-800 border-white/5 text-coffee-300 hover:bg-white/5"}
                        `}
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-bold">
                              {t(`order.extras.${extra.id}`, {
                                defaultValue: extra.name,
                              })}
                            </span>
                            <span className="text-xs opacity-80">
                              +${extra.price.toFixed(2)}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && selectedDrink && (
              <div className="max-w-lg mx-auto bg-coffee-800 rounded-[2.5rem] p-10 border border-white/5 shadow-2xl space-y-8">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-brand-orange/10 rounded-[2rem] flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-brand-orange" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    {t("order.summary_title")}
                  </h2>
                  <p className="text-coffee-300">
                    {t("order.summary_subtitle")}
                  </p>
                </div>

                <div className="space-y-6 bg-coffee-900/50 p-6 rounded-[2rem] border border-white/5">
                  <div className="flex justify-between items-center">
                    <span className="text-coffee-400 font-medium">
                      {t("order.summary_drink")}
                    </span>
                    <span className="text-white font-bold">
                      {t(`products.names.${selectedDrink.name}`, {
                        defaultValue: selectedDrink.name,
                      })}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-coffee-400 font-medium">
                      {t("order.summary_milk")}
                    </span>
                    <span className="text-white font-bold">
                      {t(`order.milk.${selectedMilk.id}`, {
                        defaultValue: selectedMilk.name,
                      })}
                    </span>
                  </div>
                  {selectedExtras.length > 0 && (
                    <div className="flex justify-between items-start">
                      <span className="text-coffee-400 font-medium">
                        {t("order.summary_extras")}
                      </span>
                      <div className="text-right">
                        {selectedExtras.map((id) => (
                          <p key={id} className="text-white font-bold text-sm">
                            {t(`order.extras.${id}`, {
                              defaultValue:
                                EXTRA_OPTIONS.find((e) => e.id === id)?.name ||
                                id,
                            })}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                    <span className="text-white text-lg font-bold">
                      {t("order.summary_total")}
                    </span>
                    <span className="text-brand-orange text-2xl font-black">
                      ${currentPrice.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => handleAddToCart(true)}
                    className="w-full bg-brand-orange text-white py-5 rounded-[1.5rem] font-bold shadow-lg shadow-brand-orange/20 hover:bg-brand-orange/90 transition-all flex items-center justify-center gap-2 text-lg"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    {t("order.checkout_now")}
                  </button>
                  <button
                    onClick={() => handleAddToCart(false)}
                    className="w-full bg-white/5 text-coffee-200 py-5 rounded-[1.5rem] font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                  >
                    <Plus className="w-5 h-5" />
                    {t("order.add_and_continue")}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Buttons */}
        {currentStep < 3 && (
          <div className="mt-12 flex justify-between items-center max-w-4xl mx-auto">
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all
                ${currentStep === 1 ? "opacity-0 pointer-events-none" : "bg-coffee-800 text-white hover:bg-coffee-700 border border-white/5"}
              `}
            >
              <ArrowLeft className="w-5 h-5" />
              {t("order.back")}
            </button>
            <button
              onClick={handleNext}
              disabled={currentStep === 1 && !selectedDrink}
              className={`
                flex items-center gap-2 px-8 py-4 rounded-2xl font-bold transition-all
                ${currentStep === 1 && !selectedDrink ? "bg-coffee-800 text-coffee-500 cursor-not-allowed border border-white/5" : "bg-brand-orange text-white shadow-lg shadow-brand-orange/20 hover:bg-brand-orange/90"}
              `}
            >
              {t("order.next")}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
