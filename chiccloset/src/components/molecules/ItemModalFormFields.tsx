import {Box, TextField } from '@mui/material';
import string from '../../string';
import type { Product } from '../../types';

interface ItemModalFormFieldsProps {
  editableProduct: Product;
}

const ItemModalFormFields: React.FC<ItemModalFormFieldsProps> = ({ editableProduct }) => {
  return (
    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label={string.itemmodal.fields.title}
        value={editableProduct.title}
        fullWidth
      />
      <TextField
        label={string.itemmodal.fields.price}
        type="number"
        value={editableProduct.price}
        fullWidth
      />
      <TextField
        label={string.itemmodal.fields.description}
        value={editableProduct.description}
        multiline
        rows={4}
        fullWidth
      />
    </Box>
  )
}

export default ItemModalFormFields;
