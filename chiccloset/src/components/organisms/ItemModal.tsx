import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogActions } from '@mui/material';
import type { Product } from '../../types';
import ItemModalImage from '../atoms/ItemModalImage';
import ItemModalFormFields from '../molecules/ItemModalFormFields';
import ItemModalButton from '../molecules/ItemModalButton';
import { useUpdateProduct } from '../../hooks/updateProduct';
import { useDeleteProduct } from '../../hooks/deleteProduct';
import { useCreateProduct } from '../../hooks/createProduct';

interface ItemModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

const ItemModal: React.FC<ItemModalProps> = ({ product, open, onClose }) => {
  const [editableProduct, setEditableProduct] = useState<Product | null>(null);
  const [hasTriedSaving, setHasTriedSaving] = useState(false);
  const { mutate: updateProduct, isPending } = useUpdateProduct();
  const { mutate: deleteProduct } = useDeleteProduct();
  const { mutate: createProduct } = useCreateProduct();
  const isNew = product?.id === 0 && product.title === '';

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
      if (isNew) {
        createProduct(editableProduct, {
          onSuccess: () => {
            setHasTriedSaving(false);
            onClose();
          },
          onError: (error) => {
            console.error('Create failed:', error);
          }
        });
      } else {
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
  };

  const handleDelete = () => {
    if (editableProduct) {
      deleteProduct(editableProduct, {
        onSuccess: () => {
          onClose();
        },
        onError: (error) => {
          console.error('Delete failed:', error);
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
            height: { xs: '90vh', md: '80vh' },
          },
        },
      }}
    >
      <DialogContent
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: 6,
          padding: { xs: 4, md: 6 },
          height: '100%',
        }}
      >
        <ItemModalImage
          editableProduct={editableProduct}
          isNew={isNew}
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
          handleDelete={handleDelete}
          hasTriedSaving={hasTriedSaving}
          isNew={isNew}
          isFormInvalid={isFormInvalid}
          isPending={isPending}
        />
      </DialogActions>
    </Dialog>
  );
};

export default ItemModal;
