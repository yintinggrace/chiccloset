import axios from 'axios';

const fetchCategories = async (): Promise<string[]> => {
  const response = await axios.get('https://fakestoreapi.com/products/categories');
  return ['all', ...response.data];
};

export { fetchCategories };
