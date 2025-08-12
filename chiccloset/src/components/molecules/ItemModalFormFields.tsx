import {Box, TextField } from '@mui/material';
import string from '../../string';
import type { Product } from '../../types';
import ItemModalCategoryPin from './ItemModalCategoryPin';

interface ItemModalFormFieldsProps {
  editableProduct: Product;
  handleChange: (field: keyof Product, value: string | number) => void;
}

const ItemModalFormFields: React.FC<ItemModalFormFieldsProps> = ({ editableProduct, handleChange }) => {
  return (
    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label={string.itemmodal.fields.title}
        value={editableProduct.title}
        onChange={(e) => handleChange('title', e.target.value)}
        fullWidth
      />
      <TextField
        label={string.itemmodal.fields.price}
        type="number"
        value={editableProduct.price}
        onChange={(e) => handleChange('price', parseFloat(e.target.value))}
        fullWidth
      />
      <TextField
        label={string.itemmodal.fields.description}
        value={editableProduct.description}
        onChange={(e) => handleChange('description', e.target.value)}
        multiline
        rows={4}
        fullWidth
      />
      <ItemModalCategoryPin
        category={editableProduct.category}
        onChange={(newCategory) => handleChange('category', newCategory)}
      />
    </Box>
  )
}

export default ItemModalFormFields;
