import './App.css';
import { useState } from 'react';
import Header from './components/molecules/Header';
import Hero from './components/molecules/Hero';
import Navbar from './components/molecules/Navbar';
import Footer from './components/molecules/Footer';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  return (
    <main>
      <Header />
      <Hero />
      <Navbar
        selected={selectedCategory}
      />
      <Footer />
    </main>
  )
}

export default App;
