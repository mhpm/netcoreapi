import { QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { queryClient } from "./lib/queryClient";
import { store } from "./store";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Order } from "./pages/Order";

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
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
