import { Hero } from '../features/landing/components/Hero';
import { Features } from '../features/landing/components/Features';
import { ProductList } from '../features/products/components/ProductList';
import { About } from '../features/landing/components/About';

export const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <ProductList />
      <About />
    </>
  );
};
