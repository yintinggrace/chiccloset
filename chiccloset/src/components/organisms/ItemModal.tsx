import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogActions } from '@mui/material';
import type { Product } from '../../types';
import ItemModalImage from '../atoms/ItemModalImage';
import ItemModalFormFields from '../molecules/ItemModalFormFields';
import ItemModalButton from '../molecules/ItemModalButton';

interface ItemModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

const ItemModal: React.FC<ItemModalProps> = ({ product, open, onClose }) => {
  const [editableProduct, setEditableProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (product) {
      setEditableProduct({ ...product });
    }
  }, [product]);

  if (!product || !editableProduct) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      slotProps={{
        paper: {
          sx: {
            width: '80%',
            maxWidth: '800px',
            height: '100%',
          },
        },
      }}
    >
      <DialogContent
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 6,
          padding: 8,
          height: '100%',
        }}
      >
        <ItemModalImage editableProduct={editableProduct} />
        <ItemModalFormFields editableProduct={editableProduct} />
      </DialogContent>

      <DialogActions sx={{ padding: 2, justifyContent: 'space-between' }}>
        <ItemModalButton onClose={onClose} />
      </DialogActions>
    </Dialog>
  );
};

export default ItemModal;
