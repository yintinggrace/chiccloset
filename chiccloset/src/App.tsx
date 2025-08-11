import './App.css';
import { useState } from 'react';
import Header from './components/molecules/Header';
import Hero from './components/molecules/Hero';
import Navbar from './components/molecules/Navbar';
import ItemList from './components/organisms/ItemList';
import ItemModal from './components/organisms/ItemModal';
import Footer from './components/molecules/Footer';
import type { Product } from './types';


function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);


  const handleCategoryChange = (newCategory: string) => {
    setSelectedCategory(newCategory);
  };

  const onProductSelect = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <main>
      <Header />
      <Hero />
      <Navbar
        onCategoryChange={handleCategoryChange}
        selected={selectedCategory}
      />
      <ItemList
        selectedCategory={selectedCategory}
        onProductSelect={onProductSelect}
      />
      <ItemModal
        product={selectedProduct}
        open={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
      />
      <Footer />
    </main>
  )
}

export default App;
