import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@mui/material';
import type { Product } from '../../types';
import ItemModalFormFields from '../molecules/ItemModalFormFields';

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
            maxWidth: '800px'
          },
        },
      }}
    >
      <DialogContent
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 6,
          padding: 8,
          height: '100%',
        }}
      >

        <ItemModalFormFields editableProduct={editableProduct} />
      </DialogContent>
    </Dialog>
  );
};

export default ItemModal;
