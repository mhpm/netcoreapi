import { useEffect } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { queryClient } from "./lib/queryClient";
import { store } from "./store";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Order } from "./pages/Order";

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");

      const scrollToElement = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          return true;
        }
        return false;
      };

      // Try immediately
      if (!scrollToElement()) {
        const observer = new MutationObserver(() => {
          if (scrollToElement()) {
            observer.disconnect();
          }
        });

        observer.observe(document.body, {
          childList: true,
          subtree: true,
        });

        const timeout = setTimeout(() => observer.disconnect(), 5000);
        return () => {
          observer.disconnect();
          clearTimeout(timeout);
        };
      }
    } else if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ScrollToHash />
          <div className="min-h-screen bg-coffee-900 text-coffee-50 font-sans">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order" element={<Order />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
