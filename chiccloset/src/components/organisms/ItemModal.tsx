import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogActions } from '@mui/material';
import type { Product } from '../../types';
import ItemModalImage from '../atoms/ItemModalImage';
import ItemModalFormFields from '../molecules/ItemModalFormFields';
import ItemModalButton from '../molecules/ItemModalButton';
import { useUpdateProduct } from '../../hooks/updateProduct';

interface ItemModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

const ItemModal: React.FC<ItemModalProps> = ({ product, open, onClose }) => {
  const [editableProduct, setEditableProduct] = useState<Product | null>(null);
  const [hasTriedSaving, setHasTriedSaving] = useState(false);
  const { mutate: updateProduct, isPending } = useUpdateProduct();

const isFormInvalid =
  !editableProduct ||
  editableProduct.image === '' ||
  editableProduct.title === '' ||
  Number(editableProduct.price) <= 0 ||
  isNaN(Number(editableProduct.price)) ||
  editableProduct.description === '' ||
  editableProduct.category === 'default';

  useEffect(() => {
    if (product) {
      setEditableProduct({ ...product });
    }
  }, [product]);

  if (!product || !editableProduct) return null;

  const handleChange = (field: keyof Product, value: string | number) => {
    setEditableProduct((prev) =>
      prev ? { ...prev, [field]: value } : prev
    );
  };

  const handleSave = () => {
    setHasTriedSaving(true);

    if (editableProduct && !isFormInvalid) {
      updateProduct(editableProduct, {
        onSuccess: () => {
          setHasTriedSaving(false);
          onClose();
        },
        onError: (error) => {
          console.error('Update failed:', error);
        },
      });
    }
  }

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
        <ItemModalImage
          editableProduct={editableProduct}
          onImageChange={(dataUrl) => handleChange('image', dataUrl)}
        />

        <ItemModalFormFields
          editableProduct={editableProduct}
          handleChange={handleChange}
        />
      </DialogContent>

      <DialogActions sx={{ padding: 2, justifyContent: 'space-between' }}>
        <ItemModalButton
          onClose={onClose}
          handleSave={handleSave}
          hasTriedSaving={hasTriedSaving}
          isFormInvalid={isFormInvalid}
          isPending={isPending}
        />
      </DialogActions>
    </Dialog>
  );
};

export default ItemModal;
