import { Card, CardContent, Typography } from '@mui/material';
import type { Product } from '../../types';
import '../../App.css';

interface ItemCardProps {
  product: Product,
  setSelectedProduct: (product: Product) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ product, setSelectedProduct }) => {
  return (
    <Card
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        height: '100%',
        transition: '0.2s',
        '&:hover': {
          boxShadow: 6,
        },
      }}
      onClick={() => setSelectedProduct(product)}
    >
      <img
        src={product.image}
        alt={product.title}
        className='item-card-image'
      />
      <CardContent sx={{ textAlign: 'center', p: 0 }}>
        <Typography variant="h6" component="h4">
          {product.title}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          ${product.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
