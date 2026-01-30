export const getCoffeeImage = (name: string) => {
  const images: Record<string, string> = {
    "Espresso Intenso":
      "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80",
    "Cappuccino Cremoso":
      "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
    "Latte Macchiato":
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
    "Café Americano":
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    "Mocha Especial":
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80",
  };
  return (
    images[name] ||
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
  );
};

export const getCoffeeDescription = (name: string) => {
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
