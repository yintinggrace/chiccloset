import { Box, CircularProgress, Typography } from '@mui/material';
import { useProducts } from '../../hooks/useProducts';
import ItemCard from './ItemCard';
import string from '../../string';
import type { Product } from '../../types';

interface ItemListProps {
  selectedCategory: string;
  onProductSelect: (product: Product) => void;
}

const ItemList: React.FC<ItemListProps> = ({ selectedCategory, onProductSelect }) => {
  const { data: products = [], isLoading, error } = useProducts();

  if (isLoading) return <CircularProgress />;
  if (error) return <Typography>{string.itemlist.error}</Typography>;

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter((product) => product.category === selectedCategory);

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)'
        },
        rowGap: 7,
        columnGap: 3,
        borderColor: 'divider',
        margin: 3,
      }}
    >
      {filteredProducts.map((product) => (
        <ItemCard
          key={product.id}
          product={product}
          setSelectedProduct={onProductSelect}
        />
      ))}
    </Box>
  );
};

export default ItemList;
