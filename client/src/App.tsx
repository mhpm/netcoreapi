import { QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { queryClient } from "./lib/queryClient";
import { store } from "./store";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./features/landing/components/Hero";
import { Features } from "./features/landing/components/Features";
import { ProductList } from "./features/products/components/ProductList";
import { About } from "./features/landing/components/About";

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen bg-coffee-50 text-coffee-900 font-sans">
          <Header />
          <Hero />
          <Features />
          <ProductList />
          <About />
          <Footer />
        </div>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
