import { Box } from '@mui/material';
import type { Product } from '../../types';

interface ItemModalImageProps {
  editableProduct: Product;
}

const ItemModalImage: React.FC<ItemModalImageProps> = ({ editableProduct}) => {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img
        src={editableProduct.image}
        alt={editableProduct.title}
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          objectFit: 'contain',
        }}
      />
    </Box>
  )
}

export default ItemModalImage;
