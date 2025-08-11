import axios from 'axios';
import type { Product } from './types';

const fetchCategories = async (): Promise<string[]> => {
  const response = await axios.get('https://fakestoreapi.com/products/categories');
  return ['all', ...response.data];
};

const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get('https://fakestoreapi.com/products/');
  return response.data;
};

export { fetchCategories, fetchProducts };
